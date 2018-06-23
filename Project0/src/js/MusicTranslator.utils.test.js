import * as utils from "./MusicTranslator.utils";
import { translate } from "./MusicTranslator.utils";

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


describe("utils correctly verifies unit of the notes", () => {
    test("recognizes all valid input", () => {
        let valid_input = [1, 2, 4, 8, 16];
        for(let input of valid_input) {
            expect(input).toBeStringValid(utils.verifyUnit);
        }
    });

    test("rejects common invalid input", () => {
        let invalid_input = [-1, 0, 3, 5];
        for(let input of invalid_input) {
            expect(input).not.toBeStringValid(utils.verifyUnit);
        }
    })
});

describe("utils correctly converts a duration to a Tone.js time", () => {
    test("valid duration conversions", () => {
        let duration_count = 1;
        let units_per_measure = 4;
        let unit = 4;

        expect(utils.convertCountToDuration(duration_count, unit, units_per_measure))
            .toEqual("0.25m");

        duration_count = 1;
        units_per_measure = 2;
        unit = 4;

        expect(utils.convertCountToDuration(duration_count, unit, units_per_measure))
            .toEqual("0.5m");
    });
});

describe("utils correctly translates a voice to an initial translation", () => {
    test("translates a voice with no errors", () => {
        let voice = ["A4", "B9", "C2", "D3", "E1", "G6", "F4"];
        let units_per_measure = 4;
        let unit = 4;

        const duration = "0.25m";
        expect(utils.translate(voice, unit, units_per_measure)).toEqual(
            [
                ["A4", "B9", "C2", "D3", "E1", "G6", "F4"],
                [ duration, duration, duration, 
                  duration, duration, duration, duration,
                ],
                []
            ]
        );
    });

    test("translates a voice with one error at start", () => {
        let voice = ["~", "A4", "B2"];
        let units_per_measure = 4;
        let unit = 4;
        
        const duration = "0.25m";
        expect(utils.translate(voice, unit, units_per_measure)).toEqual(
            [
                ["A4", "B2"],
                [ duration, duration ],
                [["~", 0]],
            ]
        );
    });
});