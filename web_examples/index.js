console.log("helloworld");
function arise(){
	var doc = document;
	var s = doc.getElementById("he1");
	if(!NaN)
	{
		console.log(typeof arise);
	}
	else{
	}
	console.log(null == false);
	
}
arise();

function sum(array){
	var answer = 0;
		for(var i=0; i<array.length;i++){
			if(typeof array[i] != 'number')
				throw new Error("invalid array");
			answer+=array[i];
		}
		return answer;
};
var a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

function factorial(value){
	var answer = 1;
	for(var i = value;i>1;i--){
		answer = answer*i;
	}
	return answer;
}
var val = 3;
console.log(factorial(val));

function isOdd(value){
	var answer = value/2;
	
	return answer;
}

function fibonacciSequence(value)
{
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
}
console.log(fibonacciSequence(6));

function isPalindrome(value){
	var j = value.length-1;
	for(var i=0;i<value.length/2;i++){
		if(value[i] !== value[j]){
			return false;
		}
		else{
			j--;
		}
	}
	return true;
}
console.log(isPalindrome("jooj"));

function reverseString(value){
	var j = value.length-1;
	var i = 0;
	var pop=[];
	for(;j>=0;j--){
		pop[i] = value[j];
		i++;
	}
	return pop.join("");
}

console.log(reverseString("power"));

function countBs(value){
	var bee = 'B';
	var count = 0;
	for(var i = 0; i<value.length;i++){
		if(value[i] == bee){
			count++;
		}
	}
	return count;
}

console.log(countBs("hiBasfBadfBBBB"));

function countCharInString(value,char){
	var bee = char;
	var count = 0;
	for(var i = 0; i<value.length;i++){
		if(value[i] == bee){
			count++;
		}
	}
	return count;
}
console.log(countCharInString("thomaslaiAASDasfaa","a"));


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

let calc = new Calculator();

console.log(calc.sum([Math.E, Math.PI, 10]));
console.log(typeof (calc.sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])))