import { beforeEach, describe, expect, test } from "vitest";
import { SoundInstance } from "./sound";

// Minimal fakes for the bits of the web audio api that SoundInstance uses, so the
// pause/resume offset logic and state transitions can be tested without a real AudioContext.

class FakeParam {
    value = 1;
}

class FakeGain {
    gain = new FakeParam();
    connectedTo: object | null = null;

    connect(target: object) {
        this.connectedTo = target;
    }
}

class FakeSource {
    buffer: object | null = null;
    loop = false;
    onended: (() => void) | null = null;
    started: { when: number; offset: number } | null = null;
    stopped = false;

    connect() {
        // no-op
    }

    start(when: number, offset: number) {
        this.started = { when, offset };
    }

    stop() {
        this.stopped = true;
    }
}

class FakeContext {
    currentTime = 0;
    sources: FakeSource[] = [];
    gains: FakeGain[] = [];

    createGain() {
        const gain = new FakeGain();
        this.gains.push(gain);
        return gain;
    }

    createBufferSource() {
        const source = new FakeSource();
        this.sources.push(source);
        return source;
    }
}

function setup(options?: { loop?: boolean; volume?: number }) {
    const ctx = new FakeContext();
    const master = new FakeGain();
    const buffer = { duration: 10 };

    const instance = new SoundInstance(
        ctx as unknown as AudioContext,
        master as unknown as GainNode,
        buffer as unknown as AudioBuffer,
        options,
    );

    return { ctx, master, instance };
}

describe("SoundInstance", function () {
    let ctx: FakeContext;
    let master: FakeGain;
    let instance: SoundInstance;

    beforeEach(function () {
        ({ ctx, master, instance } = setup({ loop: true, volume: 0.5 }));
    });

    test("starts playing immediately with the given options", function () {
        expect(instance.playing).toBe(true);
        expect(instance.loop).toBe(true);
        expect(instance.volume).toBe(0.5);

        expect(ctx.sources).toHaveLength(1);
        expect(ctx.sources[0].started).toEqual({ when: 0, offset: 0 });
        expect(ctx.sources[0].loop).toBe(true);

        // the instance's gain node feeds the master gain
        expect(ctx.gains[0].connectedTo).toBe(master);
    });

    test("pause() stops the source and remembers the played offset", function () {
        ctx.currentTime = 3;
        instance.pause();

        expect(instance.playing).toBe(false);
        expect(ctx.sources[0].stopped).toBe(true);
    });

    test("resume() creates a new source starting at the saved offset", function () {
        ctx.currentTime = 3;
        instance.pause();

        ctx.currentTime = 5;
        instance.resume();

        expect(instance.playing).toBe(true);
        expect(ctx.sources).toHaveLength(2);
        expect(ctx.sources[1].started).toEqual({ when: 0, offset: 3 });
    });

    test("offset accumulates across multiple pause/resume cycles (wrapping on duration)", function () {
        ctx.currentTime = 3;
        instance.pause(); // offset = 3

        ctx.currentTime = 5;
        instance.resume(); // startedAt = 5, offset = 3

        ctx.currentTime = 9;
        instance.pause(); // played 4 -> offset = (3 + 4) % 10 = 7

        ctx.currentTime = 12;
        instance.resume();

        expect(ctx.sources[2].started).toEqual({ when: 0, offset: 7 });
    });

    test("stop() discards the offset so a later resume starts from the beginning", function () {
        ctx.currentTime = 4;
        instance.stop();

        expect(instance.playing).toBe(false);
        expect(ctx.sources[0].stopped).toBe(true);

        instance.resume();

        expect(ctx.sources[1].started).toEqual({ when: 0, offset: 0 });
    });

    test("volume setter updates the instance's own gain node", function () {
        instance.volume = 0.2;

        expect(instance.volume).toBe(0.2);
        expect(ctx.gains[0].gain.value).toBe(0.2);
    });

    test("loop setter updates the live source", function () {
        instance.loop = false;

        expect(instance.loop).toBe(false);
        expect(ctx.sources[0].loop).toBe(false);
    });

    test("a natural end (non-looping) marks the instance as not playing", function () {
        const { ctx: oneShotCtx, instance: oneShot } = setup({ loop: false });

        const source = oneShotCtx.sources[0];
        const ended = source.onended;
        expect(ended).not.toBeNull();
        ended?.();

        expect(oneShot.playing).toBe(false);
    });

    test("a manual stop does not leave the onended handler able to misfire", function () {
        const source = ctx.sources[0];
        instance.stop();

        // after stop, the source's handler was detached
        expect(source.onended).toBeNull();
    });
});
