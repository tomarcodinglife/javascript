// For Each
// this is not return any value

const coding = ["C++", "Java", "Python", "ruby", "cpp"]


coding.forEach( function (val){
    console.log(val)
})

/*return
C++
Java
Python
ruby
cpp
*/

//*************************************************************************************



coding.forEach( (value) => {
    console.log(value)
})

/*
C++
Java
Python
ruby
cpp
*/

//*************************************************************************************


function printMe (value) {
    console.log(value)
}

coding.forEach(printMe)

/* reeturn
C++
Java
Python
ruby
cpp
*/

//*************************************************************************************

coding.forEach( (item, index, arr) => {
    console.log(item, index, arr)
} )

/* return 
C++ 0 [ 'C++', 'Java', 'Python', 'ruby', 'cpp' ]
Java 1 [ 'C++', 'Java', 'Python', 'ruby', 'cpp' ]               
Python 2 [ 'C++', 'Java', 'Python', 'ruby', 'cpp' ]
ruby 3 [ 'C++', 'Java', 'Python', 'ruby', 'cpp' ]
cpp 4 [ 'C++', 'Java', 'Python', 'ruby', 'cpp' ]
*/

//*************************************************************************************

let myCoding = [
    {
        languageName : "JavaScript",
        languageFileName : "js",
    },
    {
        languageName : "python",
        languageFileName : "py",
    },
    {
        languageName : "c++",
        languageFileName : "cpp",
    }
]

myCoding.forEach(  (item) => {
    console.log(`${item.languageFileName} for ${item.languageName}`)
} )

/* return
js for JavaScript
py for python
cpp for c++
*/

// for Each not return any value
// but you want to return with for each than

const MyArray = [1, 25, 6, 74, 85, 8, 34, 65, 75]

const newMyArray = []

MyArray.forEach( (num) => {
    if (num > 4) {
        newMyArray.push(num)
    }
})

console.log(newMyArray) // [25,  6, 74, 85, 8, 34, 65, 75]
