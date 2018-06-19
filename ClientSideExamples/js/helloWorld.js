/* Obligatory Hello World Bit */
console.log("Hello, World!");
//If you want this code to be as equivalent to traditional OOP as possible, use === instead of ==.
console.log("1 == '1' => " + (1 == '1'));
console.log("1 === '1' => " + (1 === '1'));
console.log("3 == '3.0' => " + (3 == '3.0'));
console.log("3.0 == '3' => " + (3.0 == '3'));
console.log("3.0 == 3 => " + (3.0 == 3));

//Falsy Evaluations
console.log("0 == false => " + (0 == false));
console.log("'' == false => " + ("" == false));
console.log("0 === false => " + (0 === false));
console.log("'' === false => " + ("" === false));
console.log("null == null => " + (null == null));
console.log("null == undefined => " + (null == undefined));
console.log("NaN == NaN => " + (NaN == NaN));

//Truthy Evaluations - if it's technically not false, it's gotta be true. 
if ('Thing') {
    console.log("Thing is truthy");
}
if (42) {
    console.log("42 is truthy.");
}

//TypeOf
console.log("typeof 'William' => " + (typeof 'William'));
console.log("typeof Infinity => " + (typeof Infinity));
console.log("typeof NaN => " + (typeof NaN));
