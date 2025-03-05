import { calculator } from "../src";
import { describe, test, expect } from "@jest/globals";

describe("Calculator Object", () => {
    test("Addition works", () => {
        expect(calculator.add(1, 1)).toBe(2);
    });

    test("Subtraction works", () => {
        expect(calculator.subtract(6, 2)).toBe(4);
    });

    test("Multiplication works", () => {
        expect(calculator.multiply(6, 5)).toBe(30);
    });

    test("Division works", () => {
        expect(calculator.divide(8, 2)).toBe(4);
    });

    test("Dividing by zero throws an error", () => {
        expect(() => calculator.divide(8, 0)).toThrow();
    });
});
