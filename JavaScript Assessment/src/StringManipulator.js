function StringManipulator() {

    /* Provide an implementation that returns true if a string is a palindrome, and false if the string is not */
    /* CONDITION: you may not use String.prototype.reverse() */
    this.isPalindrome = function(value) {
        if(typeof value !== 'string'){
			throw new Error();
		}
		let a = 0;
		let b = value.length-1;
		while(a<b){
			if(value[a] !== value[b]){
				return false;
			}
			a += 1;
			b -= 1;
			while(value[a] === ' '){
				a += 1;
			}
			while(value[b] === ' '){
				b -= 1;
			}
		}
		return true;
    }

    /* Provide an implementation that reverses a string */
    /* CONDITION: you may only use String.prototype.charAt() */
    this.reverseString = function(value) {
        if(typeof value !== 'string'){
			throw new Error();
		}
		let rev = "";
		let i = 0;
		let check = value.charAt();
		while(check != ""){
			rev = value.charAt(i) + rev;
			i += 1;
			check = value.charAt(i);
		}
		console.log(rev);
		return rev;
    }

    /* Provide an implementation that counts and returns the occurence of the letter "B" in a string */
    this.countBs = function(value) {
		if(typeof value !== 'string'){
			throw new Error();
		}
		let num = 0;
		for(i=0; i < value.length; i++){
			if(value[i] === 'B'){
				num += 1;
			}
		}
		return num;
    }

    /* An abstraction of the previous function, provide an implementation that counts and returns the  */
    /* Occurence of the letter 'char' in the String 'value' */
    this.countCharInString = function(value, char) {
		if(typeof value !== 'string'|| typeof char !== 'string'){
			throw new Error();
		}
		let num = 0;
		let len = char.length; //On the offchance that you read this, I'd just like to point out that it really doesn't make sense that you define char as a "letter" but then let it be more than one character long, even though every letter is one character long.
		let temp = "";
		for(i=0; i < value.length; i++){
			temp = value.substr(i, len);
			if(temp === char){
				num += 1;
			}
		}
		return num;
    }
}