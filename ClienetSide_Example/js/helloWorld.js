/* Hello World*/
console.log('Hello World');
console.log("1 == '1' =>",  1 == '1');
myHoistedFunction(4);
console.log("1 === '1' =>",  1 === '1');
console.log("3 == '3.0' =>",  3 == '3.0');
console.log("3.0 == '3' =>",  3.0 == '3');
console.log("3.0 === '3' =>",  3.0 === '3');
console.log("0 == false => " ,0 == false);
console.log(' "" == false =>', "" == false);
console.log("0 === false => " ,0 === false);
console.log(' "" === false =>', "" === false);
console.log("null == null => ", null == null);
console.log("null == undefined =>", null == undefined);
console.log("undefined == undefined => ", undefined == undefined);
console.log("undefined == null => ", undefined == null);
if ('johnson'){
    console.log("johnson is truthy");
}
if (42){
    console.log("42 is truthy");
}
if ([]){
    console.log("[] is truthy");
}
console.log("typeof 'johnosn' =>", typeof "johnson");
console.log("typeof Infinity => ", typeof Infinity);
console.log("typeof NaN =>", typeof NaN);

//This variable can be accessed anywhere in our program
var globalScope = "Hey I'm a globally scoped variable";

function createLocalScope(){
    console.log("Inside the createLocalScope() function....");
    var localScope = "Hey I'm a locally scope variable";
    console.log(localScope);
    console.log(globalScope);
}
//createLocalScope();
console.log(globalScope);
//Line is comment out, otherwise the rest of the program will not run.
//console.log(localScope);

function pitfallOfVar(){
    var myvar = "Instantiated on line 44";
    console.log(myvar);
    var myvar = "Instantiated on line 48";
    console.log(myvar);
}

function howLetSolvesVarPitfall(){
    let myvar = "Instantiated on line 51";
    console.log(myvar);
    let myvar = "Instantiated on line 53";
    console.log(myvar);
}

//pitfallOfVar();
//howLetSolvesVarPitfall();

//console.log(Math.PI);
//const PI = 3.14;
//console.log(PI++);

let anoneHello = function(name){
    console.log(`Hello, ${name}! (Anonymous Function)`);
}

//anoneHello("Johnson");
console.log(anoneHello);

//Declared Function
function declaredHello(name){
    console.log(`Hello, ${name}! (Declared Function)`);
}

console.log(declaredHello);

let square = x => x*x;
console.log(`square(9) = ${square(9)}`);

let muliply = (a,b) => a*b;
console.log(`multiply(3,5) = ${muliply(3,5)}`);
//Arrow functions inherit the 'this' from it's enclosing context

function declaredFunctionTest(){
    this.counter = 0;

    function incrementCounter(){
        console.log("Inside the declared function");
        for (let i = 0; i <10; i++){
            console.log(`declaredFunctionTest: Interation ${i}: ${this.counter++}`);
        }
    }
    incrementCounter();
}

let decTest = new declaredFunctionTest();

function arrowFunctionTest(){
    this.counter = 0;

    let incrementCounter = () => {
        console.log("Inside arrowFunction test");
        for (let i = 0; i < 10; i++){
            console.log(`arrowFunctionTest : Interation ${i}: ${this.counter}`);
        }
    }
    incrementCounter();
}

let arrowTest = new arrowFunctionTest();

console.log("Self Invoking funtion syntax is to wrap in a set of parentheses, and have a trailing set of parentheses for any parameter");

(function (){
    console.log(`I never explicity invoked this function`);
})();
(function(a,b){
    console.log(`${a} + ${b} = ${a+b}`);
})(10,5);

function myHoistedFunction(line){
    console.log(`This function was impletemented on line 122-124, but invoked on line ${line}`);
}

function getName(callback){
    let name = prompt('What is your name? ');
    callback(name);
}

function sayHello(name){
    alert(`Hello, ${name}`);
}

//getName(sayHello);

function multipler(factor){
    return number => number * factor;
}

let triple = multipler(3);
console.log(`triple(9) = ${triple(9)}`);