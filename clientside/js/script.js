console.log("Hello World");
console.log("'1' == 1 --> ", '1' == 1);
console.log("'1' === 1 --> ", '1' === 1);
console.log("3 == '3.0' -->", 3 == 3.0);
console.log("3 === '3.0' -->", 3 === '3.0');
console.log('0 == false -->', 0 == false);
console.log("'' == false --> ", '' == false);
console.log('null == null --> ', null == null);
console.log('null == undefined --> ', null == undefined);
console.log('undefined == undefined -->', undefined == undefined);
console.log('NaN == NaN -->', NaN == NaN);
console.log('typeof("Zach") --> ', typeof("Zach"));
console.log('typeof(Infinity) --> ', typeof(Infinity));
console.log('typeof(NaN) -->', typeof(NaN));

//This variable can be accessed anywhere in our program.
var globalScope = "Hey! I'm a global scoped variable."

function createLocalScope() {
    console.log("Inside createLocalScope function.");
    var localScope = "Hey! I'm a locally scoped variable.";
    console.log(localScope);
    console.log(globalScope);
}

//createLocalScope();

console.log(globalScope);
//console.log(localScope); //Not accessible due to it being a local variable.

function pitFallsOfVar() {
    var myVar = "Instantiated on line 32";
    console.log(myVar);
    var myVar = "Instantiated on line 34";
    console.log(myVar);

}

pitFallsOfVar();

function howLetSolvesVarPitfalls() {
    let myVar = "Instantiated on line 42";
    console.log(myVar);
    //let myVar = "Instantiated on line 44";
    //console.log(myVar);
}

//howLetSolvesVarPitfalls();
//console.log(Math.PI);
const PI = 3.14
//console.log(PI++);

//Anonymous Functions
let anonHello = function(name) {
    console.log(`Hello ${name}! (Anonymous Function)`);
}

//anonHello("Zach");
console.log(anonHello);


//Declared Functions
function declaredHello(name) {
    console.log(`Hello ${name}! (Declared Function)`);
}

console.log(declaredHello);

let square = x => x * x;
console.log(`square(9) = ${square(9)} `);

let multiply = (x, y) => x * y;
console.log(`multiple(4,5) = ${multiply(4,5)}`)

//Arrow Functions inherit the 'this' from it's enclosing context.

function declaredFunctionTest() {
    this.counter = 0;


    function incrementCounter() {
        console.log("Inside the delcared function");
        for (let i = 0; i < 10; i++) {
            console.log(`declaredFunctionTest: Iteration ${i}: ${this.counter++}`);
        }
    }

    incrementCounter();
}

let decTest = new declaredFunctionTest();

function arrowFunctionTest() {
    this.counter = 0;

    let incrementCounter = () => {
        console.log("Inside arrow function test");
        for (let i = 0; i< 10; i++) {
            console.log(`declaredFunctionTest: Iteration ${i}: ${this.counter++}`);
        }
    }
    incrementCounter();
}

let arrowTest = new arrowFunctionTest();


function Hero(name, level) {
    this.name = name;
    this.level = level;
}

let myHero = new Hero('Zach', 100);
console.log(myHero.name);
console.log(myHero.level);


console.log("Self invoking funciton syntax is wrap a function in a set of parentheses, and have a trailing set of parentheses for any parameters.");

(function() {
    console.log("I never explicitly invoked this function.");
})();

(function(a,b) {
    console.log(`${a} + ${b} = ${a + b}`);
})(10,5);


myHoistedFunction(129);

function myHoistedFunction(line) {
    console.log(`This function was implemented on lines 131-133 but invoked on line ${line}`);
}


function getName(callback) {
    let name = prompt('What is your name?');
    callback(name);
}

function sayHello(name) {
    alert('Hello, ' + name);
}

//getName(sayHello);

function multiplier(factor) {
    return number => number * factor;
}

let triple = multiplier(3);
//Printing out triple now prints out a function. This is because the multiplier function returns an arrow function.

//Since triple is now a function, we can pass 9 into it. This is making it so that we are now multiplying 9 by 3.
//Similarly, if we made a quadruple variable (function) with 4 instead of 3, the total would be 9 x 4, which is 36.
console.log(`triple(9) = ${triple(9)}`);

var reverseString = 'String';
var array_holder = [];
//console.log('String'[2]);
let i = 0;
console.log("Before");
while (reverseString[i]) {
	console.log("In whileee");
	try {
  	console.log("In while");
		array_holder.unshift(reverseString[i]);
    i++;
    console.log("Added reverseString[i]")
  }
  catch (ex) {
  	break;
  }
}
console.log("After");
console.log(array_holder.join(''));