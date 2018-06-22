

import * as utils from "./MusicLexer.utils";

expect.extend({
    toBeStringValid(received, validator) {
        if(validator(received) === true) {
            return {
                message: () => received + " passed the test",
                pass: true,
            };
        } else {
            return {
                message: () => `${received} failed the test`,
                pass: false,
            };
        }
    }
});

describe("utils correctly preprocesses music string", () => {
    test("throws on invalid input", () => {
        let invalid_input = [1, {}, true, null, undefined, Symbol()];
        for(let input of invalid_input) {
            expect(() => {
                utils.preprocess(input)
            }).toThrow();
        }
    });

    describe("correctly removes white space of all types", () => {
        test("whitespace on left", () => {
            expect(utils.preprocess("\t\n\r   C")).toEqual(["C"]);
        });

        test("whitespace on right", () => {
            expect(utils.preprocess("C   \t\n\r")).toEqual(["C"]);
        })

        test("whitespace within", () => {
            expect(utils.preprocess("C \t\n\r B \t\n\rA")).toEqual(["C", "B", "A"])
        });

        test("whitespace everywhere", () => {
            expect(utils.preprocess("\t\n\r  C \t\n\r B \t\n\rA  \t\n\r")).toEqual(["C", "B", "A"]);
        });
    });

    describe("correctly handles the empty string and just whitespace", () => {
        test("empty string", () => {
            expect(utils.preprocess("")).toEqual([]);
        });

        test("just whitespace", () => {
            expect(utils.preprocess(" \t \n \r ")).toEqual([]);
        });
    });

});

describe("utils correctly verifies tokens", () => {
    test("recognizes common valid input", () => {
        let valid_input = ["A", "G", "C1", "D9", "E3", "~", "!"];
        for(let input of valid_input) {
            expect(input).toBeStringValid(utils.verifyToken);
        }
    });

    test("recognizes common invalid input", () => {
        let invalid_input = ["A~", "C4~", "F10", "G0", "3", "3A", "B!", "E7!"];
        for(let input of invalid_input) {
            expect(input).not.toBeStringValid(utils.verifyToken);
        }
    });
});

describe("utils correctly verifies unit of the notes", () => {
    test("recognizes all valid input", () => {
        let valid_input = ["1", "2", "4", "8", "16"];
        for(let input of valid_input) {
            expect(input).toBeStringValid(utils.verifyUnit);
        }
    });

    test("rejects common invalid input", () => {
        let invalid_input = ["-1", "0", "3", "5", "04"];
        for(let input of invalid_input) {
            expect(input).not.toBeStringValid(utils.verifyUnit);
        }
    })
});