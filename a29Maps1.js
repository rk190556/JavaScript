//Maps
//Maps is an iterable and store data in fashion
//store key value pair(like Object)
//duplicate keys are not allowed like objects

//diff b/w maps and objects
//obj can only have string or symbol as key
//but In maps you can use anything as key
//like array , number,string

//object literals
//object keys are in string 99% chances and in symbol 1%
const person = {
  firstName: "harshit",
  age: 7,
  1: "one",
};
console.log(person["1"]);
for (let key in person) {
  console.log(typeof key);
}

//key value pairs
const man = new Map();
man.set("firstname", "Harshit");
man.set("age", 7);
man.set([1, 2, 3], "onetwothree");
man.set({ 1: "one" }, "onetwothree");
man.set(1, "one");
console.log(man);
console.log(man.firstName); //undefined we can't access the key value as like object
//console.log(man.get("firstname")); //harshit

// for (let key of man.keys()) {
//   console.log(key, " : ", typeof key);
// }

for (let [key, value] of man) {
  //here we use destructing
  console.log(key, value);
}

// const person1 = new Map([
//   ["firstname", "harshit"],
//   ["age", 26],
// ]);
// console.log(person1);//o/p: {'firstname' => 'harshit', 'age' => 26}

const person2 = {
  id: 1,
  firstName: "Harshit",
};
const person3 = {
  id: 1,
  firstName: "Harshit",
};
const extraInfo = new Map();
extraInfo.set(person2, { age: 8, gender: "male" }); //adding extra info in map of person2
extraInfo.set(person3, { age: 12, gender: "female" }); //adding extra info in map of person3
//console.log(extraInfo);

console.log(person2.id);
for (let key in person2) {
  console.log(key);
}
console.log(extraInfo.get(person2));
//console.log(extraInfo.get(person3).id); //undefine because id key value not present in map
console.log(extraInfo.get(person3).age);
