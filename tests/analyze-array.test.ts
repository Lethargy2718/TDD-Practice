import { analyzeArray } from "../src";
import { describe, test, expect } from "@jest/globals";

describe("Analyze Array Function", () => {
    test("Finds the max value", () => {
        expect(analyzeArray([1, 2, -9, 4, 5]).max).toBe(5);
        expect(analyzeArray([1]).max).toBe(1);
        expect(analyzeArray([1, 1, 1]).max).toBe(1);
        expect(analyzeArray([]).max).toBe(null);
    });

    test("Finds the minimum value", () => {
        expect(analyzeArray([1, 2, -9, 4, 5]).min).toBe(-9);
        expect(analyzeArray([1]).min).toBe(1);
        expect(analyzeArray([1, 1, 1]).min).toBe(1);
        expect(analyzeArray([]).min).toBe(null);
    });

    test("Finds the average value", () => {
        expect(analyzeArray([1, 2, -9, 4, 5]).average).toBeCloseTo(3 / 5);
        expect(analyzeArray([1]).average).toBe(1);
        expect(analyzeArray([1, 1, 1]).average).toBe(1);
        expect(analyzeArray([]).average).toBe(null);
    });

    test("Finds the length", () => {
        expect(analyzeArray([1, 2, -9, 4, 5]).length).toBe(5);
        expect(analyzeArray([1]).length).toBe(1);
        expect(analyzeArray([1, 1, 1]).length).toBe(3);
        expect(analyzeArray([]).length).toBe(0);
    });
});
