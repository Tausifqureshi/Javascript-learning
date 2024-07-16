// ================================================ Dom Traverse ==================================================//
// ChatGPT Se liya hua Syntax ---> JavaScript me DOM (Document Object Model) ko traverse karne ka matlab hai ki aap HTML document ke elements ke beech navigate kar sakte hain aur unhe access ya modify kar sakte hain. DOM traversal techniques aapko elements ko parent-child relationship aur sibling relationship ke basis par access karne ki suvidha deti hain.

// ================================================== parentNode ==================================================//
// ChatGPT Se liya hua Syntax ---> 1. parentNode: Yeh property aapko kisi element ka parent node provide karti hai.
var child = document.getElementById("child");
var parent = child.parentNode;
console.log(parent); // Output: <div id="parent">...</div>

// ================================================= childNodes ===================================================//
// ChatGPT Se liya hua Syntax ---> 2. childNodes: Yeh property ek node list return karti hai jo ki ek element ke sabhi child nodes ko contain karti hai, including text nodes and comments.
var parent = document.getElementById("parent");
var childNodes = parent.childNodes;
console.log(childNodes); // Output: NodeList including elements, text nodes, and comments

// =================================================== children ===================================================//
// ChatGPT Se liya hua Syntax ---> 3. children: Yeh property sirf HTML elements ko return karti hai, aur text nodes aur comments ko ignore karti hai.
var parent = document.getElementById("parent");
var children = parent.children;
console.log(children); // Output: HTMLCollection of child <p> elements

// ================================================== firstChild ==================================================//
// ChatGPT Se liya hua Syntax ---> 4. firstChild: Yeh property parent node ka pehla child node return karti hai.
var parent = document.getElementById("parent");
var firstChild = parent.firstChild;
var firstChild = parent.firstElementChild;
console.log(firstChild); // Output: <p>First</p>

// ================================================== lastChild ===================================================//
// ChatGPT Se liya hua Syntax ---> 5. lastChild: Yeh property parent node ka aakhri child node return karti hai.

var parent = document.getElementById("parent");
var lastChild = parent.lastChild;
var lastChild = parent.lastElementChild;
console.log(lastChild); // Output: <p>Second</p>

// ================================================ nextSibling ===================================================//
// ChatGPT Se liya hua Syntax ---> 6. nextSibling: Yeh property aapko current node ka agla sibling node return karti hai.
var first = document.getElementById("first");
var next = first.nextSibling;
var next = first.nextElementSibling;
console.log(next); // Output: <p id="second">Second</p>

// =============================================== previousSibling ================================================//
// ChatGPT Se liya hua Syntax ---> 7. previousSibling: Yeh property aapko current node ka pichla sibling node return karti hai.
var second = document.getElementById("second");
var previous = second.previousSibling;
var previous = second.previousElementSibling;
console.log(previous); // Output: <p id="first">First</p>
