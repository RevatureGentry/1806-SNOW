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
        if(typeof value !== 'number')
			throw new Error('must be a number');
		else if(value < 0)
			throw new Error('no negative values allowed');
		
        var answer = 1;
	for(var i = value;i>1;i--){
		answer = answer*i;
	}
	return answer;
    };

    /* Provide an implementation that returns true if a number is odd, and false if the number is even */
    /* CONDITION: You may not use the modulus (%) operator */
    this.isOdd = function(value) {
		if(typeof value !== 'number')
			throw new Error('must be a number');
		var v = []
        v = value/2 + '';
		if(v[v.length-2] == ".")
		{
			if(v[v.length-1]=="5")
			{
				return true;
			}
			else {return false;}
		}
		else{
			return false;
		}
    };

    /* Provide an implementation that finds the nth term in the Fibonacci Sequence */
    /* HINT: The first two terms are 1 */
    this.termInFibonacciSequence =  function(n) {
		if(typeof n !== "number")
			throw new Error("muyst be a number");
		else if(n <= 0)
			throw new Error("cannot be negative");
        var one = 1;
		var two = 1;
		var three;
	for(var i = 2; i< n;i++)
	{
		three = one+two;
		one = two;	
		two = three;
	}
	return two;
    };
};