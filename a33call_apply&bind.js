//call(),apply()and bind()

// function hello() {
//   console.log("hello World");
// }
// hello.call();

// const user1 = {
//   firstName: "Harshit",
//   age: 8,
//   about: function (hobby, favMusician) {
//     console.log(
//       `person name is ${this.firstName} ,age is ${this.age},hobby:${hobby} & favMusician:${favMusician} `
//     );
//   },
// };

// const user2 = {
//   firstName: "Rohan",
//   age: 9,
// };
// //here we have to use about for user 2 without writing about fun in user2

// user1.about.call(user2, "guitar", "moazrt");

//different way to do
function about(hobby, favMusician) {
  console.log(
    `person name is ${this.firstName} ,age is ${this.age},hobby:${hobby} & favMusician:${favMusician} `
  );
}

const user3 = {
  firstName: "Raju",
  age: 8,
};

const user4 = {
  firstName: "Rohit",
  age: 9,
};
about.call(user3, "sitar", "Mona");

//use of apply
//apply is same as call but in this we pass two or argument of function in array form
about.apply(user3, ["guitar", "Moartz"]);

//use of bind
// behave same as call only diff is call don't return anything but bind return to newFunc
const func = about.bind(user3, "guitar", "bach");
func();
