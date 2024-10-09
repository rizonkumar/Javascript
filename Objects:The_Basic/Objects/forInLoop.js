// for (key in object) {
//   // excute the body for each key amoung object properties
// }

let user = {
  name: "John",
  age: 30,
  isAdmin: true,
};

for (let key in user) {
  console.log("Printing key", key);
  console.log("Printing values using []", user[key]);
  console.log("printing with the dot", user.key); // undefined
}

// Note:

// The dot operator is used to access properties with static names.
// To access properties dynamically based on variables, use square bracket notation ([]).
// The key variable in the for...in loop holds the current property name being iterated over.
