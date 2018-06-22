
import * as types from "./typecheck";

// The purpose of this class is to convert 
// strings (likely read from files) that Tone.js
// can use to play music.
class MusicGenerator {

    // THIS CODE DOES NOT WORK. IT IS JUST A SKETCH OF THE CALL GRAPH
    // FOR THIS CLASS.

    constructor(lexer, translator) {
        this._lexer = lexer;
        this._translator = translator;
        this._generated = [];
        this._error_msgs = [];
    }

    hasLexErrors() {
        return this._lexer.hasErrors();
    }

    hasTranslatorErrors() {
        return this._translator.hasErrors();
    }

    hasErrors() {
        return this._error_msgs.length > 0;
    }

    getGeneratedMusic() {
        return this._generated;
    }

    generate(music_file_name) {
        types.typecheckString(music_file_name);
        this._generated = [];
        this._error_msgs = [];
        this._lexer.lex(music);

        if(this.hasLexErrors()) {
            this._error_msgs.push(this._lexer.getErrorSummary());
        }

        this._translator.translate(this._lexer.getAllVoices());

        if(this.hasTranslatorErrors()) {
            this._error_msgs.push(this._translator.getErrorSummary());
        }

        this._generated = this._translator.getTranslation();
        

        //TODO: finalize this function.
        // Should we take a string of music or a file name?
    }
}


export default MusicGenerator;
