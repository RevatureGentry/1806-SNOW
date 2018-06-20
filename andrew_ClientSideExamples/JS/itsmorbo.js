/* Hello World */
console.log('Puny Earthlings!');
console.log('I will destroy you!');
myHoistedFunction(4);
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

// This variable can be accessed anywhere in our program
var globalScope = "Hey! I'm a globally scoped variable";
function createLocalScope(){
    console.log('inside the createLocalScope() function...');
    var localScope = "Hey! I'm a locally scoped variable";
    console.log(localScope);
    console.log(globalScope);
}

createLocalScope();
console.log(globalScope);

/*
    This won't run because it is a local variable
    The rest of the program will not run otherwise.
    console.log(localScope);
*/

function pitfallsOfVar(){
    var myVar = "Instantiated on line 61";
    console.log(myVar);
    var myVar = "Instantiated on line 63";
    console.log(myVar);
}

function howLetSovlesVarPitfalls(){
    let myVar = "Instantiated on line 68";
    console.log(myVar);
    let myVar = "Instantiated on line 70";
    console.log(myVar);
}

//pitfallsOfVar();
//howLetSovlesVarPitfalls();

//const PI = 3.14;
//console.log(PI++);

// Functions as values
let anonHello = function(name) {
    console.log(`Hello, ${name}! (Anonymous function)`);
}

anonHello('Morbo');

// Declared Function
function declaredHello(name) {
    console.log(`Hello, ${name}! (Declared function`);
}

console.log(declaredHello);

let square = x => x * x;
let multiply = (a, b) => a*b;
console.log(square(9));
console.log(`square(9) = ${square(9)}`);
console.log(`mutliply(3, 5) = ${multiply(3, 5)}`);


// Arrow functions inherit the 'this' from it's enclosing context
function declaredFuntionTest() {
    this.counter = 0; 

    function incrementCounter(){
        console.log('Inside the declared function');
        for(let i = 0; i < 10; i++) {
            console.log(`declaredFunctionTest: Iteration ${i}: ${this.counter++}`);
        }
    }
    incrementCounter();
}

let decTest = new declaredFuntionTest();  

function arrowFunctionTest() {
    this.counter = 0;

    let incrementCounter = () => {
        console.log('Inside arrowFunctionTest');
        for (let i = 0; i < 10; i++){
            console.log(`arrowFunctionTest: Iteration ${i}: ${this.counter++}`);
        }
    }
    incrementCounter();
}
let arrowTest = new arrowFunctionTest();

// Self invoking Function
console.log("Self invoking function syntax is to wrap a function in a set of parentheses and have a trailing set of parentheses for any parameter");
(function() {
    console.log("I never explicitly invoked this function");
}) ();

(function(a, b){
    console.log(`${a} + ${b} = ${a + b}`);
}) (10, 5);

function myHoistedFunction(line) {
    console.log(`This function was implemented on lines 139-141, but invoked on line ${line}`);
} 

// Callbacks
function getname(callback) {
    let name = prompt('What is your name?');
    callback(name);
}

function sayHello(name) {
    alert(`Hello, ${name}!`);
}
//getname(sayHello);

function multiplier(factor) {
    return number => number * factor;
}

let triple = multiplier(3);
console.log(`triple(9) = ${triple(9)}`);
console.log(`triple(9, 13) = ${triple(9, 13)}`);

/*
// Using this
function Hero(name, level) {
    this.name = name;
    this.level = level;
}

let myHero = new Hero('Morbo', 100); 
console.log(name);
console.log(level);
*/