
// <, >, <=, >=, ==, !=, ===, !==

//if

const isUserloggedIn = true

if(isUserloggedIn){
    console.log("method")
}

//*************************************************************************************


let passstatus = false


if(passstatus == true){
    console.log("if method")
}else{
    console.log("else method")
}

let balance = 1000
let acname = "Sujit"


if (balance <= 10000) {
    console.log(`your balance is ${balance} which is less than 10000`)
}else {
    console.log(`your balance is ${balance} which is greater than 10000`)
};

//*************************************************************************************

// if conditional statement you can write also this type
if (balance => 10000) console.log("your balance is low")

// if conditional statement you can write also this type in two line 
if (balance => 10000) console.log("your balance is low"), 
console.log("your balance is high");

//*************************************************************************************



let accountBalance = 17000
let accountName = "Sujit Kumar Singh"
let firstCondition = 5000
let secondCondition = 10000

if(accountBalance < firstCondition) {
    console.log(`Hy ${accountName} your account balance is ${accountBalance} which is lower than ${firstCondition}`)
} else if (accountBalance > firstCondition) {
    console.log(`Hy ${accountName} your account balance is ${accountBalance} which is greater than ${firstCondition}`)
} else if (accountBalance == firstCondition) {
    console.log(`Hy ${accountName} your account balance is ${accountBalance} which is equal to ${firstCondition}`)
} else {
    console.log("please try after sometime")
}

//*************************************************************************************
// multiple condition statement chaeck in if else


{
    userNameArray = ["iamsujit", "sujittomar", "sujitkumarsingh", 45545]
}


const username = userNameArray[5]
const logedin = true

if(username == userNameArray[0] && username == userNameArray[1], username == userNameArray[2] ) {
    console.log("you are logged in")
} else {
    console.log("username not available in my databas")
}

console.log("****************************** From  *********************************")

let loggedIn = true
let userName = true

if (loggedIn == true && userName==true) {
    console.log("welcome to my website")
} else {
    console.log("please try again")
}


