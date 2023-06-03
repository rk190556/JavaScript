//better way to do previous code
// const userMethods = {
//   about: function () {
//     return `person name is ${this.firstName} ,age is ${this.age} `;
//   },
//   is18: function () {
//     return this.age >= 18;
//   },
// };
function CreateUser(firstName, lastName, email, age, address) {
  const user = Object.create(CreateUser.prototype); //{}
  user.firstName = firstName;
  user.lastName = lastName;
  user.email = email;
  user.age = age;
  user.address = address;

  return user;
}
CreateUser.prototype.about = function () {
  return `person name is ${this.firstName} ,age is ${this.age} `;
};
CreateUser.prototype.is18 = function () {
  return this.age >= 18;
};
const user1 = CreateUser(
  "harshit",
  "vashsith",
  "harshit1@gmail.com",
  27,
  "LKO"
);
//console.log(CreateUser.prototype);
const user2 = CreateUser("harsh", "vashsu", "harshit2@gmail.com", 28, "LKO");
const user3 = CreateUser("hari", "vashsi", "harshit3@gmail.com", 29, "LKO");
console.log(user1);
console.log(user1.is18());
