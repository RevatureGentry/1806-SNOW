let Calculator = function() {

    /* Provide an implementation that sums the elements in an array */
    this.sum = function(array) {
        var res = 0;
        for (var i = 0; i < array.length; i++) {
            if (typeof array[i] != "number") {
                throw new Error("ARRAY CONTAINS A NON-NUMBER!");
            }
            res += array[i];
        }
        return res; 
    };

    /* Provide an implementation that finds the factorial of value (value!) */
    this.factorial = function(value) {
        var res = value;
        if(value < 0 || typeof value == 'string' || typeof value == 'boolean' 
        || value instanceof Array || value instanceof Object ) { 
            throw new Error("INVALID INPUT FOR VALUE!"); 
        }
        if(value === 0 || value === 1){
            return 1;
        }
        while(value != 1){
            value -= 1;
            res *= value;
        }
        return res;
    };

    /* Provide an implementation that returns true if a number is odd, and false if the number is even */
    /* CONDITION: You may not use the modulus (%) operator */
    this.isOdd = function(value) {
        if(typeof value == 'symbol' || typeof value == 'string' || typeof value == 'boolean'){
            throw new Error("NOT A VALID INPUT FOR VALUE!");
        }
        return Math.pow(-1, value) == -1;
    };

    /* Provide an implementation that finds the nth term in the Fibonacci Sequence */
    /* HINT: The first two terms are 1 */
    this.termInFibonacciSequence =  function(n) {
        if(typeof n == 'string' || typeof n == 'boolean' || n instanceof Object || n < 0){
            throw new Error("INVALID INPUT FOR VALUE!");
        }
        if(n === 1 || n == 2){
            return 1;
        }
        var nmin1 = this.termInFibonacciSequence(n-1);
        var nmin2 = this.termInFibonacciSequence(n-2);
        return nmin1 + nmin2;
    };
};