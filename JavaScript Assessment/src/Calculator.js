let Calculator = function() {

    /* Provide an implementation that sums the elements in an array */
    this.sum = function(array) { 
        // create function reducer to allow for currentvalue inputs
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        console.log(array.reduce(reducer));
        }

    /* Provide an implementation that finds the factorial of value (value!) */
    this.factorial = function(value) {
        
    }

    /* Provide an implementation that returns true if a number is odd, and false if the number is even */
    /* CONDITION: You may not use the modulus (%) operator */
    this.isOdd = function(value) {
        // take the input to the power of (-1), if it returns -1 it is odd
        let num = Math.pow((-1), value);
        if (typeof value !== 'number') {
            throw 'error';
        }else if (typeof value === 'number') {
            if (num === -1) {
                console.log(`${value} is an odd number`);
                return true;
            }else if (num === 1) {
                console.log(`${value} is an even number`);
                return false;
            }else {
                throw 'error2';
            }
        }else {
            throw 'error2';
        }
    }
    /* Provide an implementation that finds the nth term in the Fibonacci Sequence */
    /* HINT: The first two terms are 1 */
    this.termInFibonacciSequence =  function(n) {
        
    }
}