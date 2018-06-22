


export function preprocess(input) {
    typecheckString(input);

    let trimmed = input.trim();
    if(trimmed === "") {
        return [];
    } else {
        return trimmed.split(/[\s]+/);
    }
}

export function verifyToken(token) {
    typecheckString(token);

    // See regular expression documentation for JavaScript.
    let noteFormat = /^([A-G][1-9]?|~|!)$/;
    return noteFormat.test(token);
}

export function typecheckString(input) {
    if(typeof(input) !== 'string') {
        throw new Error("input is not a string");
    }
}

export function verifyUnit(unit) {
    typecheckString(unit);

    //see regex documentation for JavaScript.
    let unitFormat = /^(([1248])|16)$/;
    return unitFormat.test(unit);

}