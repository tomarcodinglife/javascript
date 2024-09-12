let functionOne = function myFunction(userName, isLoggedIn, loggedInCount){
    this.userName = userName;
    this.isLoggedIn = isLoggedIn;
    this.loggedInCount = loggedInCount;

    return this  // you canr write this line or not as per your choice
}

console.log(functionOne("Amit", true, 15))
/*
<ref *1> Object [global] {
  global: [Circular *1],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  structuredClone: [Function: structuredClone],
  atob: [Getter/Setter],
  btoa: [Getter/Setter],
  performance: [Getter/Setter],
  fetch: [Function: fetch],
  crypto: [Getter],
  userName: 'Amit',
  isLoggedIn: true,
  loggedInCount: 15
}
*/


//without user
const userFirst = functionOne ("Rohit", true, 5)
const userSecond = functionOne("Shyam", false, 8)

// console.log(userFirst)

/** return
 
<ref *1> Object [global] {
  global: [Circular *1],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  structuredClone: [Function: structuredClone],
  atob: [Getter/Setter],
  btoa: [Getter/Setter],
  performance: [Getter/Setter],
  fetch: [Function: fetch],
  crypto: [Getter],
  userName: 'Amit',
  isLoggedIn: true,
  loggedInCount: 15
}
<ref *1> Object [global] {
  global: [Circular *1],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  structuredClone: [Function: structuredClone],
  atob: [Getter/Setter],
  btoa: [Getter/Setter],
  performance: [Getter/Setter],
  fetch: [Function: fetch],
  crypto: [Getter],
  userName: 'Shyam',
  isLoggedIn: false,
  loggedInCount: 8
}

 */

// console.log(userSecond)

/**
 ### UserOne return = 

<ref *1> Object [global] {
  global: [Circular *1],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  structuredClone: [Function: structuredClone],
  atob: [Getter/Setter],
  btoa: [Getter/Setter],
  performance: [Getter/Setter],
  fetch: [Function: fetch],
  crypto: [Getter],


  userName: 'Shyam',
  isLoggedIn: false,
  loggedInCount: 8
}

 ### UserOne return =  

<ref *1> Object [global] {
  global: [Circular *1],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  structuredClone: [Function: structuredClone],
  atob: [Getter/Setter],
  atob: [Getter/Setter],
  btoa: [Getter/Setter],
  atob: [Getter/Setter],
  btoa: [Getter/Setter],
  atob: [Getter/Setter],
  atob: [Getter/Setter],
  atob: [Getter/Setter],
  btoa: [Getter/Setter],
  performance: [Getter/Setter],
  atob: [Getter/Setter],
  btoa: [Getter/Setter],
  btoa: [Getter/Setter],
  performance: [Getter/Setter],
  performance: [Getter/Setter],
  fetch: [Function: fetch],
  crypto: [Getter],


  userName: 'Shyam',
  isLoggedIn: false,
  loggedInCount: 8
}

 */

// we see without new keyword data are override 

// with new keyword 

const userThird = new functionOne ("Rohit", true, 5)
const userFourth = new functionOne("Shyam", false, 8)

console.log(userThird)
console.log(userFourth)

/* return
myFunction { userName: 'Rohit', isLoggedIn: true, loggedInCount: 5 }
myFunction { userName: 'Shyam', isLoggedIn: false, loggedInCount: 8 }
*/


// so it is important when you define new variable or new data then use new keyword in this case your data not override.

