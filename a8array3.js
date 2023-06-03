//for of loop in array
const fruits = ["apples", "grapes", "mango"];
const fruits2 = [];

// for (let fruit of fruits) {
//   console.log(fruit);
//   fruits2.push(fruit.toUpperCase());
// }
// console.log(fruits2);

//for in loop in array

// const fruits = ["apples", "grapes", "mango"];
// const fruits2 = [];

// for (let index in fruits) {
//   console.log(fruits[index]);
//   fruits2.push(fruits[index].toUpperCase());
// }
// console.log(fruits2);

// for of loop and simple for loop we use generally

//array destructuring
const myArray = ["value1", "value2", "value3", "value4", "value5"];
let [myvar1, , myvar2, ...myNewArray] = myArray;
let [...myNewArray2] = myArray;
console.log("value of myvar1", myvar1); //value1
console.log("value of myvar2", myvar2); //value3
console.log(myNewArray); //o/p: ['value4', 'value5']
myArray.push("valu6");
console.log(myNewArray2); //by destructuring we can also make clone of array
console.log(myArray);
