const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
// expected output: 15

function help(array) { 
    console.log(array.reduce(reducer));
};

help(array1);

let value = Symbol();

let num = Math.pow((-1), value);

if (typeof value !== 'number') {
    throw 'error';
}
else if (typeof value === 'number') {
    if (num === -1) {
        console.log(`${value} is an odd number`);
    }
    else if (num === 1) {
        console.log(`${value} is an even number`);
    }
    else {
        throw 'error2';
    }
}
else {
    throw 'error2';
} 

//(num === (-1)) {
//     console.log(`${value} is an odd number`);
// } else {
//     console.log(`${value} is an even number`);
// }