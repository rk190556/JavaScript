//getter and setters
class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  get fullName() {
    ////make function to method
    return `${this.firstName} ${this.lastName}`;
  }
  fullName1() {
    return `${this.firstName} ${this.lastName}`;
  }
  setName(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  set fullName(fullName) {
    const [firstName, lastName] = fullName.split(" ");
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const person1 = new Person("Harshit", "sharma", 5);
console.log(person1.fullName1());
console.log(person1.fullName);
//console.log(person1.fullName()); // o/p:Uncaught TypeError: person1.fullName is not a function

//use of setter
// person1.setName("mohit", "kumar");
// console.log(person1.fullName);//name changed : mohit kumar

person1.fullName = "Rohit Kumar";
console.log(person1);
console.log(person1.fullName);
