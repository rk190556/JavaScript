//prototype
function hello() {
  console.log("hello");
}

//javascript function ==> function + object
// console.log(hello.name); //hello

//you can add your own properties
// hello.myOwnProperty = "very unique value";
// console.log(hello.myOwnProperty);// very unique value

//name property ---> tells function name;
//function provides more useful properties

//console.log(hello.prototype);//o/p:{}
//protype ek khali jagah create karta hai
//only fun provide prototype property

if (hello.prototype) {
  console.log("prototype is present");
} else {
  console.log("prototype is not present");
}

//adding our own property
hello.prototype.abc = "abc";
hello.prototype.sing = function () {
  return "lalalala";
};
console.log(hello.prototype.sing);
//prototype is itself a object
