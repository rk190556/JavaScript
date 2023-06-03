//arrow function
// remove function keyword from function expression and then add arrow before curly brace
const sumthreenumbers = (number1, number2, number3) => {
  return number1 + number2 + number3;
};
const returnedvalue1 = sumthreenumbers(2, 3); //Nan-not a number
const returnedvalue2 = sumthreenumbers(2, 3, 5); //10
console.log(returnedvalue1, " ", returnedvalue2);

// // const isEven = number => {
// //   return number % 2 === 0;
// // };
// console.log(isEven(15));
//another way to write above function
// if any function return only one value then simply we can write above fun as below:
const isEven = (number) => number % 2 === 0;
console.log(isEven(16));

//hoisting

// hello();

// function hello() {
//   console.log("hello World");
// }
//above function will work but if we use function expression  or arrow operator function
//then it will not work

// hello(); //not work
// const hello = function () {
//   console.log("Hello World");
// };

// console.log(hello1); // o/p:undefined for var and uncaught refernce error for let and const
// //var hello1 = "hello world";
// let hello1 = "hello world";
