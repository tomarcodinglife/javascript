let myArray = [1, 2, 3, 4, 5];
console.log(myArray[2]) // 3

let myHero = ["Shaktiman", "Naagraj", "Spider"]
console.log(myHero[2]) // Spider 

let arr = [1, 2, 3]
arr.push(4)
console.log(arr) // [ 1, 2, 3, 4 ]
arr.pop() 
console.log(arr) // [ 1, 2, 3 ]

let arrayA = [5, 6, 8, 8]
arrayA.unshift(2)
console.log(arrayA) // [ 2, 5, 6, 8, 8 ]
arrayA.shift()
console.log(arrayA) // [ 5, 6, 8, 8 ]
arrayA.shift()
console.log(arrayA) // [ 6, 8, 8 ]

let newArry = [5, 8, 9, 60]
console.log(newArry.includes(9)) // true

let arrayB = [8, 5, 9, 5, 6, 2]
console.log(arrayB) //    [ 8, 5, 9, 5, 6, 2 ]
console.log(arrayB.join())  //  8,5,9,5,6,2

let arrayc = ["Sujit", "Amit", "Rohit", "Sumit", "Shekhar", "Sohail", "Samir", "Ranjan", "Niraj"]
console.log(arrayc) // 
console.log("Slice", arrayc.slice(1, 3)) // Slice [ 'Amit', 'Rohit' ]
console.log(arrayc) // ['Sujit', 'Amit', 'Rohit', 'Sumit','Shekhar', 'Sohail','Samir', 'Ranjan','Niraj']
console.group("Splice",arrayc.splice(1, 3)) //  Splice [ 'Amit', 'Rohit', 'Sumit' ]
console.log(arrayc) //   [ 'Sujit', 'Shekhar', 'Sohail', 'Samir', 'Ranjan', 'Niraj' ]


