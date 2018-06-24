function StringManipulator() {

    /* Provide an implementation that returns true if a string is a palindrome, and false if the string is not */
    /* CONDITION: you may not use String.prototype.reverse() */
    this.isPalindrome = function(value) {
        if (typeof value !== 'string') {
            throw TypeError('Please Use Text Only')
        } else {
                let reg = /[^A-Za-z]/g;
                value = value.toLowerCase().replace(reg,''); //daad
                let len = value.length; // 4
                for (let i = 0; i < len/2; i++) {           // i<2 
                    if (value[i] !== value[len - 1 - i]) {
                        return false;
                    } 
                  } 
                  return true;
        }
        
    }

    /* Provide an implementation that reverses a string */
    /* CONDITION: you may only use String.prototype.charAt() */
    this.reverseString = function(value) {
        if (typeof value !== 'string') {
            throw TypeError('Please Use Text Only')
        } else {
            let nope = value.length;
            reg = /[^\w\s]/g;
            let arr = [];
            for(i = 0; i !== nope; i++) {
                arr.push(value.charAt(i))
            }
            let rev = arr.reverse();
            rev = rev.toString();
            rev = rev.replace(reg, '');
            return(rev);
                }
    }

    /* Provide an implementation that counts and returns the occurence of the letter "B" in a string */
    this.countBs = function(value) {
        if (typeof value !== 'string') {
            throw TypeError('Please Use Text Only')
        } else {
            let reg = /[^B]/g;
            value = value.replace(reg, '');
           let bee = value.length;
           return bee;

        }

    }

    /* An abstraction of the previous function, provide an implementation that counts and returns the  */
    /* Occurence of the letter 'char' in the String 'value' */
    this.countCharInString = function(value, char) {
        if (typeof value !== 'string' || typeof char !== 'string') {
            throw TypeError('Please Use Text Only')
        } else { 
            let count = 0;
            let pos = value.indexOf(char);

            while (pos !== -1) {
                console.log(count);
                count++;
                pos = value.indexOf(char, pos + 1);
            } return(count);
        }
    }
}