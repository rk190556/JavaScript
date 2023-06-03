//function declaration

// syntax: function functionName{
//   ...
//   ...
// }

// function singHappyBirthday() {
//   console.log("happy Birthday to you..");
// }
// singHappyBirthday();
// singHappyBirthday();

// //function expression
// syntax: variable functionName=function(){
//   ....

//   ....
// }
// const singHappyBirthday = function () {
//   console.log("happy Birthday to you..");
// };

function sumthreenumbers(number1, number2, number3) {
  return number1 + number2 + number3;
}
const returnedvalue1 = sumthreenumbers(2, 3); //Nan-not a number
const returnedvalue2 = sumthreenumbers(2, 3, 5); //10
console.log(returnedvalue1, returnedvalue2);

function firstchar(anystirng) {
  return anystirng[0];
}
console.log(firstchar("dbad"));

//function
//input: array,target (number)
// output: index of target if target present in array

// function findtarget(myarray, target) {
//   for (let i = 0; i < myarray.length; i++) {
//     if (myarray[i] === target) {
//       return i;
//     }
//   }
//   return -1;
// }
//another way to make function
//function expression
let findtarget = function (myarray, target) {
  for (let i = 0; i < myarray.length; i++) {
    if (myarray[i] === target) {
      return i;
    }
  }
  return -1;
};
const myarray = [1, 3, 5, 7];
console.log(findtarget(myarray, 5));
