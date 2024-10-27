## Simple Calculator in JavaScript

**What We Did:**

We created a JavaScript object named `calculator` that acts as a simple calculator. This object has three methods:

- **`read()`:** This method prompts the user to enter two numbers and stores them in the object's properties `a` and `b`.
- **`sum()`:** This method calculates the sum of the values stored in properties `a` and `b`.
- **`mul()`:** This method calculates the multiplication of the values stored in properties `a` and `b`.

**Code:**

```javascript
let calculator = {
  read() {
    this.a = +prompt("Enter first number: ");
    this.b = +prompt("Enter second number: ");
  },

  sum() {
    return this.a + this.b;
  },

  mul() {
    return this.a * this.b;
  },
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());
```

**Explanation:**

1. **Object Definition:**

   - We define an object named `calculator` using curly braces `{}`. This object will hold the calculator functionalities.

2. **`read()` Method:**

   - This method is defined using the `read` keyword followed by parentheses `()`.
   - Inside the method body, we use the `prompt()` function to display a message ("Enter first number:") and get user input.
   - The result of `prompt()` is a string, so we use the unary plus operator (`+`) to convert it to a number and store it in the object's property `a`.
   - We repeat the process for the second number, storing it in the property `b`.

3. **`sum()` Method:**

   - This method calculates the sum.
   - We access the object's properties `a` and `b` to retrieve the stored numbers.
   - We use the `+` operator to add them and return the result using the `return` statement.

4. **`mul()` Method:**

   - This method calculates the multiplication.
   - We access the object's properties `a` and `b` to retrieve the stored numbers.
   - We use the `*` operator to multiply them and return the result using the `return` statement.

5. **Using the Calculator:**
   - We call the `calculator.read()` method to prompt the user for input.
   - We call `alert(calculator.sum())` to display the sum of the entered numbers using the `alert()` function.
   - We call `alert(calculator.mul())` to display the product of the entered numbers using the `alert()` function.
