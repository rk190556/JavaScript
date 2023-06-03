//some method
const numbers = [3, 5, 11, 9, 12];
// **kya ek bhi** number esa hai jo even hai
//true
const ans = numbers.some((number) => number % 2 === 0);
console.log(ans);

//Realistic Example
const userCart = [
  { productId: 1, ProductName: "mobile", price: 50000 },
  { productId: 2, ProductName: "laptop", price: 40000 },
  { productId: 3, ProductName: "tv", price: 20000 },
  { productId: 4, ProductName: "macbook", price: 200000 },
];
const check = userCart.some((usercart) => usercart.price > 100000);
console.log(check);

//fill method
//array.fill(value,start,end)

const myArray = new Array(10).fill(1); //all 10 element of array filled with 1
console.log(myArray);
const Array2 = [1, 4, 5, 3, 5, 6, 7, 9, 12, 35];     
Array2.fill(0, 2, 5); //from index=2 to 4, 0 will be filled
console.log(Array2);   //Array(10)[(1, 4, 0, 0, 0, 6, 7, 9, 12, 35)];

//splice method
//splice(starting_Index,no of deleted_item,inserted item)

const myArray1 = ["item1", "item2", "item3"];

//delete
//myArray1.splice(1, 1);
//console.log(myArray1); // o/p: ['item1', 'item3']

// //deleted item
// const deleteditem = myArray1.splice(1, 1);
// console.log("Deleted Item", deleteditem);

// //insert
// myArray1.splice(1, 0, "inserted_Item");
// console.log(myArray1);
// // o/p:-["item1", "inserted_Item", "item2", "item3"];

//insert and delte both
myArray1.splice(1, 2, "inserteditem1", "inserteditem2");
console.log(myArray1);
