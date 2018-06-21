let Calculator = function() {

    /* Provide an implementation that sums the elements in an array */
    this.sum = function(array) {
        array.forEach(element => {
            if(typeof(element) !== 'number'){
                throw new Error (element +" is not a number");
            }
        });
        let sum = 0;
        for(let i = 0;i < array.length;i++){
            sum += array[i];
        }

        return sum;
    };

    /* Provide an implementation that finds the factorial of value (value!) */
    this.factorial = function(value) {
        if(typeof(value) !== 'number' ||value < 0){
            throw new Error(`${value} is not a valid input`);
        }

        if(value === 1 || value === 0){
            return 1;
        }else{
            return value * this.factorial(value-1);
        }

    }

    /* Provide an implementation that returns true if a number is odd, and false if the number is even */
    /* CONDITION: You may not use the modulus (%) operator */
    this.isOdd = function(value) {
        if(typeof(value) !== 'number'){
            throw new Error(`${value} is not a valid input`);
        }
        let binary = value.toString(2);
        return binary.charAt(binary.length-1) === '1';
    }

    /* Provide an implementation that finds the nth term in the Fibonacci Sequence */
    /* HINT: The first two terms are 1 */
    this.termInFibonacciSequence =  function(n) {
        if(typeof(n) !== 'number' ||n < 0){
            throw new Error(`${n} is not a valid input`);
        }
        if(n <=2 ){
            return 1;
        }else{
            return this.termInFibonacciSequence(n-1)+ this.termInFibonacciSequence(n-2);
        }
    };
};