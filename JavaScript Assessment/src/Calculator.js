let Calculator = function() {

    /* Provide an implementation that sums the elements in an array */
    this.sum = function(array) {
        var i;
        let sum= 0;
        for(i=0; i<array.length; i++){
            if(isNaN(array[i]))
                throw new Error("is not a number");
            sum = array[i] + sum;
        }
        return sum;
    };

    /* Provide an implementation that finds the factorial of value (value!) */
    this.factorial = function(value) {
        if(isNaN(value))
            throw new Error("is not a number");
        
        if(value < 0 || typeof(value) === "boolean" || value.constructor === Array)
            throw new Error("invalid inputs");
        let factorial = 1;
        while (value>0){
            factorial = factorial * value;
            value--;
        }
        return factorial;
    }

    /* Provide an implementation that returns true if a number is odd, and false if the number is even */
    /* CONDITION: You may not use the modulus (%) operator */
    this.isOdd = function(value) {
        if(isNaN(value))
            throw new Error("is not a number");
    
        if(value < 0 || typeof(value) === "boolean" || value.constructor === Symbol)
            throw new Error("invalid inputs");
        if(value & 1 === 1){
            return true;
        }
        else{
            return false;
        }
    }

    /* Provide an implementation that finds the nth term in the Fibonacci Sequence */
    /* HINT: The first two terms are 1 */
    this.termInFibonacciSequence =  function(n) {
        if(n === 1 || n === 2){
            return 1;
        }
        else{
            return this.termInFibonacciSequence(n-1) + this.termInFibonacciSequence(n-2);
        }
    };
};