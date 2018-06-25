let Calculator = function() 
{

    /* Provide an implementation that sums the elements in an array */
    this.sum = function(array) 
    {

        var total = 0;
        
             
        for (var i = 0; i < array.length; i++)
        {
                    if(typeof(array[i]) !== "number")
                        {
                            throw new Error();
                        }
                    
                    else
                    {   
                    total = total + array[i];
                    }
        }        
             return total;
    };

    /* Provide an implementation that finds the factorial of value (value!) */
    this.factorial = function(value) 
    {

        if (typeof value !== 'number' || value <= -1)
            {
                throw new error();
            }
    
        if (value === 0 || value === 1)
            {
                return 1;
            }
       
         else for(var i = value - 1; i>=1; i--)
            {
                value *= i;
            }
            return value;

        
    }

    /* Provide an implementation that returns true if a number is odd, and false if the number is even */
    /* CONDITION: You may not use the modulus (%) operator */
    this.isOdd = function(value) {

       if(typeof value !== 'number')
        {
            throw new error();
        }
       else 
       {
            return (value & 1) ? "odd" : "even";
       }
            
        
    }

    /* Provide an implementation that finds the nth term in the Fibonacci Sequence */
    /* HINT: The first two terms are 1 */
    this.termInFibonacciSequence =  function(n) 
    {

        
            var a = 1, b = 0, temp;
           
           
            if (typeof n !== 'number' || n <= -1)
            {
               throw new error();
            }
           
           while (n > 0)
            {
                    temp = a;
                    a = a + b;
                    b = temp;
                    n--;
            }
                return b;
    };
};