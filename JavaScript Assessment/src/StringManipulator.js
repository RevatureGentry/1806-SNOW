function StringManipulator() {
    /* Provide an implementation that returns true if a string is a palindrome, and false if the string is not */
    /* CONDITION: you may not use String.prototype.reverse() */
    this.isPalindrome = function(value) {
        console.log(`value =${value}`);
        if (typeof(value) !== "string" || value === '') {
            console.log(`${value} is not a string, or is empty/null. \nExiting isPalindrome.`);
            throw new Error();
        }
        //let myValue = value; //TODO: Implement functionality that removes spaces?
        let myValue = '';
        //Remove Spaces from the 'Palindrome'.
        for (let i = 0; i < value.length; i++) {
            if (!(myValue.charAt(i) === '')) {
                myValue = myValue + value.charAt(i);
            }
        }
        console.log(`myValue=${myValue}\tvalue=${value}`);

        //Reverse the 'Palindrome'. 
        let myReverseValue = '';
        for (let i = myValue.length; i >= 0; i--) {
            myReverseValue = myReverseValue + myValue.charAt(i);
        }
        console.log(`myValue = ${myValue} | reValue = ${myReverseValue}`);
        return (myValue === myReverseValue);
    }

    /* Provide an implementation that reverses a string */
    /* CONDITION: you may only use String.prototype.charAt() */
    this.reverseString = function(value) {
        if (typeof(value) !== "string" || value === '') {
            throw new Error();
        }

        let vReverse = '';
        let count = 0;
        while (value.charAt(count) !== '') {
            console.log(`value.charAt(${count}) = ${value.charAt(count)}`);
            count++;
        }
        for (i = count; i >= 0; i--) {
            vReverse = vReverse + value.charAt(i);
        }

        return vReverse;
    }

    /* Provide an implementation that counts and returns the occurence of the letter "B" in a string */
    this.countBs = function(value) {
        if (typeof(value) !== 'string' || value === '') {
            console.log(`Value passed into countB: ${value} is not a proper string. \nExiting countBs.`);
            throw new Error();
        }

        let bCount = 0;
        for (let i=0; i < value.length; i++) {
            if (value.charAt(i) === 'B') {
                bCount++;
            }
        }
        return bCount;
    }

    /* An abstraction of the previous function, provide an implementation that counts and returns the  */
    /* Occurence of the letter 'char' in the String 'value' */
    this.countCharInString = function(value, char) {
        if (typeof(value) !== 'string' || value === '' || typeof(char) !== 'string' || char === '') {
            console.log(`Value passed into countB: ${value} is not a proper string. \nExiting countBs.`);
            throw new Error();
        }

        let charCount = 0;
        if (char.length === 1) { //If char is just one single character in length, use this:
            for (let i=0; i < value.length; i++) {
                if (value.charAt(i) === char) {
                    charCount++;
                }
            }
        }
        else { //Else, if it is longer, then use this:
            //For each additional character in char, increase the increment of the search zone...
            //Would that mean another for loop inside of a for loop?
            for (let i = 0; i < value.length; i++) {
                for (let j = 0; j < char.length;) {
                    if (value.charAt(i+j) == char.charAt(j)) {
                        j++;
                    } //Gradually check each character against each character in char.
                    else {
                        break; 
                    } //If any single char is not equivalent, exit this loop.
                    charCount++; //Theoretically, you can only get here when the if statement completes all three times. 
                } 
            }
            
        }
        return charCount;
    }
}