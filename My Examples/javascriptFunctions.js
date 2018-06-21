console.log('Functions are different in JavaScript compared to any other language. What makes them special is\n\t1. Functions are objects\n\t2. They can be anonymous\n\t3. They can be self invoked\n\t4. They can be used as callbacks\n\t5. They can be hoisted');
let functionsAreObjects = new Function();
myHoistedFunction(3);
console.log('1. Functions are objects. Well, they inherit from Object. Therefore through inheritance, we have that functions are of type:', typeof Object.getPrototypeOf(functionsAreObjects.prototype));
console.log("2. Let's start with the basics first. Functions can be defined in one of three ways\n\t1. Functions as as values (anonymous)\n\t2. Declaration Notation\n\t3. Arrow Functions");
console.log('In JavaScript, we can define a function and assign it to a variable. (Anonymous)');
let anonHello = function(name) {
    console.log(`Hello, ${name}!`);
}

anonHello("William");
anonHello('Anonymous Function');
console.log(anonHello)

console.log("Functions are always accompanied with the 'function' keyword. This might look a little more familiar (Declared)");
function declaredHello(name) {
    console.log(`Hello, ${name}!`);
}
declaredHello('William');
declaredHello("Declared Function");
console.log(declaredHello);

console.log("Arrow functions provide shorter syntax than the Function Declaration. Introduced in ES6, arrow functions are helpful because they inherit the 'this' value of it's enclosing context");
let square = x => x * x;
console.log('square(2) = ', square(2));
console.log(square);

console.log("The fact that arrow functions inherit the 'this' value from its enclosing context is useful. Until ES6, every function declaration defined their own 'this' value");

function declaredFunctionTest() {
    this.counter = 0;

    function incrementCounter() {
        console.log('Inside the declared function');
        for (let i = 0; i < 10; i++) {
            console.log(`declaredFunctionTest: ${this.counter++}`);
        }
    }
    incrementCounter();
}

let testOne = new declaredFunctionTest();

function arrowFunctionTest() {
    this.counter = 0;

    let incrementCounter = () => {
        console.log('Inside the arrow function');
        for (let i = 0; i < 10; i++) {
            console.log(`arrowFunctionTest: ${this.counter++}`);
        }
    }
    incrementCounter();
}

let testTwo = new arrowFunctionTest();

console.log("3. Functions can be self invoked. They are also known as IIFE's, or Immediately Invoked Function Expressions. The syntax is to wrap a function in a set of parentheses, and have a trailing pair of parentheses for any parameters");

(function(a, b) {
    console.log("I never called this function! But it was invoked!?!");
    console.log(`${a} + ${b} = ${a + b}`);
})(10, 20);

(function(){
    console.log('This self-invoking function has no parameters');
})();

console.log("4. A callback is a function that is passed to another function as a parameter, and the callback function is executed inside the other function\nThis can happen because functions are objects in JavaScript");
function multiplier(factor) {
    return number => number * factor;
}

let twice = multiplier(2);
console.log(`\ttwice(5) = ${twice(5)}`);
let triple = multiplier(3);
console.log(`\ttriple(9) = ${triple(9)}`);

console.log('5. When a function is hoisted, it is called in a script before it\'s implementation');
function myHoistedFunction(line) {
    console.log(`This function was implemented on lines 79-81, but called on line ${line}`);
}