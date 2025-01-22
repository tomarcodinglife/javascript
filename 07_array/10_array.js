
//************************************************************************************* */

const cd03 = [851, 8525, 556, 452, 8552, 852]
const cd04 = [1, 2, 3, 7, 8, 9, 5]

const cd05 = cd03.concat(cd04)
console.log(cd05)
/*Result - [851, 8525, 556, 452, 8552,  852,   1,   2, 3,    7,   8,   9,  5]*/

const cd06 = [...cd03, ...cd04] // this is sprade method
console.log(cd06)

/* Result - [851, 8525, 556, 452, 8552, 852, 1, 2, 3, 7, 8, 9, 5] */
// you have same result as a concat 


//************************************************************************************* */


const array001 = [1, 2, 3, 8, 9, 8, [8, 7, 9, 2, 8, 5,], [8, 9 , 2, 5, 8, 3, 8, 7, [9, 3, 1, 2]]]
const array002 = array001.flat(Infinity) // useing flate method you can convert sub array to single array
const array003 = array001.flat(3) // useing flate method you can convert sub array to single array

console.log(array001)
/* Result : [  1, 2, 3, 8, 9, 8, [ 8, 7, 9, 2, 8, 5 ], [ 8, 9, 2, 5, 8, 3, 8, 7, [ 9, 3, 1, 2 ] ]*/

console.log(array002)
/* Result : [ 1, 2, 3, 8, 9, 8, 8, 7, 9, 2, 8, 5, 8, 9, 2, 5, 8, 3, 8, 7, 9, 3, 1, 2 ] */

console.log(array003)
/* Result : [ 1, 2, 3, 8, 9, 8, 8, 7, 9, 2, 8, 5, 8, 9, 2, 5, 8, 3, 8, 7, 9, 3, 1, 2 ] */

//*************************************************************************************//


console.log(Array.isArray("Sujit Tomar")) // result - false (you can ask question this is array or not ?)
console.log(Array.isArray(cd03)) // result - true  (you can ask question this is array or not ?) 

//*************************************************************************************//

const myName = "Sujit Tomar" // with string can you convert in array?
const myNameArry = Array.from(myName)
console.log(myNameArry) // Result : ['S', 'u', 'j', 'i', 't', ' ', 'T', 'o','m', 'a', 'r' ]
/* so you can change string to array using Array.from method and remember in this method your string space area also convert in array and reserve index*/

const myNameArry01 = Array.from({name:myName}) // with object can you convert in array?
console.log(myNameArry01) // its provide blank array
/*So you can not change object to array with this method*/

//*************************************************************************************//
console.log("****************************** From Here *********************************")

const score01 = 100
const score02 = 200
const score03 = 500

const scoreArray = Array.of(score01, score02, score03)
console.log(scoreArray) // result [100, 200, 300]

