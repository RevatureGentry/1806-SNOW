
import * as types from "../utils/typecheck";
/*
    This function extracts header values from a header string.
    Headers are expected to take the following form.
    "<TITLE> \n" +
    "<AUTHOR> \n" + 
    "unit <UNIT> upm <UPM> beat <BEAT>"

    minimal error checking is done. No time.
*/
export function extractHeader(header) {
    types.typecheckString(header);
    let extracted = {};
    const header_lines = header.trim().split("\n");
    if(header_lines.length !== 3) {
        throw new Error("header does not have 3 lines. Headers are expected to take the following form:\n"
            + "<TITLE> \n" +
            "<AUTHOR> \n" + 
            "unit <UNIT> upm <UPM> beat <BEAT>"
        );
    }
    extracted.title = header_lines[0].trim();
    extracted.author = header_lines[1].trim();
    
    const modifiers = header_lines[2].trim().split(/[\s]+/);
    if(modifiers.length !== 6) {
        throw new Error("header modifiers were not correctly written. Should be of form 'unit <UNIT> upm <UPM> beat <BEAT>");
    } 

    let i = 0;
    while(i < modifiers.length) {
        if(modifiers[i] === "unit") {
            extracted.unit = parseInt(modifiers[i + 1]);
        } else if (modifiers[i] === "upm") {
            extracted.upm = parseInt(modifiers[i + 1]);
        } else if (modifiers[i] === "beat") {
            extracted.beat = parseInt(modifiers[i + 1]);
        } else {
            throw new Error(
                `header modifier token ${modifiers[i]} is invalid. Choose from 'unit', 'upm', and 'beat'`
            );
        }

        i += 2;
    }

    return extracted;
}