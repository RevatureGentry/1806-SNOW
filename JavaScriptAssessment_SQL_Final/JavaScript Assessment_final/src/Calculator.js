let Calculator = function() {

    /* Provide an implementation that sums the elements in an array */
    this.sum = function(array) {
        
        let total=0;
        for(let i=0;i<array.length;i++){
           if(typeof array[i]== typeof 1)
            total=total + array[i];
            else throw new Error();
            
        }
        return total;
    };

    /* Provide an implementation that finds the factorial of value (value!) */
    this.factorial = function(value) {
        let factValue=1;
        if(value >=0 && (typeof value== typeof 1)){
            if(value ==0)
             return 1;
            else if (value== 1) 
            {
              return 1;  
            } 
            else {
                for(let i=2;i<=value;i++){
                    factValue=factValue*i;

                }
                
            }
        }
        else throw new Error();
        return factValue;
        
        
    }

    /* Provide an implementation that returns true if a number is odd, and false if the number is even */
    /* CONDITION: You may not use the modulus (%) operator */
    this.isOdd = function(value) {
let a;
        let testValue=1;
        
        if(typeof value== typeof 1){
            for(let i=1; i<=value;i++){
                testValue=testValue*(-1);

            }
            if(testValue>=0)
                a= false;
        else  a=true;
        }
        else throw new Error();
    return a;
    }

    /* Provide an implementation that finds the nth term in the Fibonacci Sequence */
    /* HINT: The first two terms are 1 */
    this.termInFibonacciSequence =  function(n) {
    
        if((typeof n == typeof 1) && n>0){

            if (n==1 || n==2) return 1;
            else return this.termInFibonacciSequence(n-1)+ this.termInFibonacciSequence(n-2);
            

        }
        else throw new Error();
        
    };
};