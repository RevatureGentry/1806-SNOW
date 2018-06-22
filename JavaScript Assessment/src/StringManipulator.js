function StringManipulator() {

    /* Provide an implementation that returns true if a string is a palindrome, and false if the string is not */
    /* CONDITION: you may not use String.prototype.reverse() */
    this.isPalindrome = function(value) {
        let i = 0;
        if(typeof(value) != 'string'){
            throw Error('Not a string');
        }
        value = value.replace(/\s/g, '');
        let j = value.length - 1;

        while(i < j){
            if(value.charAt(i) != value.charAt(j)){
                return false;
            }
            i++;
            j--;
        }
        return true;
    }

    /* Provide an implementation that reverses a string */
    /* CONDITION: you may only use String.prototype.charAt() */
    this.reverseString = function(value) {
        var size = 0;
        while(value.charAt(size) != ''){
            size++;
        }
        if(typeof(value) != 'string'){
            throw Error('Not a string');
        }
        var newString = "";
        for(let i = size-1; i >= 0; i--){
            newString = newString.concat(value.charAt(i));
        }
        return newString;
    }

    /* Provide an implementation that counts and returns the occurence of the letter "B" in a string */
    this.countBs = function(value) {
        let i = 0;
        let count = 0;
        if(typeof(value) != 'string'){
            throw Error('Not a string');
        }
        for(i; i < value.length; i++){
            if(value.charAt(i) == 'B'){
                count += 1;
            }
        }
        return count;
    }

    /* An abstraction of the previous function, provide an implementation that counts and returns the  */
    /* Occurence of the letter 'char' in the String 'value' */
    this.countCharInString = function(value, char) {
        let i = 0;
        let count = 0;
        if(typeof(value) != 'string'){
            throw Error('Not a string');
        }
        if(typeof(char) != 'string'){
            throw Error('Not a string');
        }
        if(char.length == 1){
            for(i; i < value.length; i++){
                if(value.charAt(i) == char){
                    count += 1;
                }
            }
        }
        else{
            for(i; i < value.length - char.length; i++){
                let counter = 0;
                for(let j = 0; j < char.length; j++){
                    if(value.charAt(i+j) == char.charAt(j)){
                        counter++;
                    }

                }
                if (counter == char.length) {count++}
            }
        }
        return count;
    }
}