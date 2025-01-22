//truthy

const userEmail = "sujitkumar.ai"

if (userEmail) {
    console.log("got the user email")
} else {
    console.log("dont have user email")
}

/* 
falsy value = false, 0, -0, BigInt 0n, "" , null, undefined, NAN
*/

const logedIn = ""

if (logedIn) {
    console.log("loged in")
} else {
    console.log("don't login")
}

//*************************************************************************************
// when you have empty array
const usersId = []

if (usersId.length===0) {
    console.log("array empty")
} else {
    console.log("i have some data in array formate")
}

// when you have empty object
const userdata = {}

if (Object.keys(userdata).length===0) {
    console.log("object empty")
} else {
    console.log("i have some data in object formate")
}


//nullish coalescing operator (??) : null undefined

let val1;
// val1 = 5 ?? 10           //5 
// val1 = null ?? 10       // 10
// val1 = undefined ?? 15     // 15
val1 = undefined ?? 15 ?? 10     // 15

console.log(val1)



// turniary operator
// condition ? true : false

const bookPrice = 5000

bookPrice >= 2000 ? console.log("higher") : console.log("lower")
    