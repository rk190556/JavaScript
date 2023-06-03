// // filter function
// //it is  always return true or false
// const numbers = [2, 34, 5, 5, 0, 8];

// const Even_number = numbers.filter((number, index) => {
//   return number % 2;
// });
// console.log(Even_number); //[2, 34, 0, 8]

//reduce
//reduce is used to return sum of array
const numbers = [2, 34, 5, 5, 0, 8];
//sum of all the number in array
const SumAll = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 100);
console.log(SumAll); //100 + 54=154

// // accumulator                  currentValue               return
// //(store first index & if we
// intalize the accumulatior then
// it store that value then it store    //(index)
//return value)
// 2                                    34                      36
// 36                                   5                       41
// 41                                   5                       46
// 46                                   0                       46
// 46                                   8                 o/p:  54

//Real life Example

const userCart = [
  { productId: 1, ProductName: "mobile", price: 50000 },
  { productId: 2, ProductName: "laptop", price: 70000 },
  { productId: 3, ProductName: "tv", price: 20000 },
];
const totalAmount = userCart.reduce((totalprice, currentProduct) => {
  return totalprice + currentProduct.price;
}, 0);

console.log(totalAmount);
