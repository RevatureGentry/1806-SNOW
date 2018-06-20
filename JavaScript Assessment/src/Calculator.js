let Calculator = function() {

    /* Provide an implementation that sums the elements in an array */
    this.sum = function(array) {
        var total = 0;
        for (x in array) {
            if (typeof(array[x]) != "number") throw new Error();
            total += array[x];
        }
        console.log(total);
        return total;
    };

    /* Provide an implementation that finds the factorial of value (value!) */
    this.factorial = function(value) {
        if (typeof(value) != "number") throw new Error();
        if (value < 0) throw new Error();
        if (value == 0) return 1;
        if (value > 0) return value*this.factorial(value-1);
    }

    /* Provide an implementation that returns true if a number is odd, and false if the number is even */
    /* CONDITION: You may not use the modulus (%) operator */
    this.isOdd = function(value) {
        if (typeof(value) != "number") throw new Error();
        var result = false;
        if (value == 0) return result;
        if (value > 0) {
            for (i = 0; i < value; i++) {
                console.log(result);
                result = !result;
            }
        }
        if (value < 0) {
            for (i = 0; i > value; i--) {
                result = !result;
            }
        }
        return result;
    }

    /* Provide an implementation that finds the nth term in the Fibonacci Sequence */
    /* HINT: The first two terms are 1 */
    this.termInFibonacciSequence =  function(n) {
        if (typeof(n) != "number") throw new Error();
        if (n < 1) throw new Error();
        if (n == 1 || n == 2) return 1;
        if (n > 2) return this.termInFibonacciSequence(n-1)+this.termInFibonacciSequence(n-2);
    };
};