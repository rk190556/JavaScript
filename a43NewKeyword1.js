//new keyword
//1. this={}
//2. return {}

//contructor function //if we used new keyword then construction fucntions name start with capital name
function CreateUser(firstName, lastName, email, age, address) {
  //const user = Object.create(CreateUser.prototype); //{}
  this.firstName = firstName;
  this.lastName = lastName;
  this.email = email;
  this.age = age;
  this.address = address;

  //return this;
}
CreateUser.prototype.about = function () {
  return `person name is ${this.firstName} ,age is ${this.age} `;
};
CreateUser.prototype.is18 = function () {
  return this.age >= 18;
};
const user1 = new CreateUser(
  "harshit",
  "vashsith",
  "harshit1@gmail.com",
  27,
  "LKO"
);
//console.log(CreateUser.prototype);
const user2 = new CreateUser(
  "harsh",
  "vashsu",
  "harshit2@gmail.com",
  28,
  "LKO"
);
const user3 = new CreateUser("hari", "vashsi", "harshit3@gmail.com", 29, "LKO");
console.log(user1);
console.log(user1.is18());
