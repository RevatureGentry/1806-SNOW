let Calculator = function() {

    /* Provide an implementation that sums the elements in an array */
    this.sum = function(array) {
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        
        if(typeof (array.reduce(reducer)) === 'number'){
            this.sum = (array.reduce(reducer));
            return this.sum;
        }else{
            throw new Error();
        }
    }

    /* Provide an implementation that finds the factorial of value (value!) */
    this.factorial = function(value) {
        if(typeof value === 'number'){
            if(value==0 || value==1){
                return 1;
            } else {
                return value * this.factorial(value-1);
            }
       } else {
           throw new Error();
       }
    }

    /* Provide an implementation that returns true if a number is odd, and false if the number is even */
    /* CONDITION: You may not use the modulus (%) operator */
    this.isOdd = function(value) {
        if(typeof value === 'number'){
            if((value & 1) == 1){
                return true;
            }
            else{
                return false;
            }
        }else{
            throw new Error();
        }
        
    }

    /* Provide an implementation that finds the nth term in the Fibonacci Sequence */
    /* HINT: The first two terms are 1 */
    this.termInFibonacciSequence =  function(n) {
        if(typeof n === 'number' && n >= 1) {
            let x = 0;
            let y = 1;
            let w = 1;
            if(n == 1){
                return n;
            } else {
                for (let i = 1; i < n; i++) {
                    w = x + y;
                    x = y;
                    y = w; 
                }
                return y;
                //return (n-1) + (n-2);
            }
            // for (let i = 0; i < n; i++) {
            //     w = x + y;
            //     x = y;
            //     y = w; 
            // }return y;
        }else {
            throw new Error();
        }
    };
};