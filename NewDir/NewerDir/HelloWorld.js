/*Hello World*/ 
console.log("hello World")
console.log("1==1 ->",1=="1");
myHoistedFunction(4);
var globalScope = "Hey! I'm a globally scoped variable";
function createLocalScope(){
    Console.log('inside the createLocalScope() function...');
    var localScope = "Hey!, I'm a locally scoped variable";
    console.log(localScope);
    console.log(globalScope);
}

// createLocalScope();
console.log(globalScope);
//console.log(localScope);

function pitfallsOfVar() {
    var myVar = "Instantiated on line 18";
    console.log(myVar);
    var myVar = "Instantiated on line 20";
    console.log(myVar);
}

pitfallsOfVar();

function howLetSolvesVarPitfalls() {
    let myVar = "Instantiated on line 27";
    console.log(MyVar);
    let myVar = "Instantiated on line 29";
    console.log(myVar);
}

//functions as values
let anonHello = function(name) {
    if(name !== null){console.log(`Hello, ${name}! (Anonymous function`)}
    else{console.log("you really don't have a name?....wow!")};
}

function DeclaredFunction(name){
    if(name !== null){console.log(`Hello, ${name}! (Decalred function`)}
    else{console.log("you really don't have a name?....wow!")};
}
anonHello('Ben');

let square = x => x * x;
let multiply = (a,b) => a * b;
console.log(square(9));
console.log(`Square(9) = ${square(9)}`);
console.log(`multiply(3,5) = ${multiply(3,5)}`)

function declaredFunctionTest() {
    this.counter = 0;
    function incrementCounter(){
        console.log('Inside the declared function');
        for(let i = 0;i<10;i++){
            console.log(`declaredFunctionTest: Interation ${i}: ${this.counter++}`);
        }
    }
    incrementCounter();
}

let DecTest = new declaredFunctionTest();

function arrowFunctionTest() {
    this.counter = 0;

    let incrementCounter = () => {
        console.log('InsideArrowFunctionTest');
        for(let i = 0;i<10;i++){
            console.log(`arrowFunctionTest: Iteration ${i}: ${this.counter++}`)
        }
    }
    incrementCounter();
}

let arrowTest = new arrowFunctionTest();

(function() {
    console.log('I never explicitly invoked this function')
})();

(function(a,b) {
    console.log(`${a} + ${b} = ${a + b}`);
})(10,5);

function myHoistedFunction(line) {
    console.log(`This function was implemented on lines 84 to 86, but invoked on line ${line}.`);
}


function getName(callback) {
    let name = prompt('What is your name?');
    callback(name);
}

function sayHello(name) {
    if(name!== null && name!== ""){alert(`Hello, ${name}!`)}
    else alert("fine, have your secrets. IDC...meh");
}

getName(sayHello);
console.log("self-invoking function syntax is to wrap a function in a set of parentheses, and have a trailing set of parentheses for any parameter")

function  multiplier(b) {
    return x => b*x;
}

let triple = multiplier(3);
//returns code line "x => 3*x, which implies triple = x => 3*x
//
console.log()
//orrow functions inheruit the 'this' from it's enclosing content
//howLetSolvesVarPitfalls();