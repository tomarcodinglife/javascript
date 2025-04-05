
function myname(){
    console.log("Sujit Tomar")
}

myname() // Sujit Tomar

function addnum (num1, ...num){
    if(num1 == null || num.length === 0){
        console.log("Please Enter Value")
        return 
    }

    let sum = num1 + num.reduce((pre, cur) => pre + cur, 0);
    console.log(sum)
    return sum
}

addnum(5, 2, 3) // 10
addnum() // 

function message(username = "user") {
    return `Hi ${username}, welcome to dashboard`
}

console.log(message("Sujit")) // Hi Sujit, welcome to dashboard
console.log(message()) // Hi user, welcome to dashboard

let IITPATNA25236 = {
    fullName : "Sujit Tomar",
    username : "iasmsujittomar",
    password : "sujit525@tomar545",
    roll : 152,
    pass : true
}

let IITPATNA25236_Marks = [85, 96, 75, 48, 55, 88]

let IITPATNA85252 = {
    fullName : "Rohit Singh",
    username : "rohit855",
    password : "rohit@525",
    roll : 182,
    pass : true
}

let IITPATNA85252_Marks = [85, 96, 75, 48, 55, 88]

function studentusername(enrollmentNumber){
    return `Hi ${enrollmentNumber.fullName}, Your username is ${enrollmentNumber.username}`
}
function studentpassword(enrollmentNumber){
    return `Hi ${enrollmentNumber.fullName}, Your password is ${enrollmentNumber.password}`
}

function student_Math_Marks(marksarray){
    return `your math marks is ${marksarray[2]}`
}


console.log(studentpassword(IITPATNA85252)) // Hi Rohit Singh, Your password is rohit@525
console.log(studentusername(IITPATNA85252)) // Hi Rohit Singh, Your username is rohit855
console.log(studentusername(IITPATNA25236)) // Hi Sujit Tomar, Your username is iasmsujittomar
console.log(student_Math_Marks(IITPATNA25236_Marks)) // your math marks is 75

let funOne = function (name){
    let myName = name
    let course = function(){
        course = "B.Tech"
        return course
    }
    return `name is ${myName} and course is ${course()}`
}

console.log(funOne("Sujit"))// name is Sujit and course is B.Tech

let Userdata = {
    "sujittomar" : "password@123",
    "rohit" : "rohit@123",
    "sujit" : "sujit@123",
}

let functionLogin = function (username, password){
    if (username === undefined || password === undefined) {
        console.log("Please enter username and password")
        return 
    }else if (username === "") {
        console.log("Please enter username")
        return
    }else if (password === "") {
        console.log("Please enter password")
        return
    }else if (username in Userdata) {
        if (Userdata[username] === password) {
            // "sujit" === "sujit@123" // true
            console.log("Login Success")
        } else {
            console.log("Invalid Password")
        }
    } else {
        console.log("Invalid Username")
    }
}
functionLogin("sujit", "sujit@123") // Login Success
functionLogin("sujit", "sujit@1234") // Invalid Password
functionLogin("sujit", "") // Please enter password
functionLogin("", "sujit@123") // Please enter username
functionLogin("sujit", undefined) // Please enter username and password
functionLogin(undefined, "sujit@123") // Please enter username and password
functionLogin("", "") // Please enter username



// Function declaration
/*Function declaration is a function that is defined in a declaration statement.
// It is hoisted to the top of the code, which means it can be called before it is defined. It is also called a function statement. It is a named function that can be called by its name. It is a function that is defined in a declaration statement. It is a function that is defined in a declaration statement and not in an expression statement. It is a function that is defined in a declaration statement and not in an expression statement and not in an arrow function.
*/

function add(num1, num2){
    return num1 + num2
}

// Function expression
/* Function expression is a function that is defined inside an expression and not in a declaration statement. It is not hoisted to the top of the code, which means it cannot be called before it is defined. It is also called a function literal.It is an anonymous function that can be called by its name. It is a function that is defined in an expression statement. It is a function that is defined in an expression statement and not in a declaration statement. It is a function that is defined in an expression statement and not in a declaration statement and not in an arrow function. It is a function that is defined in an expression statement and not in a declaration statement and not in an arrow function and not in a function literal.   
*/

let addNum = function (num1, num2){
    return num1 + num2
}

console.log(add(5, 4)) // 9
console.log(addNum(5, 4)) // 9


// Function expression with arrow function
// Arrow function is a function that is defined in an expression statement and not in a declaration statement.  
// It is not hoisted to the top of the code, which means it cannot be called before it is defined.
// It is also called a function literal.
// It is an anonymous function that can be called by its name.
// It is a function that is defined in an expression statement.
// It is a function that is defined in an expression statement and not in a declaration statement.
// It is a function that is defined in an expression statement and not in a declaration statement and not in a function literal.

let addArrow = (num1, num2) => num1 + num2

let addArrow2 = (num1, num2) => {
    return num1 + num2
}

// Function expression with arrow function with default parameter
// Arrow function is a function that is defined in an expression statement and not in a declaration statement.
// It is not hoisted to the top of the code, which means it cannot be called before it is defined.
// It is also called a function literal.
// It is an anonymous function that can be called by its name.
// It is a function that is defined in an expression statement.
// It is a function that is defined in an expression statement and not in a declaration statement.


const loginMessage = function (username = "user", str = "@gmail.com") {
    username = username || "user"

    function emailPrint (){
        email = username + str
        return email
    }
    email = emailPrint()
    console.log(`Hi ${username}, welcome to dashboard, your email is ${email}`)
    return `Hi ${username}, welcome to dashboard your email is ${email}`
}

loginMessage("sujit", "tomar.com") // Hi sujit, welcome to dashboard, your email is sujittomar.com
loginMessage("amit") // Hi amit, welcome to dashboard, your email is amit@gmail.com
loginMessage() // Hi user, welcome to dashboard, your email is user@gmail.com



