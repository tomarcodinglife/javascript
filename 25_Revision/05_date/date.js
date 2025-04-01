let myDate = new Date();
console.log(myDate); // 2025-04-01T15:18:00.175Z
console.log(myDate.toString()); // Tue Apr 01 2025 20:48:00 GMT+0530 (India Standard Time)
console.log(myDate.toDateString()); // Tue Apr 01 2025
console.log(myDate.toISOString()); // 2025-04-01T15:18:00.175Z
console.log(myDate.toLocaleTimeString()); // 8:48:00 PM
console.log(myDate.toLocaleDateString()); // 4/1/2025
console.log(myDate.toLocaleString()) // 4/1/2025, 8:52:41 PM (MM DD YYYYY)
console.log(myDate.toLocaleString()) // 4/1/2025, 8:52:41 PM (MM DD YYYYY)

let myCreationDate = new Date (2023, 0, 56, 5, 8);
console.log(myCreationDate.toLocaleString()) // 2/25/2023, 5:08:00 AM

let myDateA = new Date ("04-01-2025")
console.log(myDateA.toLocaleString()) // 4/1/2025, 12:00:00 AM

let myTimeStamp = Date.now()
console.log(myTimeStamp); // 1743521401305
console.log(myCreationDate.getTime()); // 1677281880000

console.log(Math.floor(Date.now()/1000));

let dateSKS = new Date();
console.log(dateSKS.getDate()) // 1

const day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
console.log(day[dateSKS.getDay()]) // Tuesday


console.log(dateSKS.getMonth() + 1 ) // 4
console.log(dateSKS.getFullYear()) // 2025

newDate.toLocaleString('default', {
    weekday : 'long',
})