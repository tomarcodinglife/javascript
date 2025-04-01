// Num
console.log("**********************************Num********************************")
let score = 200;
const balance = new Number (100);

console.log(balance) // [Number: 100]
console.log(typeof(balance)) // object

let newBalance = balance.toString()
console.log(typeof(newBalance)) // string

let price = 450.8585255

let updatePrice = price.toPrecision(6);
console.log(updatePrice) // 450.859

let newPrice = price.toFixed(2)
console.log(newPrice) // 450.86

const bankBalance = 100000
console.log(bankBalance.toLocaleString()) // 100,000
console.log(bankBalance.toLocaleString('en-IN')) // 1,00,000

console.log("**********************************Math********************************")

console.log(Math.abs(-80)) // 80
console.log(Math.abs(80)) // 80
console.log(Math.round(85.36)) // 85
console.log(Math.ceil(89.9)) // 90
console.log(Math.floor(89.9)) // 89
console.log(Math.sqrt(25)) // 25 squar of 5
console.log(Math.pow(5, 2)) // 5 X 5 = 25

console.log(Math.random()) // random number 
console.log(Math.ceil(Math.random()*51) +(9000 - Math.ceil(Math.random()+ 1000)) + 5)


const min = (Math.random() * 5 + 1000);
const max = (Math.random() * 2 + 8999);

console.log(Math.floor(Math.random() * (max-min + 1) + min))