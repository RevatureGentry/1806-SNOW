function StringManipulator() {

    /* Provide an implementation that returns true if a string is a palindrome, and false if the string is not */
    /* CONDITION: you may not use String.prototype.reverse() */
    this.isPalindrome = function(value) {
        if (typeof(value) !== "string"){
            throw new Error();
        }
        else {
            value = value.replace(/\s/g, '');
            let strLen = value.length - 1;
            for (i=0; i <= Math.floor(strLen/2); i++){
                if (value.charAt(i) !== value.charAt(strLen - i)){
                    return false;
                }  
            }
            return true;
        }
    }

    /* Provide an implementation that reverses a string */
    /* CONDITION: you may only use String.prototype.charAt() */
    this.reverseString = function(value) {
        if (typeof(value) !== "string"){
            throw new Error();
        }
        else {
            let strLen = (function() {
                let i = 0;
                while (value.charAt(i) !== "") {
                    i = i + 1;
                }
                return i - 1;
            })();
            let strReversed = "";
            for (i=strLen; i >=0; i--){
                strReversed += value.charAt(i)
            }
            return strReversed;
        }
    }

    /* Provide an implementation that counts and returns the occurence of the letter "B" in a string */
    this.countBs = function(value) {
        if (typeof(value) !== "string"){
            throw new Error();
        }
        else {
            let bCounter = 0;
            for (i=0; i < value.length; i++){
                if (value.charAt(i) == "B") {
                    bCounter += 1;
                }
            }
            return bCounter;
        }
    }

    /* An abstraction of the previous function, provide an implementation that counts and returns the  */
    /* Occurence of the letter 'char' in the String 'value' */
    this.countCharInString = function(value, char) {
        if (typeof(value) !== "string" || typeof(char) !== "string"){
            throw new Error();
        }
        else {
            let charCounter = 0;
            let strLen = value.length;
            let charLen = char.length;
            for (i=0; i < strLen - charLen; i++){
                if (value.substring(i, (i + charLen)) == char){
                    charCounter += 1;
                }
            }
            return charCounter;
        }
    }
}
