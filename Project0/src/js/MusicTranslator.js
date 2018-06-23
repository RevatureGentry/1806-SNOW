
import * as types from "./typecheck";
import * as utils from "./MusicTranslator.utils";

class MusicTranslator {
    constructor() {
        // default unit is quarter notes.
        this._unit = 4;

        // default is 4 units in a measure.
        this._units_per_measure = 4;

        this._translation = [];
        this._errors = [];
    }


    setBaseUnit(unit_note) {
        types.typecheckNumber(unit_note);

        if(! utils.verifyUnit(unit_note)) {
            throw new Error("base unit was not a valid unit. Valid units are " +
                                "'1', '2', '4', '8', '16'");
        }

        this._unit = unit_note;
    }

    getBaseUnit() {
        return this._unit;
    }

    setUnitsPerMeasure(upm) {
        types.typecheckNumber(upm);
        if(upm < 1) {
            throw new Error("units per measure should be at least 1");
        }

        this._units_per_measure = upm;
    }

    getUnitsPerMeasure() {
        return this._units_per_measure;
    }

    hasErrors() {
        return this._errors.length > 0;
    }

    getErrors() {
        return this._errors;
    }

    getErrorSummary() {
        let error_message = "The translator found the following errors:\n\n";
        for(let i = 0; i < this._errors.length; i++) {
            error_message = `${error_message}Token '${this._errors[i][0]}' at position ${this._errors[i][1]} could not be translated\n`;
        }

        return error_message;
    }

    getTranslation() {
        return this._translation;
    }

    // This function only takes output from the MusicLexer.
    // It translates certain tokens to
    // the appropriate form for Tone.js to consume.
    // If translation fails, it will report the error.
    translate(voices_array) {
        // NOTE. The first array in voices_array will be ignored!
        // So each voices_array must have a length of 2 or greater to be
        // translatable.
        if(voices_array.length < 2) {
            throw new Error("voices array does not contain any voices!");
        }

        this._clearOldTranslation();

        for(let i = 1; i < voices_array.length; i++) {
            this._doTranslate(voices_array[i]);
        }

        return this.getTranslation();
    }

    _clearOldTranslation() {
        this._translation = [];
        this._errors = [];
    }

    _doTranslate(voice_array) {
        const initial_translation = utils.translate(voice_array, this.getBaseUnit(), this.getUnitsPerMeasure());
        const errors = initial_translation[2];
        if(errors.length > 0) {
            // Add errors, but proceed with the translation.
            this._addError(errors);
        }
        this._translation.push([initial_translation[0], initial_translation[1]]);
    }

    _addError(errors_array) {
        // Errors array will be of the form
        // [ [err1, pos1], [err2, pos2], [err3, pos3]]
        this._errors = this._errors.concat(errors_array);
    }
}

export default MusicTranslator;