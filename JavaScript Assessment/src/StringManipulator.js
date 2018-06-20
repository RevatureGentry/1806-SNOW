function StringManipulator() {

    /* Provide an implementation that returns true if a string is a palindrome, and false if the string is not */
    /* CONDITION: you may not use String.prototype.reverse() */
    this.isPalindrome = function(value) {
        var check = value.replace(/\s/g, '');
        var palindrome = '';
        var i;
        for(i=check.length-1; i>=0; i--){
            palindrome += check.charAt(i);
        }
        //return check;
        if(palindrome === check){
            return true;
        }
        else{
            return false;
        }
    }

    /* Provide an implementation that reverses a string */
    /* CONDITION: you may only use String.prototype.charAt() */
    this.reverseString = function(value) {
        if(isNaN(value) === false || typeof(value) === "boolean" || typeof(value) === 'object')
            throw new Error("invalid inputs");
        var reversedString = '';
        var i=0;
        while(value.charAt(i) !== ''){
            reversedString = value.charAt(i) + reversedString;
            i++;
        }
        return reversedString;
    }

    /* Provide an implementation that counts and returns the occurence of the letter "B" in a string */
    this.countBs = function(value) {
        if(isNaN(value) === false || typeof(value) === "boolean" || typeof(value) === 'object')
            throw new Error("invalid inputs");
        var i;
        let counter=0;
        for(i=0; i<value.length; i++){
            if(value[i]==='B'){
                counter ++;
            }
        }
        return counter;
    }

    /* An abstraction of the previous function, provide an implementation that counts and returns the  */
    /* Occurence of the letter 'char' in the String 'value' */
    this.countCharInString = function(value, char) {
        if(typeof(value) !== 'string' || typeof(char) !== 'string')
            throw new Error("invalid inputs");
        var i;
        let counter=0;
        var regex = new RegExp(char, 'g');
        var found = value.match(regex || []);
        if(found === null){
            return 0;
        }
        counter = found.length;
        return counter;
    }
}