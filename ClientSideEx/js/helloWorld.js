/* Hello World */
console.log('Hello World');
console.log("1 == '1' =>", 1 == '1');
myHoistedFunction(4);
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

//this varibale can be accessed anywhere in our program
var globalScope = "Hey, I'm a globally scoped variable";

function createLocalScope(){
    console.log("inside the createLocalScope function....");
    var localScope = "Hey I'm a locally scoped variable";
    console.log(localScope);
    console.log(globalScope);
}

//createLocalScope();
console.log(globalScope);
//ommen the rest of the line out because the program will not run otherwise
//console.log(localScope);

function pitfallsOfVar(){
    var myVar = "Instantiated on line 46";
    console.log(myVar);
    var myVar = "Instantiated n line 48";
    console.log(myVar);
}

function howLetSolvesVarPitfalls(){
    let myVar = "Instantiated on line 53";
    console.log(myVar);
    let myVar = "instantiated on line 55";
    console.log(myVar);
}
//pitfallsOfVar();
//howLetSolvesVarPitfalls();
//const PI = 3.14;
//console.log(PI++)


//Functions as values
let anonHello = function(name){
    console.log(`Hello, ${name}! (Anonmyous function)`);
}

anonHello('Steven');

// Declared function 
function declaredHello(name){
    console.log(`Hello, ${name}! (Declared function)`);
}

declaredHello('Steven');

let square = x => x * x;
let multiply = (a, b) => a * b;
console.log(square(9));
console.log(`square(9) = ${square(9)}`)


//arrow functions inherit the 'this' from it's enclosing context
function declaredFunctionTest(){
    this.counter = 0;

    function incrimentCounter(){
        console.log('Inside the declared function');
        for(let i = 0; i < 10; i++){
            console.log(`declaredFunctionTest: Iteration ${i}: ${this.counter++}`);
        }
    }
    incrimentCounter();
}
let decTest = new declaredFunctionTest();

function arrowFunctionTest(){
    this.counter = 0;

    let incrimentCounter = () => {
        console.log('Inside arrow function test');
        for (let i = 0; i < 10; i++){
            console.log(`arrow function text: Iteration ${i}: ${this.counter++}`);
        }
    }
    incrimentCounter();
}
let arrowText = new arrowFunctionTest();

console.log('Self invoking functions syntax, is to wrap a finction in a set of parenthesies ' +
'and have a trailing set of parenthesises for any parameter')

/*(function(){
    console.log('I never explecitly invoked this function');
})();*/

/*(function(a, b){
    console.log(`${a} + ${b} = ${a + b}`);
})(10, 5);*/


function myHoistedFunction(line){
    console.log(`this function was implemented on lines 123-125 but invoked on line ${line}`);
}

function getName(callback){
    let name = prompt('What is your name?');
    callback(name);
}

function sayHello(name){
    alert(`Hello, ${name}!`);
}

//getName(sayHello);

function multiplier(factor){
    return number => number * factor;
}

let tripple = multiplier(3);
console.log(`tripple(9) = ${tripple(9)}`);