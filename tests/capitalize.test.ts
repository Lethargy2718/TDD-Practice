import { capitalize } from "../src";
import { describe, test, expect } from "@jest/globals";

describe("Capitalize Function", () => {
    test("'hello' capitalized is 'Hello'", () => {
        expect(capitalize("hello")).toBe("Hello");
    });

    test("'BOY' capitalized is 'BOY'", () => {
        expect(capitalize("BOY")).toBe("BOY");
    });

    test("'a' capitalized is 'A'", () => {
        expect(capitalize("a")).toBe("A");
    });

    test("'A' capitalized is 'A'", () => {
        expect(capitalize("A")).toBe("A");
    });

    test("Falsy values throw an error", () => {
        expect(() => capitalize("")).toThrow();
        expect(() => capitalize(undefined)).toThrow();
        expect(() => capitalize(null)).toThrow();
    });
});
