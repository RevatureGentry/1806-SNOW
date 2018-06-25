let Calculator = function() {

    /* Provide an implementation that sums the elements in an array */
    this.sum = function(array) {
        var sum = 0;
        for (var i = 0; i < array.length; i++){
    
            sum += array[i];
        }
        return sum;
    };

    /* Provide an implementation that finds the factorial of value (value!) */
    this.factorial = function(value) {
       let factorialNum = 1;
       for (let i = value; i > 0; i--){
           factorialNum = factorialNum * i
       }
        return factorialNum;
    }

    /* Provide an implementation that returns true if a number is odd, and false if the number is even */
    /* CONDITION: You may not use the modulus (%) operator */
    this.isOdd = function(value) {

        return (value & 1) ? true : false;
    }
        

    /* Provide an implementation that finds the nth term in the Fibonacci Sequence */
    /* HINT: The first two terms are 1 */
    this.termInFibonacciSequence =  function(n) {
         if (n == 1 || n == 2) {
             return 1;
             
         } else {
             return this.termInFibonacciSequence(n-1) + this.termInFibonacciSequence(n-2);
             
         }
    }
}