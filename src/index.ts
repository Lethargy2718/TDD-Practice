export { capitalize, reverseString, calculator, ceaserCipher, analyzeArray };

function capitalize(word: string): string {
    if (!word) throw new Error("Invalid string");
    return word.charAt(0).toUpperCase() + word.slice(1);
}

function reverseString(word: string): string {
    if (word === null || word === undefined) throw new Error("Invalid string");
    return word.split("").reverse().join("");
}

const calculator = {
    add: (a: number, b: number) => a + b,
    subtract: (a: number, b: number) => a - b,
    multiply: (a: number, b: number) => a * b,
    divide(a: number, b: number) {
        if (b === 0) throw new Error("Cannot divide by zero");
        return a / b;
    },
};

function ceaserCipher(word: string, shift: number): string {
    if (word === null || word === undefined) throw new Error("Invalid string");
    let result: Array<string> = [];

    for (let i = 0; i < word.length; i++) {
        const letter: string = word[i];
        let normalize: number;
        if (letter >= "A" && letter <= "Z") {
            normalize = 65;
        } else if (letter >= "a" && letter <= "z") {
            normalize = 97;
        } else {
            result.push(letter);
            continue;
        }

        result.push(String.fromCharCode(
            ((((letter.charCodeAt(0) + shift - normalize) % 26) + 26) % 26) +
                normalize,
        ));
    }
    return result.join("");
}

interface Analysis {
    max: number,
    min: number,
    average: number,
    length: number
}

function analyzeArray(arr: Array<number>): Analysis {
    if (arr.length === 0) {
        return { max: null, min: null, average: null, length: 0 };
    }

    const length = arr.length;

    const { min, max, total } = arr.reduce(
        (prev, num) => ({
            min: Math.min(prev.min, num),
            max: Math.max(prev.max, num),
            total: prev.total + num,
        }),
        { min: Infinity, max: -Infinity, total: 0 },
    );

    const average = total / length;

    return {
        max,
        min,
        average,
        length,
    };
}
