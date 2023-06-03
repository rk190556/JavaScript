//function(that create object)
//2.add key value pair
//3. object ko return karega
function CreateUser(firstName, lastName, email, age, address) {
  const user = {};
  user.firstName = firstName;
  user.lastName = lastName;
  user.email = email;
  user.age = age;
  user.address = address;
  user.about = function () {
    return `person name is ${this.firstName} ,age is ${this.age} `;
  };
  user.is18 = function () {
    return this.age >= 18;
  };
  return user;
}
const user1 = CreateUser("harshit", "vashsith", "harshit@gmail.com", 27, "LKO");
console.log(user1);
const is18 = user1.is18();
console.log(is18);

const about = user1.about();
console.log(about);
