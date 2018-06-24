function StringManipulator() {

    /* Provide an implementation that returns true if a string is a palindrome, and false if the string is not */
    /* CONDITION: you may not use String.prototype.reverse() */
    this.isPalindrome = function(value) {         
        if (typeof value !== 'string'){
            throw TypeError('ERROR: Not a valid word');
        }
        else{
            let word = /[^A-Za-z]/g;
            value = value.toLowerCase().replace(word, '');
            let size = value.length;
            for(let i = 0; i < size/2; i++){
                if(value[i] !== value[size - 1 -i]){
                    return false;
                }
            }
            return true; 
        }
    }

    /* Provide an implementation that reverses a string */
    /* CONDITION: you may only use String.prototype.charAt() */
    this.reverseString = function(value) {
        if(typeof value !== 'string'){
            throw TypeError('ERROR: not a valid sting')
        }
        else{
            let size = value.length;
            expression = /[^\w\s]/g;
            let myArraay= [];
            for(let i = 0; i !== size; i++){
                myArraay.push(value.charAt(i))
            }
            let reverse = myArraay.reverse();
            reverse = reverse.toString();
            reverse = reverse.replace(expression, '');
            return(reverse);
        }
    }

    /* Provide an implementation that counts and returns the occurence of the letter "B" in a string */
    this.countBs = function(value) {
        if (typeof value !== 'string'){
            throw TypeError('ERROR: Not a valid word');
        }
        else{
            let count = /[^B]/g;
            value = value.replace(count, '');
            let b = value.length;
            return b;
        }
    }

    /* An abstraction of the previous function, provide an implementation that counts and returns the  */
    /* Occurence of the letter 'char' in the String 'value' */
    this.countCharInString = function(value, char) {
        if (typeof value !== 'string' || typeof char !== 'string'){
            throw TypeError('ERROR: Not a valid value');
        }
        else{
            let count = 0;
            let pos = value.indexOf(char);

            while (pos !== -1){
                console.log(count);
                count++;
                pos = value.indexOf(char, pos +1);
            }
            return(count);
        }
    }
}