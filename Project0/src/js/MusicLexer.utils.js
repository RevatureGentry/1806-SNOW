


export function preprocess(input) {
    if(typeof(input) !== 'string') {
        throw Error("input is not a string");
    }

    return input.trim().split(/[\s]+/);
}