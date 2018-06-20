/* Hello World */
console.log('Puny Earthlings!');
console.log('I will destroy you!');

console.log('1 == "1" =>', 1 == '1');
console.log('1 === "1" =>', 1 === '1');
console.log('3 == "3.0" =>', 3 == '3.0');
console.log('3.0 == "3" =>', 3.0 == 3);
console.log('3.0 == 3 =>', 3.0 == 3);
console.log('3 === "3.0" =>', 3 === '3.0');

console.log('0 == false =>', 0 == false);
console.log(' "" == false =>', '' == false);
console.log(' 0 === false =>', 0 === false);
console.log(' "" === false =>', '' === false);

console.log('null == null =>', null == null);
console.log('null == undefined =>', null == undefined);
console.log('undefined == undefined =>', undefined == undefined);
console.log('undefined == null =>', undefined == null);

if ('Morbo'){
    console.log("'Morbo' is truthy");    
}
if (42){
    console.log("42 is truthy");
}
if ([]){
    console.log("[] is truthy");
}

console.log('typeof "Morbo" =>', typeof "Morbo");
console.log('typeof Infinity =)', typeof Infinity);
console.log('typeof NaN =>', typeof NaN);

/*
if (typeof input !== 'string'){
    throw new Error();
}
*/