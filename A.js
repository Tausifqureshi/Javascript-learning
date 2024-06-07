// =========================================== static mrthod =====================================================//
// Static method sirf or sirf Class ke sath hi call hota hai na ke object ke sath nhu hota hai ?
class StaticMethod {
  constructor() {}

  static nationality = "india"; //Static property create.

  static cerateStatic() {
    //static method create.
    return "Static Method Call";
  }
}

const static = new StaticMethod();
// console.log(static);

// console.log(StaticMethod.cerateStatic()); //Static method call.

// console.log(StaticMethod.nationality); //Static property access.



// =========================================== class =====================================================//
// class Inheritance
class Person {
  constructor(fName, email) {
    (this.firstName = fName), (this.myEmails = email);
  }

  greet() {
    return `${this.firstName} ${this.myEmails} ${this.age}`;
  }

}

class Employee extends Person {
  //class Inheritance kiya hai Employee class Person class ki property method use kar sakti hai extends keywords use se.

constructor(fName, email,age) { //is ko commit karne ke baad bhi new object me property aye gi q ke hamne  Inheritance kiya hau hai.

super(fName, email); //Parent class ke constructor ko call karta hai ye super keyword.
 this.age = age;

}

  greet() {
    return `Hello, my name is ${this.firstName}.My full name is ${super.greet()}.`; // Parent class ke getDetails() method ko call karta hai super keyword. Parnet Class me same name ka function or child me bhi same name ka function greet tu hi ham uper keyword se access kar sakte hai method ko. warna Parent class me koi or name ka function tu ham getDetails() aisa koifunction tu ham chaild class me this.getDetails() kar ke access kar sakte hai koi error nhi aye ga. // Access 'firstName' from parent class direct.
  }
}

// const person = new Person("Tausif", "Tausif@gamil.com" ,25);
// console.log(person)

const employee = new Employee("Qureshi", "Qureshi@gamil.com", 26); 
console.log(employee)
console.log(employee.greet());

