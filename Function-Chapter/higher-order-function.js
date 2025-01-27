//  ChatGPT Se liya hua Syntax ---> javaScript me higher-order functions kehne ka matlab hai ki yeh functions hote hain jo doosre functions ko arguments ke roop mein le sakte hain ya fir ek function se return ho sakte hain. Yani, in functions ko un functions ke saath kaam karne ki kshamata hoti hai.

//  ChatGPT Se liya hua Syntax ---> Yeh kuch important concepts include karte hain:
// 1. Functions as Values: JavaScript mein functions ko variables mein store kiya ja sakta hai, unhe doosre functions ko pass kiya ja sakta hai, aur unhe functions se return bhi kiya ja sakta hai. Isse unhe flexible banata hai.

// 2. Passing Functions as Arguments: Higher-order functions un functions ko arguments ke roop mein accept kar sakte hain. Isse code ko modular banaane mein madad milti hai aur ek function ko multiple contexts mein reuse kiya ja sakta hai.

// 3. Returning Functions from Functions: Ek function se doosre function ko return karna bhi ek higher-order function ka udaharan hai. Isse dynamic behavior achieve kiya ja sakta hai, jaise ki functions ko generate karna runtime par.


  
  // ChatGPT Se liya hua Syntax ---> Higher-order function example.
  function operateOnArray(arr, operation) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      result.push(operation(arr[i]));
    }
    return result;
  }
  
  // Higher-order function ka use karke square calculate karne wala function
  function square(x) {                     
    return x * x;
  }
  
  let numbers = [1, 2, 3, 4, 5];
  let squaredNumbers = operateOnArray(numbers, square); // jo upper ham operateOnArray ke parameter  me dere hai array and opration us ko hai ham niche argument me lere hai number and square me is ko bolte hai Higher Orderm Function.
  console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]
  


  //khud se kiya hua Eample.
function first(firstParametar) {
    console.log("I am first called Function with argument:", firstParametar);
  }
  function second(parametar) {
    console.log("Third Code Execution", parametar);
  }
  // function third (callBack,callbacktwo,argument1, argument2) {
  function third(callBack, callbacktwo) {
    callBack("Tausif");
    callbacktwo("Qureshi"); //jab ham argument me value dere hai funcion me tu ham first and second wale function me parameter bhi lena hoga.
 
    // callBack(argument1);
    // callbacktwo(argument2);
  }
  
  third(first, second);
  // third(first,second ,"Tausif","Qureshi"); //callBack Function jo third wale function me call hore hai us me jo argument deta hai fir hame us argument ki value bhi dere hai Tausif Qureshi.
  
  
  
