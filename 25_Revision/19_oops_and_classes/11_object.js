// object property handle

let pi = Math.PI
console.log(pi) // 3.141592653589793 it is default value


let piObj = Object.getOwnPropertyDescriptor(Math, "PI") // it is a method of object property show method
console.log(piObj)
/*
{
  value: 3.141592653589793,
  writable: false,
  enumerable: false,
  configurable: false
}
*/

let myNewObj = Object.create({})
console.log(myNewObj)

myNewObj.courseName = "JavaScript"
myNewObj.price = 499
myNewObj.instructor = "SujitTomar"

console.log(myNewObj)
console.log(Object.getOwnPropertyDescriptor(myNewObj, "price")); 
// { value: 499, writable: true, enumerable: true, configurable: true }

Object.defineProperty(myNewObj, "price",{
    writable : false,
    enumerable : false,
    configurable : false
}) 

console.log(Object.getOwnPropertyDescriptor(myNewObj, "price")); 
// { value: 499, writable: false, enumerable: false, configurable: false }
