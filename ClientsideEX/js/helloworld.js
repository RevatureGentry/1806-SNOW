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

var globalScope = "Hey! I'm a globally scoped variable!";

function createLocalScope(){
	console.log("Inside  the createLocalScope() function...");
	var localScope = "Hey! I'm a LOCALLY scoped variable";
	console.log(localScope);
	console.log(globalScope);
}

createLocalScope();
console.log("Outside the createLocalScope function...");
//console.log(localScope); Commented out because the rest of the program won't run otherwise.
console.log(globalScope);

function pitfallsOfVar(){
	var myVar = "Instantiated on line 50";
	console.log(myVar);
	var myVar = "Instatiated on line 52";
	console.log(myVar);
}

pitfallsOfVar();

function howLetSolvesVarPitfalls(){
	let myVar = "Instantiated on line 59";
	console.log(myVar);
	//let myVar = "Instatiated on line 61"; commented out because rest of program won't run otherwise.
	console.log(myVar);
}

howLetSolvesVarPitfalls();