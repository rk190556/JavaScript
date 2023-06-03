// //primitive vs reference data type
// //primitive data type store in stack
// let num1 = 6;
// let num2 = num1;
// console.log(num1); //6
// console.log(num2); //6
// num1++;
// console.log("After Increment num1 by 1:");
// console.log(num1); //7
// console.log(num2); //6

//reference
// let array1 = ["item1", "item2"];
// let array2 = array1;
// console.log(array1);
// console.log(array2);
// array1.push("item3");
// console.log("After adding one item in array1 :");
// console.log(array1);
// console.log(array2);// we get output for both array is same because they pointing to same address.

//how to clone array
let array1 = ["item1", "item2"];
//let array2 =["item1", "item2"];//bad method
//we use slice() method to make clone of array
//let array2=array.slice(0);

// let array2 = [].concat(array1);
// array1.push("item3");
// console.log(array1 === array2);
// console.log(array1);
// console.log(array2);

//new way to make clone by spread operator
let oneMoreArray = ["item3", "item4"];
const newArray = [..."abc"]; //o/p: ["a","b","c"]
//... is spread operator it will spread abc as a,b,c
let array2 = [...array1, ...oneMoreArray];
array1.push("item3");
console.log(array1 === array2);
console.log(array1);
console.log(array2);

//slice is take less to make clone
//slice is always better way and efficient way to make clone

// let array2 = array1.slice(0).concat(["item3", "item4"]); //it will add arr1 element and then it will add item3 and item4
// array2.push("item5", "item6");
// console.log(array2);
