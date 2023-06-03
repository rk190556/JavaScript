//object reference type
//array are good but not sufficient
//for real world data
//objects store key value pairs
//objects don't have index

//how to create object
const person = {
  name: "Rahul",
  age: 19,
  hobbies: ["guitar", "dancing", "Playing cricket"],
}; // name ,age and hobbies are key value pairs
console.log(typeof person, person); //object {name: 'Rahul', age: 19, hobbies: Array(3)}

//how to access objects
console.log(person.name);
console.log(person.hobbies);

// how to add key value pair to objects
// person.gender="male"; //it will add key value person in object person
//or another way to add key value
person["gender"] = "male";
console.log(person.gender);
// console.log(person.gender);
