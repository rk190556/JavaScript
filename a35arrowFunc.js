//arrow function in object
// isme this hai oo surrounding se lega means iska this window hoga not obj
const user1 = {
  firstName: "Harshit",
  age: 8,
  about: () => {
    console.log(`person name is ${this.firstName} ,age is ${this.age} `);
  },
};
user1.about(user1); //undefine because here this is window not user1
//simple function me this user hoga but arrow fun me nahi hoga
