function StringManipulator() {

    /* Provide an implementation that returns true if a string is a palindrome, and false if the string is not */
    /* CONDITION: you may not use String.prototype.reverse() */
    this.isPalindrome = function(value) {
        if(typeof value === "string"){
            value = value.replace(/ /g,"");
            length = 0;
            while((value.charAt(length)!=="")){length = length + 1;}
            for(let i=0;i<Math.floor(length/2);i++){
                if(value.charAt(i)!==value.charAt(length-1-i)){
                    return false;
                }
            }return true;
        } else throw new error()
    }

    /* Provide an implementation that reverses a string */
    /* CONDITION: you may only use String.prototype.charAt() */
    this.reverseString = function(value) {
        if(typeof value === "string"){
            length = 0;
            index = 0;
            while((value.charAt(length)!=="")){length = length + 1;}
            result = "";
            for(let i=0; i < length;i++){
                result =  result + value.charAt(length-1-i);
            }return result;
        } else throw new error()
    }

    /* Provide an implementation that counts and returns the occurence of the letter "B" in a string */
    this.countBs = function(value) {
        if(typeof value === "string"){
            result = 0;
            for(let i=0; i < value.length-1; i++){
                if(value.charAt(i)==="B"){
                    result = result + 1;
                }
            }return result;
        } else throw new error()

    }

    /* An abstraction of the previous function, provide an implementation that counts and returns the  */
    /* Occurence of the letter 'char' in the String 'value' */
    this.countCharInString = function(value, char) {
        if(typeof value === "string" && typeof char === "string"){
            result = 0;
            charLength = char.length;
            valueLength = value.length;
            if (valueLength < charLength || char === ""){return result;
            } else 
                {   for(let i=0; i < valueLength - charLength; i++){
                    substring = value.substring(i, i + charLength)
                    if(substring===char){
                    result = result + 1;
                    }
                }
            }return result;
        } else throw new error()
    }
}