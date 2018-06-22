let Calculator = function() {

    /* Provide an implementation that sums the elements in an array */
    this.sum = function(array) {
        
            
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        if(typeof (array.reduce(reducer)) === "number") {
            let answer =(array.reduce(reducer));
            return answer;
        }
        else{
            throw new Error;
        }
    }
    

    /* Provide an implementation that finds the factorial of value (value!) */
    this.factorial = function(value) {

        if(typeof value ==="number" && value >= 0){
        var result = value;
        if (value === 0 || value === 1){ 
            return 1; 
        }
        while (value > 1) { 
            value--;
            result *= value;
        }
            return result;
        }
        else{
            throw new Error;
        }
    }

    /* Provide an implementation that returns true if a number is odd, and false if the number is even */
    /* CONDITION: You may not use the modulus (%) operator */
    this.isOdd = function(value) {
        
        if(typeof value ==="number"){
    
        
            if((value & 1) == 1){
                return true;
            }
            else{
                return false;
            }
                }
        else{
            throw new Error;
        }
    }

    /* Provide an implementation that finds the nth term in the Fibonacci Sequence */
    /* HINT: The first two terms are 1 */
    this.termInFibonacciSequence =  function(n) {

    if(typeof n === "number" && n>=0){
    var a = 1, b = 0, temp;
    while (n >= 1){
        temp = a;
        a = a + b;
        b = temp;
        n--;
    }
    return b;
    }
    else{
        throw new Error;
    }        
    }
};