let Calculator = function() {

    /* Provide an implementation that sums the elements in an array */
    this.sum = function(array) {
        
        var sum = 0;
        for(let i=0;i<array.length;i++){
            sum += array[i];            
            if(typeof array[i] != 'number') throw Error("Not a number");
        }
        return(sum);
    };

    /* Provide an implementation that finds the factorial of value (value!) */
    this.factorial = function(value) {
        if(typeof value != 'number') throw Error("not a number");
        if(value<0){
            throw Error("negative");
        }
        else if(value==0){
            return 1;
        }
        else if(value==1){
            return 1;
        }
        else{
            var f = value;
            while(value>1){
                value--;
                f *= value;
            }
            return f;
        }
    }

    /* Provide an implementation that returns true if a number is odd, and false if the number is even */
    /* CONDITION: You may not use the modulus (%) operator */
    this.isOdd = function(value) {
        if(typeof value != 'number') throw Error("not anumber");
        if(value<0) throw Error('negative');
        while(value>1){
            value -= 2;
        }
        if(value == 0){
            return false;
        }   
        else{
            return true;
        }
    }

    /* Provide an implementation that finds the nth term in the Fibonacci Sequence */
    /* HINT: The first two terms are 1 */
    this.termInFibonacciSequence =  function(n) {
        if(typeof n != 'number') throw Error('not a number');
        if(n<0) throw Error('negative');
        if(n==1 || n==2){
            return 1;
        }
        var one = 1;
        var two = 1;
        while(n>=2){
            var temp = one;
            one += two;
            two = temp;
            n--;
        }
        return two;
    };
};