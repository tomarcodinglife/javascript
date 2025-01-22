//+++++++++++++++++++++++++++++++++Number+++++++++++++++++++++++++++++++++
const value = 400 //it's Number
console.log (value) //400

const myAcountBalance = new Number (4000) // it's strictly number value
console.log (myAcountBalance) // [Number: 4000]

console.log(value.toString()) // 400
console.log(value.toString().length) //3
console.log(myAcountBalance.toFixed(2)); // 4000.00


let price = 89.25256

console.log(price.toPrecision(4)) // 89.25
console.log(price.toPrecision(3)) // 89.3
console.log(price.toPrecision(2)) //89
console.log(price.toPrecision(1)) //9e+1

const myPrice = 1000000
console.log(myPrice.toLocaleString()) //1,000,000
console.log(myPrice.toLocaleString('en-IN')) //10,00,000


console.log(Math) // Object [Math] {}
console.log(Math.abs(-80)) // 80
console.log(Math.round(525.522555)) //526
console.log(Math.floor(499.152)) //499
console.log(Math.ceil(599.5255)) //600
console.log(Math.sqrt(25)) // square root 5
console.log(Math.min(4,3,6,5,5)) // Min Value 3
console.log(Math.max(4,3,6,5,5))  // Max Value 6


console.log(Math.random())
console.log(Math.random()*10)
console.log((Math.random()*10) + 1)
console.log(Math.floor(Math.random()*10) + 1)
console.log(Math.ceil(Math.random()*10) + 1)



let min = 1000
let max = 9999

console.log(Math.floor(Math.random()*(max-min)) + 1000)
console.log(Math.ceil((Math.random() * 1000) + 1000))
