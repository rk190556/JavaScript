// // //function inside function
// const app = () => {
//   const myFunc = () => {
//     console.log("hello world");
//   };
//   const addTwo = (num1, num2) => num1 + num2;

//   const mulTwo = function (num1, num2) {
//     return num1 * num2;
//   };
//   console.log("inside app");
//   myFunc();
//   console.log(addTwo(4, 5));
//   console.log(mulTwo(12, 14));
// };
// app();

//lexical scope
function myApp() {
  const myvar = "value1";
  function myFunc() {
    const myvar = "value58";
    console.log("inside myFunc", myvar);
  }
  console.log(myvar);
  myFunc();
}
myApp();
// // o/p: value1
// // inside myFunc value58

// function myApp() {
//   const myvar = "value1";
//   function myFunc() {
//     //const myvar = "value58";
//     console.log("inside myFunc", myvar);
//   }
//   console.log(myvar);
//   myFunc();
// }
// myApp();
// // //o/p: value1
// // //inside myFunc value1
