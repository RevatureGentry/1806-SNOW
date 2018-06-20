function StringManipulator() {

    /* Provide an implementation that returns true if a string is a palindrome, and false if the string is not */
    /* CONDITION: you may not use String.prototype.reverse() */
    this.isPalindrome = function(value) {
        if (typeof value == 'number' || typeof value == 'boolean' ||
            value instanceof Array || value instanceof Object) {
            throw new Error("INVALID INPUT FOR VALUE!");
        }
        if(value.length % 2 == 1 && value.length > 2){
            if(value.charAt(0) != value.charAt(value.length -1)){
                return false;
            }
            else return this.isPalindrome(value.substring(1, value.length - 2));
        }
        return true;
    }

    /* Provide an implementation that reverses a string */
    /* CONDITION: you may only use String.prototype.charAt() */
    this.reverseString = function(value) {
        if (typeof value == 'number' || typeof value == 'boolean' ||
            value instanceof Object) {
            throw new Error("INVALID INPUT FOR VALUE!");
        }
        if(value.length <= 1) return value;
        var res = "";
        var len = value.length - 1;
        while(value.length > 1){
            res += value.prototype.charAt(len);
            len -= 1;
            value = value.substring(1, len);
        }
        return res;
        
    }

    /* Provide an implementation that counts and returns the occurence of the letter "B" in a string */
    this.countBs = function(value) {

    }

    /* An abstraction of the previous function, provide an implementation that counts and returns the  */
    /* Occurence of the letter 'char' in the String 'value' */
    this.countCharInString = function(value, char) {

    }
}