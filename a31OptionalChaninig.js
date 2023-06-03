//optional chaining

const user = {
  firstName: "harshit",
  address: { houseNo: "1234" },
};
// console.log(user.firstName);
// console.log(user.address.houseNo);
// if we comment out the address
// -> O/p: Cannot read properties of undefined (reading 'houseNo')

//use of optional chaining to avoid to get the error
console.log(user?.firstName);
console.log(user?.address?.houseNo); //agar user me key value address hai aur houseNo hai to print karo
