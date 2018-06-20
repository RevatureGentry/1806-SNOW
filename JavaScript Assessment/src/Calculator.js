let Calculator = function() {
    var notMyFirstTime = new Boolean(false);

    /* Provide an implementation that sums the elements in an array */
    this.sum = function(array) {
        
         var total = 0;
         for (i = 0;i < array.length;i++){
            if(isNaN(array[i])){
                throw new Error;
            }
             total += array[i];
         }
         return total;
    };
    

    /* Provide an implementation that finds the factorial of value (value!) */
    this.factorial = function(value) {

        if(value < 0){
            throw new Error;
        }
        else if(isNaN(value)){
            throw new Error;
        }
        else if(typeof value === 'boolean'){
            throw new Error;
        }
        else if(value instanceof Array){
            throw new Error;
        }
        else if(value === 0){
            return 1;
        }
        else
        {
            for(i = value-1;i > 0;i--)
            {
                value *=i;
            }
        }
        return value;
    }

    /* Provide an implementation that returns true if a number is odd, and false if the number is even */
    /* CONDITION: You may not use the modulus (%) operator */
    this.isOdd = function(value) {
        var isEven = new Boolean(true);
        if(typeof value === 'boolean'){
            throw new Error;
        }
        else if(isNaN(value)){
            throw new Error;
        }
        for(var i =0; i < value;i++){
            if(isEven) {
                isEven = false;
            }
            else {
                isEven = true;
            } 
        }
        return !isEven;


    }

    /* Provide an implementation that finds the nth term in the Fibonacci Sequence */
    /* HINT: The first two terms are 1 */
    this.termInFibonacciSequence =  function(n) {
        
        if(isNaN(n))
        {
            throw new Error;
        }
        else if(typeof(n)=== 'boolean'){
            throw new Error;
        }
        else if(n<0 && notMyFirstTime==false){
            throw new Error;
            
        }
        else if(n<=1){
            return n;
        }
            notMyFirstTime=true;
            return this.termInFibonacciSequence(n-1) + this.termInFibonacciSequence(n-2);
        
    };
    
};



