"use strict"; // it will caught that variable is defined or not before used.
// console.log can print something on console
// comment shortcut : ctrl+/ and vice versa also.
console.log("hello World");
var firstname = "Rahul Kumar";
console.log(firstname);
//change value
firstname = "Mohit";
console.log(firstname);

// ** Below code also work without defining variable but if we don't use "use strict;"  **
// firstname = "Rahul Kumar";
// console.log(firstname);
// //change value
// firstname = "Mohit";
// console.log(firstname);

//power of any number
var $value1 = 2;
console.log(3 ** $value1); // ** is denote power of Number  //

//main differnce b/w let and var is that in var we can define a variable
//with same name more than one time but in let we can't.
//so that we used always let to create variable
var firstname = "Rahul Kumar";
var firstname = "Tushar Singh";

console.log(firstname);
