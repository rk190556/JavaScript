//sort method
//ASCII TABLE
//CHAR:ASCII VALUE
//sort method change the original array
//[48,57]=[0,9]
//[65,90]=[A,Z]
//[97,112]=[a,z]
//[1200, 3000, 5, 9]
//[5, 9, 1200, 3000](unexpected result because it sort the numbers as string which means acc. to ASCII CODE)
const numbers = [5, 9, 1200, 3000];
numbers.sort();
console.log(numbers);
//["5", "9", "1200", "3000"]
//if string is more than one charcter then it's first char ascii value will taken account.
//to sort the array.
//[53,57,49,51]

//sorting the string
const usernames = ["abcd", "dbcd", "aabb", "aacd", "aaba", "Abc", "ABC"];
usernames.sort();
console.log(usernames);

const numbers1 = [5, 9, 3000, 1200];
numbers1.sort((a, b) => {
  return a - b; //for descending order return b-a
});
console.log(numbers1); //[5, 9, 1200, 3000] //now we get expected output

//working
//a,b
//1200,3000
//a-b->-ve ----->a,b
//sorted no: 1200,3000

//a-b -->positive --->b,a
// 15-9 --> 9,15

//price lowToHigh HighToLow
const products = [
  { productId: 1, ProductName: "mobile", price: 50000 },
  { productId: 2, ProductName: "laptop", price: 70000 },
  { productId: 3, ProductName: "tv", price: 20000 },
];
//lowtoHigh
// products.sort((a, b) => {
//   return a.price - b.price;
// });
// console.log(products);// it will change original arrangement of products
// //so,we have to make clone of products

const lowTohigh = products.slice(0).sort((a, b) => {
  return a.price - b.price;
});
console.log(lowTohigh);

const HighToLow = products.slice(0).sort((a, b) => {
  return b.price - a.price;
});
console.log(HighToLow);
