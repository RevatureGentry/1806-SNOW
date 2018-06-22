
import * as types from "./typecheck";
import * as utils from "./MusicTranslator.utils";

class MusicTranslator {
    constructor() {
        // default unit is quarter notes.
        this._unit = 4;

        // default is 4 units in a measure.
        this._units_per_measure = 4;

        this._translation = [];
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

    getTranslation() {
        return this._translation;
    }

    // This function only takes output from the MusicLexer.
    // It translates certain tokens to
    // the appropriate form for Tone.js to consume.
    // If translation fails, it will report the error.
    translate(voices_array) {
        // NOTE. The first array in voices_array will be ignored!
        if(voices_array.length < 2) {
            throw new Error("voices array does not contain any voices!");
        }

        this._clearOldTranslation();

        for(let i = 1; i < voices_array.length; i++) {
            this._translation.push(this._doTranslate(voices_array[i]));
        }

        return this.getTranslation();
    }

    _clearOldTranslation() {
        this._translation = [];
    }

    _doTranslate(voice_array) {
        let initial_translation = utils.translate(voice_array, this.getBaseUnit(), this.getUnitsPerMeasure());
        let errors = initial_translation[2];
        if(errors.length > 0) {
            // Add errors, but proceed with the translation.
            this._addError(errors);
        }
        this._translation.push([initial_translation[0], initial_translation[1]]);

        // TODO: Ensure translation does not include errors; just notes and durations!

    }

    _addError(errors_array) {
        // TODO : How to store an error? What to do with the errors array?
    }
}

export default MusicTranslator;