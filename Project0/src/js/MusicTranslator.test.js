



import MusicLexer from "./MusicLexer";
import MusicTranslator from "./MusicTranslator";


describe("translator translates lexer output correctly", () => {
    const lexer = new MusicLexer();
    const translator = new MusicTranslator();

    test("translator translates correct music programs of 2-length notes", () => {
        const music = " A C D B G F E";
        lexer.lex(music);
        expect(lexer.getAllVoices()).toEqual(
            [
                [],
                ["A4", "C4", "D4", "B4", "G4", "F4", "E4"],
            ]
        );

        translator.translate(lexer.getAllVoices());

        const units_per_minute_array = [1, 2, 3, 4, 30, 60, 120, 180];
        //const notes = ["1n", "2n", "4n", "8n", "16n"];
        for(let i = 0; i < units_per_minute_array.length; i++) {
            let tone_duration = Math.floor(1000 * 60 / units_per_minute_array[i]) / 1000;
            translator.setUnitsPerMinute(units_per_minute_array[i]);

            translator.translate(lexer.lex(music));
            expect(translator.getTranslation()).toEqual([
                [
                    ["A4", "C4", "D4", "B4", "G4", "F4", "E4"],
                    [
                        tone_duration,
                        tone_duration,
                        tone_duration,
                        tone_duration,
                        tone_duration,
                        tone_duration,
                        tone_duration,
                    ],
                ]
            ]);
        };
    });

    test("translator translates correct music programs with durations", () => {
        const music = "F ~ ~ E ~ C D ~ ~ A G ~ ~ ~ B ~ ~ ~ ~";
        lexer.lex(music);

        translator.setUnitsPerMinute(240);
        translator.translate(lexer.getAllVoices());
        expect(translator.getTranslation()).toEqual([
            [
                ["F4", "E4", "C4", "D4", "A4", "G4", "B4"],
                [
                    0.75,
                    0.5,
                    0.25,
                    0.75,
                    0.25,
                    1,
                    1.25
                ],
            ]
        ]);
    });

    test("translator reports errors on incorrect music programs", () => {
        const music = "~ F E   ";
        lexer.lex(music);

        translator.setUnitsPerMinute(4);
        translator.translate(lexer.getAllVoices());
        expect(translator.hasErrors()).toEqual(true);
        expect(translator.getErrors()).toEqual(
            [["~", 0]]
        );
        expect(translator.getErrorSummary()).toEqual(
            "The translator found the following errors:\n\nToken '~' at position 0 could not be translated\n"
        );
        expect(translator.getTranslation()).toEqual([
            [
                ["F4", "E4"],
                [15, 15],
            ]
        ]);
    });
});