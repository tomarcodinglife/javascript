
const student = {
    Name : "Sujit Kumar Singh",
    Roll : 202,
    isPass : true,
}

for (const key in student) {
    console.log(key)
}

/* return
Name
Roll
isPass
*/


for (const key in student) {
    console.log(key, "=", student[key])
}

/* return 
Name = Sujit Kumar Singh
Roll = 202
isPass = true
*/

let myNewArray = ["Amit", "Sujit", "Rohit", "Sunim"]

for (const key in myNewArray) {
    console.log(key)
}

/* return
0
1
2
3
*/


for (const key in myNewArray) {
    console.log(key, "=", myNewArray[key])
}

/* return
0 = Amit
1 = Sujit
2 = Rohit
3 = Sunim
*/