let Calculator = function() {

    /* Provide an implementation that sums the elements in an array */
    this.sum = function(array) {
        if(array.length === 0) {
            return 0;
        }

        if(typeof(array[0]) !== 'number') {
            throw new Error("array is not numeric");
        }

        let sum = array.reduce((acc, currentValue) => {
            if(typeof(currentValue) !== 'number') {
                throw new Error("array is not numeric");
            }
            return acc + currentValue;
        });

        return sum;
    };

    /* Provide an implementation that finds the factorial of value (value!) */
    this.factorial = function(value) {
        if(typeof(value) !== 'number') {
            throw Error("not a number!");
        }

        if(value < 0) {
            throw new Error("negative value");
        }

        if(value === 1) {
            return 1;
        }

        let product = 1;
        for(let i = value; i > 0; i--) {
            product = product * i;
        }

        return product;
    }

    /* Provide an implementation that returns true if a number is odd, and false if the number is even */
    /* CONDITION: You may not use the modulus (%) operator */
    this.isOdd = function(value) {
        if(typeof(value) !== 'number') {
            throw new Error("not a number");
        }

        //I don't really want to mess with 'this'.
        if(value < 0) {
            value *= -1;
        }

        return (value & 1) === 1;
    }

    /* Provide an implementation that finds the nth term in the Fibonacci Sequence */
    /* HINT: The first two terms are 1 */
    this.termInFibonacciSequence =  function(n) {
        if(typeof(n) !== 'number') {
            throw new Error("not a number!");
        }

        if(n < 0) {
            throw new Error("can't calculate for negative values");
        }

        // 0 is a dummy value to allow the index to start at 1
        let memo = [0, 1, 1];
        if(n === 1 || n === 2) {
            return 1;
        }

        for(let i = 3; i <= n; i++) {
            memo.push(memo[i-1] + memo[i-2]);
        }

        return memo[n];
    };
};
