function StringManipulator() {

    /* Provide an implementation that returns true if a string is a palindrome, and false if the string is not */
    /* CONDITION: you may not use String.prototype.reverse() */
    this.isPalindrome = function(value) {
        if(typeof(value) !== 'string') {
            throw new Error("input is not a string");
        }

        if(value.length === 0) {
            return true;
        }

        //Iterate from both ends. O(N)?.
        let str = value.replace(/\s/g, "");
        for(let i = 0; i < Math.floor(str.length / 2); i++) {
            if(str.charAt(i) !== str.charAt(str.length - 1 - i)) {
                return false;
            }
        }

        return true;
        
    }

    /* Provide an implementation that reverses a string */
    /* CONDITION: you may only use String.prototype.charAt() */
    this.reverseString = function(value) {
        if(typeof(value) !== 'string') {
            throw new Error("input is not a string");
        }

        if(value.length === 0) {
            return "";
        }

        let result = "";
        for(let i = value.length - 1; i >= 0; i--) {
            result += value.charAt(i);
        }

        return result;
    }

    /* Provide an implementation that counts and returns the occurence of the letter "B" in a string */
    this.countBs = function(value) {
        if(typeof(value) !== 'string') {
            throw new Error("input is not a string");
        }

        let count = 0;
        for(let i = 0; i < value.length; i++) {
            if(value.charAt(i) === "B") {
                count += 1;
            }
        }

        return count;
    }

    /* An abstraction of the previous function, provide an implementation that counts and returns the  */
    /* Occurence of the letter 'char' in the String 'value' */
    this.countCharInString = function(value, char) {
        if(typeof(value) !== 'string') {
            throw new Error("value is not a string");
        }

        if(typeof(char) !== 'string') {
            throw new Error('char is not a string');
        }

        if(typeof(value) !== 'string') {
            throw new Error("input is not a string");
        }

        let count = 0;
        for(let i = 0; i < value.length; i++) {
            if(value.substring(i, i + char.length) === char) {
                count += 1;
            }
        }

        return count;
    }
}
