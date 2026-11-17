/**
 * How close (in seconds) a timer can be to its time and still count as reached. Adding up the steps of a fixed
 * timestep gives a tiny rounding error (30 steps of `1 / 60` add up to `0.49999999999999994`), so without it a timer of
 * `0.5` seconds would wait one more step.
 */
export const TIME_TOLERANCE = 1e-9;

/**
 * Tells if a timer that counted `time` reached `target` (within `TIME_TOLERANCE`).
 */
export function hasReached(time: number, target: number) {
    return time >= target - TIME_TOLERANCE;
}

/**
 * The time past the last whole interval (`time % interval`, for a positive `interval`). The rounding error of `%` can
 * leave almost a whole interval where the time is a whole number of them (`0.24 % 0.01` is `0.00999...`), which
 * would make the timer ready again right away, so that counts as `0`.
 */
export function timePast(time: number, interval: number) {
    const past = time % interval;

    return hasReached(past, interval) ? 0 : past;
}
