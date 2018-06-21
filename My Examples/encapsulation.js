console.log('The closure we have already created lies in the following example.');
function multiplier(factor) {
    return number => factor * number;
}
console.log(multiplier);
console.log('The closure occurs when we use this multiplier function.');
let twice = multiplier(2);
console.log(`twice(5) = ${twice(5)}`);
console.log(`Let's access the 'factor' variable in the multiplier... ${multiplier(2).factor}`);
let triple = multiplier(3);
console.log(`triple(9) = ${triple(9)}`);

let makeCounter = function() {
    let privateCounter = 0;
    function changeCounter(value) {
        privateCounter += value;
    }

    return {
        increment: function() {
            changeCounter(1);
        },
        decrement: function() {
            changeCounter(-1);
        },
        currentValue: function() {
            return privateCounter;
        }
    }
};

const c1 = makeCounter();
const c2 = makeCounter();

console.log(`c1.currentValue() = ${c1.currentValue()}`);
console.log(`c2.currentValue() = ${c2.currentValue()}`);
c1.increment();
c1.increment();
c1.increment();
c2.increment();
console.log("Incremented c1 three times, c2 just once..");
console.log(`c1.currentValue() = ${c1.currentValue()}`);
console.log(`c2.currentValue() = ${c2.currentValue()}`);
console.log(c1.privateCounter);

console.log(`Now for a more practical example`);
function makePerson(name, age) {
    function Person(name, age) {
        this.name = name;
        this.age = age;
        return {
            getName: () => {
                return this.name;
            },
            setName: (name) => {
                this.name = name;
            },
            getAge: () => {
                return this.age;
            },
            setAge: (age) => {
                this.age = age;
            },
            info: () => {
                console.log(`Name: ${this.name} => Age ${this.age}`);
            }
        }
    }
    return new Person(name, age);
}

let test = makePerson("William", 25);
test.info();
test.setAge(100);
test.setName('Changed via Setter');
test.info();
console.log(`Attempting to access properties directly... Name: ${test.name} => Age: ${test.age}`);