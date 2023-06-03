const user1 = {
  firstName: "Harshit",
  age: 8,
  about: function (hobby, favMusician) {
    console.log(
      `person name is ${this.firstName} ,age is ${this.age},hobby:${hobby} & favMusician:${favMusician} `
    );
  },
};
//don't do this mistake

// const myfunc=user1.about;
// myfunc();//this will give you error beacause in window there is user1 not myfunc

//correct way to write
const myfunc = user1.about.bind(user1, "guitar", "moratz");
myfunc();
