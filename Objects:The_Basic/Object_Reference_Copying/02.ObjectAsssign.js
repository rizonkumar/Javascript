/***

 Imagine you have a box (the target object) and some bags (source objects) filled with stuff (properties). Object.assign lets you take things (properties) out of the bags and put them into the box.

The box (target object): This is where you want to put the stuff (properties). It can already have things in it, and Object.assign won't remove them.
The bags (source objects): These are the objects that have the things (properties) you want to copy. You can provide multiple bags (source objects).
Here's how it works:

You give Object.assign two things:
The box (target object) where you want to put the stuff.
The bags (source objects) that have the stuff.
Object.assign reaches into each bag (source object) and takes out all the things (properties) it finds.
It then puts those things (properties) into the box (target object).
If there's already something with the same name in the box, Object.assign replaces it with the thing from the bag.
If there's no space in the box, it just adds the new things (properties).

Key points to remember:

Object.assign only copies properties that are directly on the source objects, not inherited ones.
It modifies the target object directly (unlike the spread operator, which creates a new object).
 */

let person = { name: "Alice" }; // The box (target object)
let permissions = { canView: true, canEdit: false }; // The bag (source object)

Object.assign(person, permissions); // Take things from permissions and put them in person

console.log(person); // Output: { name: "Alice", canView: true, canEdit: false }

/**
 *
 * We also can use Object.assign to perform a simple object cloning
 */

let user = {
  name: "John",
  age: 30,
};

let cloneUser = Object.assign({}, user);
console.log(cloneUser); // Output: { name: "John", age: 30 }
console.log(cloneUser.name); // Output: John
console.log(cloneUser.age); // Output: 30
