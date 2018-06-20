/* Hello World */
/*console.log('Hello World');
console.log("1 == '1' =>", 1 == '1');
console.log('1 === "1" => ', 1 === "1");
myHoistedFunction(5);
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
    console.log("'William' is truthy");
}
if (42) {
    console.log("42 is truthy");
}
if ([]) {
    console.log('[] is truthy');
}
console.log('typeof "William" =>', typeof "William");
console.log('typeof Infinity =>', typeof Infinity);
console.log('typeof NaN =>', typeof NaN);
*/
//this variable can be accessed anywhere in our program
var globalScope = "Hey! I'm a globally scoped variable";
function createLocalScope(){
    console.log('inside the createLocalScope() function...');
    var localScope = "Hey I'm a locally scoped variable";
    console.log(localScope);
    console.log(globalScope);
}

createLocalScope();
console.log(globalScope);
//localScope isn't defined outside of the function, so it will not run.
//console.log(localScope);

function pitfallsOfVar(){
    var myVar = "Instantiated on line 45";
    console.log(myVar);
    var myVar = "Instantiated on line 47";
    console.log(myVar);
}

function howLetSolvesVarPitfalls(){
    let myVar = "Instantiated on line 52";
    console.log(myVar);
    //let myVar = "Instantiated on line 54";
    console.log(myVar);
}
//pitfallsOfVar();
//howLetSolvesVarPitfalls();

//functions as values
let anonHello = function(name){
    //backticks allow function injection
    //anonymous because function doesn't have a name
    console.log(`hello, ${name}! (Anonymous function)`);
}
//function has a name (Declared function) 
function declaredHello(name){
    console.log(`hello, ${name}! (Declared function)`);
}
anonHello('Kevin');

console.log(declaredHello);
//these are anonymous functions
let square = x => x * x;
let multiply = (a, b) => a * b;
console.log(`square(9) = ${square(9)}`);
console.log(`multiply(3, 5) = ${multiply(3, 5)}`)
//Arrow functions inherit the 'this' from its enclosing context

function declaredFunctionTest(){
    this.counter = 0;
    function incrementCounter(){
        console.log('inside the declared function');
        for(let i=0; i<10; i++){
            console.log(this.counter++);
        }
    }
    incrementCounter();
}

//let decTest = new declaredFunctionTest();
function arrowFunctionTest() {
    this.counter = 0;
    let incrementCounter = () =>{
        console.log('inside the declared function');
        for(let i=0; i<10; i++){
            console.log(`declared function: Iteration ${i}: ${this.counter++}`);
        }
    }
    incrementCounter();
}
//let arrowTest = new arrowFunctionTest();
console.log("Self invoking function syntax is to wrap a function in a set of parantheses and have a trailing set of parantheses for any parameter");

(function(){
    console.log("I never explicitly invoked this function");
})();

(function(a, b){
    console.log(`${a} + ${b} = ${a + b}`);
})(10,5);

function iifeTest(){
    (function(){
        console.log("returned IIFE");
    })();
}

function myHoistedFunction(line){
    console.log(`this function was implemented on lines 119 and 121 but invoked on line ${line}`);
}

function getName(callback){
    let name = prompt('what is your name?');
    callback(name);
}

function sayHello(name){
    alert('Hello, ' + name);
}

getName(sayHello);

function multiplier(factor){
    return number => number * factor;
}

let triple = multiplier(3);
// 9 gets turned into the parameter for the inside function
//console.log(`triple(9) = ${triple(9)}`);
//console.log(`triple(9, 13) = ${triple(9, 13)}`);