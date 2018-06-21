let Calculator = function() {

    /* Provide an implementation that sums the elements in an array */
    this.sum = function(array) { 
        // create function reducer to allow for currentvalue inputs
        if (typeof array[0] !== 'number') {
            throw TypeError('Error: use numbers only')
        } else {
            const reducer = (accumulator, currentValue) => accumulator + currentValue;
            return (array.reduce(reducer));
            }
        }

    /* Provide an implementation that finds the factorial of value (value!) */
    this.factorial = function(value) {
        function fact(number) {
            if (number < 0 || typeof number !== 'number') 
                  throw TypeError('Error: possitive numbers only');
            else if (number === 0) 
                return 1;
            else {
                return (number * fact(number - 1));
                
            } 
          } return fact(value);
    }

    /* Provide an implementation that returns true if a number is odd, and false if the number is even */
    /* CONDITION: You may not use the modulus (%) operator */
    this.isOdd = function(value) {
        // take the input to the power of (-1), if it returns -1 it is odd
        let num = Math.pow((-1), value);
        if (typeof value !== 'number') {
            throw TypeError('Error: Not a Number');
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
            if (typeof n !== 'number' || n < 0) {
                //throw TypeError('Error: Use only possitive numbers')
            } else if (n===1 || n===0) {
                return 1;
            } else {
                for (let i = 2; i < (n); i++) {
                    let fib = [];
                    fib[i] = fib[i-2] + fib[i-1];
                    return;
                    }
                 } return (fib[n-1]);
    }
}