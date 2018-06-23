
import * as types from "./typecheck";
import * as utils from "./MusicGenerator.utils";


const SCORE_START = "-ScoreStart-";


// The purpose of this class is to convert 
// strings (likely read from files) that Tone.js
// can use to play music.
class MusicGenerator {

    constructor(lexer, translator) {
        if(!lexer) {
            throw new Error("Must provide a lexer");
        }

        if(!translator) {
            throw new Error("Must provide a translator");
        }

        this._lexer = lexer;
        this._translator = translator;
        this._author = "";
        this._title = "";
        this._beat = 4;
        this._unit = 4;
    }

    hasLexerErrors() {
        return this._lexer.hasErrors();
    }

    hasTranslatorErrors() {
        return this._translator.hasErrors();
    }

    hasErrors() {
        return this.hasLexerErrors() || this.hasTranslatorErrors();
    }

    getErrors() {
        return this._lexer.getErrors().concat(this._translator.getErrors());
    }

    getErrorSummary() {
        return this._lexer.getErrorSummary() + this._translator.getErrorSummary();
    }

    getGeneratedMusic() {
        return this._translator.getTranslation();
    }

    getTitle() {
        return this._title;
    }

    getAuthor() {
        return this._author;
    }

    hasUnit(unit) {
        return unit === this._unit;
    }

    hasBeat(beat) {
        return beat === this._beat;
    }

    hasUnitsPerMinute(upm) {
        return upm === this._translator.getUnitsPerMinute();
    }

    getBpm() {
        let beats_per_unit = this._beat / this._unit;
        let bpm = beats_per_unit * this._translator.getUnitsPerMinute();
        return bpm;
    }

    generate(music_file_string) {
        types.typecheckString(music_file_string);

        this._clearOldGeneratedMusic();

        this._setHeaderValues(this._extractHeaderValues(music_file_string) );
        
        this._lex(this._extractScoreValues(music_file_string));
        this._translate();
        
        return this.getGeneratedMusic();
    }

    _clearOldGeneratedMusic() {
        // No state needs to be cleared.
    }

    _setHeaderValues(header) {
        this._title = header.title ? header.title : "Unknown";
        this._author = header.author ? header.author : "Unknown";
        this._translator.setUnitsPerMinute(header.upm ? header.upm : 60);
        this._unit = header.unit ? header.unit : 4;
        this._beat = header.beat ? header.beat : 4;
    }

    _extractHeaderValues(music_file_string) {
        types.typecheckString(music_file_string);
        if(!music_file_string.includes(SCORE_START)) {
            throw new Error("music file requires a string '-ScoreStart-' to denote the end of the header");
        }
        const header = utils.extractHeader(music_file_string.split(SCORE_START)[0]);

        return header;
    }

    _extractScoreValues(music_file_string) {
        types.typecheckString(music_file_string);
        if(!music_file_string.includes(SCORE_START)) {
            throw new Error(`music file requires a string '${SCORE_START}' to denote the start of the score`);
        }
        const score = music_file_string.split(SCORE_START)[1];
        return score;
    }

    _lex(score) {
        types.typecheckString(score);
        this._lexer.lex(score);
    }

    _translate() {
        this._translator.translate(this._lexer.getAllVoices());
    }

}


export default MusicGenerator;
