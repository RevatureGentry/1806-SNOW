function StringManipulator() {

    /* Provide an implementation that returns true if a string is a palindrome, and false if the string is not */
    /* CONDITION: you may not use String.prototype.reverse() */
    this.isPalindrome = function(value) {
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

    /* Provide an implementation that reverses a string */
    /* CONDITION: you may only use String.prototype.charAt() */
    this.reverseString = function(value) {
        var j = value.length-1;
		var i = 0;
		var pop=[];
		for(;j>=0;j--){
			pop[i] = value[j];
			i++;
		}
		return pop.join("");
    }

    /* Provide an implementation that counts and returns the occurence of the letter "B" in a string */
    this.countBs = function(value) {
	var bee = 'B';
	var count = 0;
	for(var i = 0; i<value.length;i++){
		if(value[i] == bee){
			count++;
		}
	}
	return count;
    }

    /* An abstraction of the previous function, provide an implementation that counts and returns the  */
    /* Occurence of the letter 'char' in the String 'value' */
    this.countCharInString = function(value, char) {
var bee = char;
	var count = 0;
	for(var i = 0; i<value.length;i++){
		if(value[i] == bee){
			count++;
		}
	}
	return count;
    }
}