function StringManipulator() {

    /* Provide an implementation that returns true if a string is a palindrome, and false if the string is not */
    /* CONDITION: you may not use String.prototype.reverse() */
    this.isPalindrome = function(value) {
        var palindrome = '';
        var i;
        var check = value.replace(/\s/g,'');
        for(i=check.length-1; i>=0; i--){
            palindrome += check.charAt(i);
        }
        if (palindrome === check) {
            return true;
        } else {
            return false;
        }
    }

    /* Provide an implementation that reverses a string */
    /* CONDITION: you may only use String.prototype.charAt() */
    this.reverseString = function(value) {
        return (value === '') ? '' : this.reverseString(value.substr(1)) + value.charAt(0);
    }

    /* Provide an implementation that counts and returns the occurence of the letter "B" in a string */
    this.countBs = function(value) {
        var someChar = 'B';
        var count = 0;
        for (var i = 0; i < value.length; i++) {
        if (value.charAt(i) == someChar) {
        count++;
        }
    }
        return count;
    }

    /* An abstraction of the previous function, provide an implementation that counts and returns the  */
    /* Occurence of the letter 'char' in the String 'value' */
    this.countCharInString = function(value, char) {
            var count = 0;
            for(var i=0; i<value.length; i++) {
                if(value.charAt(i) = char) {
                  count++;
              }
            }
            return count;
          }
    }