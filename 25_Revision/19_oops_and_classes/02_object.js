// 
function squarValue (num){
    this.num = num * num
    // console.log(`${num}, ${this.num}`) 
    return (`${num} and ${this.num}`)
}

squarValue.squar = 2

console.log(squarValue(5)); // 5 and 25
console.log(squarValue.squar); // 2
console.log(squarValue.prototype); // {}

function newBook(BookName, BookPublication, BookAuthor, BookStock, BookPrice){
    this.BookName = BookName
    this.BookPrice = BookPrice
    this.BookPublication = BookPublication
    this.BookAuthor = BookAuthor
    this.BookStock = BookStock
}

newBook.prototype.priceIncrease = function(){
    increasePrice = Math.floor(this.BookPrice*10/100)
    currentBookPrice = this.BookPrice + increasePrice
    console.log(`Previous Price : ${this.BookPrice} and Current Book Price is ${currentBookPrice}`)
}

newBook.prototype.printBook = function(){
    console.log(`Book Name : ${this.BookName}, Book Publication : ${this.BookPublication}, Book Author : ${this.BookAuthor}, Book in Stock: ${this.BookStock} and Book Price : ${this.BookPrice}`);   
}

let JSBook = new newBook ("AI With JavaScript", "Tomar Publication", "Sujit Tomar", 525, 999)
let phpBook = new newBook ("myPHPWorld", "Tomar Publication", "Sujit Tomar", 25, 599)

// console.log(JSBook);
// console.log(phpBook);

JSBook.printBook()

JSBook.priceIncrease()

phpBook.printBook()

phpBook.priceIncrease()







