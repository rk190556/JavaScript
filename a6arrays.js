//intro of array
//reference type
// how to create arrays
// ordered collection of items
//array is a object.
// let fruits = ["apple", "mango", "grapes"]; //array
// let number = [1, 2, 3, 4];
// let mixed = [1, "apple", 2, "grapes"];
// console.log(number);
// console.log(mixed);
// console.log(fruits[2]);
// console.log(typeof fruits);
// let obj = {}; //object literal
// console.log(typeof obj);

// //to make difference in type of array and obj we check array as below.

// console.log(Array.isArray(fruits));
// console.log(Array.isArray(obj));

// Array properties: array push , pop and array shift and unshift

let fruits = ["apple", "mango", "grapes"];
// fruits.push("banana");
// console.log(fruits);
// console.log(fruits.pop());//it will only give pop element

// //unshift
// fruits.unshift("banana"); //unshift-> add the element at first index of array.
// fruits.unshift("myfruit");
// console.log(fruits);

//shift
let removedFruit = fruits.shift(); //shift-> remove the element at first index of array.
console.log(fruits);
console.log("removed fruits is ", removedFruit);

// push and pop are fast then shift and unshift
