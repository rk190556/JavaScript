//nested destructuring
const users = [
  { userId: 1, firstname: "harshit", gender: "male" },
  { userId: 2, firstname: "rahul", gender: "male" },
  { userId: 3, firstname: "saurabh", gender: "male" },
];
const [{ firstname: user1Firstname }, , { gender: user3gender }] = users;
console.log(user1Firstname);
console.log(user3gender);
