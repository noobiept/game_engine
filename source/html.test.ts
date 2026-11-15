// @vitest-environment jsdom
import { describe, expect, test, vi } from "vitest";
import {
    Boolean as BooleanButton,
    Button,
    HtmlContainer,
    HtmlElement,
    MultipleOptions,
    Range,
    Text,
    TwoState,
    Value,
} from "./html";

function click(element: HTMLElement) {
    element.dispatchEvent(new MouseEvent("click", { bubbles: true }));
}

describe("HtmlElement", function () {
    test("accepts several css classes in a string (separated by spaces)", function () {
        const element = new HtmlElement({ cssClass: " first  second " });

        expect(element.container.classList.contains("first")).toBe(true);
        expect(element.container.classList.contains("second")).toBe(true);
    });

    test("accepts a list of css classes, ignoring the empty ones", function () {
        const element = new HtmlElement({ cssClass: ["first", "", "a b"] });

        expect([...element.container.classList].sort()).toEqual([
            "Game-Element",
            "a",
            "b",
            "first",
        ]);
    });
});

describe("clear()", function () {
    test("takes the element out of the page, but keeps its html element", function () {
        const value = new Value({ value: 5, preText: "Value:" });
        document.body.appendChild(value.container);

        expect(value.isCleared()).toBe(false);

        value.clear();
        value.clear(); // a second call doesn't throw

        expect(value.isCleared()).toBe(true);
        expect(value.container).toBeInstanceOf(HTMLElement);
        expect(document.body.contains(value.container)).toBe(false);
        expect(value.container.contains(value.element)).toBe(false);
    });

    test("a cleared element isn't added to a container", function () {
        const container = new HtmlContainer();
        const cleared = new HtmlElement();
        const element = new HtmlElement();

        cleared.clear();
        container.addChild(cleared, element);

        expect(container.container.children).toHaveLength(1);
        expect(container.container.firstChild).toBe(element.container);
    });
});

describe("Value and Button", function () {
    test("Value shows its value (and the pre text)", function () {
        const value = new Value({ value: 10, preText: "Score:" });

        expect(value.element.textContent).toBe("10");
        expect(value.container.textContent).toBe("Score:10");

        value.setValue("max");

        expect(value.getValue()).toBe("max");
        expect(value.element.textContent).toBe("max");
    });

    test("Button calls its callback when clicked, unless it's inactive", function () {
        const callback = vi.fn();
        const button = new Button({ value: "Go", callback });

        click(button.container);
        expect(callback).toHaveBeenCalledWith(button);

        button.setActive(false);
        expect(button.isActive()).toBe(false);
        expect(button.container.classList.contains("Game-inactive")).toBe(true);

        click(button.container);
        expect(callback).toHaveBeenCalledTimes(1);

        button.setActive(true);
        click(button.container);
        expect(callback).toHaveBeenCalledTimes(2);
        expect(button.container.classList.contains("Game-inactive")).toBe(
            false,
        );
    });

    test("Boolean switches between 'On' and 'Off'", function () {
        const callback = vi.fn();
        const button = new BooleanButton({ value: true, callback });

        expect(button.element.textContent).toBe("On");

        click(button.container);

        expect(button.getValue()).toBe(false);
        expect(button.element.textContent).toBe("Off");
        expect(callback).toHaveBeenCalledTimes(1);
    });

    test("TwoState switches between its two values and callbacks", function () {
        const callback = vi.fn();
        const callback2 = vi.fn();
        const button = new TwoState({
            value: "Start",
            value2: "Stop",
            callback,
            callback2,
        });

        expect(button.getValue()).toBe("Start");

        click(button.container);
        expect(button.getValue()).toBe("Stop");
        expect(callback).toHaveBeenCalledTimes(1);

        click(button.container);
        expect(button.getValue()).toBe("Start");
        expect(callback2).toHaveBeenCalledTimes(1);
    });
});

describe("MultipleOptions", function () {
    test("selects the clicked option, and calls the callback", function () {
        const callback = vi.fn();
        const options = new MultipleOptions({
            options: ["easy", "normal", "hard"],
            callback,
        });
        const elements = options.container.children;

        expect(options.getValue()).toBe("easy");

        click(elements[2] as HTMLElement);
        expect(options.getValue()).toBe("hard");
        expect(callback).toHaveBeenCalledWith(options, 2, elements[2]);
        expect(elements[2].classList.contains("Game-selected")).toBe(true);
        expect(elements[0].classList.contains("Game-selected")).toBe(false);

        // clicking the selected one does nothing
        click(elements[2] as HTMLElement);
        expect(callback).toHaveBeenCalledTimes(1);

        options.select(1);
        expect(options.getValue()).toBe("normal");
    });
});

describe("Range", function () {
    function parts(range: Range) {
        const [input, label] = Array.from(range.container.children);

        return { input: input as HTMLInputElement, label };
    }

    test("shows its value, also when it starts at 0", function () {
        const range = new Range({ min: 0, max: 10, value: 0 });

        expect(parts(range).label.textContent).toBe("0");
        expect(range.getValue()).toBe(0);
    });

    test("shows the value with the step's decimals", function () {
        const range = new Range({ min: 0, max: 2, value: 1.5, step: 0.25 });
        const { input, label } = parts(range);

        expect(label.textContent).toBe("1.50");
        expect(input.step).toBe("0.25");
    });

    test("updates the label while dragging, and the value (and calls onChange) when changed", function () {
        const onChange = vi.fn();
        const range = new Range({ min: 0, max: 10, value: 5, onChange });
        const { input, label } = parts(range);

        input.value = "7";
        input.dispatchEvent(new Event("input"));
        expect(label.textContent).toBe("7");
        expect(range.getValue()).toBe(5);

        input.dispatchEvent(new Event("change"));
        expect(range.getValue()).toBe(7);
        expect(onChange).toHaveBeenCalledWith(range);
    });
});

describe("Text", function () {
    test("calls the callback when 'enter' is pressed, or the button is clicked", function () {
        const callback = vi.fn();
        const text = new Text({
            placeholder: "Your name",
            buttonText: "Ok",
            callback,
        });
        const input = text.container.querySelector("input") as HTMLInputElement;

        expect(input.placeholder).toBe("Your name");

        text.setValue("Ana");
        expect(text.getValue()).toBe("Ana");

        input.dispatchEvent(new KeyboardEvent("keyup", { key: "a" }));
        expect(callback).not.toHaveBeenCalled();

        input.dispatchEvent(new KeyboardEvent("keyup", { key: "Enter" }));
        expect(callback).toHaveBeenCalledWith(text);

        click(text.container.querySelector(".Game-Button") as HTMLElement);
        expect(callback).toHaveBeenCalledTimes(2);
    });
});

describe("HtmlContainer", function () {
    test("adds, removes (clearing them) and removes all the children", function () {
        const container = new HtmlContainer();
        const first = new Value({ value: 1 });
        const second = new Value({ value: 2 });
        const other = document.createElement("p");

        container.addChild(first, second);
        container.container.appendChild(other);
        expect(container.container.children).toHaveLength(3);

        container.removeChild(first);
        expect(first.isCleared()).toBe(true);
        expect(container.container.children).toHaveLength(2);

        // also removes the html that wasn't added through it
        container.removeAllChildren();
        expect(second.isCleared()).toBe(true);
        expect(container.container.children).toHaveLength(0);
    });
});
