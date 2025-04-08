// control flow
// if, else if, else
// switch case
// break, continue
// try, catch, finally
// throw


let login = "true";
let userName = "sujit";

// if statement is used to execute a block of code if the condition is true.
// if the condition is false, the block of code will not be executed.
if (login == "true") {
    console.log("Yes Login is true")
};

// if else statement
// if else statement is used to execute a block of code if the condition is true and another block of code if the condition is false.
if (false) {
    console.log("This is true")
}else {
    console.log("This is false")
}


// else if statement
// else if statement is used to execute a block of code if the condition is true and another block of code if the condition is false and another block of code if the condition is false.
if (userName == "sujit") {
    console.log(`Hi ${userName} welcome to dashboard`)
}
else if (userName == "rohit") {
    console.log(`Hi ${userName} Please Logout from dashboard`)
}
else {
    console.log(`Hi ${userName} Please sign in dashboard`)
}


// if statement in single line
if (userName == "sujit") (console.log(`Hi ${userName} welcome to dashboard`))

// turnary operator
// turnary operator is used to execute a block of code if the condition is true and another block of code if the condition is false.
let bankBalance = 1000;
let myacbalance = (bankBalance >= 50000) ? `Hi ${userName} You are Reach` : `Hi ${userName} You are Poor`;
console.log(myacbalance) // Hi sujit You are Poor


// switch case statement
// switch case statement is used to execute a block of code if the condition is true and another block of code if the condition is false and another block of code if the condition is false.

let userRole = "admin";
switch (userRole) {
    case "admin":
        console.log("Hi Admin, welcome to dashboard") // Hi Admin, welcome to dashboard
        break;
    case "user":
        console.log("Hi User, welcome to dashboard")
        break;
    case "guest":
        console.log("Hi Guest, welcome to dashboard")
        break;
    default:
        console.log("Hi User, Please sign in dashboard")
}


// break statement
// break statement is used to exit the loop or switch case statement.

for (let i = 0; i < 10; i++) {
    if (i == 5) {
        break; // exit the loop
    }
    console.log(i) // 0 1 2 3 4
}

// continue statement is used to skip the current iteration of the loop and continue with the next iteration.
for (let i = 0; i < 10; i++) {
    if (i == 5) {
        continue; // skip the current iteration
    }
    console.log(i) // 0 1 2 3 4 6 7 8 9
}


// try catch statement
// try catch statement is used to handle errors in the code. It is used to execute a block of code and if an error occurs, it will be caught by the catch block and the code will not be terminated.
// It is used to handle errors in the code and prevent the code from terminating.

try {
    let num = 10;
    let result = num / 0; // division by zero
    console.log(result) // Infinity
}
catch (error) {
    console.log(error) // Infinity
}

// throw statement
// throw statement is used to throw an error in the code. It is used to create a custom error message and throw it in the code.
// It is used to create a custom error message and throw it in the code.

try {
    let num = 10;
    if (num < 0) {
        throw new Error("Number is negative") // throw an error
    }
    console.log(num) // 10
}catch (error) {
    console.log(error) // Number is negative
}
// finally statement
// finally statement is used to execute a block of code after the try catch statement. It is used to execute a block of code after the try catch statement and it will always be executed whether an error occurs or not.
// It is used to execute a block of code after the try catch statement and it will always be executed whether an error occurs or not.

try {
    let num = 10;
    if (num < 0) {
        throw new Error("Number is negative") // throw an error
    }
    console.log(num) // 10
}catch (error) {
    console.log(error) // Number is negative
}
finally {
    console.log("This is finally block") // This is finally block
}
// finally statement is used to execute a block of code after the try catch statement. It is used to execute a block of code after the try catch statement and it will always be executed whether an error occurs or not.
// It is used to execute a block of code after the try catch statement and it will always be executed whether an error occurs or not.




