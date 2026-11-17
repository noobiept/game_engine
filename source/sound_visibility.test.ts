// @vitest-environment jsdom
import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";
import { setDocumentHidden } from "../tests/helpers";

/**
 * A fake of the parts of `AudioContext` that the `Sound` module uses, which records the suspend/resume calls.
 */
class FakeAudioContext {
    static last: FakeAudioContext;

    state: "running" | "suspended" = "running";
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
        this.state = "running";
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

    Sound.init();
    FakeAudioContext.last.state = state;

    return { Sound, ctx: FakeAudioContext.last };
}

beforeEach(function () {
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
});
