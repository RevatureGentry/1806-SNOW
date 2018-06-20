let Calculator = function() {

    /* Provide an implementation that sums the elements in an array */
    this.sum = function(array) {
        let s = 0;
        for (let i = 0; i < array.length; i++){
            if(!isNaN(array[i])){
                s += array[i];
            }
            else{
                throw Error('Not a number');
            }
        }
        return s;
    };

    /* Provide an implementation that finds the factorial of value (value!) */
    this.factorial = function(value) {
        let f = 0;
        if(value < 0){
            throw Error('Negative');
        }
        if(isNaN(value)){
            throw Error('Not a number');
        }
        while(value > 0){
            f += value;
            value -= 1;
        }
        return f;
    }

    /* Provide an implementation that returns true if a number is odd, and false if the number is even */
    /* CONDITION: You may not use the modulus (%) operator */
    this.isOdd = function(value) {
        if(isNaN(value)){
            throw Error('Not a number');
        }
        while(value > 1){
            value -= 2;
        }
        if(value == 1){
            return true;
        }
        else{
            return false;
        }
    }

    /* Provide an implementation that finds the nth term in the Fibonacci Sequence */
    /* HINT: The first two terms are 1 */
    this.termInFibonacciSequence =  function(n) {
        let temp1 = 1;
        let temp2 = 1;
        let move = 0;
        let curr = 0;
        if(isNaN(value)){throw Error('Not a Number');}
        if(value < 0){throw Error('Negative');}

        if (n = 1){return 1}
        if (n = 2){return 2}
        while(n > 0){
            move = curr;
            curr = temp1 + temp2;
            temp1 = temp2;
            temp2 = curr;
        }
        return curr;
    };
};
