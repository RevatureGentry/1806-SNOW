

import Tokens from "./tokens";
import * as utils from "./MusicLexer.utils.js";


class MusicLexer {
    constructor() {
        this._num_voices = 0;
        this._voices = [];
        this._preprocessed = [];
    }

    getVoice(index) {
        if(typeof(index) !== "number") {
            throw new Error("index not a number");
        }

        if(index < 1) {
            throw new Error("not a valid index");
        }

        return this._voices(index);
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
        if(typeof(music) !== "string") {
            throw new Error("music is not a string");
        }

        this._clearOldMusic();
        this._preprocessMusic(music);
        this._doLexing();

        return this.getAllVoices();
    }

    _clearOldMusic() {
        this._preprocessed = [];
        this._num_voices = 1;

        // Set voices to start at index 1. Index 0 is never used.
        this._voices = [[], []];
    }

    _preprocessMusic(music) {
        if(typeof(music) !== 'string') {
            throw new Error("music is not a string");
        }

        // Split on whitespace only into an array.
        this._preprocessed = utils.preprocess(music);
    }

    _doLexing() {
        while(this._hasMoreMusicTokens()) {
            const token = this._nextMusicToken();
            if(token === Tokens.NEW_VOICE) {
                this._addNewVoice();
            }

            this.addNote(this.convertTokenToNote(token));

            // TODO : CORRECTLY HANDLE INVALID TOKENS
        }
    }

    _hasMoreMusicTokens() {
        // TODO

        return false;
    }

    _nextMusicToken() {
        // TODO

        return "C";
    }

    _addNewVoice() {
        this._num_voices += 1;
        this._voices.push([]);
    }

    convertTokenToNote(token) {
        if(typeof(token) !== 'string') {
            throw new Error("token is not a string");
        }

        return "C1";
        // TODO: CORRECTLY HANDLE INVALID TOKENS
    }

    addNote(note) {
        const note_type = 'string';
        if(typeof(note) !== note_type) {
            throw new Error("note is not a string");
        }

        this._voices[this.getNumVoices()].push(note);
    }
}


export default MusicLexer;