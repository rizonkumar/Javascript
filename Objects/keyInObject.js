// "key" in object

let user = {
  name: "John",
  age: 30,
};

console.log("Alert for age", "name" in user); // true it exisit
console.log(
  "Try to printing false when the key is not present",
  "hello" in user
);
