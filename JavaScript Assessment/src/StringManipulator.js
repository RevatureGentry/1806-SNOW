function StringManipulator() {

    /* Provide an implementation that returns true if a string is a palindrome, and false if the string is not */
    /* CONDITION: you may not use String.prototype.reverse() */
    this.isPalindrome = function(value) {
        let len = value.length;
        let i = 0;
        if(typeof(value) != 'string'){
            throw Error('Not a string');
        }
        for(i; i < len/2; i++){
            if(value.charAt(i) != value.charAt(len - i)){
                return false;
            }
        }
        return true;
    }

    /* Provide an implementation that reverses a string */
    /* CONDITION: you may only use String.prototype.charAt() */
    this.reverseString = function(value) {
        let newString = "";
        let len = value.length;
        if(typeof(value) != 'string'){
            throw Error('Not a string');
        }
        while(len > -1){
            newString += value.charAt(len);
        }
        return newString;
    }

    /* Provide an implementation that counts and returns the occurence of the letter "B" in a string */
    this.countBs = function(value) {
        let i = 0;
        let count = 0;
        if(typeof(value) != 'string'){
            throw Error('Not a string');
        }
        for(i; i < value.length; i++){
            if(value.charAt(len) == 'B'){
                count += 1;
            }
        }
        return count;
    }

    /* An abstraction of the previous function, provide an implementation that counts and returns the  */
    /* Occurence of the letter 'char' in the String 'value' */
    this.countCharInString = function(value, char) {
        let i = 0;
        let count = 0;
        if(typeof(value) != 'string'){
            throw Error('Not a string');
        }
        for(i; i < value.length; i++){
            if(value.charAt(len) == char){
                count += 1;
            }
        }
        return count;
    }
}