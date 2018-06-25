/* Hello World */
console.log('Hello World!')
console.log("1 == '1' => ", 1 =='1' )
console.log("1 === '1'", 1 === '1')
myHoistedFunction(5);
console.log("3 == '3.0'", 3 == '3.0')
console.log("3 === '3.00'", 3 === '3.0')
console.log("3 === '3.00'", 3 !== '3.0')
console.log("0 == false =>", 0 == '')
console.log("'' === false =>", "" == false)
console.log("'null == null", null == null)
//console.log("undefined == undefined", undefiend == undefined)

if ('William')
{
    console.log("'William' is truthy");
}

console.log("typeof Nan =>", typeof NaN);
// This can be accesed anywhere!
var globalScope = "Hey I'm Globaly scoped homie!";

function createLocalScope()
    {
        console.log('inside of the createLocalScope() function...')
        var localScope = "Hey I'm Locally scoped homie!";
        console.log(localScope);
        console.log(globalScope);
    }

    //createLocalScope();
    console.log(globalScope);
    //commented the following line out because the rest of the program will not run otherwise
    //console.log(localScope);

    function pitfallsOfVar()
    {
        var myvar = "Initialized on line 37";
        console.log(myvar);
        var myvar = "Initialized on line 39";
        console.log(myvar);
    }

    function howLetSolvesVarPitfall()
    {
        let myvar = "Instantiated on line 45";
        console.log(myvar);
        let myvar = "Instantiated online 45";
        console.log(myvar);
        }

    //pitfallsOfVar();
    //howLetSolvesVarPitfall();

    //console.log(Math.PI);
    //const PI = 3.14;
    //console.log(PI--);


//Functions as Values
    let anonHello = function(name)
    {
        console.log(`Hello, ${name}! (Anonymous function)`);
    }
    
    //anonHello('Dev');

    console.log(anonHello);

    //Declared Function
    function declaredHello(name)
    {
        console.log(`Hello ${name} ! Declared Function`);
    }

    console.log(declaredHello);



    let square = x => x*x;
    console.log(`square(8) = ${square(8)}` );
    console.log(square(8));
    //Arrow functions inherit the `this` from its enclosing context

    let multiply = (a, b) => a * b;
    console.log(`Multiply(3,5) ${multiply(3,5)}`);

    // Declared Function
    function declaredFunctionTest()
    {
        this.counter = 0;
            function incrementCounter()
            {
                console.log('Inside the declared function');
                for (let i = 0; i < 10; i++)
                {
                    console.log(`declaredFunctionTest: Iteration ${i}: ${this.counter++}`);
                }
            }
        incrementCounter();
    }
   let decTest = new declaredFunctionTest();

   //Arrow Function
   function arrowFunctionTest()
   {
       this.counter = 0;
        
        let incrementCounter = () => 
            {
            console.log('Inside arrowFunctionTest')
                for(let i = 0; i < 10; i++)
                    {
                        console.log(`arrowFunctionTest: Iteration ${i}: ${this.counter++}`);
                    }
            }
        incrementCounter();
   }
     let arrowTest = new arrowFunctionTest();

// Self invoking function
   console.log("Self invoking syntax is to wrap a function in a set of parantheses, and have a trailing set of parentheses for any parameter");

   (function()
    {
        console.log("I never explicitly invoked this funtion");
    }
        )();
   
   (function(a,b)
    {
        console.log(`${a} + ${b} = ${a+b}`);
    }
   )(10,5);
// Hoisted Function
   function myHoistedFunction(line)
   {
       console.log(`This function was implemented on lines 135-138 but invoked on line ${line}`);
   }
// callback function
   function getName(callback)
   {
        let name = prompt('What yo name is shawty?');
        callback(name);
   }

   function sayHello(name)
   {
        alert(`Hello, ${name}!`);
   }

  // getName(sayHello);

 function multiplier(factor)
 {
     return number => number * factor;
 }

 let triple = multiplier(3);
 console.log(`Triple(9) = ${triple(9)}`);