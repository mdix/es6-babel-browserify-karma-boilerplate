module.exports = class MyClass {
  constructor(greeting) {
    this.greeting = greeting;
  }

  someMethod() {
    console.log(this.greeting);
  }
}
