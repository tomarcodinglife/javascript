// truthy values
// true, 1, " ", [], {}, function(){}, "hello", -1, Infinity, 0.1, 0.00001, "0", "false", "null", "undefined", "NaN", "[]", "[object Object]", "function(){}
//     throw new Error("Number is less than 0") // custom error message 
const user = {}

if (user) {
    console.log("user is truthy")
} else {
    console.log("user is falsy")
}

// falsy values
// false, 0, "", null, undefined, NaN

const user1 = null

if (user1) {
    console.log("User1 is truthy")
} else {
    console.log("user1 is falsy")
}   

let array = []

if (array.length === 0){
    console.log("Array is Empty")
}else{
    console.log("Array is filled")
}

let obj = {}

if (Object.keys(obj).length === 0){
    console.log("object is emplty")
} else {
    console.log("Object is filled")
}


// Nullish coalescing operator
//         console.log("Hi Guest, welcome to dashboard")
//         break;
//     default:
//         console.log("Hi User, Please sign in dashboard")
// }

//
// Nullish coalescing operator is used to check if the value is null or undefined. If the value is null or undefined, it will return the default value. If the value is not null or undefined, it will return the value itself.
// It is used to check if the value is null or undefined. If the value is null or undefined, it will return the default value. If the value is not null or undefined, it will return the value itself. It is used to check if the value is null or undefined. If the value is null or undefined, it will return the default value. If the value is not null or undefined, it will return the value itself. It is used to check if the value is null or undefined. If the value is null or undefined, it will return the default value. If the value is not null or undefined, it will return the value itself. It is used to check if the value is null or undefined. If the value is null or undefined, it will return the default value. If the value is not null or undefined, it will return the value itself.

let userName = null;
let userRole = "admin";
let userEmail = undefined;
let userCountry = "India";
let userPhone = 1234567890;
let userAddress = null;


userName = userName ?? "Guest"
userRole = userRole ?? "User"
userEmail = user

console.log(userName) // Guest
console.log(userRole) // admin


// turnary operator 
// condition ?? true : false

let age = "23"
age >= "18" ? console.log("adult") : console.log("minor")