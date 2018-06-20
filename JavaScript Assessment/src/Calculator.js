let Calculator = function() {

    /* Provide an implementation that sums the elements in an array */
    this.sum = function(array) {
        console.log("Called");
        let total = 0;
        for(i = 0; i < array.length; i++) {
            if (!isNaN(array[i])) {
                total += array[i];
                console.log("Added")
            }
            else {
                throw new Error;
            }
        }
        return total;
    };

    /* Provide an implementation that finds the factorial of value (value!) */
    this.factorial = function(value) {
        if (typeof(value) != "number") {
        	throw new Error;
        }
				else if (value < 0) {
        		throw new Error;
        }
        else if (value === 0 || value === 1) {
        	return 1;
        }

        let total = 1;
        for(i = value; i > 0; i--) {
            total *= i;
        }
        return total;
    }

    /* Provide an implementation that returns true if a number is odd, and false if the number is even */
    /* CONDITION: You may not use the modulus (%) operator */
    this.isOdd = function(value) {
        if (isNaN(value) || typeof(value) == "boolean") {
            throw new Error;
        }
        let newValue = value / 2;
        if (newValue.toString().includes(".")) {
            return true;
        }
        return false;
    }

    /* Provide an implementation that finds the nth term in the Fibonacci Sequence */
    /* HINT: The first two terms are 1 */
    this.termInFibonacciSequence =  function(n) {
        if (isNaN(n) || typeof(n) == "boolean") {
            throw new Error;
        }
        if (n == 1 || n == 2) {
            return 1;
        }
        if (n < 0) {
            throw new Error;
        }
        let num1 = 1
        let num2 = 1
        for(i = 2; i < n; i++) {
            let temp = num2;
            num2 = num1 + temp;
            num1 = temp
            
        }
        return num2;
    };
};