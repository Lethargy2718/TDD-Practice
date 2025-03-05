import { reverseString } from "../src";
import { describe, test, expect } from "@jest/globals";

describe("String Reversal Function", () => {
    test("'hello' reversed is 'olleh'", () => {
        expect(reverseString("hello")).toBe("olleh");
    });

    test("'BOY' reversed is 'YOB'", () => {
        expect(reverseString("BOY")).toBe("YOB");
    });

    test("'a' reversed is 'a'", () => {
        expect(reverseString("a")).toBe("a");
    });

    test("'A' reversed is 'A'", () => {
        expect(reverseString("A")).toBe("A");
    });

    test("Empty strings reversed are empty strings", () => {
        expect(reverseString("")).toBe("");
    });

    test("Null and undefined values throw an error", () => {
        expect(() => reverseString(undefined)).toThrow();
        expect(() => reverseString(null)).toThrow();
    });
});
