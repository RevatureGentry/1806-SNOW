describe("Calculators should perform mathematic operations correctly", () => {
    let calc;

    beforeEach(function() {
        calc = new Calculator();
    });

    xdescribe("When summing multiple values", () => {
        it("should provide the proper value", () => {
            expect(calc.sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toBe(55);
        });

        it('should throw an Error when supplied a non-numeric values', () => {
            expect(() => calc.sum([true, {}, '20'])).toThrowError();
        });

        it('should sum positive and negative numbers all the same', () => {
            expect(calc.sum([-10, 10, -20, 20, -100, 100, 0])).toBe(0);
        });

        it('should take into account transencdental numbers', () => {
            expect(calc.sum([Math.E, Math.PI, 10])).toBeCloseTo(15.8, 0);
        });
    });

    xdescribe("When performing factorials", () => {
        it('should provide the proper value', () => {
            expect(calc.factorial(6)).toBe(720);
        });
        it('should not calculate negative values', () => {
            expect(() => calc.factorial(-1)).toThrowError();
        });
        it('should return 1 when we provide 0', () => {
            expect(calc.factorial(0)).toBe(1);
        });
        it('should return 1 when we provide 1', () => {
            expect(calc.factorial(1)).toBe(1);
        });
        it('should throw an Error when supplied a string', () => {
            expect(() => calc.factorial("hello")).toThrowError();
        });
        it('should throw an Error when supplied an array', () => {
            expect(() => calc.factorial([])).toThrowError();
        });
        it('should throw an Error when supplied an object', () => {
            expect(() => calc.factorial({})).toThrowError();
        });
        it('should throw an Error when supplied a boolean', () => {
            expect(() => calc.factorial(true)).toThrowError();
        });
    });

    xdescribe('When determining if a number is even or odd', () => {
        it('should find 13 to be odd', () => {
            expect(calc.isOdd(13)).toBe(true);
        });

        it('should find 196 to be even', () => {
            expect(calc.isOdd(196)).toBe(false);
        });

        it('should throw an Error when supplied a boolean', () => {
            expect(() => calc.isOdd(true)).toThrowError();
        });

        it('should throw an Error when supplied a string', () => {
            expect(() => calc.isOdd("William")).toThrowError();
        });

        it('should throw an Error when supplied a symbol', () => {
            expect(() => calc.isOdd(Symbol())).toThrowError();
        });
    })

    xdescribe('When finding a term in the Fibonacci sequence', () => {
        it('should find the first term correctly', () => {
            expect(calc.termInFibonacciSequence(1)).toBe(1);
        });

        it('should find the second term correctly', () => {
            expect(calc.termInFibonacciSequence(2)).toBe(1);
        });

        it('should find the 27th term correctly', () => {
            expect(calc.termInFibonacciSequence(27)).toBe(196418);
        });

        it('should fail for negative terms', () => {
            expect(() => calc.termInFibonacciSequence(-1)).toThrowError();
        });

        it('should throw an Error when supplied a string', () => {
            expect(() => calc.termInFibonacciSequence('William')).toThrowError();
        });

        it('should throw an Error when supplied a boolean', () => {
            expect(() => calc.termInFibonacciSequence(true)).toThrowError();
        });

        it('should throw an Error when supplied an object', () => {
            expect(() => calc.termInFibonacciSequence({})).toThrowError();
        })
    });
});