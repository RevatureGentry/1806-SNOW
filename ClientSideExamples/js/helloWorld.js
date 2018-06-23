/* Hello World */
console.log('Hello World');
console.log("1 == '1'=>", 1 == '1');
myHoistedFunction(4);
console.log("1 === '1'=>", 1 === '1');
console.log("3 == '3.0'=>", 3 == '3.0');
console.log('3.0 == "3"=>', 3.0 == "3");
console.log("3.0 == 3=>", 3.0 == '3');
console.log("3 === '3.0'=>", 3 === '3.0');
console.log('0 == false =>', 0 == false);
console.log('"" == false =>', "" == false);
console.log('0 === false =>', 0 === false);
console.log('"" === false =>', "" === false);
console.log('null == null =>', null == null);
console.log('null == undefined =>', null == undefined);
console.log('undefined == undefined =>', undefined == undefined);
console.log('null === undefined =>', null === undefined);
console.log('null === null =>', null === null);
console.log('null == false =>', null == false);
if ('William') {
    console.log('"William" is truthy')
}
console.log('typeof "William" =>', typeof "William")
console.log('typeof infinity =>', typeof Infinity)
console.log('typeof NaN =>', typeof NaN)

// This variable can be accessed anywhere in our program
var globalScope = "I have global scope fear me";
function createLocalScope() {
    console.log("Inside the createLocalScope() function...");
    var localScope = "I have local scope"
    console.log(localScope);
    console.log(globalScope);
}

createLocalScope();
console.log(globalScope);
// Commented following line so program can run
// console.log(localScope);

function pitfallsOfVar(){
    var myVar = "Instantiated on line 41";
    console.log(myVar);
    var myVar = "Instantiated on line 43";
    console.log(myVar);
}

function howLetSolvesVarPitfalls(){
    let myVar = "Instantiated on line 48";
    console.log(myVar);
    //let myVar = "Instantiated on line 50";
    console.log(myVar);
}

//pitfallsOfVar();
howLetSolvesVarPitfalls();
const PI = 3.14;
//console.log(PI++);

let anonHello = function(name) {
    console.log(`Hello, ${name}! (Anonymous function)`);
}

// anonHello('Quinlan');
console.log(anonHello);

function declaredHello(name) {
    console.log(`Hello, ${name}! (Declared function)`);
}

console.log(declaredHello);

let square = x => x * x;
let multiply = (a, b) => a * b;
console.log(`square(9) = ${square(9)}`);
console.log(`multiply(3, 5) = ${multiply(3, 5)}`);
console.log(square);
console.log(multiply);

//Arrow functions inherit the 'this' from its enclosing context
function declaredFunctionTest() {
    this.counter = 0;

    function incrementCounter() {
        console.log('Inside the declared function');
        for (let i = 0; i < 10; i++) {
            console.log(`declaredFunctionTest: Iteration ${i}: ${this.counter++}`);
        }
    }
    incrementCounter();
}
//let decTest = new declaredFunctionTest();

function arrowFunctionTest() {
    this.counter = 0;

    let incrementCounter = () => {
        console.log('Inside arrowFunctionTest');
        for (let i = 0; i < 10; i++) {
            console.log(`arrowFunctionTest: Iteration ${i}: ${this.counter++}`);
        }
    }
    incrementCounter();
}
//let arrowTest = new arrowFunctionTest();

console.log("Self invoking function syntax is to wrap a function in a set of" +
" parenthesis and have a trailing set of parenthesis for any parameter");

(function() {
    console.log("I never explicitly invoked this function");
})();

(function(a,b) {
    console.log(`${a} + ${b} = ${a+b}`);
})(10, 5);

function myHoistedFunction(line) {
    console.log(`This function was implemented on lines 117 to 119 but invoked on line ${line}`);
}

function getName(callback) {
    let name = prompt(`What is your name?`);
    callback(name);
}

function sayHello(name) {
    alert(`Hello, ${name}!`);
}

function sayGoodbye(name) {
    alert(`Goodbye, ${name}!`);
}

//getName(sayGoodbye);

function multiplier(factor) {
    return number => number * factor;
}

let triple = multiplier(3);
console.log(`triple(9) = ${triple(9)}`)
