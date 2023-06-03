// function returning function

function myFunc() {
  function hello() {
    return "hello world";
  }
  return hello();
}
const ans = myFunc();
console.log(ans());

//another way to write above the func

function myFunc() {
  return function () {
    return "hello world";
  };
  return hello;
}
const ans1 = myFunc();
console.log(ans());
