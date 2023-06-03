//clone using Object.assign
//memory

const obj1 = {
  key1: "value1",
  key2: "value2",
};

const obj2 = obj1;
const obj3 = { ...obj1 }; //spreading operator used to copy the obj but not it's address
//another way to make clone
const obj4 = Object.assign({}, obj1);

obj1.key3 = "value3";
console.log(obj1); //{key1: 'value1', key2: 'value2', key3: 'value3'}
console.log(obj2); //{key1: 'value1', key2: 'value2', key3: 'value3'}
//here both obj using same address to store key pairs

console.log(obj3); //here change in obj1 will not affect the obj3
console.log(obj4);
