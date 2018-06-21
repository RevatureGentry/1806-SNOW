let Calculator = function() {

    /* Provide an implementation that sums the elements in an array */
    this.sum = function(array) {
        if (Array.isArray(array) === true){
            let arraylength = array.length;
            let arraysum = 0;
            //runs through the array adding each value if its a number to 
            //an overall number
            for(let i = 0; i < arraylength; i++){
                if (typeof(array[i]) === 'number'){
                    arraysum += array[i];
                }
                else{
                    throw error
                }

            }
            return arraysum

        }
        else{
            throw error
        }

        
    };

    /* Provide an implementation that finds the factorial of value (value!) */
    this.factorial = function(value) {
        if (typeof(value)==='number'){
            //makes sure the input is 0 or positive and returns 1 if it is 0
            if(value >= 0){
                if (value === 0){
                    return 1
                }
                else{
                    let factorial = value;
                    let factorialsum = 1;
                    //starting from the value of 'value' it decrements by 1 each iteration until 1
                    //and multiplies each value by the running total
                    for (let i = 0; i < value; i++){
                        if(factorial > 0){
                            factorialsum = factorialsum * factorial;
                            factorial--;

                        }
                    
                    }
                    return factorialsum
                }
            }
            else{
                throw error
            }
        }
        else{
            throw error
        }
        
    }

    /* Provide an implementation that returns true if a number is odd, and false if the number is even */
    /* CONDITION: You may not use the modulus (%) operator */
    this.isOdd = function(value) {
        if(typeof(value)==='number'){
            //divides the number by 2 and then checks if it is an Integer to determine if it is
            //odd or even.  (odd would not be an integer i.e:  15/2 = 7.5)
            value = value/2;
            if(Number.isInteger(value)){
                return false
            }
            else{
                return true
            }

        }
        else{
            throw error
        }
        
    }

    /* Provide an implementation that finds the nth term in the Fibonacci Sequence */
    /* HINT: The first two terms are 1 */
    this.termInFibonacciSequence =  function(n) {
        if((typeof(n)==='number') && (n > 0)){
            
            //recursively runs through from n until the base case of 1 and 2 which both
            //return 1 and adds all the values up
            if(n === 1 || n === 2){
                return 1
            }
            else{
                return (this.termInFibonacciSequence((n - 1)) + this.termInFibonacciSequence((n-2)))
            }

        }
        else{
            throw error
        }
        
    };
};