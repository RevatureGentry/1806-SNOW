// used in conjunction with 6_20_2018/helloWorld.html

var globalScope  = "Hi I'm global";

myHoistedFunction(5);
function createLocalScope(){
    console.log('Inside the createLocalScope() function...');
    var localScope = "Hi I'm local";
    console.log(localScope);
    console.log(globalScope);
}

function pitFallsOfVar() {
    var temp_var = "Instantiated on line 17";
    console.log(temp_var);
    var temp_var = "Instantiated on line 19";
    console.log(temp_var); // THIS IS WHY WE GOTTA USE LET MY GUY
    // SHE'S A SYNTAX ERROR WAITING TO HAPPEN

}

console.log(globalScope);
// console.log(localScope);

createLocalScope();
pitFallsOfVar();

// Functions as Values
let anonHello = function(name){
    console.log(`Hello, ${name}! (Anon Function)`);
}

anonHello('daddy');
///console.log(anonHello);

// Declared Function
function declaredHello(name){
    console.log(`Hello ${name}! (Declared Function)`);
}

console.log(declaredHello);

// Arrow Functions inherit the 'this' from it's enclosing context
let square = x => x * x;
let multiply = (a, b) => a * b;

console.log(square(40));

console.log(`square(9) = ${square(9)}`);

function declaredFunctionTest(){
    this.counter = 0;
    function incrementCounter(){
        console.log('We inside dis declared increment function');
        for(let i = 0; i < 10; i++)
            console.log(this.counter++);
    }
    incrementCounter();
}

let decTest = new declaredFunctionTest();

function arrowFunctionTest(){
    this.counter = 0;
    let incrementCounter = () => {
        console.log('Inside arrowFunctionTest');
        for(let i = 0; i < 10; i++){
            console.log(`arrowFunctionTest: Iteration ${i}: ${this.counter++}`);
        }
    }
    incrementCounter();
}

let arrowTest = new arrowFunctionTest();

/*
    Self invoking function syntax is to wrap a function in a set of parenthese and have a trailing set of
    parenthese for any parameter
*/

(function(){
    console.log('I never explicitly invoked this function');
}
)();

(function(a,b){
    console.log(`${a} + ${b} = ${a + b}`);
})(10,5);

function iifeTest(){
    (function(){
        console.log('returned IIFE');
    })
} // iifeTest();

function myHoistedFunction(line){
    console.log(`This function was implemented on lines 96-98 but invoked on line ${line}`);
}

/*
function getName(callback){
    let name = prompt('What is your name?');
    callback(name);
}

function sayHello(name){
    alert('Hello, ' + name);
};


getName(sayHello);
*/
function multiplier(factor){
    return number => number * factor;
}

let triple = multiplier(3);
console.log(`triple(9) = ${triple(9)}`);