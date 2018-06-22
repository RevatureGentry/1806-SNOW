

import Tokens from "./tokens";
import * as utils from "./MusicLexer.utils.js";
import TokenToNoteConverter from "./TokenConverter";


class MusicLexer {
    constructor() {
        this._num_voices = 0;
        this._voices = [];
        this._token_stream = [];
        this._token_index = 0;
        this._errors = [];
        this._unit_note = "4";
    }

    setUnitNote(unit) {
        typecheckString(unit);
        if(!utils.verifyUnit(unit)) {
            throw new Error("invalid unit note");
        }

        this._unit_note = unit;
    }

    getUnitNote() {
        return this._unit_note;
    }

    getVoice(index) {
        if(typeof(index) !== "number") {
            throw new Error("index not a number");
        }

        if(index < 1) {
            throw new Error("not a valid index. Valid indexes are integers >= 1");
        }

        return this._voices[index];
    }

    getNumVoices() {
        return this._num_voices;
    }

    getAllVoices() {
        return this._voices;
    }

    getErrors() {
        // TODO
    }

    getErrorSummary() {
        // TODO
        return "Errors";
    }

    lex(music) {
        utils.typecheckString(music);

        this._clearOldMusic();
        this._doLexing(music);

        return this.getAllVoices();
    }

    _clearOldMusic() {
        this._token_stream = [];
        this._token_index = 0;
        this._num_voices = 1;

        // Set voices to start at index 1. Index 0 is never used.
        this._voices = [[], []];

        // Reset all previously detected errors.
        this._errors = [];
    }

    _doLexing(music) {
        utils.typecheckString(music);

        this._preprocessMusic(music);
        this._process();
    }

    _preprocessMusic(music) {
        utils.typecheckString(music);

        // Split on whitespace only into an array.
        this._token_stream = utils.preprocess(music);
    }

    _process() {
        while(this._hasMoreMusicTokens()) {
            const token = this._nextMusicToken();
            if(token === Tokens.NEW_VOICE) {
                this._addNewVoice();
            }

            if(this._tokenIsInLanguage(token)) {
                this.addNote(this.convertTokenToNote(token));
            } else {
                // Token is not in language. so it is an error. Report it!
                this._addError(token);
            }
        }
    }

    _hasMoreMusicTokens() {
        return this._token_index === this._token_stream.length;
    }

    _nextMusicToken() {
        let token = this._token_stream[this._token_index];
        this._token_index += 1;

        return token;
    }

    _addNewVoice() {
        this._num_voices += 1;
        this._voices.push([]);
    }

    _tokenIsInLanguage(token) {
        utils.typecheckString(token);

        return utils.verifyToken(token);
    }

    convertTokenToNote(token) {
        utils.typecheckString(token);

        let converter = new TokenToNoteConverter();

        return converter.convert(token);
    }

    addNote(note) {
        utils.typecheckString(note);

        this._voices[this.getNumVoices()].push(note);
    }

    _addError(token) {
        utils.typecheckString(token);

        this._errors.push([token, this._token_index]);
    }
}


export default MusicLexer;