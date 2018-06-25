console.log("Hello World");
console.log('1=="1" =>', 1 =="1");
console.log('1 ==="1" =>', 1==="1");
console.log('0===false =>', 0 === false);

console.log('typeof William', typeof "William");

myHoistedFunction(8);
//This variable can be accessed anywhere in our program
var globalScope = "Hey! I'm a globally scoped variable";
function createLocalScope(){
    console.log("inside the createLocalScope() function...");
    var localScope = "Hey! I'm a locally scoped variable";
    console.log(localScope);
    console.log(globalScope);
}

createLocalScope();
console.log(globalScope);
//commented the following line out because the rest of the program will not run otherwise
//console.log(localScope);

function pitfallsOfVar(){
    var myVar = "Instantiated on line 24";
    console.log(myVar);
    var myVar = "Instantiated on line 26";
    console.log(myVar);
}

pitfallsOfVar();

function howLetSolvesVarPitfalls(){
    let myVar = "Instantiated on line 33";
    console.log(myVar);
    let myVar1 = "Instantiated on line 35";
    console.log(myVar);
}

howLetSolvesVarPitfalls();

let originalstring = "Hello there"
console.log(originalstring[1])
console.log(typeof(originalstring))
if(typeof(originalstring)==='string'){
    console.log("good news its a string");
}
console.log(originalstring.length)
originalstring = originalstring.split(" ").join("");
console.log(originalstring);
var i;
        for(i=0; i<originalstring.length - 1;i++){
            console.log(originalstring[i]);
        }
let palindrom = false;
console.log(palindrom)
palindrom = true
console.log(palindrom)
console.log(Math.PI);
const PI = 3.14;
//console.log(PI++);
// Functions as values
let anonHello = function(name){
    console.log(`Hello, ${name}! (anonymous function)`);
}
anonHello('John');

//Declared function
function declaredHello(name){
    console.log(`Hello, ${name}! (Declared Function)`);
}
declaredHello('John');

let square = x => x * x;
console.log(square(9));
console.log(`square(9) = ${square(9)}`);

let multiply = (a, b) => a*b;
console.log(`multiply(3,5) = ${multiply(3, 5)}`);

//Arrow functions inherit the 'this' from it's enclosing context

function declaredFunctionTest(){
    this.counter = 0;

    function incrementCounter(){
        console.log('Inside the declared function');
        for(let i = 0; i < 10; i++){
            console.log(`declaredFunctionTest:  Iteration ${i}: ${this.counter++}`);
        }
    }
    incrementCounter();
}

let decTest =  new declaredFunctionTest();
function arrowFunctionTest(){
    this.counter = 0;
    
    let incrementCounter = ()=> {
        console.log('Inside arrowFunctionTest');
        for (let i = 0; i < 10; i++){
            console.log(`arrowFunctionTest:  Iteration ${i}:  ${this.counter++}`);
        }
    }
    incrementCounter();
}
let arrowTest = new arrowFunctionTest();

/* function Hero(name, level){
    this.name = name;
    this.level = level;
}

let myHero = new Hero('John', 100) */

console.log("Self invoking function syntax is to wrap a function in a set of parenthses, and have a trailing set of parentheses for any parameter");

(function (){
    console.log('I never explicitly invoked this function');
})();

(function(a, b){
    console.log(`${a} + ${b} = ${a+b}`);
})(10,5);

function myHoistedFunction(line){
    console.log(`This function was implemented on lines 125-127 but invoked on line ${line}`);

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

let triple = multiplier(3);
console.log(`triple(9) = ${triple(9)}`);

console.log(`triple(9, 13) = ${triple(9, 13)}`);

let originalstring2 = "william"
let strlength = originalstring2.length;
let y = strlength - 1;
let reversedstring = "";
console.log(originalstring2.charAt(2));

console.log(typeof('A'))
let array1 = [10, 20, -10, 15];
let x = array1[1]
x += array1[2];
console.log(`x: ${x}`)
console.log(typeof(array1[2]))
console.log(array1[2]);
console.log(array1.length)
console.log(typeof(array1))
let divideby2 = 11
divideby2 = divideby2/2
console.log(divideby2)
let newstring = "newstring";
let yep = newstring.charAt(9);
console.log(`Char at end ${yep}`);
console.log(yep);
console.log(yep === " ")

let suits = ['spade', 'heart', 'diamond', 'club'];
let values = ['1','2','3','4','5','6','7','8','9','10','11','12','13'];
let deck = [];



let PlayingCard = (function() {
    let suitSymbol = Symbol('suit');
    let valueSymbol = Symbol('value');

    function PlayingCard(suit = 'Spades', value = 'two'){
        this[suitSymbol] = suit;
        this[valueSymbol] = value;
    }

    PlayingCard.prototype.getSuit = function(){
        return this[suitSymbol];
    }

    PlayingCard.prototype.setSuit = function(suit){
        this[suitSymbol] = suitname;
    }

    PlayingCard.prototype.getValue = function(){
        return this[valueSymbol];
    }

    PlayingCard.prototype.setValue = function(value){
        this[valueSymbol] = value;
    }

    return PlayingCard;
})();
for(let i = 0; i < suits.length; i++){
    for(let x = 0; x < values.length; x++){
        let n = new PlayingCard(suits[i], values[x])
        deck.push(n);
    }
}
let z = deck[0].getSuit();
console.log(z)
console.log(`Deck Suit:  ${deck[51].getSuit()}`);

let newstring4 = "hi there"
let n4 = newstring4.replace(/\s/g, '');
console.log(n4)