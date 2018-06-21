let Calculator = function() {

    /* Provide an implementation that sums the elements in an array */
    this.sum = function(array) {
        console.log("Start of sum. array passed: ", array);
        //Check if array is an array.
        if (Array.isArray(array)) {
            for (let i = 0; i < array.length; i++) { //Check each value of the array for non-numbers.
                if (typeof(array[i]) !== 'number') {
                    console.log("Error: not a number.\nEnd of Sum.");
                    throw new Error();
                }
            }
        }
        else { //If array is not an array, throw an error. 
            console.log("Error: Value passed is not an array.\nEnd of sum.") 
            throw new Error(); 
        }
        console.log("No Errors Found. Proceeding with calculation.");
        let arraySum = 0;
        for (let i = 0; i < array.length; i++) {
            arraySum += array[i];
        }
        console.log("Sum of ",array," is "+arraySum + "\nEnd of sum.");
        return arraySum;
    };

    /* Provide an implementation that finds the factorial of value (value!) */
    this.factorial = function(value) {
        //Check if the value is a number, that's greater than or equal to zero, and if it's an integer.
        if (typeof(value) !== 'number' || (value < 0) || (value - Math.trunc(value) != 0)) {
            throw new Error();
        }
        if (value === 0) return 1; //If value is 0, return 1. 
        let f = 1;
        for (let i = 1; i <= value; i++) { //Count up to value and multiply f each step of the way.
            f = f * i;
        }
        return f;
    }

    /* Provide an implementation that returns true if a number is odd, and false if the number is even */
    /* CONDITION: You may not use the modulus (%) operator */
    this.isOdd = function(value) {
        if (typeof(value) !== 'number') { //If value is not a number, throw an error.
            throw new Error();
        }
        else {
            console.log("In isOdd, value="+value);
            let div = Math.trunc(value/2); //Divide value by two, get rid of the decimal.
            console.log("trunc(Value/2) => ", Math.trunc(value/2) + "\n"+div+"*2 === "+div*2);
            if (div*2 === value) {
                console.log("Value "+value+" evaluated to be even.");
                return false;
            }
            else return true;
        }

        //Alternate method: calculate -1^value. if -1, the number is odd. if 1, it's even. 
    }

    /* Provide an implementation that finds the nth term in the Fibonacci Sequence */
    /* HINT: The first two terms are 1 */
    this.termInFibonacciSequence =  function(n) {
        if (typeof(n) !== 'number' || n < 0) {
            console.log("ERROR in Fibonacci. n isn't a positive number.");
            throw new Error();
        }
        if (n <= 2) {
            return 1;
        }
        //Recursion Method
        /* else {
            return (this.termInFibonacciSequence(n-1) + this.termInFibonacciSequence(n-2));
        } */

        //For loop method
        let nVal = 0;
        let firstVal = 1;
        let secondVal = 1;
        for (let i = 0; i < n-2; i++) {
            nVal = firstVal + secondVal;
            firstVal = secondVal;
            secondVal = nVal;
        }
        console.log(`${n}th term of Fibonacci: ${nVal}`);
        return nVal;
    };
};