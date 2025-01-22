
function myName(){
    console.log("S")
    console.log("U")
    console.log("J")
    console.log("I")
    console.log("T")
}

myName() 

// return
/* 
S
U
J
I
T
*/

//*************************************************************************************

function addTwoNumber (num1, num2) {
    console.log(num1 + num2)
}

addTwoNumber(3, 4) // 7
addTwoNumber(3, "4") // 34
addTwoNumber(3, "a") // 3a

//*************************************************************************************

//creat function with console

function addnumber (number1, number2) {
    console.log(number1 + number2)
}

let result = addnumber(5, 3)
console.log(result) // undefined

//*************************************************************************************

//creat function with return

function add (number1, number2) {
    let result = number1 + number2
    return result
    console.log("sujit") // after return in function not valid any type of work
};

let results = add(5, 3)
console.log(results) //  8

//*************************************************************************************



function userMessageAtLoggin (username) {
    return `hi ${username} you are logged in`
}

userMessageAtLoggin("Sujit") // no any print in this case 

console.log(userMessageAtLoggin("Sujit")) // hi Sujit you are logged in



//*************************************************************************************

// rest operator || sprade 

function calculateCartPrice(...value) {
    return value
}   

console.log(calculateCartPrice(100, 500, 600, 800, 50, 600)) // [ 100, 500, 600, 800, 50, 600 ]

// if 

function CartPricecalculate(num1, num2, ...value) {
    return value
}   

console.log(CartPricecalculate(100, 500, 600, 800, 50, 600)) // [ 600, 800, 50, 600 ] because num1 = 100, num2=500 but return only value



//*************************************************************************************


console.log("****************************** From  *********************************")

//object pass in function

const object01 = {
    userName : "Sujit",
    price : 2000
};

function objectinfunction01 (myobject) {
    // console.log(`username ${object01.userName} and price is ${object01.price}`)
    return `username ${myobject.userName} and price is ${myobject.price}`
}

objectinfunction01(object01) // blank retur because in this function use only return keyword
console.log(objectinfunction01(object01))// username Sujit and price is 2000

// or second option for object pass in function


console.log("****************************** From  *********************************")


function objectinfunction02 (anyobject) {
    console.log(`username ${anyobject.userName} and price is ${anyobject.price}`)
    // return `username ${anyobject.userName} and price is ${anyobject.price}`
}

// console.log(objectinfunction02({
//     userName : "Sujit Tomar",
//     price : 2000,
// }));

objectinfunction02({
    userName : "Sujit Tomar",
    price : 1999
});

// array in function

const array01 = [50, 52, 21, 63, 62, 95, 12, 35]

function arrayReturn (getArray) {
    return array01[2]
}

console.log(arrayReturn(array01)) // 21 
// or you can find this method

console.log (arrayReturn([50, 52, 21, 63, 62, 95, 12, 35])) // 21
