let Calculator = function() {

    /* Provide an implementation that sums the elements in an array */
    this.sum = function(array) {
        var sum = 0;
        for(var i = 0; i < array.length; i++){
            if(typeof array[i] === typeof 1 ){
                sum = sum + array[i];
            }
            else{
                throw new Error();
                
            }
        }
        return sum;
    };

    /* Provide an implementation that finds the factorial of value (value!) */
    this.factorial = function(value) {
        if(typeof value === typeof 1 && value >= 0){
            var fact = 1;
            for(var i = 2; i <=value; i++){
                fact = fact * i;
            }
        }
        else{
            throw new Error();
        }
        return fact;
    }

    /* Provide an implementation that returns true if a number is odd, and false if the number is even */
    /* CONDITION: You may not use the modulus (%) operator */
    this.isOdd = function(value) {
        if(typeof value !== typeof 1){
            throw new Error();
        }
        else{
            for(var i = 1; i < value; i++){
              var x = i * 2;
                if(x === value) return false;
                if(x > value) return true;
            }
        }
    }

    /* Provide an implementation that finds the nth term in the Fibonacci Sequence */
    /* HINT: The first two terms are 1 */
    this.termInFibonacciSequence =  function(n) {
        if(typeof n !== typeof 1 || n < 0){
            throw new Error();
        }
        if(n == 1){
            return 1
        }
        if(n === 2)
        {
            return 1;
        }
        let fn_1 = 1;
        let fn_2 = 1;
        let fn = 0;
        for(let i = 3; i <= n; i++){
            fn = fn_1 + fn_2;
            fn_2 = fn_1;
            fn_1 = fn;
        }
        return fn;
    };
};