// Switch Statement ----> switch statemamnt use hota hai alag alag situations actions me use karte hai? bhut share code me se ek code jis ki value right ati hai us ke liye switch use hota hai? switch statement ka Overview ek bar kiya jata hai?

let day = 2;
switch (day) {
  case 0: //case se use hame koi option means koi value match karwana ho is se case se match karwate hai ?
    console.log("Sunfdfay");
    break; //is keyword se value match hoti hai code wahi ruk jaye ga or direct switch se bher ajaye ga?
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thrusday");
    break;
  case 5:
    console.log("Firday");
    break;
  case 6:
    console.log("Saturday");
    break; // break keyword ka matlab jo case ture ohi execute hoga forther code nhi hoge sida bher default wala run?
   
    default: //is keyword jab chalte hai jab value true nhi hoti koi value match nhi hoti hai ?
      console.log("Invalid Day")

}

let num1 = 'Tausif', 
   num2 = 'Qureshi',
   num3 = 'Bbabu';
  //  alert(num2)

  let promt = prompt('Tausif');
  document.writeln(promt)