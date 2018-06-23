import * as types from "./typecheck";

export function verifyUnit(unit) {
    types.typecheckNumber(unit);

    return  unit === 1 ||
            unit === 2 ||
            unit === 4 ||
            unit === 8 ||
            unit === 16;
}

/*
    Returns an array of the form
    [
        notes_array,
        duration_array,
        errors_array    [OPTIONAL]
    ]
*/
export function translate(voice_array, unit, units_per_minute) {
    types.typecheckNumber(unit);
    types.typecheckNumber(units_per_minute);

    let voice_index = 0;
    let duration_count = 0;

    const result = [];
    const notes = [];
    const durations = [];
    const errors = [];

    while(voice_index < voice_array.length) {
        if(voice_array[voice_index] === "~") {
            if(duration_count === 0) {
                errors.push([voice_array[voice_index], voice_index]);
            } else {
                duration_count += 1;
            }
        } else {
            // Then the token is a note.

            // Add the note.
            notes.push(voice_array[voice_index]);

            // Add the duration of the previous note.
            if(duration_count > 0) {
                durations.push(convertCountToDuration(duration_count, unit, units_per_minute));
            }

            // Reset the duration.
            duration_count = 1;
        }
              
        // Increment to look at next voice token.
        voice_index++;
    };

    // Add the last duration, since it would not have added during the loop.
    durations.push(convertCountToDuration(duration_count, unit, units_per_minute));

    // TODO: Return correct value by processing the voice_array.

    result.push(notes);
    result.push(durations);
    result.push(errors);
    return result;
}

export function convertCountToDuration(duration_count, unit, units_per_minute) {
    types.typecheckNumber(duration_count);
    types.typecheckNumber(unit);
    types.typecheckNumber(units_per_minute);

    const minute_fraction = duration_count / units_per_minute;
    const duration_in_seconds = Math.floor(minute_fraction * 60 * 1000) / 1000;

    return duration_in_seconds;
}