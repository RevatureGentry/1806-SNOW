/*Hello world*/
console.log('Hello world');
console.log("1 == '1' => ", 1 == '1');
console.log("1 === '1' => ", 1 === '1');
console.log("3 == '3.0' => ", 3 == '3.0');
console.log("3.0 == '3' => ", 3.0 == '3');
console.log("3.0 == 3 => ", 3.0 == 3);
console.log("3 === '3.0' => ", 3 === '3.0');
console.log("0 == false => ", 0 == false);
console.log("'' == false => ", '' == false);
console.log("0 === false => ", 0 === false);
console.log("null == null => ", null == null);
console.log("null == undefined => ", null == undefined);
console.log("undefined == undefined => ", undefined == undefined);
console.log("null == false => ", null == false);
if('William'){
	console.log("William is truthy");
}
if(42){
	console.log("42 is truthy");
}
if([]){
	console.log("[] is truthy");
}
console.log("typeof 'William' => ", typeof 'William');
console.log("typeof Infinity => ", typeof Infinity);
console.log("typeof NaN => ", typeof NaN);

/*
if(typeof input != 'string'){
	throw new Error
}
*/
