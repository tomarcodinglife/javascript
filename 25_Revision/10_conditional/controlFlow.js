// control flow
// if, else if, else
// switch case
// for, while, do while
// break, continue
// try, catch, finally
// throw
// if statement


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