//iterables
//jispe hum for of loop laga sakein
//string,array are iterable

const firstName = "Harshit";

const items = ["item1", "item2", "item3"];
for (let item of items) {
  console.log(item);
}
//for object we can iterate with for of loop
//object are not iterable

//array like object
//jinke paas length property hoti hai
//aur jinkp hum index se access kar sakte hai
//example ->string
const Myname = "harshit";
console.log(Myname.length);
console.log(Myname[2]);

//Set (it is iterable)
//store data and have it's own method
//No index-based access
// order is not guranteed
//unique items only(no duplicates allowed)

const numbers = new Set([1, 2, 3, 4]);
console.log(numbers);

const numbers1 = new Set();
numbers1.add(1);
numbers1.add(2);
numbers1.add(3);
numbers1.add(4);
numbers1.add(5);
numbers1.add(["item1", "item2"]);
numbers1.add(["item1", "item2"]); //here dupicates are possible because of address of both array are different
console.log(numbers1);

//to check element in set
if (numbers1.has(1)) {
  console.log("1 is present");
} else {
  console.log("1 is not present");
}

//sets are iterables so we can apply for of loop
for (let number1 of numbers1) {
  console.log(number1);
}

//with the help of set we can find unique element from array
const myArray = [2, 4, 3, 3, 8, 1, 1];
const uniqueElement = new Set(myArray);
console.log(uniqueElement);
console.log(myArray); //myArray don't change
