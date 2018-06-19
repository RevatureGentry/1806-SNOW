describe('String algorithmic problems include a vast majority of common interview questions', () => {
    let manipulator;
    beforeEach(() => {
        manipulator = new StringManipulator();
    })
    xdescribe('When testing for a palindrome', () => {
        it('should throw an Error when a number is supplied', () => {
            expect(() => manipulator.isPalindrome(1)).toThrowError();
        });
        it('should throw an Error when an object is supplied', () => {
            expect(() => manipulator.isPalindrome({})).toThrowError();
        });
        it('should throw an Error when an array is supplied', () => {
            expect(() => manipulator.isPalindrome([])).toThrowError();
        });
        it('should throw an Error when boolean is supplied', () => {
            expect(() => manipulator.isPalindrome(true)).toThrowError();
        });
        it('should find a palindrome correctly', () => {
            expect(manipulator.isPalindrome("daad")).toBe(true);
        });
        it('should find a palindrome correctly', () => {
            expect(manipulator.isPalindrome("a nut for a jar of tuna")).toBe(true);
        });
        it('should find a palindrome correctly', () => {
            expect(manipulator.isPalindrome("a man a plan a canal panama")).toBe(true);
        });
    });

    xdescribe('When reversing a string', () => {
        it('should reverse "William"', () => {
            expect(manipulator.reverseString("William")).toBe("mailliW");
        });

        it('should reverse "JavaScript Rules"', () => {
            expect(manipulator.reverseString('JavaScript Rules')).toBe('seluR tpircSavaJ');
        });

        it('should throw an Error when a number is supplied', () => {
            expect(() => manipulator.reverseString(1234)).toThrowError();
        });

        it('should throw an Error when a boolean is supplied', () => {
            expect(() => manipulator.reverseString(true)).toThrowError();
        });

        it('should throw an Error when an object is supplied', () => {
            expect(() => manipulator.reverseString({})).toThrowError();
        });
    });

    xdescribe('When counting the number of "B"\'s in a string', () => {
        it('should find 3', () => {
            expect(manipulator.countBs("Better Baking Brothers")).toBe(3);
        });

        it('should not find any', () => {
            expect(manipulator.countBs('abcdefghijklmnopqrstuvwxyz')).toBe(0);
        });

        it('should throw an Error when a number is supplied', () => {
            expect(() => manipulator.countBs(1234)).toThrowError();
        });

        it('should throw an Error when a boolean is supplied', () => {
            expect(() => manipulator.countBs(true)).toThrowError();
        });

        it('should throw an Error when an object is supplied', () => {
            expect(() => manipulator.countBs(new Object())).toThrowError();
        });
    });

    xdescribe("When counting the number of any given character in a string", () => {
        it('should find 2 "J"\'s', () => {
            expect(manipulator.countCharInString("JavaScript is for the browser, Java is for the server", "J")).toBe(2);
        });

        it('should find 3 "o"\'s', () => {
            expect(manipulator.countCharInString("JavaScript is for the browser programming, Java is for the server programming", "o")).toBe(5);
        });

        it('should find 2 "mm"\'s', () => {
            expect(manipulator.countCharInString("JavaScript is for the browser programming, Java is for the server programming", "mm")).toBe(2);
        });

        it('should find 0 "Javas"\'s', () => {
            expect(manipulator.countCharInString("JavaScript is for the browser programming, Java is for the server programming", "Javas")).toBe(0);
        });

        it('should throw an Error when a number is supplied', () => {
            expect(() => manipulator.countCharInString("JavaScript is for the browser programming, Java is for the server programming", 1234)).toThrowError();
        });

        it('should throw an Error when a boolean is supplied', () => {
            expect(() => manipulator.countCharInString("JavaScript is for the browser programming, Java is for the server programming", true)).toThrowError();
        });

        it('should throw an Error when an object is supplied', () => {
            expect(() => manipulator.countCharInString("JavaScript is for the browser programming, Java is for the server programming", new Object())).toThrowError();
        });
    }); 
});