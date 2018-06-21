function StringManipulator() {

    /* Provide an implementation that returns true if a string is a palindrome, and false if the string is not */
    /* CONDITION: you may not use String.prototype.reverse() */
    this.isPalindrome = function(value) {
        if(typeof value != 'string')throw Error('not string');
        value = value.replace(/\s/g,'');

        var start = 0;
        var end = value.length - 1;
        while(start<=end){
            if(value[start]!=value[end]){
                return false;
            }
            start++;
            end--;
        }
        return true;
    }

    /* Provide an implementation that reverses a string */
    /* CONDITION: you may only use String.prototype.charAt() */
    this.reverseString = function(value) {
        var size = 0;
        while(value.charAt(size)!=''){
            size++;
        }
        if(typeof value != 'string') throw Error('not a string');
        var v2 = "";
        for(let i=size-1;i>=0;i--){
            v2 = v2.concat(value.charAt(i));
        }
        return v2; 
    }

    /* Provide an implementation that counts and returns the occurence of the letter "B" in a string */
    this.countBs = function(value) {
        if(typeof value != 'string') throw Error('not a string');
        var counter = 0;
        for(let i=0; i<value.length; i++){
            if(value.charAt(i)=='B'){
                counter++;
            }
        }
        return counter;
    }

    /* An abstraction of the previous function, provide an implementation that counts and returns the  */
    /* Occurence of the letter 'char' in the String 'value' */
    this.countCharInString = function(value, char) {
        if(typeof value != 'string') throw Error('not a string');
        if(typeof char != 'string') throw Error('not a string');
        var counter = 0;
        let size = char.length;
        for(let i = 0; i<value.length;i++){
            var c = 0;
            for(let j = 0; j<size;j++){
                if(value[i+j]==char[j]){
                    c++;
                }
            }
            if(c==size){
                counter++;
            }
        }
        return counter;
    }
}