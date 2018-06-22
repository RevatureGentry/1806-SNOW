

import Tokens from "./tokens";
import * as utils from "./MusicLexer.utils.js";
import TokenToNoteConverter from "./TokenConverter";


class MusicLexer {
    constructor() {
        this._num_voices = 1;
        this._voices = [[], []];
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
        return this._errors;
    }

    hasErrors() {
        return this._errors.length > 0;
    }

    getErrorSummary() {
        let error_message = "The following errors were found:\n\n";
        for(let i = 0; i < this._errors.length; i++) {
            error_message = `${error_message} ${this._errors[i][0]} at token position ${this._errors[i][1]}\n`;
        }
        return error_message;
    }

    lex(music) {
        utils.typecheckString(music);

        this._clearOldMusic();
        this._doLexing(music);

        return this.getAllVoices();
    }

    _clearOldMusic() {
        // reset token stream
        this._token_stream = [];
        this._token_index = 0;

        // Set voices to start at index 1. Index 0 is never used.
        this._voices = [[], []];
        this._num_voices = 1;

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
            const curr_token_index = this._token_index - 1;
            if(token === Tokens.NEW_VOICE) {
                this._addNewVoice();
            } else {
                this._addToken(token, curr_token_index);
            }
        }
    }

    _hasMoreMusicTokens() {
        return this._token_index < this._token_stream.length;
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

    _addToken(token, curr_token_index) {
        utils.typecheckString(token);
        utils.typecheckNumber(curr_token_index);

        if(this._tokenIsInLanguage(token)) {
            this.addNote(this.convertTokenToNote(token, curr_token_index));
        } else {
            // Token is not in language. so it is an error. Report it!
            this._addError(token);
        }
    }

    _tokenIsInLanguage(token) {
        utils.typecheckString(token);

        return utils.verifyToken(token);
    }

    convertTokenToNote(token, token_position) {
        utils.typecheckString(token);
        utils.typecheckNumber(token_position);

        let converter = new TokenToNoteConverter();

        return converter.convert(token, token_position);
    }

    addNote(note) {
        utils.typecheckString(note);

        this._voices[this.getNumVoices()].push(note);
    }

    _addError(token) {
        utils.typecheckString(token);

        const token_index = this._token_index - 1;
        this._errors.push([token, token_index]);
    }
}


export default MusicLexer;