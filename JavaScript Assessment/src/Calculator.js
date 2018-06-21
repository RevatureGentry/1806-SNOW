let Calculator = function() {

    /* Provide an implementation that sums the elements in an array */
    this.sum = function(array) {
        //Array counter
        var arsum = 0;
        for (var i = 0; i < array.length; i++) {
            //NaN error
            if (typeof array[i] != "number"){
                throw new Error("ERROR");
            }
            else{
                //adds the current array index into the total
                arsum += array[i];
            }
        }
        //returns sum of array
        return arsum;
    };

    /* Provide an implementation that finds the factorial of value (value!) */
    this.factorial = function(value) {
        //created new function for recursion
        function fact(value){
            //error check
            if (typeof value === 'boolean' || Array.isArray(value)){
                throw new Error("ERROR");
            }
            //return 1 since 0! is 1
            else if (value == 0){
                return 1;
            }
            //recursion
            else if (value => 1){
                return value * fact(value-1);
            }
        }
        //return factorial
        return fact(value);
    }

    /* Provide an implementation that returns true if a number is odd, and false if the number is even */
    /* CONDITION: You may not use the modulus (%) operator */
    this.isOdd = function(value) {
        //error check
        if (typeof value === 'boolean' || typeof value === 'string'){
            throw new Error("ERROR");
        }
        //uses bitwise operation to determine odd or even
        //converts into binary
        //anything odd will end with 1
        //anything even will end with 0
        else if ((value & 1) == 1){
            return true;
        }
        else{
            return false;
        }
    }

    /* Provide an implementation that finds the nth term in the Fibonacci Sequence */
    /* HINT: The first two terms are 1 */
    this.termInFibonacciSequence =  function(n) {
        //new function for recursion
        function fib(n) {
            //error check
            if (typeof n === 'boolean'){
                throw new Error("ERROR");
            }
            //Fib sequence will not start at 0
            else if (n == 1 || n == 2) {
                return 1;
            }
            else {
                //fib recursion
                return fib(n - 1) + fib(n - 2);
            }
        }
        return fib(n);
    };
} 