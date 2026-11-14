import { beforeEach, describe, expect, test } from "vitest";
import { Bullet } from "./bullet";
import { Container } from "./container";
import { Rectangle } from "./rectangle";
import { Weapon } from "./weapon";
import * as CollisionDetection from "./collision-detection/collision_detection";
import { flushMicrotasks } from "../tests/helpers";

function makeWeapon(fireInterval: number) {
    const owner = new Rectangle({
        width: 10,
        height: 10,
        color: "red",
        category: 1,
        collidesWith: 2,
    });
    const bullets = new Container();
    const weapon = new Weapon({
        element: owner,
        bulletContainer: bullets,
        fireInterval,
    });

    return { owner, bullets, weapon };
}

describe("Weapon", function () {
    beforeEach(function () {
        // the Element constructor registers with the collision detection module
        CollisionDetection.init();
    });

    test("fires at the set interval", function () {
        const { weapon } = makeWeapon(0.1);
        let shots = 0;

        // 10 seconds at 30 updates per second, trying to fire on every update
        for (let a = 0; a < 300; a++) {
            weapon.logic(1 / 30);

            if (weapon.fire(0)) {
                shots++;
            }
        }

        expect(shots).toBeGreaterThanOrEqual(99);
        expect(shots).toBeLessThanOrEqual(101);
    });

    test("a weapon that wasn't fired for a while doesn't fire twice in a row", function () {
        const { weapon } = makeWeapon(0.1);

        weapon.fire(0);

        for (let a = 0; a < 30; a++) {
            weapon.logic(1 / 30);
        }

        expect(weapon.fire(0)).toBe(true);

        weapon.logic(1 / 30);
        expect(weapon.fire(0)).toBe(false);
    });

    test("forceFire() with an interval keeps to it", function () {
        const { weapon, bullets } = makeWeapon(0);

        weapon.forceFire(0, 0, 0.1);

        for (let a = 0; a < 300; a++) {
            weapon.logic(1 / 30);
        }

        // the first bullet is fired right away
        expect(bullets.getAllChildren().length).toBeGreaterThanOrEqual(100);
        expect(bullets.getAllChildren().length).toBeLessThanOrEqual(102);
    });

    test("the collisions of a bullet aren't passed on to a removed owner", async function () {
        const { owner, bullets, weapon } = makeWeapon(0);
        let collisions = 0;

        owner.addEventListener("collision", () => collisions++);
        weapon.fire(0);

        const bullet = bullets.getAllChildren()[0] as Bullet;
        const target = new Rectangle({ width: 1, height: 1, color: "red" });

        bullet.dispatchEvent("collision", {
            element: bullet,
            collidedWith: target,
        });
        expect(collisions).toBe(1);

        owner.remove();
        await flushMicrotasks();

        bullet.dispatchEvent("collision", {
            element: bullet,
            collidedWith: target,
        });
        expect(collisions).toBe(1);
    });
});
