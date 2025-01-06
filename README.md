# 60-Minute Coding Exercise: Promises, Classes, and 'this'

## Exercise 1: Create User Class
```javascript
class User {
}
```

## Exercise 2: Add Constructor
```javascript
class User {
  constructor(name) {
    this.name = name;
  }
}
```
**Q: What happens if we don't use `this` in the constructor but use `const` instead?**

## Exercise 3: Add Greet Method
```javascript
class User {
  constructor(name) {
    this.name = name;
  }

  greet() {
      console.log(`Hello, I'm ${this.name}`);
  }
}
```
**Q: What's the output? Why?**

```javascript
const user = new User('John');
const greetFn = user.greet;
greetFn();
```

*A: If you forget the new keyword:*
- this inside the constructor points to the global object (or undefined in strict mode)
- Properties get assigned to global scope instead of a new object
- No object is returned automatically
- TypeError if you try to access methods

```javascript
// With new - works
const user1 = new User('John');  // User {name: 'John'}

// Without new - breaks
const user2 = User('John');      // undefined
console.log(window.name);        // 'John' (properties leaked to global)
user2.greet();                   // TypeError: Cannot read properties of undefined
```

## Exercise 4: Arrow Function Method
```javascript
class User {
  constructor(name) {
    this.name = name;
  }
  
  greet() {
    console.log(`Hello, I'm ${this.name}`);
  }

  greetArrow = () => {
    console.log(`Hello, I'm ${this.name}`);
  }
}
```
**Q: Why does the arrow function maintain the correct `this` context?**

## Exercise 5: Async Method
```javascript
class User {
  constructor(name) {
    this.name = name;
  }

  async getData() {
    return Promise.resolve(this.name);
  }
}
```
**Q: What's the difference between returning `Promise.resolve()` and just returning the value?**

## Exercise 6: Then Chain Variations
```javascript
  getData()
    .then(x => x.toUpperCase())
    .then((x) => x.toUpperCase())
    .then((x) => { return x.toUpperCase() })
```
**Q: What is the purpose of the .then() method in a JavaScript promise, and how do the three syntaxes differ?**

## Exercise 7: Error Handling
```javascript
getData()
  .then(x => {
    if (x.length < 3) throw 'Name too short';
    return x;
  })
  .catch(err => console.log(err))
```
**Q: What happens if we put another `.then()` after `.catch()`?**

## Exercise 8: Async/Await
```javascript
async processData() {
  try {
    const data = await this.getData();
    return data.toUpperCase();
  } catch (err) {
    console.log(err);
  }
}
```
**Q: How would you write this same function using `.then()` syntax?**

## Exercise 8.1: Change the processData function to wait 1 second before returning the data.
```javascript
processData() {
  console.log('Processing data...');

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Data processed');
    }, 1000);
  });
}
```

## Exercise 9: Multiple Operations
```javascript
processData()
  .then(x => x + '!')
  .then(x => {
    console.log(x);
    return x;
  })
  .then(x => x.length)
```
**Q: What happens if we don't return a value in one of the `.then()` blocks?**

## Exercise 10: Testing
```javascript
  const user = new User('John');
  user.greet();
  user.processData().then(console.log);
```
**Q: What's the execution order of these three lines? Why?**

## Expected Outputs:
```javascript
// Exercise 3
Hello, I'm John

// Exercise 4
Hello, I'm John
Hello, I'm John

// Exercise 6
JOHN
JOHN
JOHN

// Exercise 7
Name too short  // (if name length < 3)

// Exercise 9
JOHN!
5

// Exercise 10
Hello, I'm John
5
```
