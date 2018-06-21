function StringManipulator() {

    /* Provide an implementation that returns true if a string is a palindrome, and false if the string is not */
    /* CONDITION: you may not use String.prototype.reverse() */
    this.isPalindrome = function(value) {
        if(typeof(value) !== 'string'){
            throw new Error("Invalid input");
        }
        let words = value.split(" ").join("");
        let reverse = "";
        for(letter of words){
             reverse = letter + reverse;
        }
        return reverse === words;

    }

    /* Provide an implementation that reverses a string */
    /* CONDITION: you may only use String.prototype.charAt() */
    this.reverseString = function(value) {
        if(typeof(value) !== 'string'){
            throw new Error("Invalid input");
        }
        let reverseString = "";
        let i = 0;
        while(value.charAt(i) !== ""){
            i++;
        }
        for(i;i >=0;i--){
            reverseString += value.charAt(i);
        }
        return reverseString
    }

    /* Provide an implementation that counts and returns the occurence of the letter "B" in a string */
    this.countBs = function(value) {
        if(typeof(value) !== 'string'){
            throw new Error("Invalid input");
        }
        let sum = 0;
        for(letter of value){
           if(letter === 'B'){
               sum++;
           } 
        }
        return sum;
    }

    /* An abstraction of the previous function, provide an implementation that counts and returns the  */
    /* Occurence of the letter 'char' in the String 'value' */
    this.countCharInString = function(value, char) {
        if(typeof(value) !== 'string' || typeof(char) !== 'string'){
            throw new Error("Invalid input");
        }
        let words = value.split(" ");
        
        let j = 0;
        let lastPos = 0;
        let sum = 0
        for(word of words){
            for(let i = 0;i <word.length;i++){
                if(word.charAt(i) === char.charAt(j)){
                    j++;
                    if(j === char.length){
                        sum++;
                        j = 0;
                        lastPos = i;
                    }
                }else{
                    lastPos++;
                    j = 0;
                }
            }
            lastPos = 0;
            j = 0;
        }
        return sum;
    }
}