let Calculator = function() {

    /* Provide an implementation that sums the elements in an array */
    this.sum = function(array) {
        
        if ( typeof array !== 'string'){

         return array.reduce(function(a,b){
            if (isNaN(a) || isNaN(b)){
                throw new error("not a Number"); 
            }else{ 
                return a + b
            }
          }, 0);  
        }else{
            throw new error("not a Number");
        } 
        
    };

    /* Provide an implementation that finds the factorial of value (value!) */
    this.factorial = function(value) {
        if(typeof value === 'number' && value >= 0){
            if (value === 0|| value === 1){
                return 1;
            }
            for(var i = value - 1; i >= 1; i--){
                value *= i;
            }
            return value;
        }else{
            throw new error("not a Number");
        }
    }

    /* Provide an implementation that returns true if a number is odd, and false if the number is even */
    /* CONDITION: You may not use the modulus (%) operator */
    this.isOdd = function(value) {
        if( typeof value === 'number'){
            return ( value & 1 ) ? true : false;
        }else{
            throw new error("not a Number");
        }
    }

    /* Provide an implementation that finds the nth term in the Fibonacci Sequence */
    /* HINT: The first two terms are 1 */
    this.termInFibonacciSequence =  function(n) {
        var a = 0;
        var b =1; 
        var temp;
        if( typeof n === 'number' && n >= 1){

            while(n >=0){
                temp = a;
                a = a + b;
                b = temp;
                n--;
            }
        return b;
    }else{
        throw new error("not a Number");
    }
    };
};