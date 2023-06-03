//object destructuring

const band = {
  bandname: "led zepplin",
  famousSong: "stairway to heaven",
  year: 1968,
  anotherFamoussong: "kashmir",
};
let { bandname, famousSong: var2, ...restProps } = band; //here famousSong key value changes to var2 but bandname not.
console.log(bandname, ": ", var2);
console.log(restProps); //o/p:{year: 1968, anotherFamoussong: 'kashmir'}

//objects inside array
// very useful in real world application

const users = [
  { userId: 1, firstname: "harshit", gender: "male" },
  { userId: 2, firstname: "rahul", gender: "male" },
  { userId: 3, firstname: "saurabh", gender: "male" },
];

for (let user of users) {
  console.log(user.firstname);
}
