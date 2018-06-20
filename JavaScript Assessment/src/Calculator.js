let Calculator = function() {

    /* Provide an implementation that sums the elements in an array */
    this.sum = function(array) {
		var s = 0;
		console.log("Let's do this");
		var i;
		for (i = 0; i < array.length; i++) {
			if(typeof array[i] !== 'number'){
				throw new Error();
			}
			s += array[i];	
			console.log(s);
		}
		return s;	
    };

    /* Provide an implementation that finds the factorial of value (value!) */
    this.factorial = function(value) {
		if(typeof value !== 'number'){
			throw new Error();
		}
		if(value < 0){
			throw new Error();
		}
		let s = 1;
		for(i=1; i <= value; i++){
			s = s*i;
		}
        return s;
    }

    /* Provide an implementation that returns true if a number is odd, and false if the number is even */
    /* CONDITION: You may not use the modulus (%) operator */
    this.isOdd = function(value) {
		if(typeof value !== 'number'){
			throw new Error();
		}
        let div = value / 2;
		if(div !== Math.floor(div)){
			return true;
		}
		return false;
    }

    /* Provide an implementation that finds the nth term in the Fibonacci Sequence */
    /* HINT: The first two terms are 1 */
    this.termInFibonacciSequence =  function(n) {
        if(typeof n !== 'number'){
			throw new Error();
		}
		if(n < 0){
			throw new Error();
		}
		if(n===1 || n===2){
			return 1;
		}
		let a = 1;
		let b = 1;
		let s = 0;
		for(i=3; i <= n; i++){
			s = a+b;
			a=b;
			b=s;
		}
		return s;
    };
};