// for loop
let x = 5

// for (let i = 0; i<=x; i++) {
//     let row = '-'

//     for (let j = 0; j<=i; j++) {
//         let colunm = '*'
//         row += colunm
//     }

//     console.log(row)    
// };

let y = 5

for (let i=y; i>=1; i--) {
    let row = ''
    for (let j=1; j<=i; j++) {
        let colunm = '*'
        row += colunm
    }
    console.log(row)    
}

for (let i=y; i>=1; i--) {
    let row = ''
    for (let j=1; j<=i; j++) {
        let colunm = '*'
        row += colunm
    }
    console.log(row)    
}

let minNum = 0;
let maxNum = 100;
let sum = 0

for (let i=minNum; i<=maxNum; i++) {
    sum += i
}
console.log(sum)

let array = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
let sumArray = 0

for (let i=0; i<array.length; i++) {
    sumArray += array[i]
}
console.log(sumArray)
// console.log(array.length)

// for (let i=1; i<=10; i++){
//     console.log("Table of " + i)
//     for (let j=1; j<=10; j++){
//         console.log(i+"*" + j + "=" + i*j)
//     }
// }

// for (let i=2; i<=2; i++){
//     console.log("Table of " + i)
//     for (let j=1; j<=10; j++){
//         console.log(i+"*" + j + "=" + i*j)
//     }
// }


// while loop
let index = 0
while (index <= 5) {
    console.log("While Loop")
    console.log(index)
    index++
}

console.log("while loop with array")
let array1 = [1, 2, 3, 4, 5]
let sum1 = 0
let index1 = 0

while (index1 < array1.length) {
    sum1 += array1[index1]
    console.log(`${index1} -${array1[index1]}`)
    index1++
}

console.log(sum1) // 15
console.log(array1.length) // 5   

// do while loop
let printVal = 0
do {
    console.log(`${printVal} - "do while loop"`)
    printVal++
} while (printVal <= 5);


// for of loop
let array2 = [1, 2, 3, 4, 5]
let sum2 = 0

let index2 = 0
for (let element of array2) {
    sum2 += element
    console.log(`${index2} - ${element}`)
    index2++
}
console.log(sum2) // 15

// for in loop with array
let array3 = [1, 2, 3, 4, 5]
let sum3 = 0

let index3 = 0
for (let index3 in array3) {
    sum3 += array3[index3]
    console.log(`${index3} - ${array3[index3]}`)
}
console.log(sum3) // 15

// for in loop with object
let object = {
    name: "Sujit",
    age: 25,
    city: "Delhi"
}

for (let key in object) {
    console.log(`${key} - ${object[key]}`)
}

// for in loop with object with array

let object1 = {
    name: "Sujit",
    age: 25,
    city: "Delhi",
    hobbies: ["reading", "traveling", "sports"]
}
for (let key in object1) {
    if (Array.isArray(object1[key])) {
        console.log(`${key} - ${object1[key].join(", ")}`)
    } else {
        console.log(`${key} - ${object1[key]}`)
    }
}

// for in loop with object with array with object
let object2 = {
    name: "Sujit",
    age: 25,
    city: "Delhi",
    hobbies: [
        { name: "reading", level: "beginner" },
        { name: "traveling", level: "intermediate" },
        { name: "sports", level: "advanced" }
    ]
}

for (let key in object2) {
    if (Array.isArray(object2[key])) {
        for (let i = 0; i < object2[key].length; i++) {
            console.log(`${key} - ${object2[key][i].name} - ${object2[key][i].level}`)
        }
    } else {
        console.log(`${key} - ${object2[key]}`)
    }
}
// for in loop with string
let string = "Sujit"
let index4 = 0

for (let index4 in string) {
    console.log(`${index4} - ${string[index4]}`)
}


// for of loop with string
let string1 = "Sujit"
let index5 = 0
for (let element of string1) {
    console.log(`${index5} - ${element}`)
    index5++
}

// maps loop
let myMap = new Map()
myMap.set("name", "Sujit")
myMap.set("age", 25)
myMap.set("city", "Delhi")
myMap.set("hobbies", ["reading", "traveling", "sports"])
myMap.set("address", { city: "Delhi", state: "Delhi" })
myMap.set("isMarried", false)
myMap.set("isSingle", true)
myMap.set("isDivorced", false)
myMap.set("isEngaged", false)


for (let [key, value] of myMap) {
    if (Array.isArray(value)) {
        console.log(`${key} - ${value.join(", ")}`)
    } else if (typeof value === "object") {
        for (let [key1, value1] of Object.entries(value)) {
            console.log(`${key} - ${key1} - ${value1}`)
        }
    } else {
        console.log(`${key} - ${value}`)
    }
}

// for each loop with array it can run without index value
// for each not return anything it just loop through the array
let array4 = ["Sujit", "Delhi", "India"]
array4.forEach(function (element, index6) {
    console.log(`${index6} - ${element}`)
})

// for each loop with arrow function
let array5 = ["Sujit", "Delhi", "India"]

array5.forEach((element, index7) => {
    console.log(`${index7} - ${element}`)
})

// function and for each seprate
function sujit(array5, index, array) {
    console.log(array5, index, array)
}
array5.forEach(sujit)


// filter 
let array6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let filterArray = array6.filter(function (element) {
    return element > 5
})

console.log(filterArray) // [6, 7, 8, 9, 10]
console.log(array6.filter((element) => element > 5)) // [6, 7, 8, 9, 10]  

// filter with object

let students = [
    { name: "Sujit", age: 25, city: "Delhi" },
    { name: "Rahul", age: 30, city: "Mumbai" },
    { name: "Amit", age: 35, city: "Bangalore" },
    { name: "Ravi", age: 40, city: "Chennai" }
]

let filterStudents = students.filter(function (student) {
    return student.age > 30
})
console.log(filterStudents) 

/* 

[
  { name: 'Amit', age: 35, city: 'Bangalore' },
  { name: 'Ravi', age: 40, city: 'Chennai' }
]

*/

let filterStudents1 = students.filter((student) => student.age > 30 && student.city === "Bangalore")
console.log(filterStudents1) // [ { name: 'Amit', age: 35, city: 'Bangalore' } ]    


let newArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let myNewArray = newArray.map(function (element) {
    return element + 10
})

console.log(myNewArray) // [11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ]


let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
arr.forEach((element) => {console.log(element + 10)})
console.log(typeof(arr)) // object
console.log(Array.isArray(arr)) // true

let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newArr1 = arr1
                .map((element) => (element + 10))
                .map((element) => (element + 5))
                .filter((element) => (element > 20))
console.log(newArr1) // [ 21, 22, 23, 24, 25 ]

let array7 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let newArray7 = array7.reduce((accumulator, currentValue) => {
    console.log(`accumulator ${accumulator}, currentValue ${currentValue}`)
    return accumulator + currentValue}, 0) //  0 is initial value of accumulator
console.log(newArray7) // 55
console.log(array7.reduce((accumulator, currentValue) => accumulator + currentValue, 0)) // 50


