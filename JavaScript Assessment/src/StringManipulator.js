function StringManipulator() {

    /* Provide an implementation that returns true if a string is a palindrome, and false if the string is not */
    /* CONDITION: you may not use String.prototype.reverse() */
    this.isPalindrome = function(value) {
        if (typeof(value) != "string") throw new Error();
        var deletedSpaces = "";
        for (x in value) {
            if (value.charAt(x) != " ") deletedSpaces += value.charAt(x);
        }
        for (x in deletedSpaces) {
            if (deletedSpaces.charAt(x) != deletedSpaces.charAt(deletedSpaces.length-1-x)) return false;
        }
        return (true);
    }

    /* Provide an implementation that reverses a string */
    /* CONDITION: you may only use String.prototype.charAt() */
    this.reverseString = function(value) {
        if (typeof(value) != "string") throw new Error();
        var reversed = "";
        var counter = 0;
        while(value.charAt(counter)) counter++;
        while(counter > 0) {
            reversed += value.charAt(counter-1);
            counter--;
        }
        return reversed;
    }

    /* Provide an implementation that counts and returns the occurence of the letter "B" in a string */
    this.countBs = function(value) {
        if (typeof(value) != "string") throw new Error();
        var counter = 0;
        for (x in value) {
            if (value.charAt(x) == "B") counter++;
        }
        return counter;
    }

    /* An abstraction of the previous function, provide an implementation that counts and returns the  */
    /* Occurence of the letter 'char' in the String 'value' */
    this.countCharInString = function(value, char) {
        if (typeof(value) != "string") throw new Error();
        if (typeof(char) != "string") throw new Error();
        var counter = 0;
        for (x in value) {
            if (value.substr(x, char.length) == char) counter++;
        }
        return counter;
    }
}