// The call structuredClone(object) clones the object with all nested properties.

let user = {
  name: "John",
  sizes: {
    height: 182,
    width: 50,
  },
};

let clone = structuredClone(user);

console.log("Clone", clone);

console.log(user.sizes === clone.sizes); // false, different objects

// user and clone are totally unrelated now
user.sizes.width = 60; // change a property from one place
console.log(clone.sizes.width); // 50, not related
