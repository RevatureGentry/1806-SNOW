



import MusicLexer from "./MusicLexer";
import MusicTranslator from "./MusicTranslator";


describe("translator translates lexer output correctly", () => {
    const lexer = new MusicLexer();
    const translator = new MusicTranslator();

    test("translator translates correct music programs of 1-length notes", () => {
        const music = " A C D B G F E";
        translator.translate(lexer.lex(music));

        const units_per_measure_array = [1, 2, 3, 4];
        //const notes = ["1n", "2n", "4n", "8n", "16n"];
        for(let i = 0; i < units_per_measure_array.length; i++) {
            translator.translate(lexer.lex(music));
            let tone_duration = (1 / units_per_measure_array[i]).toString() + "m";
            expect(translator.getTranslation()).toEqual([
                [
                    ["A4", "C4", "D4", "B4", "G4", "F4", "E4"],
                    [// TODO: WHAT DURATIONS GET REPORTED?
                        tone_duration,
                        tone_duration,
                        tone_duration,
                        tone_duration,
                        tone_duration,
                        tone_duration,
                        tone_duration,
                    ],
                ]
                /*[
                    ["A4", notes[i]],
                    ["C4", notes[i]],
                    ["D4", notes[i]],
                    ["B4", notes[i]],
                    ["G4", notes[i]],
                    ["F4", notes[i]],
                    ["E4", notes[i]],
                ]*/
            ]);
        };
    });

    test("translator reports errors on incorrect music programs", () => {

    });
});