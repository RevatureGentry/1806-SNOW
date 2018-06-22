

import * as utils from "./MusicLexer.utils";

class TokenToNoteConverter {
    constructor() {
        this._note_table = new Map([
            ["A", "A4"],
            ["B", "B4"],
            ["C", "C4"],
            ["D", "D4"],
            ["E", "E4"],
            ["F", "F4"],
            ["G", "G4"],
        ]);

        this._attr_table = new Map([
            
        ]);
    }

    convert(token, tokenPosition) {
        utils.typecheckString(token);
        if(typeof(tokenPosition) !== 'number') {
            throw new Errror('tokenPosition is not a number');
        }

        let complete_note_pattern = /^[A-G][1-9]$/;
        let shorthand_note_pattern = /^[A-G]$/;
        let attr_pattern = /^([!]?[~])$/;

        if(shorthand_note_pattern.test(token)) {
            return this._getNote(token);
        }

        if(complete_note_pattern.test(token)) {
            return token;
        }

        if(attr_pattern.test(token)) {
            // TODO What token to return? HOw to pair the tokens?

            // This should go with the last non_atr token. But I can't know that yet!
            return token;
        }

        throw new Error("Conversion failed! Unexpected token!");

    }

    // Assumes the token is in the table.
    _getNote(token) {
        utils.typecheckString(token);
        return this._note_table.get(token);
    }
}


export default TokenToNoteConverter;