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

        if(typeof value==="string"){
            return (value.split("B").length-1) //4
        }
        else {
            throw new Error;
        }
    }

    /* An abstraction of the previous function, provide an implementation that counts and returns the  */
    /* Occurence of the letter 'char' in the String 'value' */
    this.countCharInString = function(value, char) {

        
        if(typeof value, typeof char==="string"){
            return (value.split(char).length-1) //4
        }
        else {
            throw new Error;
        }
    }
}