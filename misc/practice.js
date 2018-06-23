// const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const reducer = (accumulator, currentValue) => accumulator + currentValue;

// // 1 + 2 + 3 + 4
// console.log(array1.reduce(reducer));
// // expected output: 10

// // 5 + 1 + 2 + 3 + 4
// console.log(array1.reduce(reducer, 5));
// // expected output: 15

// function help(array) { 
//     console.log(array.reduce(reducer));
// };

value = 'a nut for a jar of tuna';

function drome (string) {
  let reg = /[^A-Za-z]/g;
  string = string.toLowerCase().replace(reg,'');
  console.log(string);
  let len = string.length;
  for (let i = 0; i < len/2; i++) {
      if (string[i] !== string[len - 1 - i]) {
          return false;
      } 
    } 
    return true;
  } 
  console.log(drome(value));


// if (value >= 0) {
//     for (let i = 0; i < (value+1); i++){
//        let fact = (i * value * 1);
//        console.log(fact);
        
//     }
// } else {
//     throw TypeError('Error: Enter positive numbers only!')
// }

//(num === (-1)) {
//     console.log(`${value} is an odd number`);
// } else {
//     console.log(`${value} is an even number`);
// }