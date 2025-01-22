const fullName = " Sujit Kumar Singh"
const profession = "Software Engineer"

/***********************************string interpolation******************************************/
console.log (`my name is ${fullName.toUpperCase} and my profession is ${profession.toUpperCase}`) // (`) it is backtics
console.log (`my name is ${fullName} and my profession is ${profession.toUpperCase}`) // (`) it is backtics

const strFirst = "String Name"
console.log (strFirst. charAt(2))

const myFullName = new String ('Sujit')
console.log(myFullName)
console.log(myFullName[2])
console.log(myFullName.toUpperCase)
console.log(typeof(myFullName))


let myString = "Sujit"
console.log(myString.indexOf("u"));
console.log(myString.substring(0, 3));
console.log(myString.slice(0, 3));
console.log(myString.toLowerCase(myString));
console.log(myString.toUpperCase(myString));
console.log(myString.replace("Su", "A"));
console.log(myString.length);


console.log("------------------------Here----------------------");


let myNewName = "      Sujit       "
console.log(myNewName)
console.log(myNewName.trim())

const url = "http://sujittomar.com/sujiit%20tomar"
console.log(url.replace("%20", "-"))
console.log(url.includes("sujit"))

let strintAgain = "Sujit-Rohan-Ram-Sohan-Aman-Raman"
console.log(strintAgain.split("-"))


