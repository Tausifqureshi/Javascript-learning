let name = "Tausif"; //Export Varible.

const myFun = () => {  //EXport Function.
  return `imported Function`;
};

 class Person {  //Export Class
  constructor(n) {
    this.firsName = n;
  }
} 
export { name,myFun,Person};

// config.js
 const config = {
    apiKey: "12345",
    apiUrl: "https://www.google.co.in/"
};
export default config; //defualt file me sirf ek hi ho sakta hai bus. 


// module.js
const defaultFunction = () => {  //defualt function.
    return `This is the default exported function`;
  };
  
// export default defaultFunction;
  





