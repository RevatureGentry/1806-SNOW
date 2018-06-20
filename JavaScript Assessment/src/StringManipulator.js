function StringManipulator() {

    /* Provide an implementation that returns true if a string is a palindrome, and false if the string is not */
    /* CONDITION: you may not use String.prototype.reverse() */
    this.isPalindrome = function(value) {
        if (!isNaN(value)){
            throw new Error;
        }
        var dummy = value.replace(/\s/g,'');
        var i = 0;
        var j = dummy.length-1;
        console.log("first val =>" ,value[0]);
        console.log("last val =>" ,value[j]);
        while (i < j)
        {
            if (dummy[i] != dummy[j]){
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
        var dummy = "";
        if (!isNaN(value)){
            throw new Error;
        }
        else if(value instanceof Object){
            throw new Error;
        }
        var len = 0;
        while(value.charAt(len)!=""){
            len++;
        }
        for (let i = len -1;i>=0;i--){
            dummy +=value[i];
        }
        return dummy;

    }

    /* Provide an implementation that counts and returns the occurence of the letter "B" in a string */
    this.countBs = function(value) {
        if (!isNaN(value)){
            throw new Error;
        }
        else if(value instanceof Object){
            throw new Error;
        }
        else if(typeof value === 'boolean'){
            throw new Error;
        }
        var count = 0;
        for(let i =0;i < value.length;i++){
            if(value[i]==='B')count++;
        }
        return count;
    }

    /* An abstraction of the previous function, provide an implementation that counts and returns the  */
    /* Occurence of the letter 'char' in the String 'value' */
    this.countCharInString = function(value, char) {
        if (!isNaN(value)||!isNaN(char)){
            throw new Error;
        }
        else if(value instanceof Object||char instanceof Object){
            throw new Error;
        }
        else if(typeof value === 'boolean'|| typeof char==='boolean'){
            throw new Error;
        }
        let count = 0;
        count = value.split(char).length -1;
        return count;
    }
}