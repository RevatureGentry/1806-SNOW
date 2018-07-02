

import MusicGenerator from "./MusicGenerator";
import MusicLexer from "../lexer/MusicLexer";
import MusicTranslator from "../translator/MusicTranslator";

describe("Music generator correctly generates music", () => {
    let generator = new MusicGenerator(new MusicLexer(), new MusicTranslator());
    
    test("generates output for a 1-voice correct music program with rests", () => {
        let music =     "  Twinkle Twinkle Little Star  \n  "
                    +   "  Howard Chen  \n"
                    +   " unit 16 upm 330  beat 4   \n"
                    +   " -ScoreStart-  \n "
                    +   " C ! G G ! ~ G ~ ~ ~ F5 F5 E E D D C ~";

        generator.generate(music);
        expect(generator.hasLexerErrors()).toEqual(false);
        expect(generator.hasTranslatorErrors()).toEqual(false);
        expect(generator.hasErrors()).toEqual(false);
        expect(generator.getTitle()).toEqual("Twinkle Twinkle Little Star");
        expect(generator.getAuthor()).toEqual("Howard Chen");
        expect(generator.getBpm()).toEqual(82.5);
        expect(generator.getGeneratedMusic()).toEqual(
            [
                [
                    ["C4", null, "G4", "G4", null, "G4", "F5", "F5", "E4", "E4", "D4", "D4", "C4"],
                    [0.181, 0.181, 0.181, 0.181, 0.363, 0.727, 0.181, 0.181, 0.181, 0.181, 0.181, 0.181, 0.363]
                ]

            ]
        );
    });

    test("generates output for a 1-voice correct music program with no rests", () => {
        let music =     "  Twinkle Little Star  \n  "
                    +   "  Howard  \n"
                    +   "  upm 330  beat 4 unit 16  \n"
                    +   " -ScoreStart-  \n "
                    +   " C C G G A6 A6 G ~ ~ ~ F F E E D D C ~";

        generator.generate(music);
        expect(generator.hasLexerErrors()).toEqual(false);
        expect(generator.hasTranslatorErrors()).toEqual(false);
        expect(generator.hasErrors()).toEqual(false);
        expect(generator.getTitle()).toEqual("Twinkle Little Star");
        expect(generator.getAuthor()).toEqual("Howard");
        expect(generator.getBpm()).toEqual(82.5);
        expect(generator.getGeneratedMusic()).toEqual(
            [
                [
                    ["C4", "C4", "G4", "G4", "A6", "A6", "G4", "F4", "F4", "E4", "E4", "D4", "D4", "C4"],
                    [0.181, 0.181, 0.181, 0.181, 0.181, 0.181, 0.727, 0.181, 0.181, 0.181, 0.181, 0.181, 0.181, 0.363]
                ]

            ]
        );
    });

    test("generates output for a multi-voice correct music program", () => {
        let music =     "  Twinkle Little Star  \n  "
                    +   "  Howard  \n"
                    +   "  upm 330  beat 4 unit 16  \n"
                    +   " -ScoreStart-  \n "
                    +   " !  C  G  G  A6 A6 G  ~ ~ ~ F  F  E  E  D  D  C  ~ NEW"
                    +   " C5 C5 G5 G5 A7 A7 ! ~ ~ ~ F5 F5 E5 E5 D5 D5 C5 ~";

        generator.generate(music);
        expect(generator.hasLexerErrors()).toEqual(false);
        expect(generator.hasTranslatorErrors()).toEqual(false);
        expect(generator.hasErrors()).toEqual(false);
        expect(generator.getTitle()).toEqual("Twinkle Little Star");
        expect(generator.getAuthor()).toEqual("Howard");
        expect(generator.getBpm()).toEqual(82.5);
        expect(generator.getGeneratedMusic()).toEqual(
            [
                [
                    [null, "C4", "G4", "G4", "A6", "A6", "G4", "F4", "F4", "E4", "E4", "D4", "D4", "C4"],
                    [0.181, 0.181, 0.181, 0.181, 0.181, 0.181, 0.727, 0.181, 0.181, 0.181, 0.181, 0.181, 0.181, 0.363]
                ],
                [
                    ["C5", "C5", "G5", "G5", "A7", "A7", null, "F5", "F5", "E5", "E5", "D5", "D5", "C5"],
                    [0.181, 0.181, 0.181, 0.181, 0.181, 0.181, 0.727, 0.181, 0.181, 0.181, 0.181, 0.181, 0.181, 0.363]
                ]

            ]
        );
    });

    test("generates output for an incorrect music program", () => {
        let music =     "  Twinkle Little Star  \n  "
                    +   "  Howard  \n"
                    +   "  upm 330  beat 4 unit 16  \n"
                    +   " -ScoreStart-  \n "
                    +   " ~ C C G G A6 A6 G ~ ~ ~ F# F E E~ D D C ~";
        generator.generate(music);
        expect(generator.hasLexerErrors()).toEqual(true);
        expect(generator.hasTranslatorErrors()).toEqual(true);
        expect(generator.hasErrors()).toEqual(true);
        expect(generator.getTitle()).toEqual("Twinkle Little Star");
        expect(generator.getAuthor()).toEqual("Howard");
        expect(generator.getBpm()).toEqual(82.5);
        expect(generator.getGeneratedMusic()).toEqual(
            [
                [
                    ["C4", "C4", "G4", "G4", "A6", "A6", "G4", "F4", "E4", "D4", "D4", "C4"],
                    [0.181, 0.181, 0.181, 0.181, 0.181, 0.181, 0.727, 0.181, 0.181, 0.181, 0.181, 0.363],
                ]
            ]
        );
        expect(generator.getErrors()).toEqual([
            ["F#", 11], ["E~", 14], ["~", 0]
        ]);

        expect(generator.getErrorSummary()).toEqual(
            "The following errors were found:\n\n" + 
            "F# at token position 11\n" +
            "E~ at token position 14\n" + 
            "The translator found the following errors:\n\n" +
            "Token '~' at position 0 could not be translated\n"
        );
    });
});