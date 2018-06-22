
import MusicLexer from "./MusicLexer";

describe("lexer properly lexes a music string", () => {
    test("can convert tokens to notes", () => {

    });

    test('C1 notes', () => {
        let lexer = new MusicLexer();
        let music = "A B C D E F G";

        let expected = ["A4", "B4", "C4", "D4", "E4", "F4", "G4"];
        lexer.lex(music);
        expect(lexer.getNumVoices()).toEqual(1);
        expect(lexer.getVoice(1)).toEqual(expected);

        expected = ["A2", "B2", "C2", "D2", "E2", "F2", "G2"];
        music = "A2 B2 C2 D2 E2 F2 G2";
        lexer.lex(music);
        expect(lexer.getNumVoices()).toEqual(1);
        expect(lexer.getVoice(1)).toEqual(expected);
    });




});