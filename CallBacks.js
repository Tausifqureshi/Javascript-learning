// ========================================= CallBacks =================================================//

//Asynchronous Programming me ata hai CallBacks --->

// Call-Backs ---> jab bhi ham kisi function ke argument ke ander dusra function pass karte hai us se call-back bolte hai ?


// function calculator1(a,b){
//     // console.log(a+b);
//     return(a+b);
// }

// function sum1(a,b,callbacks){
//     console.log("Sum Function Called");
//     return callbacks(a,b)

// }
// // sum1(1,2,calculator1)
// let valueSave = sum1(1,2,calculator1);
// console.log(valueSave);

//============================= Example 1
// function calculator() {
//     console.log('Calculator Function Called');
//     // return 'Calculator has finished execution';
// }

// function sum(callback) {
//     console.log("Sum Function Called");
//     return callback();
// }

// sum(calculator);
// // let valueSave = sum(calculator); //return use tu aise call hoga  ?
// // console.log(valueSave);








// ========================================= Call-Back Hell =======================================//

// Call-Back Hell ----> function jab nested ho jate hai us se hi Call-Back Hell bolte hai ?  jab Call-Back Hell ho jata hai o pyramid of mood dehkta hai ? javascript me Call-Back Hell problem tab karte hai jab ek se jayda Call-Back ek dusre ke ander nested ho jate hai une mainten and manage karne me issu ata hai ? Call-Back Hell ko avoided karna chaciye us ki jaga promise ya Async/await use karna chaiye ?


function gerRollNo() {  //is tara shep ko pyramid of doom bolte hai is avoided Call-Back Hell ?
    console.log("Start The Code Executon")
    setTimeout(()=>{
        console.log('API getting roll no');
        let roll_no = [1,2,3,4,5];
        console.log(roll_no);

        setTimeout((rollnumber) => {
            console.log("Access the name and roll-number");
            let biodata ={
                name: "Tausif",
                age: 25,
            }
            console.log(`My name is ${biodata.name} and I an ${biodata.age} years old My ${rollnumber} Number`)
            // console.log(rollnumber);

            setTimeout((name) => {
                biodata.gender = "Male";
                console.log(`My name is ${biodata.name} Gender is ${biodata.gender}`);
                // console.log(name);

            }, 2000,biodata.name);

        },2000,roll_no[1]); //2 milge ga us array ki index se accessing kar re hai ?

    }, 2000)
}

gerRollNo()



















































































































































































