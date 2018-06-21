let Calculator = function() {

    /* Provide an implementation that sums the elements in an array */
    this.sum = function(array) {
        result = 0;
        for(let i=0; i<array.length; i++){
            if(typeof array[i]==="number"){
                result = result + array[i];
            } else throw new error();
        }
        return result;
    };

    /* Provide an implementation that finds the factorial of value (value!) */
    this.factorial = function(value) {
        if(typeof value==="number" && value >= 0 && Math.floor(value)===value){
            if(value === 1 || value === 0){return 1;}
            return value*this.factorial(value-1);
        } else throw new error()
    }

    /* Provide an implementation that returns true if a number is odd, and false if the number is even */
    /* CONDITION: You may not use the modulus (%) operator */
    this.isOdd = function(value) {
        if(typeof value==="number") {
            if(Math.floor(value/2)!==value/2) {
                return true;
            } else return false;
        } else throw new error()
     }

    /* Provide an implementation that finds the nth term in the Fibonacci Sequence */
    /* HINT: The first two terms are 1 */
    this.termInFibonacciSequence =  function(n) {
        if(typeof n==="number" && n > 0 && Math.floor(n)===n){

            if(n===1 || n===2){return 1}
            current = 1
            previous = 1
            
            for(let i = 3; i <= n; i++){
                next = previous + current;
                previous = current;
                current = next;
            } return current
        } else throw new error()
    };
};