console.log("inheritance")

const user = {
    username : "sujit",
    email : "sujit@google.com"
}

let grendFather = {
    land : "5 acre",
}

let father = {
    cash : "58 Lakh",
}

let myself = {
    investment : "2 Lakh",
    __proto__:grendFather // you can inherit with this keyword & method in block scope
}


myself.__proto__ = user // you can inherit with this keyword & method in global scope also


// modern method replace with __proto__
// mondern syntax

Object.setPrototypeOf(myself, father)
Object.setPrototypeOf(myself, grendFather)

console.log(myself) // { investment: '2 Lakh' }
console.log(myself.land) // 5 acre


// ****************************** Assignment ****************************************

let myUserName  = "Sujit                       "
console.log(myUserName.length) // 28

// now i want set "self made" method for remove unwanted space in myUserName when we print with .length .

String.prototype.trueLength = function(){
    console.log(`${this}`)
    console.log(`true length is ${this.trim().length}`)
}

myUserName.trueLength() 
/* return

Sujit
true length is 5

*/

// **********************************************************************************


"Rahul  ".trueLength()
/*return

Rahul  
true length is 5

 */


// **********************************************************************************


"Amit".trueLength() 
/* return

Amit
true length is 4

*/


