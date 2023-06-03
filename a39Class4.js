const obj1 = {
  key1: "value1",
  key2: "value2",
};
//this another way to create empty object
const obj2 = Object.create(obj1); //{} //it will make prototype obj
obj2.key3 = "value3";
console.log(obj2.key2); //this will give value 2
//it will first check obj2 if it will find key2 then ok if not then it will print obj1 value

//how it work
//__proto__  = [[prototype]] //it is reference of obj1
//__proto__  != prototype
console.log(obj2);
console.log(obj2.__proto__); //{key1: 'value1', key2: 'value2'}
