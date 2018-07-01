

import TokenToNoteConverter from "./TokenConverter";

describe('converter correctly converts tokens', () => {
    test("common correct tokens", () => {
        const converter = new TokenToNoteConverter();
        expect(converter.convert("A", 1)).toEqual("A4");
        expect(converter.convert("G4", 1)).toEqual("G4");
        expect(converter.convert("~", 1)).toEqual("~");
    })
});

describe("converter throws on invalid tokens", () => {
    test("common invalid tokens", () => {
        let invalid_input = ["H", "G10", "C0", "1"];
        const converter = new TokenToNoteConverter();
        for(let input of invalid_input) {
            expect(() => {
                converter.convert(input).toThrow();
            });
        }
    });
});