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

console.log(Object.keys(jsuser)) // [ 'name', 'full_Name', 'age', 'location', 'email', 'isLoggedin' ]
console.log(Object.values(jsuser)) // [ 'Sujit', 'Sujit Tomar', 22, 'Dellhi', 'sujit@google.com', false]
console.log(Object.entries(jsuser)) 
/*

[
  [ 'name', 'Sujit' ],
  [ 'full_Name', 'Sujit Tomar' ],
  [ 'age', 22 ],
  [ 'location', 'Dellhi' ],
  [ 'email', 'sujit@google.com' ],
  [ 'isLoggedin', false ]
]

*/

jsuser.age = 20
console.log(jsuser.age) // 20

console.log(jsuser.hasOwnProperty("age")) // true

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

let myUser = {
    full_Name : {
        firstName : "Sujit",
        lastName : "Tomar"
    }, 
    shortName : `${this.firstName}${this.lastName}`,
    marks : {
        hindi : {
            fullMarks : 100,
            passMarks : 30,
            obtainMarks : 75,
        },
        english : {
            fullMarks : 100,
            passMarks : 30,
            obtainMarks : 65,
        },
        math : {
            fullMarks : 100,
            passMarks : 30,
            obtainMarks :85,
        },
        science : {
            physics : {
                fullMarks : 100,
                passMarks : 30,
                obtainMarks : 75,
            },
            chemistry : {
                fullMarks : 100,
                passMarks : 30,
                obtainMarks : 75,
            },
            Biology : {
                fullMarks : 100,
                passMarks : 30,
                obtainMarks : 75,
            },
        }
    }
}

console.log(myUser) 
/*
{
  full_Name: { firstName: 'Sujit', lastName: 'Tomar' },
  shortName: 'undefinedundefined',
  marks: {
    hindi: { fullMarks: 100, passMarks: 30, obtainMarks: 75 },
    english: { fullMarks: 100, passMarks: 30, obtainMarks: 65 },
    math: { fullMarks: 100, passMarks: 30, obtainMarks: 85 },
    science: { physics: [Object], chemistry: [Object], Biology: [Object] }
  }
}
*/

console.log(myUser.marks.science.physics.obtainMarks) // 75


// add two object
let obj001 = {1: "a", 2 : "b", 3 : "c"}
let obj002 = {4:"d", 5:"e", 6:"f"}

let obj = Object.assign({}, obj001, obj002)
console.log(obj) // { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }

let myobj = {...obj001, ...obj002}
console.log(myobj) // { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }


// object distructure 

let course = {
    course_Name : "Javascript",
    price : 999,
    course_instructure : "Sujit Tomar"
}

let {course_instructure : instructure} = course
console.log(instructure) // Sujit Tomar