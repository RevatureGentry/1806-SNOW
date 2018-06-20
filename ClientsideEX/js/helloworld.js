/*Hello world*/
console.log('Hello world');
console.log("1 == '1' => ", 1 == '1');
myHoistedFunction(4);
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

//const PI = 3.14;
//console.log(PI++); breaks the code because you can't just change a constant

//function as Value
let anonHello = function(name){
	console.log(`Hello, ${name}! (Annonymous function)`);
}

anonHello('Myranda');
console.log(anonHello);

//Declared function
function declaredHello(name){
	console.log(`Hello, ${name}! (Declared function)`);
}

declaredHello("Myranda");
console.log(declaredHello);

//Arrow function
let square = x => x * x;
let multiply = (a,b) => a*b;
console.log(`The square of 9 is ${square(9)}`);
console.log(`multiply(3, 5) = ${multiply(3,5)}`);

//Arrow functions inherit the 'this' from their closing context
function declaredFunctionTest(){
	this.counter = 0;
	
	function incrementCounter(){
		console.log("Inside the declared function");
		for(let i=0; i<10; i++){
			console.log(`declaredFunctionTest: Iteration ${i}: ${this.counter++}`);
		}
	}
	incrementCounter();
}

let decTest = new declaredFunctionTest();

function arrowFunctionTest(){
	this.counter = 0;
	
	let incrementCounter = () => {
		console.log("Inside the arrow function");
		for(let i=0; i<10; i++){
			console.log(`arrowFunctionTest: Iteration ${i}: ${this.counter++}`);
		}
	}
	incrementCounter();
}

let arrTest = new arrowFunctionTest();

console.log("Self invoking function syntax is to wrap a function in a set of parentheses and have a trailing set of parentheses for any parameter");

(function(){
	console.log("I never explicitly invoked this function");
})();

(function(a,b){
	console.log(`${a} + ${b} = ${a+b}`);
})(3, 5);

console.log("See line 4");
function myHoistedFunction(line){
	console.log(`This function was implemented on lines 132-134 but invoked on line ${line}`);
}

function getName(callback){
	let name = prompt("What is your name?");
	callback(name);
}

function sayHello(name){
	alert('Hello, ' + name);
}

//getName(sayHello);

function multiplier(factor){
	return (number) => number * factor;
}

let triple = multiplier(3);

console.log(`triple(9) = ${triple(9)}`);