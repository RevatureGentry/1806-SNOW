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
        // let's find the length of the string, since length is a no-no
        value += "0";
        let curr_idx = 1;
        len = 0;
        while(value.charAt(curr_idx) != "0"){
            len += 1;
            curr_idx += 1;
        }

        if(len <= 1) return value;
        var res = "";
        //var len = value.length - 1;
        while(len > -1){
            res = res + value.charAt(len);
            len -= 1;
            //value = value.substring(1, len);
        }
        return res;
        
    }

    /* Provide an implementation that counts and returns the occurence of the letter "B" in a string */
    this.countBs = function(value) {
        var res = 0;
        var curr_idx = 0;
        if (typeof value == 'number' || typeof value == 'boolean' ||
            value instanceof Object) {
            throw new Error("INVALID INPUT FOR VALUE!");
        }
        while(curr_idx != value.length){
            if(value.charAt(curr_idx) === 'B')
                res += 1;
            curr_idx += 1;
        }
        return res;
    }

    /* An abstraction of the previous function, provide an implementation that counts and returns the  */
    /* Occurence of the letter 'char' in the String 'value' */
    this.countCharInString = function(value, char) {
        if (typeof value == 'number' || typeof char == 'number' || typeof value == 'boolean'
        || typeof char == 'boolean' || value instanceof Object || char instanceof Object) {
            throw new Error("INVALID INPUT FOR VALUE!");
        }
        let res = 0;
        let curr_idx = 0;
        let char_size = char.length;
        while (curr_idx + char_size != value.length) {
            if (value.substring(curr_idx, curr_idx + char_size) === char)
                res += 1;
            curr_idx += 1;
        }
        return res;

    }
}