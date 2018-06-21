/* Hello World */
console.log('Hello World');
console.log("1 == '1' =>", 1 == '1');
myHoistedFunction(4);
<<<<<<< HEAD
console.log("1 === '1' =>", 1 === '1');
console.log("3 == '3.0' =>", 3 == '3.0');
console.log("3.0 == '3' =>", 3.0 == '3');
console.log("3.0 == 3 =>", 3.0 == 3);
console.log("3 === '3.0' =>", 3 === '3.0');
console.log("0 == false =>", 0 == false);
console.log("'' == false =>", '' == false);
console.log("0 === false =>", 0 === false);
console.log("'' === false =>", '' === false);
console.log("null == null =>", null == null);
console.log("null == undefined =>", null == undefined);
console.log("undefined == undefined =>", undefined == undefined);
console.log("undefined == null =>", undefined == null);
if('William'){
=======
console.log('1 === "1" => ', 1 === "1");
console.log('3 == "3.0" =>', 3 == "3.0");
console.log('3.0 == "3" =>', 3.0 == "3");
console.log('3.0 == 3 =>', 3.0 == 3);
console.log('3 === "3.0" =>', 3 === '3.0');
console.log('0 == false =>', 0 == false);
console.log('"" == false =>', "" == false);
console.log('0 === false =>', 0 === false);
console.log('"" === false =>', "" === false);
console.log('null == null =>', null == null);
console.log('null == undefined =>', null == undefined);
console.log('undefined == undefined =>', undefined == undefined);
console.log('undefined == null => ', undefined == null);
if ('William') {
>>>>>>> 2ae0fda061ce3c6b68cdaeef54a0001f07e660ea
    console.log("'William' is truthy");
}
if(42){
    console.log("42 is truthy");
}
if([]){
    console.log("[] is truthy");
}
console.log('typeof "William" =>', typeof "William");
console.log('typeof Infinity =>', typeof Infinity);
console.log('typeof NaN =>', typeof NaN);


<<<<<<< HEAD
//This variable can be accessed anywhere in our program
var globalScope = "Hey! I'm a globally scoped variable";
function createLocalScope(){
=======
// This variable can be accessed anywhere in our program
var globalScope = "Hey! I'm a globally scoped variable";
function createLocalScope() {
>>>>>>> 2ae0fda061ce3c6b68cdaeef54a0001f07e660ea
    console.log('inside the createLocalScope() function...');
    var localScope = "Hey! I'm a locally scoped variable";
    console.log(localScope);
    console.log(globalScope);
}

// createLocalScope();
console.log(globalScope);
// Commented the following line out, because the rest of the program will not run otherwise
<<<<<<< HEAD
//console.log(localScope);

function pitfallsOfVar(){
=======
// console.log(localScope);

function pitfallsOfVar() {
>>>>>>> 2ae0fda061ce3c6b68cdaeef54a0001f07e660ea
    var myVar = "Instantiated on line 46";
    console.log(myVar);
    var myVar = "Instantiated on line 48";
    console.log(myVar);
}

<<<<<<< HEAD
function howLetSolvesVarPitfalls(){
    let myVar ="Instantiated on line 53";
=======
function howLetSolvesVarPitfalls() {
    let myVar = "Instantiated on line 53";
>>>>>>> 2ae0fda061ce3c6b68cdaeef54a0001f07e660ea
    console.log(myVar);
    let myVar = "Instantiated on line 55";
    console.log(myVar);
}
<<<<<<< HEAD
//pitfallsOfVar();
//howLetSolvesVarPitfalls();
//const PI = 3.14;
//console.log(PI++);

//functions as values
let anonHello = function(name){
    console.log(`Hello, ${name}! (Anonymous function)`);
}

//anonHello('Michael');
console.log(anonHello);

//Declared function
function declaredHello(name){
=======
// pitfallsOfVar();
// howLetSolvesVarPitfalls();
// const PI = 3.14;
// console.log(PI++);

// Functions as Values
let anonHello = function(name) {
    console.log(`Hello, ${name}! (Anonymous function)`);
}

// anonHello('William');
console.log(anonHello);

// Declared Function
function declaredHello(name) {
>>>>>>> 2ae0fda061ce3c6b68cdaeef54a0001f07e660ea
    console.log(`Hello, ${name}! (Declared function)`);
}

console.log(declaredHello);

let square = x => x * x;
<<<<<<< HEAD
let multiply = (a,b) => a * b;
console.log(`square(9) = ${square(9)}`);
console.log(`multiply(3,5) = ${multiply(3,5)}`);
console.log(square);
console.log(multiply);
//Arrow functions inherit the 'this' from its enclosing context
function declaredFunctionTest(){
    this.counter = 0;

    function incrementCounter(){
        console.log('Inside the declared function');
        for(let i =0; i < 10; i++){
            console.log(`declaredFucntionTest: Iteration ${i}: ${this.counter++}`);
=======
let multiply = (a, b) => a * b;
console.log(`square(9) = ${square(9)}`);
console.log(`multiply(3, 5) = ${multiply(3, 5)}`);
console.log(square);
console.log(multiply);
// Arrow functions inherit the 'this' from it's enclosing context
function declaredFunctionTest() {
    this.counter = 0;

    function incrementCounter() {
        console.log('Inside the declared function');
        for (let i = 0; i < 10; i++) {
            console.log(`declaredFunctionTest: Iteration ${i}: ${this.counter++}`);
>>>>>>> 2ae0fda061ce3c6b68cdaeef54a0001f07e660ea
        }
    }
    incrementCounter();
}
<<<<<<< HEAD
let decTest = new declaredFunctionTest();

function arrowFunctionTest(){
=======
// let decTest = new declaredFunctionTest();

function arrowFunctionTest() {
>>>>>>> 2ae0fda061ce3c6b68cdaeef54a0001f07e660ea
    this.counter = 0;

    let incrementCounter = () => {
        console.log('Inside arrowFunctionTest');
<<<<<<< HEAD
        for(let i = 0; i < 10; i++){
=======
        for (let i = 0; i < 10; i++) {
>>>>>>> 2ae0fda061ce3c6b68cdaeef54a0001f07e660ea
            console.log(`arrowFunctionTest: Iteration ${i}: ${this.counter++}`);
        }
    }
    incrementCounter();
}
<<<<<<< HEAD
let arrowTest = new arrowFunctionTest();

console.log("Self invoking function syntax is to wrap a function in a set of "
+"parentheses and have a trailing set of parenthesis for any parameter");
=======
// let arrowTest = new arrowFunctionTest();

console.log("Self invoking function syntax is to wrap a function in a set of "
 +"parentheses and have a trailing set of parentheses for any parameter");
>>>>>>> 2ae0fda061ce3c6b68cdaeef54a0001f07e660ea

(function() {
    console.log('I never explicitly invoked this function');
})();

<<<<<<< HEAD
(function(a,b) {
    console.log(`${a} + ${b} = ${a+b}`);
})(10,5);

function iifeTest(){
    (function(){
        console.log('returned IIFE');
    })();
}
//iifeTest();

function myHoistedFunction(line){
    console.log(`This function was implemented on lines 129-131 but invoked on like ${line}`);
}

function getName(callback){
=======
(function(a, b) {
    console.log(`${a} + ${b} = ${a + b}`);
})(10, 5);

function iifeTest() {
    (function() {
        console.log('returned IIFE');
    })();
}
// iifeTest();

function myHoistedFunction(line) {
    console.log(`This function was implemented on lines 129-131 but invoked on line ${line}`);
}

function getName(callback) {
>>>>>>> 2ae0fda061ce3c6b68cdaeef54a0001f07e660ea
    let name = prompt('What is your name?');
    callback(name);
}

<<<<<<< HEAD
function sayHello(name){
    alert(`Hello, ${name}!`);
}

//getName(sayHello);

function multiplier(factor) {
    return number => number * factor;
}

/*function otherMultiplier(factor){
    function(number){
        return number * function;
    }
    
}*/

let triple = multiplier(3);
//let otherTriple = otherMultiplier(4);
console.log(`triple(9) = ${triple(9)}`);
=======
function sayHello(name) {
    alert(`Hello, ${name}!`);
}

// getName(sayHello);

function multiplier(factor) {
    return (number, anotherNumber) => {
        console.log('Add curly braces to an arrow function if its multiple lines');
        return number * anotherNumber * factor;
    }
}



let triple = multiplier(3);
let otherTriple = otherMultiplier(4);
console.log(`triple(9) = ${triple(9, 9)}`);
console.log(`otherTriple(9) = ${otherTriple(9)}`);
>>>>>>> 2ae0fda061ce3c6b68cdaeef54a0001f07e660ea
