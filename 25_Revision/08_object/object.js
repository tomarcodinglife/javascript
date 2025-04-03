// object literals

const jsuser = {
    name : "Sujit",
    "full_Name" : "Sujit Tomar",
    age : 22,
    location  : "Dellhi", 
    email : "sujit@google.com", 
    isLoggedin : false,
}

console.log(jsuser.email) // sujit@google.com
console.log(jsuser.full_Name) //  Sujit Tomar
console.log(jsuser["email"]) // sujit@google.com
console.log(jsuser["full_Name"]) // Sujit Tomar

jsuser.age = 20
console.log(jsuser.age) // 20

// symbol use as a key in object
const mysymbol = Symbol("Key First")    
const symVal = {
    [mysymbol] : "Key First"
}
console.log(symVal[mysymbol]) // Key First
console.log(symVal) // { [Symbol(Key First)]: 'Key First' }

// add key value in object as function

jsuser.message = function () {
    console.log(`Hi You are most welcome ${jsuser.name}`) // Hi You are most welcome Sujit
    console.log(`Hi You are most welcome ${this.name}`) // Hi You are most welcome Sujit
}
console.log(jsuser.message()) 
// Hi You are most welcome Sujit
// Hi You are most welcome Sujit

// Freeze object for not change
const userFirst = {
    username : "iamsujittomar",
    full_Name : "Sujit Tomar",
    password : "986652@Delhi#63",
    email:"sujit@google.com",
    profilePiC : true,
    dob : "05 April"
}

console.log(userFirst.password) //  986652@Delhi#63
Object.freeze(userFirst)
userFirst.password = "565522@dffdg#525"
console.log(userFirst.password) // 986652@Delhi#63


// Object singlton - constructor
console.log("*************************Object singlton - constructor**********************************")
const instaUser  =  new Object()
instaUser.user = "iamsujittomar"
instaUser.password = "sujit8525@jjd#955*fgd5256"
instaUser.email = "su5255rsdj@google.com"

console.log(instaUser)

/*
{
  user: 'iamsujittomar',
  password: 'sujit8525@jjd#955*fgd5256',
  email: 'su5255rsdj@google.com'
}
*/




