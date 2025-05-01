// I want without trim method show i want to trim work for string
let myName = "Sujit       "

// with trim function
console.log(myName.trim().length)  // 5

// abstract method trim and show another key for trim method
String.prototype.trueLength = function(){
    console.log(`true length is ${this.trim().length}`)
    return(`true length is ${this.trim().length}`)
}

myName.trueLength() // true length is 5