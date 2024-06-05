class Parent {
  constructor(name) {
    this.name = name;
  }

  getFullName() {
    return this.name + " " + this.lastName + " " + this.age;
  }
}

class Child extends Parent {
  constructor(name, lastName, age) {
    super(name);
    (this.lastName = lastName), (this.age = age);
  }

  greet() {
    console.log(`Hello, my name is ${this.name}.`);
    console.log(`My full name is ${super.getFullName()}.`); // Parent class ke getFullName() method ko call karta hai
  }
}

  const child = new Child("John", "Doe", 25);
  child.greet(); // Output: Hello, my name is John. My full name is John Doe.

