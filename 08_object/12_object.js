//1. singleton

//*************************************************************************************

const tinderUser01 = new Object();
const tinderUser02 = {};
console.log(tinderUser01) // {}
console.log(tinderUser02) // {}

//*************************************************************************************

const studentuser01 = {}
studentuser01.id = 13545455
studentuser01.email = "sujittomar@google.com"
studentuser01.isPass = true

console.log(studentuser01)


//*************************************************************************************




const studentuser02 = {
    email : "sujittomar@google.com",
    fullname : {
        userfullname : {
            firstName : "Sujit",
            lastName : "Tomar",
        },
    },
};

console.log(studentuser02);
console.log(studentuser02.fullname);
console.log(studentuser02.fullname.userfullname);
console.log(studentuser02.fullname.userfullname.firstName);
console.log(studentuser02.fullname.userfullname.lastName);

//*************************************************************************************

const obj01 = {1:"a", 2:"b"}
const obj02 = {3: "a", 3: "b"}

//object addition
const obj03 = {obj01, obj02}
console.log(obj03) 
/* { obj01: { '1': 'a', '2': 'b' }, obj02: { '3': 'b' } } in this case object under object*/


//object addition mainly
const obj04 = Object.assign(obj01, obj02)
const obj05 = Object.assign({}, obj01, obj02)
console.log (obj04) // { '1': 'a', '2': 'b', '3': 'b' }
console.log (obj05) // { '1': 'a', '2': 'b', '3': 'b' }

//object sprade 
const obj06 = {...obj01, ...obj02}
console.log(obj06) // { '1': 'a', '2': 'b', '3': 'b' }

//************************************************************************************* 

const users = [
    {
        id : 1,
        email : "sujit@gmail.com",
    },
    {
        id : 2,
        email : "amit@gmail.com",
    },
    {
        id : 3,
        email : "rohit@gmail.com",
    },
]

let userfirstemail = users[1].email
console.log(userfirstemail)


//*************************************************************************************


//keys & value import from object
const objectimport = {
    name : "Sujit",
    email : "sujittomar@gmail.com",
    isLogIn : true,
    contactNumber : 999999999
};

console.log(Object.keys(objectimport)) // [ 'name', 'email', 'isLogIn', 'contactNumber' ]
console.log(Object.values(objectimport)) // [ 'Sujit', 'sujittomar@gmail.com', true, 999999999 ]


//*************************************************************************************
console.log(Object.entries(objectimport)) 
// [ [ 'name', 'Sujit' ], [ 'email', 'sujittomar@gmail.com' ], [ 'isLogIn', true ], [ 'contactNumber', 999999999 ]]

//find object property method
console.log(objectimport.hasOwnProperty('isLogIn')) //true
console.log(objectimport.hasOwnProperty('roll number'))  // false

const course = {
    courseName : "JS in Hindi",
    price : "999",
    courseInstructor : "sujit"
}

//*************************************************************************************

const {courseInstructor} = course
console.log(courseInstructor) // sujit


// object de-structure
const {courseInstructor:instructor} = course
console.log(instructor); // sujit


//*************************************************************************************
//api 



/*
{
    "name" : "Sujit",
    "courseName" : "js in hindi",
    "price  " : "free",
}
*/



/*
[
    {},
    {},
    {},
]
    */