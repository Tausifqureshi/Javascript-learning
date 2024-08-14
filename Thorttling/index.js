
//============================================= Thorttling Function =============================================//
// ChatGPT Se liya hua Syntax ---> JavaScript me throttling ek technique hai jo function calls ko limit karne ke liye use ki jati hai, jisse ki ek specified interval ke andar function ek se jyada baar na chale. Iska main use case tab hota hai jab hume performance optimize karni hoti hai, jaise ki scrolling events, resizing events, etc., jahan ek hi function ko baar-baar call karna costly ho sakta hai.



//============================================= Thorttling Function =============================================//
// ChatGPT Se liya hua Syntax ---> Definition.
// Throttling ek technique hai jisme aap ek function ko ek specific interval ke andar sirf ek baar call karne ki ijazat dete hain. Matlab agar ek function ko ek second me ek baar call kiya jana chahiye, to agar function ko 10 baar call kiya jaye to bhi wo sirf ek baar execute hoga, baaki calls ko ignore kar diya jayega ya delay kar diya jayega.



// Ye Sub Khud ke Example Hai.
// Button pe use Throttling Function.
// function loadData(){
//     document.getElementById("btn").disable = true;
//     console.log("API Called");
//     setTimeout(() => {
//     console.log("Called Data");
//     document.getElementById("btn").disable = false; //jab data aye ga fir se button enable ho jaye ga.

//     }, 3000);
// }







// body pe Scroll Evenet pe Throttling function use.
let thorttling = document.getElementById("t_count");
let normal = document.getElementById("n_count");
let n_count = 0;
let t_count = 0;
let isScrolling = true;
function normalCount() {
  n_count++;
  normal.innerHTML = `Normal Count ${n_count}`;
}

function thorttlingCount() {
  if (isScrolling === true) {
    t_count++;
    thorttling.innerHTML = `Normal Count ${t_count}`;
    isScrolling = false; // ek bar count hone pe fir is ko false kar re hai taki fir se scroll karne pe count na ho is se website ki perfomers badti hai is ko bolte hai throittling functionlity.
    setTimeout(() => {
        isScrolling = true; // ek second ke ander jitne bar bhi scroll kar re ge us ki count bade gi nhi but ek second ke baad bade gi count.
    }, 1000);
  }
}

function showCount() {
  normalCount();
  thorttlingCount();
}
