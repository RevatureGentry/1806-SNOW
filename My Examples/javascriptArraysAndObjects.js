console.log("Object at their simplest forms are collections of key-value pairs. They can be created through \n\t1. Object Literal Notation \n\t2. Using the 'new' keyword \n\t3. Using a constructor");
console.log("1. Object literal notation");
let myObj1 = {
    name: "William",
    age: 25,
    sayHello: () => {
        console.log(`${name}, age ${age}, says hello!`);
    }
}
console.log(myObj1);
console.log("2. Using the 'new' keyword");
let myObj2 = new Object();
myObj2.name = "Also William";
myObj2.age = 250;
myObj2.sayHello = () => {
    console.log(`${name}, age ${age}, says hello!`);
}
console.log(myObj2);

console.log("3. Using a constructor");
function Person(name = "Not Yet Defined", age = 100) {
    this.name = name;
    this.age = age;
    this.sayHello = () => {
        console.log(`${this.name}, age ${this.age}, says hello!`);
    }
}

let person = new Person("Yet again William", 25);
console.log(person);

console.log("Array's in JavaScript act similar to arrays in other programming languages. Since JavaScript is not strongly typed, it can allow multiple data types to be stored in the same array");
let myArray = [1, "William", true];
console.log(myArray);
console.log("Array.push() appends items to the end of the array")
myArray.push('Gentry')
console.log("myArray.push('Gentry') =>", myArray);
console.log("Array.pop() removes and returns the last element of the array");
console.log("myArray.pop() => ", myArray.pop(), `(Current size of myArray: ${myArray.length})`);
console.log("Array.shift() returns and removes the first item of the array");
console.log("myArray.shift() => ", myArray.shift(), `(Current size of myArray: ${myArray.length})`);
console.log("Array.unshift() adds elements to the front of the array");
console.log("myArray.unshift(1) =>", myArray.unshift(1), `(Current contents of myArray: ${myArray})`);

console.log("There are also four important array methods \n\t1. filter()\n\t2. map() \n\t3. reduce()");
console.log("Array.filter() creates a new array with all of the elements of this array which pass the filtering function");
let mySecondArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("\tmySecondArray.filter(el => el % 2 === 0) should print out the evens =>", mySecondArray.filter(el => el % 2 === 0));
let myThirdArray = ["Java", "JavaScript", "TypeScript", "SQL", "CSS", "HTML"];
console.log("\tmyThirdArray.filter(el => el.includes('S') should print all elements execpt Java and HTML", myThirdArray.filter(el => el.includes('S')));

console.log("Array.map() creates a new array with the results of the associated function called on each");
console.log("\tmySecondArray.map(el => el * 5) should multiply each element by 5", mySecondArray.map(el => el * 5));
console.log("\tmyThirdArray.map(el => el.toUpperCase()) should put each string in all caps", myThirdArray.map(el => el.toUpperCase()));
console.log("Array.reduce() applies a function to each element of the array, from left to right, reducing it to a single value");
console.log("\tmySecondArray.reduce((a, b) => a + b) should sum each of the elements =>", mySecondArray.reduce((a,b) => a + b));
console.log("\tmyThirdArray.reduce((s, t) => s.toLowerCase().concat(t)) should make all of the entries into one string", myThirdArray.reduce((s, t) => s.toLowerCase().concat(t)));