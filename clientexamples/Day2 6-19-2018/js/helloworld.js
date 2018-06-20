console.log('Hello World');
console.log("1 == '1' =>", 1 == '1')
myhoistedF(3);
console.log("1 === '1' =>", 1 === '1')
console.log("3 == '3.0' =>", 3 == "3.0")
console.log('0 == false =>', 0 == false)
console.log('"" == false =>', "" == false)
console.log('0 === false =>', 0 === false)
console.log('"" === false =>', "" === false)
console.log('null == null =>', null == null)
console.log('undefined == undefined =>', undefined == undefined)
console.log("typeof 'Cullen' =>", typeof "Cullen")
console.log("typeof infinity =>", typeof Infinity)

/* this variable can be accessed anywhere in the program */
var globalscope = "Hey i'm a globaly scoped variable";

function createlocalScope() {
    console.log('inside the createlocalScope function...');
    var localscope = "hey, i am a locally scoped variable";
    console.log(localscope);
    console.log(globalscope);
}

createlocalScope();

console.log(globalscope);
//commente out because the rest of the program will not run otherwise
//console.log(localscope);

function pitfallsofvar() {
    var myvar = 'instanciated on line 31';
    console.log(myvar);

    var myvar = 'instanciated on line 34';
    console.log(myvar);
}

// functions as values
let annonhello = function(name) {
    console.log(`Hello, ${name}! (annonymous function)`);
}
// declaired function
annonhello('cullen');

//declaired function
function declairedHello(name) {
    console.log(`Hello, ${name}! (declaired function)`);
}
console.log(declairedHello);

let square = x => x * x;
let multi = (a, b) => a * b;
console.log(`square of nine is = ${square(9)}`);
console.log(`multiply (3, 5) = ${multi(3,5)}`);

function declaredfuntiontext() {
    this.counter = 0;


    function incrimentcounter() {
        console.log('inside the declaired function');
        for (let i = 0; i < 10; i++){
            console.log(`declared function test: iteration ${i}: ${this.counter++}`);
        }
    }
    incrimentcounter();
}
let decTest = new declaredfuntiontext();
// arrow functions inherit the 'this' from its enclosing context

function arrowfunctiontest () {
    this.counter = 0;

    let incrementcounter = () => {
        console.log('inside arrow function test');
        for (let i = 0; i < 10; i++){
            console.log(`arrowfunctiontest iteration ${i}: ${this.counter++}`);
        }
    }
    incrementcounter();
}
let arrowtest = new arrowfunctiontest();

// self invoking functions
console.log('selfinvoking sytax is to wrap a function in a set of parentheses, and have a trailling set of parentheses for any parameter');

(function() {
    console.log('i vever explicitly inviked this function');
})();

(function(a,b) {
    console.log(`${a} + ${b} = ${a + b}`);
})(10,5);

// hoisted functions

function myhoistedF(line) {
    console.log(`this function was implimented on line 98, but invoked on line ${line}`);
}


// callback functions
function getname (callback) {
    let name = prompt('what is your name?');
    callback(name);
}

function sayhello (name) {
    alert(`hello ${name}!`)
}

//getname(sayhello);

function multiplier(factor) {
    return number => number * factor;
}

let triple = multiplier(3);
console.log(`tripple of nine = ${triple(9)}`);
console.log(`tripple(9,13) = ${triple(9, 13)}`);