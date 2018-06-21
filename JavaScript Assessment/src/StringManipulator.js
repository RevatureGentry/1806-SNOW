function StringManipulator() {

    /* Provide an implementation that returns true if a string is a palindrome, and false if the string is not */
    /* CONDITION: you may not use String.prototype.reverse() */
    this.isPalindrome = function(value) {
        var p = 0; //variable counter
        var strlen = value.length; //get the string length

        //Any value that isn't a string will get an error
        if (typeof value != 'string'){
            throw new Error("ERROR");
        }
        else{
            //while loop to compare each indexes
            //return true or false
            while (p <= strlen/2){
                if (value[p] != value[strlen - 1 - p]){
                    //console.log(value[p] != value[strlen - 1 - p]);
                    return false;
                }
                else{
                    p = p + 1;
                    //console.log(p);
                    return true;
                }
            }
        }
    }

    /* Provide an implementation that reverses a string */
    /* CONDITION: you may only use String.prototype.charAt() */
    this.reverseString = function(value) {
        var r = ""; //empty string variable
        var length = 0; //counter for total length
        //While loop to calculate the length of the string
        while (value[length] !== undefined){
            length++;
        }
        //console.log(length); //console to confirm while loop is working
        for (let i = 0; i <= length; i++){
            r = r + value.charAt(length-i);
            //console.log(value.charAt(6));
            //console.log(r);
        }
        //return reverse string
        return r;
    }

    /* Provide an implementation that counts and returns the occurence of the letter "B" in a string */
    this.countBs = function(value) {
        var count = 0;
        //Error check
        if (typeof value != 'string'){
            throw new Error("ERROR");
        }
        else{
            //check every index of the string for 'B'
            for (var i = 0; i < value.length; i++) {
                if (value[i] === "B"){
                    count++;
                }
            }
            //return total count
            return count;
        }
    }

    /* An abstraction of the previous function, provide an implementation that counts and returns the  */
    /* Occurence of the letter 'char' in the String 'value' */
    this.countCharInString = function(value, char) {
        var index = 0;
        var count = 0;
        //error check
        if (typeof char != 'string'){
            throw new Error("ERROR");
        }
        else{
            //use substring to check range of 'value' base on the length of 'char'
            while((index + char.length) < value.length){
                if (value.substring(index,(index + char.length)) == char){
                    count++;
                    //console.log(value.substring(index,(index + char.length)));
                    //console.log(count);
                }
                index++;
            }
        }
        return count;
       
    }
}