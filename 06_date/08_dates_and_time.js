//Dates
let myDate = new Date()

console.log(myDate) // 2024-08-08T02:00:08.727Z
console.log(myDate.toString()) // Thu Aug 08 2024 07:30:08 GMT+0530 (India Standard Time)
console.log(myDate.toDateString()) //Thu Aug 08 2024
console.log(myDate.toISOString()) //2024-08-08T02:00:08.727Z
console.log(myDate.toLocaleDateString()) // 8/8/2024
console.log(myDate.toJSON()) // 2024-08-08T02:00:08.727Z
console.log(myDate.toLocaleString()) // 8/8/2024, 7:30:08 AM


console.log(typeof (myDate)) // Object

let newDate01 = new Date (2024, 0, 8)  // 0 is Month in array
console.log(newDate01.toDateString()) // Mon Jan 08 2024

let newDate02 = new Date (2024, 0, 8, 7, 38)  // 0 is Month in array
console.log(newDate02.toLocaleString()) // 1/8/2024, 7:38:00 AM

let newDate03 = new Date ("2024-01-08")  // 01 is Month with this format
console.log(newDate03.toLocaleString()) // 1/8/2024, 5:30:00 AM


let myTimeStamp = Date.now()
console.log(myTimeStamp)  // result in milisecond
console.log(newDate01.getTime()) // result in milisecond
console.log(myDate.getTime()) // result in milisecond

//convert in second
console.log(Date.now()) //  1723084099368
console.log(Date.now()/1000) // 1723084099.368
//remove decimal value
console.log(Math.floor(Date.now()/1000))  // 1723084099




let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth())
console.log(newDate.getDay())

`Today Date is ${newDate} and current time is ${}`

console.log("*****************************From Here***************************************")

// newDate.toLocaleString("default"{
//     weekday : "long"
//     // timeZone : 
// })



