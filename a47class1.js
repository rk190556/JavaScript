//animal class
class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
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
const animal1 = new Animal("tom", 2);
console.log(animal1);
console.log(animal1.eat());
console.log(animal1.isSupercute());

class Dog extends Animal {
  constructor(name, age, speed) {
    super(name, age);
    this.speed = speed;
  }
  eat() {
    return `MODIFIED EAT: ${this.name} is eating`;
  }
  run() {
    return `${this.name} is running at ${this.speed}Kmph`;
  }
}
const tommy = new Dog("tommy", 3, 45);
console.log(tommy.run());
console.log(tommy.eat());
console.log(tommy.isCute());
