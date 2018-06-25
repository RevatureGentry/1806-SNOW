function StringManipulator() {

    /* Provide an implementation that returns true if a string is a palindrome, and false if the string is not */
    /* CONDITION: you may not use String.prototype.reverse() */
    this.isPalindrome = function(value) {
        let isMyPalindrome= true;
        if(typeof value== typeof "a"){
        for(let i=0;i<value.length/2;i++){
        if(value[i] = value[value.length-1])
           isMyPalindrome= true;
           else {
               isMyPalindrome=false;
               break;
           }

        }
        return isMyPalindrome;
        }

        else throw new Error();
        
    }

    /* Provide an implementation that reverses a string */
    /* CONDITION: you may only use String.prototype.charAt() */
    this.reverseString = function(value) {
        let reverseMyString=[];
        let count=0;
        if(typeof value==typeof "a"){
            while(value[count] !== undefined){
            count++;}
           for(let i=count-1; i>=0;i--){
           
            reverseMyString.push(value.charAt(i));}
            
        
        return reverseMyString.join("");}
        else throw new Error();
    }

    /* Provide an implementation that counts and returns the occurence of the letter "B" in a string */
    this.countBs = function(value) {
        let occurenceBs=0;
        if(typeof value== typeof "a"){
            for(let i=0;i<value.length;i++){
                if(value[i] !=="B")
                continue;
                else occurenceBs++;
            }
            return occurenceBs;

        } 
        else throw new Error();

    }

    /* An abstraction of the previous function, provide an implementation that counts and returns the  */
    /* Occurence of the letter 'char' in the String 'value' */
    this.countCharInString = function(value, char) {
        let occurenceChars=0;
        if((typeof value == typeof "a") && (typeof char== typeof "a") ){
        
            posAt = value.indexOf(char);
        
        while (posAt > -1) {
            ++occurenceChars
            posAt = value.indexOf(char, ++posAt);
            
        }
            return occurenceChars;

        } 
        else throw new Error();
        

    }
}