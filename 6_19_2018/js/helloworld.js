/*
    This is a continuation of notes based in HTML&CSS_notefiles/6_19_2018.html
    - JavaScript: a client side, interpreted language that is understood by web browsers,
        and used alongside HTML to make dynamic web pages
        - dynamically typed, variable types are determined at runtime
        - Object Oriented Language
    - Is JavaScript an extension of JAVA? NO!
    - What are the 4 Pillars of OOP?
        - Abstraction (Centralizing Common Characteristics into Conceptual Objects/Classes 4 JAVA) 
        - Polymorphism (Taking on many forms, w/r/t JavaScript can be achieved with method overriding
            NOT method overloading), 
        - Inheritance (Extending a parent object's functionality, in JS can be achieved through prototypal
            inheritance), 
        - Encapsulation (Restricting access and modification of an object's data members, closures)
    - Primitive Data Types: boolean, number - 64 bit floating pt, string, Null, undefined, symbol (introduced in ES6)
        - Values that are Number: Infinity, -Infinity, NaN
        - null is a value that indiciates a deliberate non-value
        - undefined is a value that indicates an uninitialized value
    - Variable Scopes in JS
        - Global: variables defined not in any function or block
        - Local: varibles defined in a function in which it was declared
        - Block: variables defined in the block in which it was declared
    - let (in scope the block it was defined) and const 
        (once initialized, cannot be changed) keywords, introduced in ES6
    - Two different ways to measure equality (== and ===)
            - Double Equals (==), relational operator, returns true IFF both operands have same value
                - performs type coercion (ex, 2 == '2' returns true)
            - Triple Equals (===), relational operator, returns true IFF both operands have same type AND value
    - Functions in JS are special :)
        - They are objects, can be anonymous, self-invoking (IIFE - Immediately-Invoked Function Expression),
        can be hoisted (when we invoke a function in a program before its implementation), callback functions
        (passing functions to a function as a parameter...executed inside the other function)
            - Callback functions are possible because functions in JS are objects
    -                   
*/
console.log("ur beautiful ur perfect u look like Linda Evangelista");

console.log(2 == '2');

console.log(3 == '3.0'); // type coercion is performed and cuts off the .0

console.log(3.0 == 3); 

console.log("" == false); // with triple equals, will evaluate to false

if('sure jan'){
    console.log("sure jan");
}
// use triple equals operator to get the full OOP effect

console.log(typeof "george glass");

console.log(typeof NaN);

if(typeof "marsha brady" != Number){
    console.log("marsha marsha marsha");
    //throw new Error();
}

var array = [1,2, 3, 4, 5, 6, 7, 8, 9, 10];

var sum = function(array){
    var res = 0;

    for(var i = 0; i < array.length; i++){
        if(typeof array[i] != "number"){
            throw new Error("ARRAY CONTAINS A NON-NUMBER!");
        }
        res += array[i];
    }
    return res;
}

console.log(sum(array));