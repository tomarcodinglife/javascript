// function addition(a, b){
//     console.log(a+b)
//     return a + b
// };

// function multiplication (a, b) {
//     console.log(a*b)
//     return a*b
// };

// function subtraction (a, b) {
//     console.log(a-b)
//     return a-b
// };

// function division(a,b) {
//     if(a === 0){
//         console.log("N/A")
//     }else{ 
//         console.log(a/b)
//         a / b
//     };
// };

// call back hell

// addition(5, 3, function(addresult){
//     multiplication(addresult, 2, 
//         function (mulresult){
//     subtraction(mulresult, 4, 
//         function (subresult){
//     division (subresult, 2, 
//         function (divresult){
//    console.log("Final - ",divresult
//         )}
//     )}
//     )}
//     )})

// promise

// function addition(a, b) {
//     return new Promise((resolve, reject) => {
//         console.log("Addition:", a + b);
//         resolve(a + b);
//     });
// }

// function multiplication(a, b) {
//     return new Promise((resolve, reject) => {
//         console.log("Multiplication:", a * b);
//         resolve(a * b);
//     });
// }

// function subtraction(a, b) {
//     return new Promise((resolve, reject) => {
//         console.log("Subtraction:", a - b);
//         resolve(a - b);
//     });
// }

// function division(a, b) {
//     return new Promise((resolve, reject) => {
//         if (b === 0) {
//             reject("Division: Cannot divide by zero!");
//         } else {
//             console.log("Division:", a / b);
//             resolve(a / b);
//         }
//     });
// }

// // Now chain them using .then() and .catch()
// addition(5, 3)
//     .then((addResult) => {
//         return multiplication(addResult, 2);
//     })
//     .then((mulResult) => {
//         return subtraction(mulResult, 4);
//     })
//     .then((subResult) => {
//         return division(subResult, 2);
//     })
//     .then((divResult) => {
//         console.log("Final Result:", divResult);
//     })
//     .catch((error) => {
//         console.error("Error:", error);
//     });


function addition(a, b) {
    return new Promise((resolve, reject) => {
        console.log("Addition:", a + b);
        resolve(a + b);
    });
}

function multiplication(a, b) {
    return new Promise((resolve, reject) => {
        console.log("Multiplication:", a * b);
        resolve(a * b);
    });
}

function subtraction(a, b) {
    return new Promise((resolve, reject) => {
        console.log("Subtraction:", a - b);
        resolve(a - b);
    });
}

function division(a, b) {
    return new Promise((resolve, reject) => {
        if (b === 0) {
        reject("Division: Cannot divide by zero!");
        } else {
            console.log("Division:", a / b);
            resolve(a / b);
        }
    });
}

// Using async/await
async function calculate() {
try {
    const addResult = await addition(5, 3);
    const mulResult = await multiplication(addResult, 2);
    const subResult = await subtraction(mulResult, 4);
    const divResult = await division(subResult, 2);

        console.log("Final Result:", divResult);
    } catch (error) {
        console.error("Error:", error);
    }
}

calculate(); // function call