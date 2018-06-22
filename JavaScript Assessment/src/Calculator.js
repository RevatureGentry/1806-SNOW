let Calculator = function() {

    /* Provide an implementation that sums the elements in an array */
    this.sum = function(array) {
        let s = 0;
        for (let i = 0; i < array.length; i++){
            if(!isNaN(array[i])){
                s += array[i];
            }
            else{
                throw Error('Not a number');
            }
        }
        return s;
    };

    /* Provide an implementation that finds the factorial of value (value!) */
    this.factorial = function(value) {
        let f = 1;
        if(value < 0){
            throw Error('Negative');
        }
        if(typeof(value) != 'number'){
            throw Error('Not a number');
        }
        if(value == 0){
            return 1;
        }
        while(value > 0){
            f *= value;
            value -= 1;
        }
        return f;
    }

    /* Provide an implementation that returns true if a number is odd, and false if the number is even */
    /* CONDITION: You may not use the modulus (%) operator */
    this.isOdd = function(value) {
        if(typeof(value) != 'number'){
            throw Error('Not a number');
        }
        while(value > 1){
            value -= 2;
        }
        if(value == 1){
            return true;
        }
        else{
            return false;
        }
    }

    /* Provide an implementation that finds the nth term in the Fibonacci Sequence */
    /* HINT: The first two terms are 1 */
    this.termInFibonacciSequence =  function(n) {
        var prev1 = 1;
        var prev2 = 1;
        var next = 2;
        if(typeof(n) != 'number'){
            throw Error('Not a number');
        }
        if(n < 0){throw Error('Negative');}

        if (n == 1){return 1}
        if (n == 2){return 1}
        for(var i = 2; i < n; i++){
            next = prev1 + prev2;
            prev1 = prev2;
            prev2 = next;
        }
        return next;
    };
};
