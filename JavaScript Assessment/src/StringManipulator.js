function StringManipulator() {

    /* Provide an implementation that returns true if a string is a palindrome, and false if the string is not */
    /* CONDITION: you may not use String.prototype.reverse() */
    this.isPalindrome = function(value) {


        //str represents the 'value' with spaces eliminated using the replace method
        let str = value.replace(/\s+/g, '');

        if(typeof str==="string"){
            var len = Math.floor(str.length / 2);
            for (var i = 0; i < len; i++){
                if (str[i] !== str[str.length - i - 1]){
                    return false;
                }
                
                else{
                    return true;
                }
            }
        }
        else {
            throw new Error;
        }         
}

        
    /* Provide an implementation that reverses a string */
    /* CONDITION: you may only use String.prototype.charAt() */
    this.reverseString = function(value) {
        var index = 0;
        
        if(typeof value === "string"){
            while(value.charAt(index) != "") {
                value.charAt(index);
                console.log(value.charAt(index));
                index++;
                var length = index;
            }
            var ReversedString = "";
            for (var i = length - 1; i >= 0; i--) {
                ReversedString = ReversedString + value[i];
            }
            console.log(ReversedString);
            return ReversedString;
    
        }   
        else{
            throw new Error;
        }
}

        
    

    /* Provide an implementation that counts and returns the occurence of the letter "B" in a string */
    this.countBs = function(value) {

        //if statement to determine if 'value' is of string type
        if(typeof value==="string"){
            //statement to return # of occurences of letter "B"
            return (value.split("B").length-1) //4
        }
        //else if to throw error if 'variable' is other type than string
        else {
            throw new Error;
        }
    }

    /* An abstraction of the previous function, provide an implementation that counts and returns the  */
    /* Occurence of the letter 'char' in the String 'value' */
    this.countCharInString = function(value, char) {

        //If statement to determine if both variables are of string type
        if(typeof value, typeof char==="string"){
            //statement to return the number of occurences of 'char' in 'value'
            return (value.split(char).length-1) //4
        }
        //else if to throw error if variables are of other type than string
        else {
            throw new Error;
        }
    }
}