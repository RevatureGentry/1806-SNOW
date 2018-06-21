
import MusicLexer from "./MusicLexer";

describe("lexer properly lexes a music string", () => {
    test('C1 notes', () => {
        let lexer = new MusicLexer();
        let music = "A B C D E F G";

        let expected = ["A1", "B1", "C1", "D1", "E1", "F1", "G1"];
        lexer.lex(music);
        expect(lexer.getNumVoices()).toBe(1);
        expect(lexer.getVoice(0)).toBe(expected);

        expected = expected;
        music = "A1 B1 C1 D1 E1 F1 G1";
        lexer.lex(music);
        expect(lexer.getVoice(0)).toBe(expected);
    });




});