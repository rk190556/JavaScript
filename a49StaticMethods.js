//static Method & poperties
//it is called by classname but not by object name
class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  fullName1() {
    return `${this.firstName} ${this.lastName}`;
  }
  //static method

  static classInfo() {
    return "this is person class";
  }
  //static properties
  static desc = "static property";

  get fullName() {
    ////make function to method
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
  eat() {
    return `${this.name} is eating`;
  }
  isSupercute() {
    return this.age <= 1;
  }

  isCute() {
    return true;
  }
}

const person1 = new Person("Harshit", "sharma", 8);
//person1.classInfo();//Uncaught TypeError: person1.classInfo is not a function
console.log(Person.classInfo()); //this is person class

//stating property
console.log(Person.desc);
