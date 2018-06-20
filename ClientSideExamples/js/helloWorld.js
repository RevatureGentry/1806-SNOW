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

//Scope
var globalScope = "Ohai, I be a global scope variable.."; //This variable can be accessed anywhere in our program.

function createLocalScope() {
    console.log("Inside createLocalScope().");
    var localScope = "Oh, hey. I'm a local scope variable."; //This is accessible anywhere in the function.
    console.log(localScope);
    console.log(globalScope);
    if ('InLocalScope') {
        var blockScope = "Oh...I'm a block scope variable."; //This is only accessible in the block it was initialized. 
        console.log(blockScope);
    }
}

function pitfallsOfVar() { //Demonstrates why var is bad to rely on.
    var testVar = 'Instantiated on Line 51.';
    console.log(testVar);
    var testVar = 'Instantiated on Line 53.';
    console.log(testVar);
}

function whyLetRocks() { //Demonstrates error that occurs when using let variables.
    let testVar = 'Line 60.';
    console.log(testVar);
    //let testVar = 'Line 62.';
    //console.log(testVar);
}
console.log(globalScope);

//Function Invoking.
createLocalScope(); //Invoke creatLocalScope().
//pitfallsOfVar(); //Invoke pitfallsOfVar().
//whyLetRocks(); //Invoke whyLetRocks().

//Three ways Functions can be assigned in JavaScript:

//1. Functions as values
let anonHello = function(name) {
    /*
    Template Literal Example: allows you to write a string and directly inject expressions/variables into a string. 
        "Without the " + name + " additional work"
    */
    console.log(`Hello, ${name} (Anonymous)`); //${} is how you inject expressions into strings. `` is how you set it up.
}
console.log("anonHello:\n", anonHello);
anonHello("Burden");

//2. Declared Functions.
function declaredHello(name) {
    console.log(`Hello, ${name} (Declared)`);
}
console.log("declaredHello:\n", declaredHello);

//3. Arrow Functions inherit the 'this' from it's enclosing context.
let square = x => x * x; //Arrow Function 'square'
let multiply = (a, b, c) => a*b*c; //Arrow Function 'multiply'

//You call an arrow function like any other function.
console.log(`square(9) = ${square(9)}`);
console.log(`multiply(1,2,3) = ${multiply(1,2,3)}`);

//Arrow functions are nameless. 
console.log(square);
console.log(multiply);

//Arrow functions are important because they inherit the 'this' from its enclosing context.
function declaredFunctionTest() { //Will print out NaN because a declared function doesn't inherit 'this'.
    this.counter = 0;
    function incrementCounter() {
        console.log(`Inside the declared function`);
        for (let i = 0; i < 10; i++) {
            console.log(`declaredFunctionTest: Iteration ${i}: ${this.counter++}`);

        }
    }
    incrementCounter();
}
let decTest = new declaredFunctionTest();

function arrowFunctionTest() { //Will print out proper numbers because an arrow function will inherit the 'this' context.
    this.counter = 0;
    let incrementCounter = () => { //Arrow Function Declaration (multiple lines)
        console.log(`Inside arrowFunctionTest`);
        for (let i = 0; i < 10; i++) {
            console.log(`arrowFunctionTest: Iteration ${i}: ${this.counter++}`);

        }
    }
    incrementCounter();
    console.log(this.counter);
}
let arrTest = new arrowFunctionTest();


//Self-Invoking Functions
console.log("Self invoking function syntax is to wrap a function in a set of parenthesis,", 
"and have a trailing set of parenthesis for any parameter.");

(function() {
    console.log("I never explicitly invoked this function! :D");
})();

(function(b, a) {
    console.log(`Self-invoking addition: ${a} + ${b} = ${a+b}`);
})(10, 5);
//You can put a self-invoking function inside of another function. 


//Hoisted Function
myHoistedFunction(141);

function myHoistedFunction(line) {
    console.log(`This function was implemented on lines 143 and 145, but invoked on line ${line}.`)
}


//Callback Functions
function getName(callback) {
    let name = prompt('What is your name?');
    callback(name);
}
function printName(name) {
    alert(`Your name is ${name}! Hello, ${name}!`);
}
//getName(printName);
function multiplier(factor) {
    return number => number * factor; //Short, 1-line Arrow Function
}
function otherMultiplier(factor) {
    return number = (number) => {
        return number * factor; //Multi-line Arrow Function
    }
}

//triple = function 
let triple = multiplier(3); //Functional programming is at work here.
let longTriple = otherMultiplier(5); //Declares longTriple as a function variable. 
console.log(`triple(9)=${triple(9)}`);
console.log(`longTriple(3) = ${longTriple(3)}`);
