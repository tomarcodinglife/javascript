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

for (let i=2; i<=2; i++){
    console.log("Table of " + i)
    for (let j=1; j<=10; j++){
        console.log(i+"*" + j + "=" + i*j)
    }
}


// while loop

// while (i=0 > x) {
//     console.log("While Loop")
// }

// do while loop

// do {
//     console.log("do while")
// } while (i=0 > x);