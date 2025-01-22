// filter
// return and call back available 

//*************************************************************************************

let myArray = [2, 5, 8, 6, 4, 8, 6, 3, 4,]


myArray.filter( (num) => num > 4  )
let myFilterMethod = myArray.filter( (num) => num > 4  )
console.log(myFilterMethod) // [ 5, 8, 6, 8, 6 ]

//*************************************************************************************


let newNum = myArray.filter((num) => {
    return num > 6 // return mandatory when you open scope with curly bracket
})

console.log(newNum) // [8, 8]

//*************************************************************************************

console.log("****************************** From  *********************************");

const studentsResultData = [
{name : 'Ram', fatherName: 'Dashrath', Roll: 25252525, fullMarks: 500, passMarks: 150, totalMarks : 350},
{name : 'Sita', fatherName: 'Janak', Roll: 54545454, fullMarks: 500, passMarks: 150, totalMarks : 400},
{name : 'Krishna', fatherName: 'Vasudev', Roll: 78524126, fullMarks: 500, passMarks: 150, totalMarks : 132},
{name : 'Gautam', fatherName: 'Suddhodana', Roll: 42151575, fullMarks: 500, passMarks: 150, totalMarks : 158},
{name : 'Radha', fatherName: 'Vrishabhanu', Roll: 13254457, fullMarks: 500, passMarks: 150, totalMarks : 248},
{name : 'Ramn', fatherName: 'Shivraj', Roll: 25221525, fullMarks: 500, passMarks: 150, totalMarks : 350},
{name : 'Sohan', fatherName: 'Shivbalak', Roll: 54541654, fullMarks: 500, passMarks: 150, totalMarks : 405},
{name : 'Karishma', fatherName: 'Madhav', Roll: 78754526, fullMarks: 500, passMarks: 150, totalMarks : 122},
{name : 'Gungun', fatherName: 'Gopal Ray', Roll: 42132075, fullMarks: 500, passMarks: 150, totalMarks : 256},
{name : 'Reshmi', fatherName: 'Bharat Yadav', Roll: 13754557, fullMarks: 500, passMarks: 150, totalMarks : 258},
]

let firstClassStudent = studentsResultData.filter( (student) => {
    return student.totalMarks >= 300 
})

let secondClassStudent = studentsResultData.filter( (student) => {
    return student.totalMarks >= 250 && student.totalMarks < 300
})

let thirdClassStudent = studentsResultData.filter( (student) => {
    return student.totalMarks >= 150 && student.totalMarks < 250
})

let failStudent = studentsResultData.filter( (student) => {
    return student.totalMarks >= 0 && student.totalMarks < 150
})

console.log(firstClassStudent)
/* return
[
  {
    name: 'Ram',
    fatherName: 'Dashrath',
    Roll: 25252525,
    fullMarks: 500,
    passMarks: 150,
    totalMarks: 350
  },
  {
    name: 'Sita',
    fatherName: 'Janak',
    Roll: 54545454,
    fullMarks: 500,
    passMarks: 150,
    totalMarks: 400
  },
  {
    name: 'Ramn',
    fatherName: 'Shivraj',
    Roll: 25221525,
    fullMarks: 500,
    passMarks: 150,
    totalMarks: 350
  },
  {
    name: 'Sohan',
    fatherName: 'Shivbalak',
    Roll: 54541654,
    fullMarks: 500,
    passMarks: 150,
    totalMarks: 405
  }
]
*/

console.log(secondClassStudent)
/* return
[
  {
    name: 'Gungun',
    fatherName: 'Gopal Ray',
    Roll: 42132075,
    fullMarks: 500,
    passMarks: 150,
    totalMarks: 256
  },
  {
    name: 'Reshmi',
    fatherName: 'Bharat Yadav',
    Roll: 13754557,
    fullMarks: 500,
    passMarks: 150,
    totalMarks: 258
  }
]
*/
console.log(thirdClassStudent)
/* return
[
  {
    name: 'Gautam',
    fatherName: 'Suddhodana',
    Roll: 42151575,
    fullMarks: 500,
    passMarks: 150,
    totalMarks: 158
  },
  {
    name: 'Radha',
    fatherName: 'Vrishabhanu',
    Roll: 13254457,
    fullMarks: 500,
    passMarks: 150,
    totalMarks: 248
  }
]
*/
console.log(failStudent)
/* return
[
  {
    name: 'Krishna',
    fatherName: 'Vasudev',
    Roll: 78524126,
    fullMarks: 500,
    passMarks: 150,
    totalMarks: 132
  },
  {
    name: 'Karishma',
    fatherName: 'Madhav',
    Roll: 78754526,
    fullMarks: 500,
    passMarks: 150,
    totalMarks: 122
  }
]
*/

//*************************************************************************************

const bookData = [
        {title: "Book One", genre:"fiction", publish: 1978, edition:'2016'},
        {title: "Book Two", genre:"History", publish: 1977, edition:'2019'},
        {title: "Book Three", genre:"Physics", publish: 1985, edition:'2017'},
        {title: "Book Four", genre:"Biology", publish: 1966, edition:'2023'},
        {title: "Book Five", genre:"Mathematics", publish: 1980, edition:'2021'},
        {title: "Book Six", genre:"Rangoli", publish: 1982, edition:'2014'},
        {title: "Book Seven", genre:"fiction", publish: 1995, edition:'2016'},
        {title: "Book Eight", genre:"History", publish: 1999, edition:'2024'},
        {title: "Book Nine", genre:"Physics", publish: 1997, edition:'2017'},
        {title: "Book Ten", genre:"Biology", publish: 1997, edition:'2015'},
        {title: "Book Eleven", genre:"Mathematics", publish: 1978, edition:'2011'},
        {title: "Book Tweleve", genre:"Rangoli", publish: 1987, edition:'2000'},
    ];

const userbook = bookData.filter( (book) => (book.genre === 'History') )
console.log(userbook)
/* return

[
  {
    title: 'Book Two',
    genre: 'History',
    publish: 1977,
    edition: '2019'
  },
  {
    title: 'Book Eight',
    genre: 'History',
    publish: 1999,
    edition: '2024'
  }
]
*/