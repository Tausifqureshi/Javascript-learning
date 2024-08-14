// OOPs me hi ata hai Constructore bhi /


// ChatGPT Se liya hua Syntax ---> Classes ES6 (ECMAScript 2015) mein introduce hui thi aur ye object-oriented programming ko JavaScript mein implement karne ka ek naya aur simpler tarika hai. Classes syntax sugar hai jo constructor functions aur prototype inheritance ko simplify karta hai.

//  ChatGPT Se liya hua Syntax --->  Classes ka syntax simpler aur readable hai. Isme methods directly class ke andar define hote hain.

//  ChatGPT Se liya hua Syntax --->  Classes inheritance ko implement karna zyada asaan banati hain using extends keyword.


// Person class
class Person {
    // Constructor function to initialize properties
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // Method to return a greeting message
    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }

    // Method to increment the age
    haveBirthday() {
        this.age += 1;
        return `Happy birthday! You are now ${this.age} years old.`;
    }

    // Method to set a new name
    setName(newName) {  //is tara se function ka use kar ke real value meas name bhi chage kar sakte hai ?
        this.name = newName;
        return `Your new name is ${this.name}.`;
    }
}

// Example usage:
const person1 = new Person('John Doe', 30);

console.log(person1.setName('Qureshi')); // Output: Your new name is Jane Doe.


// console.log(person1.greet()); // Output: Hello, my name is John Doe and I am 30 years old.

// console.log(person1.haveBirthday()); // Output: Happy birthday! You are now 31 years old.

// console.log(person1.greet()); // Output: Hello, my name is Jane Doe and I am 31 years old.


