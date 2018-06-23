



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

        const units_per_measure_array = [1, 2, 3, 4];
        //const notes = ["1n", "2n", "4n", "8n", "16n"];
        for(let i = 0; i < units_per_measure_array.length; i++) {
            let tone_duration = (1 / units_per_measure_array[i]).toString() + "m";
            translator.setUnitsPerMeasure(units_per_measure_array[i]);

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

        translator.setUnitsPerMeasure(4);
        translator.translate(lexer.getAllVoices());
        expect(translator.getTranslation()).toEqual([
            [
                ["F4", "E4", "C4", "D4", "A4", "G4", "B4"],
                [
                    "0.75m",
                    "0.5m",
                    "0.25m",
                    "0.75m",
                    "0.25m",
                    "1m",
                    "1.25m"
                ],
            ]
        ]);
    });

    test("translator reports errors on incorrect music programs", () => {
        const music = "~ F E   ";
        lexer.lex(music);

        translator.setUnitsPerMeasure(4);
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
                ["0.25m", "0.25m"],
            ]
        ]);
    });
});