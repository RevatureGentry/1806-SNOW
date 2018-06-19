let Calculator = function() {

    /* Provide an implementation that sums the elements in an array */
    this.sum = function(array) {
        var answer = 0;
		for(var i=0; i<array.length;i++){
			if(typeof array[i] != 'number')
				throw new Error();
			answer+=array[i];
		}
		return answer;
    };

    /* Provide an implementation that finds the factorial of value (value!) */
    this.factorial = function(value) {
        var answer = 1;
	for(var i = value;i>1;i--){
		answer = answer*i;
	}
	return answer;
    };

    /* Provide an implementation that returns true if a number is odd, and false if the number is even */
    /* CONDITION: You may not use the modulus (%) operator */
    this.isOdd = function(value) {
        var v = value/2;
		var x = value/v;
		if(x){
			return false;
		}
		else{
			return true;
		}
    };

    /* Provide an implementation that finds the nth term in the Fibonacci Sequence */
    /* HINT: The first two terms are 1 */
    this.termInFibonacciSequence =  function(n) {
        var one = 1;
	var two = 1;
	var three;
	for(var i = 2; i< value;i++)
	{
		three = one+two;
		one = two;	
		two = three;
	}
	return two;
    };
};