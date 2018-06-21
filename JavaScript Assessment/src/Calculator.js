let Calculator = function() {

    /* Provide an implementation that sums the elements in an array */
    this.sum = function(array) {
        let total = 0; 
        for (let i = 0; i < array.length; i++){
            if( typeof array[i] == typeof 1)
            total = total + array[i];
            else throw new Error();
        }
        return total; 
    };

    /* Provide an implementation that finds the factorial of value (value!) */
    this.factorial = function(value) {
        function fact(num){
            if (num < 0 || typeof num !== 'number'){
                throw TypeError('ERROR: no negative numbers allowed');
            }
            else if (num === 0){
                return 1;
            }
            else{
               return (num * fact(num - 1)); 
            }            
        }
        return fact(value);              
    }

    /* Provide an implementation that returns true if a number is odd, and false if the number is even */
    /* CONDITION: You may not use the modulus (%) operator */
    this.isOdd = function(value) {
        let num = Math.pow((-1), value);
        if (typeof value !== 'number'){
            throw TypeError('ERROR: Not a number');
        }
        else if (typeof value === 'number'){
            if (num === -1){
               // console.log(`${value} is an odd number`);
                return true;
            }
            else if (num === 1){
                //console.log(`${value} is an even number`);
                return false; 
            }
        }
        
    }

    /* Provide an implementation that finds the nth term in the Fibonacci Sequence */
    /* HINT: The first two terms are 1 */
    this.termInFibonacciSequence =  function(n) {
         if (typeof n !== 'number' || n < 0 ){
            throw TypeError('ERROR: Not a number');     
        }
        else if (n === 1 || n === 0){
            return 1;
        }
        else{
            function fibonacci(f){
                return f < 1 ? 0
                : f <=2 ? 1
                : fibonacci(f - 1 ) + fibonacci(f - 2);
            }
            return Math.max(fibonacci(n));
        }
    }
}