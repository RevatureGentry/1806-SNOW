
import MusicLexer from "./MusicLexer";
import Tokens from "./tokens";

describe("lexer properly lexes a music string", () => {
    let lexer = new MusicLexer(); // lexer should work across all calls.

    test('Just basic notes - length 1', () => {
        let music = "  A B C D E F G";

        let expected = ["A4", "B4", "C4", "D4", "E4", "F4", "G4"];
        lexer.lex(music);
        expect(lexer.getNumVoices()).toEqual(1);
        expect(lexer.getAllVoices()).toEqual([[], expected]);
        expect(lexer.getVoice(1)).toEqual(expected);
        expect(lexer.hasErrors()).toEqual(false);


    });

    test('Just basic notes - length 2', () => {
        let music = "A1 B2 C3   D4 E5 F6 G7";

        let expected = music.trim().split(/[\s]+/);
        lexer.lex(music);
        expect(lexer.getNumVoices()).toEqual(1);
        expect(lexer.getAllVoices()).toEqual([[], expected]);
        expect(lexer.getVoice(1)).toEqual(expected);
        expect(lexer.hasErrors()).toEqual(false);


        music = "  G3 B4 C2  \t D9 E6 F8 A9 A3 B7 G1  ";
        expected = music.trim().split(/[\s]+/);
        lexer.lex(music);
        expect(lexer.getNumVoices()).toEqual(1);
        expect(lexer.getAllVoices()).toEqual([[], expected]);
        expect(lexer.getVoice(1)).toEqual(expected);
        expect(lexer.hasErrors()).toEqual(false);

    });

    test('Just attributes', () => {
        let music = "  ! ~ ~ !  ";
        let expected = music.trim().split(/[\s]+/);
        lexer.lex(music);
        expect(lexer.getNumVoices()).toEqual(1);
        expect(lexer.getAllVoices()).toEqual([[], expected]);
        expect(lexer.getVoice(1)).toEqual(expected);
        expect(lexer.hasErrors()).toEqual(false);

    });

    test('Adds new voices when requested', () => {

        let music = "  NEW NEW NEW    NEW NEW NEW \n NEW NEW ";
        let expected = [[], [], [], [], [], [], [], [], [], []];
        lexer.lex(music);
        expect(lexer.getNumVoices()).toEqual(9);
        expect(lexer.getAllVoices()).toEqual(expected);
        expect(lexer.hasErrors()).toEqual(false);

    });

    test('Combine length-1 notes, length-2 notes, attributes, and new  voices', () => {
        const voice_1 = "A ~ B2 ! ";
        const voice_2 = " G ~   \t D9 ~ E1 ";
        const voice_3 = "   \n F5  !  ";
        let expected_1 = ["A4", "~", "B2", "!"];
        let expected_2 = ["G4", "~", "D9", "~", "E1"];
        let expected_3 = ["F5", "!"];
        const expected = [[], expected_1, expected_2, expected_3];


        let music = voice_1 + Tokens.NEW_VOICE + voice_2 + Tokens.NEW_VOICE + voice_3;
        lexer.lex(music);
        expect(lexer.getNumVoices()).toEqual(3);
        expect(lexer.getAllVoices()).toEqual(expected);
        expect(lexer.getVoice(1)).toEqual(expected_1);
        expect(lexer.getVoice(2)).toEqual(expected_2);
        expect(lexer.getVoice(3)).toEqual(expected_3);
        expect(lexer.getErrors()).toEqual([]);
        expect(lexer.hasErrors()).toEqual(false);
    });

    test("Correctly detects invalid errors and publishes them as errors", () => {
        let music_errors = "  \t A A~ B! D1 G, \n # b ~! !~\r";
        lexer.lex(music_errors);
        const expected = [
            ["A~", 1],
            ["B!", 2],
            ["G,", 4],
            ["#", 5],
            ["b", 6],
            ["~!", 7],
            ["!~", 8]
        ];
        expect(lexer.getErrors()).toEqual(expected);

        let error_message = "The following errors were found:\n\n";
        for(let i = 0; i < expected.length; i++) {
            error_message = `${error_message}${expected[i][0]} at token position ${expected[i][1]}\n`;
        }
        expect(lexer.getErrorSummary()).toEqual(error_message);
        expect(lexer.hasErrors()).toEqual(true);
    });

});

/*
    housing@revature.com   -- more supplies
    maintenance@revature.com -- need fixes
    alexandra.fingerhut@revature.com -- PRINT and other things.
    avery.rose@revature.com
    hr@revature.com -- handle general HR stuff.

    Check ADP for direct deposit status.
    Ask about check?
*/