function StringManipulator() {

    /* Provide an implementation that returns true if a string is a palindrome, and false if the string is not */
    /* CONDITION: you may not use String.prototype.reverse() */
    this.isPalindrome = function(value) {
		if(typeof value !== 'string'){
			throw new Error("must be a string");
		}
		value.trim
        var j = value.length-1;
		for(var i=0;i<value.length/2;i++){
			if(value[i] == " "){
				i++;
			}
			if(value[j] == " ")
			{
				j--;
			}
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
		if(typeof value !== "string")
			throw new Error("must be a string");
		var k=0;
		var count = 0;
		var temp = [];
		while(value.charAt(k) != ""){
			temp[k] = value.charAt(k);
			count++;
			k++;
		}
		var j = count;
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
		if(typeof value !== "string")
			throw new Error("must be a string");
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
		if(typeof value !== "string")
			throw new Error("must be a string");
		else if(typeof char !== "string")
			throw new Error("must be a string");
	var bee = char;
	var count = 0;
	for(var i = 0; i<value.length;i++){
		for(var j = 0; j< bee.length;j++){
			if(value[i] === bee[j]){
				if(j == bee.length-1)
				{
					count++;
				}
				i++;
			}
			else{
				break;
			}
		}
	}
	return count;
    }
}