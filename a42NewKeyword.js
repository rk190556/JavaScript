//new keyword
function CreateUser(firstName, age) {
  this.firstName = firstName;
  this.age = age;
}
const user1 = new CreateUser("harshit", 9);

//new keyword
//1.empty object this ={}
//  2. return this
//new keyword will automatically make [[prototype]] == prototype
console.log(user1);
