"use strict"; //is ko use karne se function me jo this console hua hai us ki value ab undefiend aye gi use strict mood on karne se but is ko commit karne se this ki value window object hi print hogi? === interview quetion hai ye ? --> object-oriented-file ka This keyword ka question hai line number 54 ?





Date.prototype.getLastYear = function(){ //interview me ata hai ye qution aisa function banao 2024 chal hai but current years se ek years kam de matlab 2023 ana ?

return this.getFullYear() -1; //this newDate ko hi refer kar ra hai ? getFullYear() -1 2023 aye ga interview question hai ye ?

}

let newDate = new Date();
console.log(newDate.getFullYear());


console.log(newDate.getLastYear());













































