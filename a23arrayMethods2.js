//map method
//map function always create new array to store returned value and
//if function don't return anything then this new array will store
//undefined value

//use of map in array
const numbers = [3, 4, 5, 2, 6, 9];
// const square = function (number) {
//   //console.log(number.number);
//   return number * number;
// };
// const squareNumber = numbers.map(square);
// console.log(squareNumber); //o/p:[9, 16, 25, 4, 36, 81]

// //betterway to write above code
const squareNumber = numbers.map((number) => {
  return number * number;
});
console.log(squareNumber); //o/p:[9, 16, 25, 4, 36, 81]

//use of map in array containing object
const users = [
  { firstname: "Rahul", age: 19 },
  { firstname: "Harshit", age: 19 },
  { firstname: "Nitish", age: 19 },
  { firstname: "Roshan", age: 19 },
];
const userName = users.map((user, index) => {
  return `index:${index} ,userName:${user.firstname}`;
});
console.log(userName);
