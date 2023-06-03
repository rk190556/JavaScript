//block scope vs function scope

// // let and const are block scope
// //var is function scope

// {
//   const firstname = "Rahul";
//   console.log(firstname); //Rahul
// }
// {
//   const firstname = "Rohit";
//   console.log(firstname); //Rohit
// }
// const firstname = "garima";
// console.log(firstname); //garima

// {
//   var firstname1 = "Rahul";
// }
// {
//   console.log(firstname1); //Rahul
// }

//default parameters
// //below function are used before default parameters are not there in javascript
// function addTwo(num1, num2) {
//   if (num2 === undefined) {
//     num2 = 0;
//   }
//   return num1 + num2;
// }
// console.log(addTwo(4)); // o/p:4
// console.log(addTwo(4, 8)); // o/p:12

//default parameter
function addTwo(num1, num2 = 0) {
  return num1 + num2;
}
console.log(addTwo(4)); // o/p:4
console.log(addTwo(4, 8)); // o/p: 12
