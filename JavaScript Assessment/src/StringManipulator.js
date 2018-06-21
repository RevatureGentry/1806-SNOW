function StringManipulator() {

    /* Provide an implementation that returns true if a string is a palindrome, and false if the string is not */
    /* CONDITION: you may not use String.prototype.reverse() */
    this.isPalindrome = function(value) {
        if(typeof value !== typeof "string"){
            throw new Error();
        }
        for(var i = 0; i < value.length; i++){
            value = value.replace(" ", "");
        }
        for(var i = 0; i <= value.length/2; i++){
            if(value[i] !== value[value.length-1-i]){
                return false;
            }
        }
        return true;
    }

    /* Provide an implementation that reverses a string */
    /* CONDITION: you may only use String.prototype.charAt() */
    this.reverseString = function(value) {
        if(typeof value !== typeof "string"){
            throw new Error();
        }
        var Rvalue = "";
        var length = 0;
        while(value.charAt(length) !== ""){
            length++
        }
        for(var i = length; i >= 0; i--){
            Rvalue = Rvalue.concat(value.charAt(i));
        }
        return Rvalue
    }

    /* Provide an implementation that counts and returns the occurence of the letter "B" in a string */
    this.countBs = function(value) {
        if(typeof value !== typeof "string"){
            throw new Error();
        }
        var count = 0;
        for(var i = 0; i < value.length; i++){
            if(value.charAt(i) === "B"){
                count++;
            }
        }
        return count;
    }

    /* An abstraction of the previous function, provide an implementation that counts and returns the  */
    /* Occurence of the letter 'char' in the String 'value' */
    this.countCharInString = function(value, char) {
        if(typeof value !== typeof "string" || typeof char !== typeof "string" || char === ""){
            throw new Error();
        }
        var count = 0;
        var index = value.indexOf(char, 0);
        while(index !== -1){
            count++;
            index = value.indexOf(char, index+1);
            console.log(index);
        }
        return count;
    }
}