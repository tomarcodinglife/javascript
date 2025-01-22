const user = {
    userName : "Sujit",
    price : 1000,
    welcomeMessage : function(){
        console.log(`${this.userName}, welcome to the website`)

        console.log(this) // when you print then
        /*
        Sujit, welcome to the website
        {
        userName: 'Sujit',
        price: 1000,
        welcomeMessage: [Function: welcomeMessage]
        }
        iamsujit, welcome to the website
        {
        userName: 'iamsujit',
        price: 1000,
        welcomeMessage: [Function: welcomeMessage]
        }
         */
    }
}

user.welcomeMessage() // Sujit, welcome to the website
user.userName = "iamsujit"
user.welcomeMessage() // iamsujit, welcome to the website

console.log(this) // {} blank object

//*************************************************************************************

// when you this execute with function
function newFunction () {
    console.log(this)
}

newFunction() // then print see below
/*
<ref *1> Object [global] {
  global: [Circular *1],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  structuredClone: [Function: structuredClone],
  atob: [Getter/Setter],
  btoa: [Getter/Setter],
  performance: [Getter/Setter],
  fetch: [Function: fetch],
  crypto: [Getter]
}
 */

//*************************************************************************************

function myFunction () {
    let username = "sujit"
    console.log(this.username) //undefined
}

myFunction() // undefined

//*************************************************************************************

const obj001 = function(){
    let userName = "Sujit"
    console.log(this.userName)
}

obj001() // undefined

//*************************************************************************************

//print with arrow function (implicit return) // implicit return means with return key
const variable001 = () => {
    let userName = "Sujit"
    console.log(this.userName)
}

variable001() // undefined

//*************************************************************************************


const variable002 = () => {
    let userName = "Sujit"
    console.log(this)
}

variable002() // {} blank 


//*************************************************************************************



const arrowAddFun = (num1, num2) => {
    return num1 + num2
}

console.log (arrowAddFun(5, 3))


//*************************************************************************************

// //print with arrow function (explicit return) // explicit return means without return key



const arrowAddFun01 = (num1, num2) =>  num1 + num2

console.log(arrowAddFun01(6, 3))



//*************************************************************************************


const arrowAddFun02 = (num1, num2) => (num1 + num2)

console.log(arrowAddFun02(9, 1))

//*************************************************************************************

// object with arrow function

const student = {
    fullName : "Sujit Kumar Singh",
    Roll : 999,
    marks : 425,
    isPass : true,
    email : "sujitkumarsingh@google.com"
}

// console.log(student)

let objwithfun = (obje) => obje
console.log(objwithfun(student))

console.log("****************************** From  *********************************")

const myArray = [2, 5, 69, 9, 8]

let ownArrayWithArrow = () => 
