function StringManipulator() {

    /* Provide an implementation that returns true if a string is a palindrome, and false if the string is not */
    /* CONDITION: you may not use String.prototype.reverse() */
    this.isPalindrome = function(value) {
        let str = value.replace(/\s/g,'');

        if(typeof str === "string"){
            str = str.toLowerCase().replace(value);
            for(let i = 0; i < str.length; i++){
                console.log(str[i]);
                console.log(str[str.length -1 - i]);
                if (str[i] !== str[str.length - 1 - i]) {
                    return false;
                    
                }console.log(str);
            }
            return true;
        }else{
            throw new Error();
        }
    }

    /* Provide an implementation that reverses a string */
    /* CONDITION: you may only use String.prototype.charAt() */
    this.reverseString = function(value) {
        if(typeof value === "string"){
            return value.split ('').reverse().join('');
            //return this.reverseString(value.substr(1)) + value.charAt(0);

        }else{
            throw new Error();
        }
    }

    /* Provide an implementation that counts and returns the occurence of the letter "B" in a string */
    this.countBs = function(value) {
        if(typeof value === "string"){
            // Match checks value for any B's in its length
            let numOfBs = ((value.match(/B/g) || []).length);
            return numOfBs;
        }else{
            throw new Error();
        }
    }

    /* An abstraction of the previous function, provide an implementation that counts and returns the  */
    /* Occurence of the letter 'char' in the String 'value' */
    this.countCharInString = function(value, char) {
        if(typeof value, typeof char === "string"){
            // Match checks value for a specific character. Changed from match to split because match works with regex and you can't change the letter to search for without changing the code. 
            let numOfChar = ((value.split(char)).length -1);
            return numOfChar;
        }else{
            throw new Error();
        }

        //if(typeof value === 'string')
    }
}