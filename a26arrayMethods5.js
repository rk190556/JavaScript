//find method
//it helps to print first occurnce in array

const myArray = ["hello", "cat", "CAT", "dog", "Lion"];
const ans = myArray.find((stirng) => stirng.length === 3);
console.log(ans); //cat

//real life example of method

const users = [
  { userId: 1, username: "Harshit" },
  { userId: 2, username: "rohit" },
  { userId: 3, username: "mohan" },
  { userId: 4, username: "Sakirti" },
  { userId: 5, username: "Monika" },
];
const myUser = users.find((user) => user.userId === 4);
console.log(myUser);

//EveryMethod

const number = [2, 4, 5, 7, 9, 34];
const res = number.every((number) => number % 2 === 0);
console.log(res); //it will print true if all element is even else it will print false

//Realistic Example
const userCart = [
  { productId: 1, ProductName: "mobile", price: 50000 },
  { productId: 2, ProductName: "laptop", price: 40000 },
  { productId: 3, ProductName: "tv", price: 20000 },
];
const check = userCart.every((cartItem) => cartItem.price <= 50000);
console.log(check); //true
