//let keyword
//for creating variable we use let in js 99% of time.
let firstname = "Rahul Kumar";
firstname = "Tushar Singh";
console.log(firstname);

// declare constants
const pi = 3.14;
//pi = 14; we can't assign the const variable again
console.log(pi);

//           **string**            //
//string indexing
let string = "Prince Binda";
console.log(string[7]);

//string properties
//trim(),toUpperCase(),toLowerCase(),slice(firstIndex,lastIndex)
let s1 = "  Harshit  ";
console.log(s1.length); //11
let s2 = s1.trim();
console.log(s2); //Harshit //trim remove the space present in variable
console.log(s2.length); //7
console.log(s1.toUpperCase());

//slice() is used to cut the part of string
let newString = s2.slice(0, 4); //Hars
let s3 = s2.slice(1); //arshit
console.log(newString);
console.log(s3);
