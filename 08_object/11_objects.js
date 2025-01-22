//1. singleton
//2. object.creat
//3. object Literals

//************************************************************************************* */

//object literals
const jsUser = {        
    studentName : "Sujit Kumar Singh",
    age : 25,
    location : "Patna",
    email : "email@gmail.com",
    isPass : true
}

console.log(jsUser.email)
console.log(jsUser["email"])

//************************************************************************************* */


const mySymbol01 = Symbol("key1") // Symbol Create
const mySymbol02 = Symbol("key1") // Symbol Create


// symbol define in object method
const objectwithsymbol = {
    [mySymbol01] : "mykey1",
}

console.log(objectwithsymbol)
console.log(typeof(objectwithsymbol.mySymbol01))

//************************************************************************************* */


//freeze object value for not change


const myObject = {
    email : "sujittomar@google.com"
}

myObject.email = "sujittomar@microsoft.com"; // you can change key value

//freeze method in object 
Object.freeze(myObject) 
myObject.email = "sujittomar@apple.com" //change after freeze in object not allowed

console.log(myObject) // { email: 'sujittomar@microsoft.com' } because after this value freeze object

//************************************************************************************* */


console.log("****************************** From Here *********************************")


const student = {
    firstName : "Sujit",
    lastName : "Kumar Singh",
    fullName() {
             console.log(`${this.firstName} ${this.lastName}`) 
                                // or
             return this.firstName + ' ' + this.lastName
            },
    greet() {
                return(`student full name is ${this.fullName()}`)
            },
    Roll : 498,
    isPass : true,
    finalCGPA : 7.5,
    semCGPA : [6.5, 8.1, 7.8, 9.0, 6.9, 8.1, 8.6, 8.7],
    email : "sujit@google.com",
};

console.log(student)
console.log(student.fullName())


