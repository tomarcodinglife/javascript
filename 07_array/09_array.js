console.log("Array")
const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const myHero = ["Ravan", "Robot", "Titanic", "Spider Man"]
const myNewArray = new Array ( 1, 2, 3, 4, 5) //you can write this type array

//************************************************************************************* */

myArray.push(8) // add data from the last
console.log (myArray);
console.log (myArray[2]); // result : 3 because its index on two
myArray.pop() // remove single index data from last
console.log(myArray) 

//************************************************************************************* */

const stName = ["Rohan", "Sohan", "Aman", "Amit"]
stName.shift() // remove single data from first
console.log(stName)

//************************************************************************************* */

const stNewName = ["Ram", "Shyam", "Amit", "Rohit"]
stNewName.unshift("Sita") // add from first
console.log(stNewName)

//************************************************************************************* */

const stNewNumber = [0, 1, 2, 3, 4, 5, 8, 9]
console.log(stNewNumber.includes(8)) // you can ask in array useing includes
console.log(stNewNumber.indexOf(9)) // you can check index of arraya data

//************************************************************************************* */

const myFruits = ["Mango", "Litchi", "Banana", "Grapes"]
const myNewFruits = myFruits.join()  // useing join method in array you can change in string data
console.log(myFruits)
console.log(myNewFruits)

//************************************************************************************* */

const myStudentData = ["Anuj", "Amit", "Rohit", "Raman", "Sumit"]
const myStudentDataSlice =  myStudentData.slice(1, 3) // in this method last para index not include for result
console.log(myStudentData) 
console.log(myStudentDataSlice) // [ 'Amit', 'Rohit' ] because last index not include

//************************************************************************************* */

const myStudentDataB = ["Anuj", "Amit", "Rohit", "Raman", "Sumit"]
const myStudentDataC = myStudentDataB.splice(0, 3)
console.log(myStudentDataC) // [ 'Anuj', 'Amit', 'Rohit' ] last index include 
console.log(myStudentDataB) // [ 'Raman', 'Sumit' ] after splice use your original array also changed

//************************************************************************************* */


const cd01 = [851, 8525, 556, 452, 8552, 852]
const cd02 = [1, 2, 3, 7, 8, 9, 5]

cd01.push(cd02)
console.log(cd01)
/* Result - [851,   8525,  556,  452,  8552,  852,  [ 1, 2, 3, 7, 8, 9, 5 ]]
you see array under array in result 
that means your cd02 array are under index of 6
*/
console.log(cd01[6][5]) // 9
/* that means whan you wants index result after push array this type like array unde array then you have this method.
*/
