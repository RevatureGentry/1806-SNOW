let Calculator = function() {

    /* Provide an implementation that sums the elements in an array */
    this.sum = function(array) {
        let arraySum = 0;
        for (let i = 0; i < array.length; i++) {
            arraySum += array[i];
        }
        return arraySum;
    };

    /* Provide an implementation that finds the factorial of value (value!) */
    this.factorial = function(value) {
        let f = 1;
        for (let i = value; i !== 0; i--) {
            f = f * i;
        }
        return f;
    }

    /* Provide an implementation that returns true if a number is odd, and false if the number is even */
    /* CONDITION: You may not use the modulus (%) operator */
    this.isOdd = function(value) {
        if ((value/2)*2 === value) {
            console.log("Value/2 => ", value/2, "*2 = ", (value/2)*2);
            return true;
        }
        else return false;
    }

    /* Provide an implementation that finds the nth term in the Fibonacci Sequence */
    /* HINT: The first two terms are 1 */
    this.termInFibonacciSequence =  function(n) {
        if (n <= 1) {return 1;}
        else if (n === 2) {return 1;}
        else return n+(termInFibonacciSequence(n-1)+termInFibonacciSequence(n-2));
    };
};