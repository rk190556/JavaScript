//IF-ELSE
//falsy values: false,"",null,undefined,0
//truthy: "abc",1,-1

// let firstname = -1;

// if (firstname) {
//   console.log(firstname);
// } else {
//   console.log("firstName is kind a empty");
// } //o/p:-1

// //TERNARY OPERATOR /CONDITIONAL OPERATOR
// let age = 22;
// let drink = age >= 5 ? "coffee" : "milk";
// console.log(drink);

//Nested if-else

//winning no 19
//19 is ur guess no
//17 is too low
//20 is too high

let winningNo = 19;
let userGuess = +prompt("Guess a number"); //prompt take input as
//string but if add + infront of orompt it convert into no.
console.log(typeof userGuess, userGuess);
if (userGuess === winningNo) {
  console.log("you guess right no");
} else {
  if (userGuess > winningNo) console.log("No is too high");
  else {
    console.log("No is too low");
  }
}
