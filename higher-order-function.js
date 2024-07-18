
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
  
  
  
  
  // let radius = [1, 2, 3, 4];
  
  // let area = function(ra) {
  //     return Math.PI * ra * ra;
  // };
  
  // let calculator = function(radiusArray, areaFun) {
  //     let output = [];
  //     for (let i = 0; i < radiusArray.length; i++) {
  //         output.push(areaFun(radiusArray[i]));
  //     }
  //     return output; // Return the output array after computation
  // };
  
  // console.log(calculator(radius, area)); // Logging the result of calculator function
  