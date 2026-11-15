import { describe, expect, test } from "vitest";
import { Bullet } from "./bullet";
import { Container } from "./container";
import { Rectangle } from "./rectangle";
import { Weapon } from "./weapon";
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

    test("changing the fireInterval uses the time since the last shot", function () {
        const { weapon } = makeWeapon(1);

        expect(weapon.fire(0)).toBe(true);
        weapon.logic(0.5);
        expect(weapon.isReady()).toBe(false);

        weapon.fireInterval = 0.25;
        expect(weapon.isReady()).toBe(true);
        expect(weapon.fire(0)).toBe(true);

        // waiting to fire counts as well
        weapon.logic(0.25);
        weapon.logic(0.25);
        weapon.fireInterval = 0.5;
        expect(weapon.fire(0)).toBe(true);
    });

    test("throws a RangeError for a fireInterval that isn't a number >= 0", function () {
        expect(() => makeWeapon(-1)).toThrow(RangeError);

        const { weapon } = makeWeapon(1);
        expect(() => (weapon.fireInterval = NaN)).toThrow(RangeError);
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

    test("the collisions of a bullet aren't passed on to a destroyed owner", async function () {
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

        owner.destroy();
        await flushMicrotasks();

        bullet.dispatchEvent("collision", {
            element: bullet,
            collidedWith: target,
        });
        expect(collisions).toBe(1);
    });
});

describe("Weapon bullets", function () {
    test("the bullets start at the owner, with the weapon's collision settings and damage", function () {
        const { owner, bullets, weapon } = makeWeapon(0);
        owner.x = 30;
        owner.y = 40;
        weapon.damage = 5;

        weapon.fire(0);
        const bullet = bullets.getAllChildren()[0] as Bullet;

        expect([bullet.x, bullet.y]).toEqual([30, 40]);
        expect(bullet.category).toBe(1);
        expect(bullet.collidesWith).toBe(2);
        expect(bullet.damage).toBe(5);
        expect(bullet.element).toBe(owner);
    });

    test("fires the bullet types added with addBulletType()", function () {
        const { bullets, weapon } = makeWeapon(0);
        const shape = new Rectangle({ width: 4, height: 4, color: "yellow" });
        const type = weapon.addBulletType(
            new Bullet({ children: shape, movementSpeed: 50 }),
        );

        expect(type).toBe(1);

        weapon.fire(0, type);
        const bullet = bullets.getAllChildren()[0] as Bullet;
        const child = bullet.getAllChildren()[0] as Rectangle;

        expect(child.color).toBe("yellow");
        expect(bullet.movement?.movementSpeed).toBe(50);
    });

    test("firing at a destroyed target fails, and stops a repeating fire at it", async function () {
        const { bullets, weapon } = makeWeapon(0);
        const target = new Rectangle({
            x: 100,
            width: 10,
            height: 10,
            color: "red",
        });

        weapon.forceFire(target, 0, 0.1);
        expect(bullets.getAllChildren()).toHaveLength(1);

        target.destroy();
        await flushMicrotasks();

        for (let a = 0; a < 10; a++) {
            weapon.logic(0.1);
        }

        expect(bullets.getAllChildren()).toHaveLength(1);
        expect(weapon.fire(target)).toBe(false);
    });

    test("stopFiring() stops the repeating fire", function () {
        const { bullets, weapon } = makeWeapon(0);

        weapon.forceFire(0, 0, 0.1);
        weapon.stopFiring();

        for (let a = 0; a < 10; a++) {
            weapon.logic(0.1);
        }

        expect(bullets.getAllChildren()).toHaveLength(1);
    });

    test("clone() keeps the settings and the bullet types", function () {
        const { owner, bullets, weapon } = makeWeapon(0.5);
        weapon.damage = 3;
        weapon.addBulletType(
            new Bullet({
                children: new Rectangle({ width: 1, height: 1, color: "red" }),
                movementSpeed: 10,
            }),
        );

        const clone = weapon.clone();

        expect(clone?.element).toBe(owner);
        expect(clone?.fireInterval).toBe(0.5);
        expect(clone?.damage).toBe(3);

        clone?.fire(0, 1);
        const bullet = bullets.getAllChildren()[0] as Bullet;
        expect(bullet.movement?.movementSpeed).toBe(10);
    });

    test("a destroyed weapon doesn't fire, and leaves the bullets already fired", async function () {
        const { bullets, weapon } = makeWeapon(0);

        weapon.fire(0);
        weapon.destroy();
        await flushMicrotasks();

        expect(weapon.element).toBe(null);
        expect(weapon.fire(0)).toBe(false);
        expect(weapon.forceFire(0)).toBe(false);
        expect(bullets.getAllChildren()).toHaveLength(1);
        expect(weapon.clone()).toBe(undefined);
    });
});
