
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






