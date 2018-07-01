export function typecheckString(input) {
    if(typeof(input) !== 'string') {
        throw new Error("input is not a string");
    }
}

export function typecheckNumber(input) {
    if(typeof(input) !== 'number') {
        throw new Error("input is not a number");
    }
}

export function typecheckBool(input) {
    if(typeof(input) !== 'boolean') {
        throw new Error("input is not a boolean");
    }
}