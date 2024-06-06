class Parent {
  constructor(name) {
    this.name = name;
  }

  getFullName() {
    return this.name + " " + this.lastName;
  }
}

class Child extends Parent {
  constructor(name, lastName) {
  super(name);
    this.lastName = lastName;
  }

  greet() {
    return`Hello, my name is ${this.name}. My full name is ${super.getFullName()}.`; // Parent class ke getFullName() method ko call karta hai
 
  }

}

const child = new Child("John", "Doe");
// child.greet(); // Output: Hello, my name is John. My full name is John Doe.
console.log(child)
console.log(child.greet())