//important array methods
//forEach ,map,filter,reduce

//simple way to write but we used loop
// const numbers = [4, 2, 5, 8];
// function multiplyBy2(numbers, index) {
//   console.log("index is", index);
//   console.log(`${numbers}*2 = ${numbers * 2}`);
// }

// for (let i = 0; i < numbers.length; i++) {
//   multiplyBy2(numbers[i], i);
// }

//using forEach keyword we can write more simple
const numbers = [4, 2, 5, 8];
function myFunc(numbers, index) {
  console.log("index is", index);
  console.log(`${numbers}*2 = ${numbers * 2}`);
}
//syntax forEach method: array.forEach(function);

numbers.forEach(myFunc);
//with the help of forEach in array we can directly call function without passing the
//argument because forEach automatically pass the first parameter which is the array value
//and second parameter array index

//obj.forEach(func);
const users = [
  { firstname: "Rahul", age: 19 },
  { firstname: "Harshit", age: 19 },
  { firstname: "Nitish", age: 19 },
  { firstname: "Roshan", age: 19 },
];
//we have to print first name of obj using forEach keyword
// users.forEach(function (user) {
//   console.log(user.firstname);
// });

users.forEach((user, index) => {
  console.log(user.firstname, index);
});
