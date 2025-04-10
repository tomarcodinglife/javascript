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

