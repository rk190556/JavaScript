//methods -> function inside Object
//here this is object behave same as person
// const person = {
//   firstName: "Harshit",
//   age: 8,
//   about: function () {
//     console.log(`person name is ${this.firstName} and age is ${this.age}`);
//   },
// };
// console.log(person);
// person.about();

function personInfo() {
  console.log(`person name is ${this.firstName} and age is ${this.age}`);
}
const person1 = {
  firstName: "Harshit",
  age: 8,
  about: personInfo,
};

const person2 = {
  firstName: "Mohit",
  age: 18,
  about: personInfo,
};

const person3 = {
  firstName: "nitish",
  age: 17,
  about: personInfo,
};

person1.about();
person2.about();
person3.about();
