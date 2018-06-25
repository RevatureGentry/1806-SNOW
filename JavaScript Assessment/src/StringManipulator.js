function StringManipulator() {

    /* Provide an implementation that returns true if a string is a palindrome, and false if the string is not */
    /* CONDITION: you may not use String.prototype.reverse() */
    this.isPalindrome = function(value) 
{

        var nphrase = /[^A-Za-z0-9]/g;
        value = value.toLowerCase().replace(nphrase, '');
        var len = str.length;
        for (var i = 0; i < len/2; i++) 
        {
           if (value[i] !== value[len - 1 - i]) 
            {
                return false;
            }
        }
            return true;
}

        
    }

    /* Provide an implementation that reverses a string */
    /* CONDITION: you may only use String.prototype.charAt() */
    this.reverseString = function(value) {

        var newStr = '';
            for (var i = value.length - 1; i >= 0; i--)
            {
                newStr += value.charAt(i);
            }
        
        return newStr;
    }

    /* Provide an implementation that counts and returns the occurence of the letter "B" in a string */
    this.countBs = function(value) 
        {
            bCounter = 0;
            for (var i = 0; i >= value.length; i++)
            {
                if ( value.charAt('B'))
                {
                    bCounter++;
                }
            }
                return bCounter;
        }

    /* An abstraction of the previous function, provide an implementation that counts and returns the  */
    /* Occurence of the letter 'char' in the String 'value' */
    this.countCharInString = function(value, char) 
        {

    }
