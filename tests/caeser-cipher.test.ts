import { ceaserCipher } from "../src";
import { describe, test, expect } from "@jest/globals";

describe("Caeser Cipher", () => {
    test("Manages uppercase letters'", () => {
        expect(ceaserCipher("ABC", 3)).toBe("DEF");
    });

    test("Manages uppercase letters wrapping", () => {
        expect(ceaserCipher("AZ", 2)).toBe("CB");
    });

    test("Manages lowercase letters", () => {
        expect(ceaserCipher("abc", 3)).toBe("def");
    });

    test("Manages lowercase letters wrapping", () => {
        expect(ceaserCipher("az", 2)).toBe("cb");
    });

    test("Manages lowercase and uppercase letters together", () => {
        expect(ceaserCipher("aZ", 2)).toBe("cB");
    });

    test("Manages punctuation", () => {
        expect(ceaserCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
    });

    test("Manages multiple wrapping", () => {
        expect(ceaserCipher("ABC", 52)).toBe("ABC");
        expect(ceaserCipher("ABC", 55)).toBe("DEF");
    });

    test("Manages negative shifting", () => {
        expect(ceaserCipher("Abc, Def!", -3)).toBe("Xyz, Abc!");
    });

    test("Manages empty strings", () => {
        expect(ceaserCipher("", 3)).toBe("");
        expect(ceaserCipher(" ", 3)).toBe(" ");
    });

    test("Manages null and undefined strings", () => {
        expect(() => ceaserCipher(null, 100)).toThrow();
        expect(() => ceaserCipher(undefined, 5)).toThrow();
    });
});
