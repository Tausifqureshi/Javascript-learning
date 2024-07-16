// ==================================================== DOM =======================================================//
// ChatGPT Se liya hua Syntax ---> DOM Kya Hai.

// DOM ek programming interface hai jo HTML aur XML documents ko represent karta hai. Yeh ek tree-like structure me organize hota hai jisme document ke har element ek node ke roop me hota hai. JavaScript ke through, hum is tree structure ko manipulate kar sakte hain.

// ================================================= DOM Basics ===================================================//
// ChatGPT Se liya hua Syntax ---> 1. Document Object:
// DOM ek tree-like structure me HTML document ko represent karta hai. Is tree me root node document hota hai, aur uske andar child nodes hote hain jo elements, attributes, aur text content ko represent karte hain.

// Is HTML document ka DOM structure kuch is tarah dikhega.
// document
// └── html
//     ├── head
//     │   └── title
//     └── body
//         ├── h1
//         └── p

// 2. Nodes:
// DOM tree me har ek item (element, attribute, text) ek node kehlata hai. Nodes ke types:
// Element nodes: HTML tags (e.g., <div>, <p>)
// Text nodes: Text content within an element
// Attribute nodes: Attributes of HTML tags (e.g., class, id)

// ================================================= DOM Access ===================================================//
// ChatGPT Se liya hua Syntax ---> DOM ko Access aur Manipulate karna.
// ================================================ getElementById ================================================//
// 1. getElementById: Ek unique ID ke adhar par ek element ko access karne ke liye.

const headerElement = document.getElementById("header");
// console.log(headerElement); // <h1 id="header">Hello World!</h1>

// ============================================ getElementsByClassName ============================================//
// ChatGPT Se liya hua Syntax --->
// 2. getElementsByClassName: Class name ke adhar par ek elements ka collection return karta hai.

const highlightedElements = document.getElementsByClassName("highlight");
// console.log(highlightedElements);

// ============================================ getElementsByTagName: ============================================//
// ChatGPT Se liya hua Syntax --->
//  3. getElementsByTagName: Tag name ke adhar par elements ka collection return karta hai.

// Select all <p> elements in the document
const paragraphs = document.getElementsByTagName("p");

// Loop through and log each <p> element's text content
for (var i = 0; i < paragraphs.length; i++) {
  // console.log(paragraphs[i]);
  // console.log(paragraphs[i].textContent);
}

// ============================================ querySelector ============================================//
// ChatGPT Se liya hua Syntax --->
//  4. querySelector: JavaScript ka ek method hai jo ek DOM (Document Object Model) element ko select karne ke liye use hota hai. Ye method CSS-style selectors ko use karke element ko select karta hai.

// Nested Selectors Use QuerySelector.
const element1 = document.querySelector(".container .text");
// console.log(element1.textContent); // Output: Nested Paragraph

// Attribute Selector Use QuerySelector.
const element = document.querySelector('input[name="username"]');
// console.log(element.getAttribute('name')); // Output: username

// =============================================== querySelectorAll ===============================================//
// ChatGPT Se liya hua Syntax --->
//  5. querySelectorAll: JavaScript ka method hai jo ek ya zyada DOM elements ko select karne ke liye use hota hai. Ye method CSS-style selectors ko use karta hai aur ek NodeList return karta hai, jo selected elements ka collection hota hai.

const elements = document.querySelectorAll("p[id]");
elements.forEach((element) => {
  //   console.log(element.textContent);
});

// ============================================ Modifying Elements ================================================//

// ================================================= innerText ===================================================//
// ChatGPT Se liya hua Syntax ---> innerText: JavaScript me innerText ek property hai jo kisi HTML element ke text content ko set ya retrieve karne ke liye use ki jaati hai. Is property ke madhyam se hum ek element ke andar ke text ko badal sakte hain bina kisi HTML tag ko effect kiye. innerText ko rendering layout ko consider karna padta hai jo isse thoda slow banata hai.

// const myDiv = document.getElementById("myDiv");
// const changeTextBtn = document.getElementById("changeTextBtn");

// changeTextBtn.addEventListener("click", () => {
//   myDiv.innerText = "Text has been changed!";
// });

// ================================================= innerHTML ===================================================//
// ChatGPT Se liya hua Syntax ---> innerHTML: ek DOM element ki property hai jo aapko element ke andar ka HTML ya XML markup get ya set karne ki suvidha deti hai. Ye JavaScript me element ka content dynamically manipulate karne ke liye sabse common tareeka hai.

function changeContent() {
  const element = document.getElementById("myDiv");
  element.innerHTML = "<p>Content has been changed!</p>";
}

// ================================================= textContent ==================================================//
// ChatGPT Se liya hua Syntax ---> textContent : JavaScript me textContent ek property hai jo kisi HTML element ke text content ko set ya retrieve karne ke liye use ki jaati hai. Ye property poora text content return karti hai, chahe wo visible ho ya hidden. Chaliye textContent property ko detail me samjhte hain. zyada fast hoti hai, kyunki wo poora DOM tree ko traverse karke text content ko return karti hai bina rendered text ko consider kiye.

// const myDiv = document.getElementById('myDiv');
// console.log(myDiv.textContent); // Output: Hello, Invisible Text World!
// console.log(myDiv.innerText); // Output: Hello,  World!

// ================================================ setAttribute ==================================================//
// ChatGPT Se liya hua Syntax ---> setAttribute:  method DOM elements ke attributes ko dynamically set karne ke liye use hota hai. Yeh method ek attribute name aur uski corresponding value ko accept karta hai aur specified element par us attribute ko set karta hai.

// var input = document.getElementById("myInput");
// var button = document.getElementById("changeValue");

// button.addEventListener("click", function () {
//   // Update using setAttribute
//   input.setAttribute("value", "New Value using setAttribute");

//   // Update using property
//   input.value = "New Value using property";
// });

// ================================================ classList ==================================================//
// ChatGPT Se liya hua Syntax ---> classList: classList property ek DOMTokenList object return karti hai jo element ke classes ko represent karta hai. Yeh property methods aur properties ka ek set provide karti hai jo classes ko manipulate karna aasan banata hai.

// 1. .classList.add : Multiple classes ko ek saath add kar sakte hain.
// 2. .classList.remove : Multiple classes ko ek saath remove kar sakte hain.
// 3. .classList.toggle : Force parameter true hai to class ko add karta hai, false hai to remove karta hai.
// 4. .classList.contains : Check karta hai ki specified class element mein hai ya nahi.
// 5. .classList.replace : Old class ko new class se replace karta hai.

// var paragraph = document.getElementById('myParagraph');
// var addClassBtn = document.getElementById('addClass');
// var removeClassBtn = document.getElementById('removeClass');
// var toggleClassBtn = document.getElementById('toggleClass');
// var checkClassBtn = document.getElementById('checkClass');
// var replaceClassBtn = document.getElementById('replaceClass');

// addClassBtn.addEventListener('click', function() {
//     paragraph.classList.add('highlight', 'bold');
// });

// removeClassBtn.addEventListener('click', function() {
//     paragraph.classList.remove('bold');
// });

// toggleClassBtn.addEventListener('click', function() {
//     paragraph.classList.toggle('highlight');
// });

// checkClassBtn.addEventListener('click', function() {
//     if (paragraph.classList.contains('highlight')) {
//         alert('Paragraph has highlight class');
//     } else {
//         alert('Paragraph does not have highlight class');
//     }
// });

// replaceClassBtn.addEventListener('click', function() {
//     // paragraph.classList.replace('highlight', 'bold');
//     paragraph.classList.replace('bold','highlight');
// });

// ============================================== style.property ==================================================//
// ChatGPT Se liya hua Syntax ---> style.property :  property DOM elements ka ek property hai jo ek object return karti hai. Yeh object element ke inline styles ko represent karta hai aur aapko specific CSS properties ko get ya set karne ki suvidha deta hai.

// var div = document.getElementById("myDiv");
// var button = document.getElementById("toggleStyle");

// button.addEventListener("click", function () {
//   if (div.style.color === "blue") {
//     div.style.color = "black";
//     div.style.backgroundColor = "white";
//   } else {
//     div.style.color = "blue";
//     div.style.backgroundColor = "yellow";
//   }
// });




// ============================================== style.property ==================================================//
// ChatGPT Se liya hua Syntax --->









