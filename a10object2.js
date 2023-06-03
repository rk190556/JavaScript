// // diff b/w dot and bracket notation
// const key = ["email"];
// const person = {
//   name: "Rahul",
//   age: 19,
//   "person hobbies": ["guitar", "dancing", "Playing cricket"],
//   person_interest: "Engineering",
// }; // name ,age and hobbies are key value pairs
// //console.log(typeof person, person.person hobbies);//we can't access this with dot notation beacuse of space
// console.log(person["person hobbies"]);
// console.log(person["name"]);
// person[key] = ["rahulmalik70072@gmail.com"];
// console.log(person);
// console.log(person.person_interest);

// //how to iterate object
const person = {
  name: "Rahul",
  age: 19,
  "person hobbies": ["guitar", "dancing", "Playing cricket"],
};
//for in loop
//object.key

// for (let key in person) {
//   console.log(person[key]);
// }

for (let key in person) {
  //console.log(`${key} : ${person[key]}`);
  console.log(key, ":", person[key]);
}

console.log(typeof Object.keys(person), ":", Object.keys(person)); //O/P:object : Array(3) [ "name", "age", "person hobbies"
const val = Array.isArray(Object.keys(person));
console.log(val);

// //for of loop in object

// for (let key of Object.keys(person)) {
//   console.log(person[key]);
// }
