//efficient way to do previous code
const userMethods = {
  about: function () {
    return `person name is ${this.firstName} ,age is ${this.age} `;
  },
  is18: function () {
    return this.age >= 18;
  },
};
function CreateUser(firstName, lastName, email, age, address) {
  const user = {};
  user.firstName = firstName;
  user.lastName = lastName;
  user.email = email;
  user.age = age;
  user.address = address;
  user.about = userMethods.about;
  user.is18 = userMethods.is18;

  return user;
}
const user1 = CreateUser(
  "harshit",
  "vashsith",
  "harshit1@gmail.com",
  27,
  "LKO"
);
const user2 = CreateUser("harsh", "vashsu", "harshit2@gmail.com", 28, "LKO");
const user3 = CreateUser("hari", "vashsi", "harshit3@gmail.com", 29, "LKO");
console.log(user1.about());
console.log(user3.about());

const userMethods1 = {
  about: function () {
    return `${this.name} ,${this.age}`;
  },

  is18: function () {
    return this.age >= 18;
  },
};

// function CreateUsers(name, age) {
//   const user = {};
//   user.name = name;
//   user.age = age;
//   user.about = userMethods1.about;
//   user.is18 = userMethods1.is18;
//   return user;
// }

// const user5 = CreateUsers("rahul", 18);
// console.log(user5.is18());
