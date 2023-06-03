//computed properties of object

//storing key pair in variable
const key1 = "objkey1";
const key2 = "objkey2";

//storing key value pair of object
const value1 = "myvalue1";
const value2 = "myvalue2";

// const obj = {
//   [key1]: value1,
//   [key2]: value2,
// };
// console.log(obj);//o/p:{"objkey1": "myvalue1",  "objkey2": "myvalue2"}

//another way
const obj = {};
obj[key1] = value1;
obj[key2] = value2;
console.log(obj);

//another different way using dot properties of obj
const newObj = {};
newObj.key1 = value1;
newObj.key2 = value2;
console.log(newObj);

//spread operator
const obj1 = {
  key1: "value1",
  key2: "value2",
};
const obj2 = {
  key1: "uniquevalue",
  key3: "value3",
  key4: "value4",
};
const newObject = { ...obj1, ...obj2, key89: "ab" }; //this new obj contain both key values of obj1 and obj2
console.log(newObject); //but key1 is present in both obj so later key1 value will assign to key1 in newObject

const newObject1 = { ..."abc" };
console.log(newObject1); //o/p: {0: 'a', 1: 'b', 2: 'c'}
