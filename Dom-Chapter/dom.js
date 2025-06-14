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

// ====================================== Creating and Appending Elements =========================================//
// ChatGPT Se liya hua Syntax ---> Creating and Appending Elements.

// ChatGPT Se liya hua Syntax --->  document.createElement: JavaScript mein DOM (Document Object Model) ke through elements create karne ke liye, aapko kuch basic steps follow karne hote hain. Yeh process aapko HTML document mein naye elements dynamically add karne ki suvidha deta hai. Chaliye, iske steps aur examples ko detail mein samajhte hain.

// ChatGPT Se liya hua Syntax ---> JavaScript mein appendChild() method ek node ko parent node ke end mein add karta hai. Ye method pure node ko append karta hai aur agar node already DOM me present hai, to ye node ko apne purane parent se remove karke naye parent me append kar deta hai. ye method sirf ek node ko append karta hai. ye method ko ek node pass karna hota hai aur ye node ko parent se remove karke naya parent me add karta hai. ye method newly appended child node ko return karta hai.

// var newItem = document.createElement("li");
// newItem.textContent = "Item 3";

// var list = document.getElementById("myList");
// list.appendChild(newItem);

// ============================================== insertBefore ====================================================//
// ChatGPT Se liya hua Syntax ---> insertBefore: JavaScript me DOM (Document Object Model) ke insertBefore method ka upayog ek vishesh parent element ke andar kisi any specified element se pahle ek new child element insert karne ke liye kiya jata hai. Yeh method bahut upayogi hai jab aapko kisi existing element ke pahle dynamically content insert karne ki avashyakta hoti hai.

//  var list = document.getElementById('myList');
//  var newItem = document.createElement('li');
//  newItem.textContent = 'New Item';

//  var referenceItem = document.getElementById('item2');
//  console.log( referenceItem)
//  list.insertBefore(newItem, referenceItem);

//  // ChatGPT Se liya hua Syntax ---> insertBefore method ka upayog karte samay yeh dhyan rakhein ki yeh method return karta hai inserted node ko, jisse aap aage usi node par additional manipulations kar sakte hain.
//  var insertedNode = list.insertBefore(newItem, referenceItem);
// console.log(insertedNode); // logs the newly inserted node

// ============================================== removeChild ====================================================//
// ChatGPT Se liya hua Syntax ---> removeChild: JavaScript me DOM (Document Object Model) ko manipulate karne ke liye removeChild() method ka upayog kiya jata hai. Ye method kisi parent node se uske child node ko hatane ke liye upayog kiya jata hai.

// document.getElementById("removeBtn").addEventListener("click", function () {
//   const list = document.getElementById("myList");
//   // console.log(list.children[1]);
//   const itemToRemove = list.children[1];
//   list.removeChild(itemToRemove);
//   alert("Remove itme")
// });

// ============================================== replaceChild ====================================================//
// ChatGPT Se liya hua Syntax ---> replaceChild: javaScript me DOM (Document Object Model) ko manipulate karne ke liye replaceChild() method ka upayog kiya jata hai. Ye method kisi parent node ke ek existing child node ko naye child node se replace karne ke liye upayog hota hai. Chaliye ise vistaar se samajhte hain.

// document.getElementById("replaceBtn").addEventListener("click", function () {
//   const list = document.getElementById("myList");
//   // console.log(list.children[1]);
//   const newItem = document.createElement("li");
//   newItem.textContent = "New Item 2";
//   const oldItem = list.children[1];
//   list.replaceChild(newItem, oldItem);
// });


// ============================================= Elements ko Insert ===============================================//
// Elements ko Insert all tarike.


// ================================================== Insert ===================================================//
// ChatGPT Se liya hua Syntax ---> JavaScript me append, prepend, before, aur after methods DOM (Document Object Model) ko manipulate karne ke kaam aate hain. Ye methods naye nodes (elements) ko existing nodes ke andar ya bahar insert karne me madad karte hain. Inhe istamaal karne ke tareeke aur unke code examples niche diye gaye hain:

// 1. append method ek ya zyada nodes ya strings ko ek element ke last child ke roop me insert karta hai.
// 2. prepend method ek ya zyada nodes ya strings ko ek element ke first child ke roop me insert karta hai.
// 3. before method ek ya zyada nodes ya strings ko ek element ke pehle, uske sibling ke roop me insert karta hai.
// 4. after method ek ya zyada nodes ya strings ko ek element ke baad, uske sibling ke roop me insert karta hai.


// const container = document.getElementById('container');
// const newParagraph = document.createElement('p');
// newParagraph.textContent = 'This is a new paragraph added using append.';
// container.append(newParagraph); // Adds new paragraph as the last child of the container


// ============================================= insertAdjacentHTML ===============================================//
// ChatGPT Se liya hua Syntax ---> insertAdjacentHTML:  method JavaScript me DOM (Document Object Model) ke sath use hoti hai. Ye method ek HTML string ko ek specified position par ek existing element ke relative insert karne ke liye use hoti hai. Ye method existing elements ko parse karti hai aur phir naya content DOM me bina existing elements ko remove ya re-create kiye insert karti hai.

// ChatGPT Se liya hua Syntax --->  Parameters.
// position: Ye string hoti hai jo specify karti hai ki HTML text ko element ke relative kaha insert karna hai. Iske kuch valid values hain:

// 1. "beforebegin": Target element se pehle.
// 2. "afterbegin": Target element ke first child ke roop me.
// 3. "beforeend": Target element ke last child ke roop me.
// 4. "afterend": Target element ke baad.

// document.getElementById("myDiv").insertAdjacentHTML("beforebegin", "<p>This is inserted before the div.</p>");
// document.getElementById("myDiv").insertAdjacentHTML("afterbegin", "<p>This is inserted at the beginning of the div.</p>");
// document.getElementById("myDiv").insertAdjacentHTML("beforeend", "<p>This is inserted at the end of the div.</p>");
// document.getElementById("myDiv").insertAdjacentHTML("afterend", "<p>This is inserted after the div.</p>");




// ============================================= insertAdjacentHTML ===============================================//
// ChatGPT Se liya hua Syntax ---> JavaScript me insertAdjacentElement method ka use HTML document me naye elements ko insert karne ke liye kiya jata hai. Yeh method humein flexibility deta hai taaki hum nayi elements ko specific positions par insert kar sakein. 

// // ChatGPT Se liya hua Syntax --->  targetElement: Yeh wo element hai jismein naya element insert kiya jayega.
// position: Yeh ek string hai jo specify karti hai ki naya element kahan insert hoga. Iske kuch valid values hain:
// "beforebegin": targetElement se pehle
// "afterbegin": targetElement ke andar, sabse pehle
// "beforeend": targetElement ke andar, sabse aakhri mein
// "afterend": targetElement ke baad

// const newDiv = document.createElement('div');
// newDiv.textContent = 'This is a new div inserted using insertAdjacentElement';
// // Target element ko select kar rahe hain
// const parentDiv = document.getElementById('parentDiv');
// // Naye element ko parentDiv ke andar sabse pehle insert kar rahe hain
// parentDiv.insertAdjacentElement('afterbegin', newDiv);




// ============================================= cloneNode ===============================================//
// ChatGPT Se liya hua Syntax ---> cloneNode() :method JavaScript DOM (Document Object Model) ka ek method hai jo kisi element ka duplicate banane ke liye use hota hai. Yeh method asli element ke saath saath uske saare child elements ko bhi clone kar sakta hai agar hum usse kahen.

// Is method ko use karte waqt hume do tarikon ka option milta hai:
// 1. Shallow Clone: Yeh sirf parent node ko hi copy karta hai, child nodes ko nahi.
// 2. Deep Clone: Yeh parent node ke saath saath uske saare child nodes ko bhi copy karta hai.


// ChatGPT Se liya hua Syntax ---> Shallow Clone
// var originalElement = document.getElementById("original");
// var shallowClone = originalElement.cloneNode(false);
// document.body.appendChild(shallowClone);


// ChatGPT Se liya hua Syntax --->  Deep Clone
// var originalElement = document.getElementById("original");
// var deepClone = originalElement.cloneNode(true);
// document.body.appendChild(deepClone);










