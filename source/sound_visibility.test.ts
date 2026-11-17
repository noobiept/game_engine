// @vitest-environment jsdom
import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";
import { setDocumentHidden } from "../tests/helpers";

/**
 * A fake of the parts of `AudioContext` that the `Sound` module uses, which records the suspend/resume calls.
 */
class FakeAudioContext {
    static last: FakeAudioContext;
    static initialState: "running" | "suspended" = "running";
    static autoplayAllowed = true; // if `resume()` works (browsers only allow it after the user interacted with the page)

    state: "running" | "suspended" = FakeAudioContext.initialState;
    currentTime = 0;
    destination = {};
    calls: string[] = [];

    constructor() {
        FakeAudioContext.last = this;
    }

    createGain() {
        return { gain: { value: 1 }, connect() {} };
    }

    createBufferSource() {
        return {
            buffer: null,
            loop: false,
            onended: null,
            connect() {},
            start() {},
            stop() {},
        };
    }

    suspend() {
        this.calls.push("suspend");
        this.state = "suspended";
        return Promise.resolve();
    }

    resume() {
        this.calls.push("resume");

        if (FakeAudioContext.autoplayAllowed) {
            this.state = "running";
        }

        return Promise.resolve();
    }
}

const BUFFER = { duration: 10 } as AudioBuffer;

/**
 * A new `Sound` module (it keeps its audio context in the module), initialized with a fake audio context.
 */
async function initSound(state: "running" | "suspended" = "running") {
    vi.resetModules();

    const Sound = await import("./sound");

    FakeAudioContext.initialState = state;
    Sound.init();

    return { Sound, ctx: FakeAudioContext.last };
}

beforeEach(function () {
    FakeAudioContext.autoplayAllowed = true;
    setDocumentHidden(false);
    vi.stubGlobal("AudioContext", FakeAudioContext);
});

afterEach(function () {
    setDocumentHidden(false);
    vi.unstubAllGlobals();
});

describe("Sound while the page is hidden", function () {
    test("the sounds pause while the page is hidden, and continue once it's visible", async function () {
        const { Sound, ctx } = await initSound();

        Sound.play(BUFFER, { loop: true });
        setDocumentHidden(true);
        expect(ctx.calls).toEqual(["suspend"]);

        setDocumentHidden(false);
        expect(ctx.calls).toEqual(["suspend", "resume"]);
    });

    test("a sound started while the page is hidden is only audible once it's visible", async function () {
        // browsers start the audio context suspended, until a user gesture
        const { Sound, ctx } = await initSound("suspended");

        setDocumentHidden(true);
        Sound.play(BUFFER);
        expect(ctx.calls).toEqual([]);

        setDocumentHidden(false);
        expect(ctx.calls).toEqual(["resume"]);
    });

    test("a sound started while the page is visible resumes a suspended context", async function () {
        const { Sound, ctx } = await initSound("suspended");

        Sound.play(BUFFER);
        expect(ctx.calls).toEqual(["resume"]);
    });

    test("setPauseWhenHidden( false ) keeps them playing", async function () {
        const { Sound, ctx } = await initSound();

        setDocumentHidden(true);
        expect(ctx.calls).toEqual(["suspend"]);

        // resumes the ones it paused
        Sound.setPauseWhenHidden(false);
        expect(ctx.calls).toEqual(["suspend", "resume"]);

        setDocumentHidden(false);
        setDocumentHidden(true);
        expect(ctx.calls).toEqual(["suspend", "resume"]);

        Sound.setPauseWhenHidden(true);
        expect(ctx.calls).toEqual(["suspend", "resume", "suspend"]);
    });

    test("play() returns null for something that isn't an audio buffer (a file that failed to load)", async function () {
        const { Sound } = await initSound();

        expect(Sound.play(undefined as unknown as AudioBuffer)).toBe(null);
        expect(Sound.play(BUFFER)).not.toBe(null);
    });

    test("play() and Preload.getAudio() take the same audio buffers (an AudioBuffer, where the browser has them)", async function () {
        class FakeAudioBuffer {
            duration = 10;
        }

        vi.stubGlobal("AudioBuffer", FakeAudioBuffer);

        const { Sound } = await initSound();
        const { Preload } = await import("./preload");
        const buffer = new FakeAudioBuffer() as unknown as AudioBuffer;
        const lookalike = { duration: 3 } as AudioBuffer;

        Preload.DATA["real"] = buffer;
        Preload.DATA["lookalike"] = lookalike;

        expect(Sound.play(buffer)).not.toBe(null);
        expect(Preload.getAudio("real")).toBe(buffer);

        expect(Sound.play(lookalike)).toBe(null);
        expect(Preload.getAudio("lookalike")).toBe(undefined);
    });
});

describe("Sound before the user interacts with the page", function () {
    test("a context suspended by the autoplay policy is resumed on the first key press, click or touch", async function () {
        FakeAudioContext.autoplayAllowed = false;
        const { Sound, ctx } = await initSound("suspended");

        // the music starts with the game, before any interaction
        Sound.play(BUFFER, { loop: true });
        expect(ctx.state).toBe("suspended");

        // the browser allows audio once the player presses a key
        FakeAudioContext.autoplayAllowed = true;
        window.dispatchEvent(new KeyboardEvent("keydown", { code: "Space" }));
        expect(ctx.state).toBe("running");

        // it doesn't wait for more interactions
        await Promise.resolve();
        const calls = ctx.calls.length;

        window.dispatchEvent(new MouseEvent("click"));
        expect(ctx.calls).toHaveLength(calls);
    });

    test("a press that doesn't count as an interaction (escape) leaves it waiting for the next one", async function () {
        FakeAudioContext.autoplayAllowed = false;
        const { ctx } = await initSound("suspended");

        window.dispatchEvent(new KeyboardEvent("keydown", { code: "Escape" }));
        await Promise.resolve();
        expect(ctx.state).toBe("suspended");

        FakeAudioContext.autoplayAllowed = true;
        window.dispatchEvent(new PointerEvent("pointerdown"));
        expect(ctx.state).toBe("running");
    });

    test("a context that already runs doesn't wait for an interaction", async function () {
        const { ctx } = await initSound("running");

        window.dispatchEvent(new KeyboardEvent("keydown", { code: "Space" }));
        expect(ctx.calls).toEqual([]);
    });
});
