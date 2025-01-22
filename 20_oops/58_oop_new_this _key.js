console.log("Hi")

function createUser(item, price) {
    this.item = item
    this.price = price
};


createUser.prototype.increment = function(){
    console.log(this.price++)
};

createUser.prototype.print = function(){
    console.log(`price is ${this.price}`) 
};

const mango = new createUser("mango", 60) //new is required when you call self made methods
const guava = new createUser("guava", 80) //new is required when you call self made methods

mango.print() //price is 60
guava.print() //price is 80
console.log(mango.increment(60)) // 60
console.log(guava.increment(80)) // 80