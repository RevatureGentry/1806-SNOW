function StringManipulator() {

    /* Provide an implementation that returns true if a string is a palindrome, and false if the string is not */
    /* CONDITION: you may not use String.prototype.reverse() */
    this.isPalindrome = function(value) {
        if (typeof value !== 'string') {
            throw TypeError('Please Use Text Only')
        } else {
                let reg = /[^A-Za-z]/g;
                value = value.toLowerCase().replace(reg,''); //daad
                let len = value.length; // 4
                for (let i = 0; i < len/2; i++) {           // i<2 
                    if (value[i] !== value[len - 1 - i]) {
                        return false;
                    } 
                  } 
                  return true;
        }
        
    }

    /* Provide an implementation that reverses a string */
    /* CONDITION: you may only use String.prototype.charAt() */
    this.reverseString = function(value) {
        if (typeof value !== 'string') {
            throw TypeError('Please Use Text Only')
        } else {}
    }

    /* Provide an implementation that counts and returns the occurence of the letter "B" in a string */
    this.countBs = function(value) {
        if (typeof value !== 'string') {
            throw TypeError('Please Use Text Only')
        } else {}

    }

    /* An abstraction of the previous function, provide an implementation that counts and returns the  */
    /* Occurence of the letter 'char' in the String 'value' */
    this.countCharInString = function(value, char) {
        if (typeof value !== 'string' || typeof char !== 'string') {
            throw TypeError('Please Use Text Only')
        } else {}
    }
}