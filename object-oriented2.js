//OOPs in javscript ---> Means ye ek programming paradigm hai means ek style program karne ki ? apni code karne ki style hai?  Object oriented programming jis me class object ko use kar ke program ko design kiya jata hai ?  

// OOPs Concept in JavaScript ---> is ke 4 Piller hote hai  Abstraction, Encapsulation,Inheritance,Polymorphism ?
// Object
// Classes	
// Encapsulation
// Abstraction	
// Inheritance
// Polymorphism

function SetUserName(userName){
    this.myName = userName
  }
  
  
  function CreateUser(userName,email,password) {
    SetUserName(userName)
    this.myEmail = email;
    this.myPassword = password;
  }
  
  let visitingUser = new CreateUser("Tausif","Tausifqureshi@gmail.com",123);
  console.log(visitingUser)
  










































































































































































































