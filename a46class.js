//class keyword
// class are fake in javascript
//creating new user we have to use new keyword

class CreateUser {
  constructor(firstName, lastName, email, age, address) {
    console.log("constructor called");
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.address = address;
  }
  about() {
    return `person name is ${this.firstName} ,age is ${this.age} `;
  }
  is18() {
    return this.age >= 18;
  }
  sing() {
    return "la la la ";
  }
}

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
console.log(user1.is18());
console.log(Object.getPrototypeOf(user1));
