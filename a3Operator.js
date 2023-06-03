let age = 22;
let firstName = "Rahul";

// 22->"22"
// convert no to string
//age= age + "";
// console.log(typeof(age)); "22"

//convert string to no
let s1 = +"34";
console.log(typeof s1);

//string concatenation
let string1 = "25";
let string2 = "30";
console.log(+string1 + +string2);

//Templates string

let age2 = 22;
let name2 = "Rahul";
let aboutMe = `my name is ${name2} and my age is ${age2}`;
console.log(aboutMe);

//undefine
let u1;
//const u2;
console.log(typeof u1); //undefine
//console.log(typeof u2);//uncaught syntax error
u1 = "Rahul";
console.log(typeof u1, u1);

// //null
// let myvariable = null;
// console.log(myvariable); // o/p: null
// myvariable = "harshit";
// console.log(myvariable, typeof myvariable);
//console.log(typeof null); //bug,error o/p: object

// //BigInt

// let myNo = BigInt(12);
// let sameMyNo = 123n; //123n is also another representation of BigInt
// console.log(myNo); //12n
// console.log(Number.MAX_SAFE_INTEGER); //9007199254740991
// console.log(myNo + sameMyNo); //135n
