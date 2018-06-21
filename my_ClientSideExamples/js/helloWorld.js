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

//this var can be accesed anywhere in our program
var globalScope = "Hey im a globally scoped variable";

function createLocalScope(){
    console.log('isnde the createLocalScope function...');
    var localScope = "hay im a locally scoped variable";
    console.log(localScope);
    console.log(globalScope);
}

createLocalScope();
console.log("out of function");
console.log(globalScope);
//commented out because the rest of the program will not run otherwise
try{
    console.log(localScope);
}
catch{
    console.log("cannot touch localscope")
}

function pitfallsOfVar(){
    var myVar = "instantiated on line 52";
    console.log(myVar);
    var myVar = "instantiated on line 54";
    console.log(myVar);
}
pitfallsOfVar();

function howLetSolvesVarPitfalls(){
    let myVar = "instantiated on line 60"
    console.log(myVar);
    let myVar = "instantiated on line 62"
    console.log(myVar);
}
//howLetSolvesVarPitfalls();

const PI = 3.14;
//constole.log(PI++);

//functions as values
let annoHello = function(name){
    console.log(`Hello, ${name}! (Anonymous function)`);
}

annoHello("Dylan");

//decalred fucntion
function decalredHello(name){
    console.log(`Hello, ${name}! (Declared function)`);
}

let square =  x => x*x;
let multiply = (a,b) => a*b;
console.log(`square(9) = ${square(9)}`);
console.log(`multiply(3,5) = ${multiply(3,5)}`);
//arrow functions inherit the 'this' from its enclosing context
function declaredFucntionTest(){
    this.counter = 0;
    function incrementCounter(){
        console.log("inside the declared function");
        for(let i = 0; i < 10; i++){
            console.log(`declaredFunctionTest: iteration ${i}: ${this.counter++}`);
        }
    }
    incrementCounter();
}
let decTest = new declaredFucntionTest();


function arrowFunctionTest(){
    this.counter = 0;
    let incrementCounter = () =>{
        console.log("inside the arrow function");
        for(let i = 0; i<10;i++){
            console.log(`declaredFunctionTest: iteration ${i}: ${this.counter++}`);            
        }
    }
    incrementCounter();
}

let arrowTest = new arrowFunctionTest();



console.log("self invoking functions: syntax is to wrap a func aroudn a set of parthents," 
 + "and have a trailing set of parentheses for any parameter");


(function() {
    console.log(`I never explicitly invoked this function`);
})();

function myHoistedFunction(line){
    console.log(`this function was implimented on line 123-125 but was envoked on line ${line}`);
}


function getName(callback){
    let name = prompt(`what is your name?`);
    callback(name);
}

function sayHello(name){
    alert('Hello, ' + name);
}

//getName(sayHello);

function muliplier(factor) {
    return number => number*factor;
}

let triple = muliplier(3);
console.log(triple);
console.log(`triple(9) = ${triple(9)}`);












