//console.log(this); //this and window are same
//"use strict";
//this===window -> true
//window is object of javascript
function myfunc() {
  console.log(this);
}
myfunc(); //if we call this in strict mode then it will give o/p undefined else it will give Window
//window.myfunc;
