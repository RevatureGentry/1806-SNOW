function StringManipulator() {

    /* Provide an implementation that returns true if a string is a palindrome, and false if the string is not */
    /* CONDITION: you may not use String.prototype.reverse() */
    this.isPalindrome = function(value) {
        if( typeof value === 'string'){
            var re = /[\W_]/g;
            value = value.toLowerCase().replace(re,'');
            var len = value.length;
            for(var i =0; i < len/2; i++){
                if(value[i] !== value[len - 1 - i]){
                    return false;
                }
                return true; 
            }
        }else{
            throw new error("not a string");
        }
        
    }

    /* Provide an implementation that reverses a string */
    /* CONDITION: you may only use String.prototype.charAt() */
    this.reverseString = function(value){
        if( typeof value === 'string'){   
            if(value == ""){
                return "";
            }else{
            return this.reverseString(value.substr(1)) + value.charAt(0);
            }

        }else{
            throw new error("not a string");
        }

    }

    /* Provide an implementation that counts and returns the occurence of the letter "B" in a string */
    this.countBs = function(value) {
        var countTheB = "B"
        if( typeof value === 'string'){
            for(var i = count =0; i < value.length; count+=+(countTheB===value[i++]));
            return count;
        }else{
            throw new error("not a string");
                
        }
    }

    /* An abstraction of the previous function, provide an implementation that counts and returns the  */
    /* Occurence of the letter 'char' in the String 'value' */
    this.countCharInString = function(value, char) {
        var countTheChar = char;
        var charLength = char.length;
        if( typeof value === 'string' && typeof char === 'string'){
            for(var i = count = -1; i < value.length; count+=(countTheChar===value.substring(i, i + charLength))){
                i++;
            }
            return count + 1;
        }else{
            throw new error("not a string");
        }
    }
}