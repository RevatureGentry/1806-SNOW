let Calculator = function() {

    /* Provide an implementation that sums the elements in an array */
    this.sum = function(array) {
        let sum = 0;
        for (i = 0; i < array.length; i++) {
            if (typeof array[i] !== "number") {
                throw new Error();
            }
            sum = array[i] + sum;
        }
        return sum;
    };

    /* Provide an implementation that finds the factorial of value (value!) */
    this.factorial = function(value) {
        if (typeof value !== "number" || value < 0) {
            throw new Error();
        }
        else {
            let temp = value - 1;
            let fact = value;
            if (value == 0) {
                return 1;
            }
            while (temp > 0) {
                fact = fact * temp;
                temp = temp - 1;
            }
            return fact;
        }
    }

    /* Provide an implementation that returns true if a number is odd, and false if the number is even */
    /* CONDITION: You may not use the modulus (%) operator */
    this.isOdd = function(value) {
        if (typeof value !== "number") {
            throw new Error();
        }
        else {
            value = value / 2
            if (value.toString().indexOf(".")==-1) {
                return false;
            }
            return true;
        }
        
    }

    /* Provide an implementation that finds the nth term in the Fibonacci Sequence */
    /* HINT: The first two terms are 1 */
    this.termInFibonacciSequence =  function(n) {
        if (typeof n !== "number" || n < 0){
            throw new Error();
        }
        else {
            let previous = 0;
            let current = 1;
            let temp= 0;
            for (i = 1; i < n; i++) {
                temp = current;
                current = current + previous;
                previous = temp;
            }
            return current;
        }
    }
};