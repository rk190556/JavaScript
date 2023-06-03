//parameter destructuring
//object
//react

const person = {
  firstname: "harshit",
  gender: "male",
};

// function printDetails(obj) {
//   console.log(obj.firstname);//harshit
//   console.log(obj.gender);//male
//   console.log(obj.age);//undefined
// }
// printDetails(person);

// below is destructuring
// function printDetails({ firstname, gender }) {
//   console.log(firstname); //harshit
//   console.log(gender); //male
//   console.log(age); //refernce caught error
// }
// printDetails(person);

//callback function-> calling function by other function it's parameter.
function myFunc2(name) {
  console.log("inside Func2");
  console.log(`my name is ${name}`);
}

function myFunc(callback) {
  console.log("hello there i am a func and I can..");
  callback("Rahul");
}
myFunc(myFunc2);

// o/p: hello there i am a func and I can..
//  inside Func2
// my name is Rahul

function myfun2(age) {
  console.log(`Thanks! fun1 to called me.`);
  console.log(age);
}
function myfun1(callback) {
  console.log(`Hi I am myfun1 and I can call myfun2`);
  callback(24);
}
myfun1(myfun2);
