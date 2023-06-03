//rest parameter

function myFunc(a, b, ...c) {
  console.log(`a is ${a}`); //2
  console.log(`b is ${b}`); //3
  console.log("c is ", c); //[46, 43, 624, 236, 72, 89]
}
myFunc(2, 3, 46, 43, 624, 236, 72, 89);

function addAll(...numbers) {
  let total = 0;
  for (let number of numbers) {
    total += number;
  }
  return total;
}
console.log(addAll(4, 5, 4, 5)); //18

const MultiplyAll = (...numbers) => {
  let i = 1;
  for (let number of numbers) {
    i = i * number;
  }
  return i;
};
console.log(MultiplyAll(1, 2, 3, 4)); //24
