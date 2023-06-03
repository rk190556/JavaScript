function CreateUser(firstName, lastName, email, age, address) {
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

for (let key in user1) {
  // console.log(key);//prototype ka key bhi bta raha hai
  if (user1.hasOwnProperty(key)) {
    console.log(key); // prototype ka key print nahi karega
  }
}
//
