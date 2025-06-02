// Theory only is ke code object-oriented me hai or jo simple theory bhi hai us me ?


// ChatGPT Se liya hua Syntax ---> call() method kya hai?
// call method ek predefined JavaScript method hai ? jiska use kisi function ko ek object ke sath call karne ke liye kiya jaata hai. Iska matlab hai ki aap kisi bhi function ko kisi bhi object ke context mein run kar sakte hain, chaahe woh function us object ka method na ho.

// call() method ke fayde:
// Yah aapko code ko reusable banane mein madad karta hai.
// Yah aapko ek object ke methods ko dusre object ke sath use karne ki suvidha deta hai.

// call() method aur apply() method mein kya antar hai?
// call() method aur apply() method dono hi aapko kisi bhi function ko kisi bhi object ke context mein call karne ki anumati dete hain. Lekin, unke beech ek chhota sa antar hai:

// call() method arguments ko function ke arguments list mein ek-ek karke pass karta hai.
// apply() method arguments ko ek array ke roop mein function ke arguments list mein pass karta hai.


function greet(name) {
    console.log("Hello, " + this.name + "" + name + "!");
    // return ("Hello, " + this.name + " " + name + "!");
  }
  
  const person1 = {
    name: "John",
  };
  
  const person2 = {
    name: "Mary",
  };
  
 greet.call(person1,'nice'); // Output: Hello, John!
 greet.call(person2, 'sey'); // Output: Hello, Mary!

 let save = greet.call(person1,'nice'); // return tu aise hi call kar karte hai.
console.log(save)

console.log( greet.call(person1,'nice')) //return tu aise bhi call kar sakte hai. return tu.
  


// ===================================== Apply =========================================//

// ChatGPT Se liya hua Syntax ---> apply() method kya hai?
// apply() method ek predefined JavaScript method hai jo aapko kisi bhi function ko kisi bhi object ke context mein call karne ki anumati deta hai. Iska matlab hai ki aap kisi function ko aise object ke saath call kar sakte hain jo us function ke owner object nahi hai.


// apply() method ke fayde:
// Yah aapko kisi bhi function ko kisi bhi object ke context mein call karne ki anumati deta hai.
// Yah aapko function chaining karne mein madad karta hai.
// Yah aapko dynamic programming karne mein madad karta hai.

function greet(name) { //parametar hai name ?
    console.log("Hello, " + this.name + " " + name + "!");
    
  }
  
  const person4 = {
    name: "John",
  };
  
  const person5 = {
    name: "Mary",
  };
  
  greet.apply(person4, ["love"]); // Output: Hello, John! //argumnet se access love greet function se .
  greet.apply(person5, ["cute"]); // Output: Hello, Mary!
  


// ===================================== Bind =========================================//

// ChatGPT Se liya hua Syntax ---> Bind Method Kya Hai?
// Bind method JavaScript me ek aisa method hai jo aapko ek function ko ek specific object ke context me bind karne me madad karta hai. Iska matlab hai ki jab aap bound function ko call karte hain, to this keyword us object ko refer karega jisse usko bind kiya gaya hai.

// Bind Method Ka Kaam Kya Hai?
// Bind method 3 kaam karta hai:
// Ek naya function banata hai: Bind method ek naya function banata hai jo original function ke jaisa hi hota hai.

// "this" keyword ko set karta hai: Naye function me, "this" keyword us object ko refer karega jo bind method ke pehle argument me pass kiya gaya tha.

// Optional arguments pass karta hai: Bind method ke dusre aur teesre arguments optional hain aur ye naye function ke pehle aur dusre arguments ke roop me pass kiye jaate hain.

// Bind Method Ke Fayde:
// Bind method humme function ko object ke context me bind karne me madad karta hai.
// Bind method humme partial function application karne me madad karta hai.
// Bind method humme event handlers me "this" keyword ko control karne me madad karta hai.

 
const person = {  
  name: "John Doe",
  greet: function() {
    console.log(`Hello, my name is ${this.name}`);
  //  return (`Hello, my name is ${this.name}`); //

  }
};

const boundGreet = person.greet.bind(person);
boundGreet(); // console use upper function me tu aise call hoga.
console.log(boundGreet()); //retrun use tu aisa call hoga. 












