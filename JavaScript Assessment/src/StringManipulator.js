function StringManipulator() {

    /* Provide an implementation that returns true if a string is a palindrome, and false if the string is not */
    /* CONDITION: you may not use String.prototype.reverse() */
    this.isPalindrome = function(value) {
        if (typeof(value) != "string") {
            throw new Error;
        }
        for(i = 0; i < value.length; i++) {
            value = value.replace(' ', '');
        }
        let backwards = value.split('').reverse().join('');
        return value == backwards
    }

    /* Provide an implementation that reverses a string */
    /* CONDITION: you may only use String.prototype.charAt() */
    this.reverseString = function(value) {
        if (typeof(value) != "string") {
            throw new Error;
        }

        var reverseString = value;
        var array_holder = [];
        let i = 0;
        while (reverseString[i]) {
            try {
                array_holder.unshift(reverseString[i]);
            i++;
            }
            catch (ex) {
              break;
            }
        }
        return array_holder.join('');
    }

    /* Provide an implementation that counts and returns the occurence of the letter "B" in a string */
    this.countBs = function(value) {
        if (typeof(value) != "string") {
            throw new Error;
        }
        let value_array = value.split('');
        let count = 0;
        for(i = 0; i < value_array.length; i++) {
            if (value_array[i] == "B") {
                count++
            }
        }
        return count;
    }

    /* An abstraction of the previous function, provide an implementation that counts and returns the  */
    /* Occurence of the letter 'char' in the String 'value' */
    this.countCharInString = function(value, char) {
        if (typeof(value) != "string" || typeof(char) != "string") {
            throw new Error;
        }
        let value_array = value.split(char);
        let count = 0;
        
        return value_array.length - 1;
    }
}