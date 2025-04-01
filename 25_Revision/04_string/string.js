let userName = "Sujit Tomar"
let userFirstName = "Amit"
let userSecondName = "Singh"
let userLastName = "Rajput"
let userFirst = "      Rohit      "
let useranother = "Sujit-Kumar-Singh"
let userAge = 23

console.log(`my name is ${userName} and age is ${userAge}`) // my name is Sujit Tomar and age is 23

console.log(userName.toLowerCase())// sujit tomar
console.log(userName.toUpperCase())//  SUJIT TOMAR
console.log(userFirstName.charAt(2)) // i
console.log(userFirstName.indexOf("it")) // 2
console.log(userName.substring(0, 5))// Sujit
console.log(userName.slice(0, 5)) // Sujit
console.log(userFirst.trim()) // Rohit (return without white space )
console.log(userFirst.trim(2, 9)) // 

let weburl = "http://sujittomar.com/sujit%20tomar"
console.log(weburl.replace("%20", "-")) // http://sujittomar.com/sujit-tomar
console.log(weburl.includes("sujit")) // true
console.log(useranother.split("-")) //  [ 'Sujit', 'Kumar', 'Singh' ]




