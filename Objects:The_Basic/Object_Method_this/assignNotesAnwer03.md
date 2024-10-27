## Chaining Method Calls

**Problem:**

We have a `ladder` object with methods `up`, `down`, and `showStep`. We want to modify the code to make these method calls chainable, allowing us to write more concise and readable code.

**Original Code:**

```javascript
let ladder = {
  step: 0,
  up() {
    this.step++;
  },
  down() {
    this.step--;
  },
  showStep: function () {
    // shows the current step
    alert(this.step);
  },
};

// To make multiple calls:
ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1
ladder.down();
ladder.showStep(); // 0
```

**Goal:**

To modify the code to enable chaining:

```javascript
ladder.up().up().down().showStep().down().showStep(); // shows 1 then 0
```

**Solution:**

We can achieve this by modifying the methods to return the `ladder` object itself after performing their respective actions.

**Modified Code:**

```javascript
let ladder = {
  step: 0,
  up() {
    this.step++;
    return this; // Return the object itself
  },
  down() {
    this.step--;
    return this; // Return the object itself
  },
  showStep() {
    alert(this.step);
    return this; // Return the object itself
  },
};
```

By returning `this`, we can chain method calls, making the code more concise and easier to read.
