function StringManipulator() {

    /* Provide an implementation that returns true if a string is a palindrome, and false if the string is not */
    /* CONDITION: you may not use String.prototype.reverse() */
    this.isPalindrome = function(value) {
        if (typeof(value)=== 'string'){
            /*removes all spaces since they are not counted in palindromes*/
            let originalstring = value.split(" ").join("");
            /*left side character location*/
            let x = 0;
            /*right side character location*/
            let y = originalstring.length-1;
            /*boolean for whether it is a palindrome*/
            let palindrome = true;

            
            //runs through the string comparing the corresponding left side and right side values
            //to see if they are the same, if they aren't it is not a palindrome
            for(let i=0; i<originalstring.length;i++){
                if (originalstring[i] === originalstring[y]){
                 y = y - 1;
                }
                else {
                    palindrome = false;
                
                }
            }
            return palindrome;
        }
        else{
            throw error;
        
        }

        
    }

    /* Provide an implementation that reverses a string */
    /* CONDITION: you may only use String.prototype.charAt() */
    this.reverseString = function(value) {
      
        if(typeof(value) === 'string'){

            let strlength = 0;
            let stillastring = true;
            //continues looping until it reaches empty string characters which
            //signify that the string has ended and tracks the length of the string
            while (stillastring){
                if (value.charAt(strlength)==="" ){
                    stillastring = false;
                }
                else{
                    strlength++
                }
            }
            //goes through the string starting from the end and concatanates each letter to 
            // a new string (reversedstring) which gets returned at the end
            let y = strlength - 1;
            let reversedstring = "";
            for (let i = 0; i < strlength; i++)
            {
                reversedstring += value.charAt(y)
                y = y - 1;
            }
            return reversedstring
        }
        else{
            throw error
        }

        
    }

    /* Provide an implementation that counts and returns the occurence of the letter "B" in a string */
    this.countBs = function(value) {
        if(typeof(value)==='string'){
            let Bcount = 0;
            let strlength = value.length;
            //runs through the length of the string checking if each value
            //is equal to 'B' and updates the counter accordingly
            for (let i = 0; i < strlength; i++)
            {
                if (value[i] === 'B'){
                    Bcount++;
                }
            }
            return Bcount
        }
        else{
            throw error
        }

    }

    /* An abstraction of the previous function, provide an implementation that counts and returns the  */
    /* Occurence of the letter 'char' in the String 'value' */
    this.countCharInString = function(value, char) {
        if((typeof(value)==='string')&& (typeof(char)==='string')){
            let lettercount = 0;
            let letter = char;
            let strlength = value.length;
            let charlength = letter.length;
            let joinedletters = "";
            //checks the length of the char value and if it is 1 just runs through
            //the length of the string comparing it to each value and updating the counter
            //as necessary
            if(charlength === 1){
                for (let i = 0; i < strlength; i++)
                {
                    if (value[i] === letter){
                        lettercount++;
                    }
                }
            }
            //for char values > 1 it uses the character length to group characters in the 
            //overall string and then compares that to the 'char' value supplied
            else{
                for (let i = 0; i < strlength - charlength + 1; i++){
                    joinedletters = "";
                    for(let j = 0; j < charlength; j++){
                        joinedletters += value[(i + j)];
                    }
                    if (joinedletters === letter){
                        lettercount++
                    }
                }

            }
            return lettercount
        }
        else{
            throw error
        }

    }
}