let fName = "Sujit   "
let lName = "Tomar"

let vegetable = ["Potato", "Capsicum", "Lady Finger", "Onion"]

let vegetablePrice = {
    patato : 40,
    Capsicum : 50,
    LadyFinger : 40,
    Onion : 60,

    getPrice: function(){
        console.log(`Capsicum Price is ${this.Capsicum}`)
    }
}


// I want to create selfMade Method for Object because everything in JS are object so if i give to power in object than my method are available in everywhere like array, function, object, string everywhere.

// i create a self made method sujittomar
Object.prototype.sujittomar = function(){
    console.log("Sujit Tomar Available Here");
}


// Now i can use the method 
vegetablePrice.sujittomar() // Sujit Tomar Available Here
fName.sujittomar() // Sujit Tomar Available Here
vegetable.sujittomar() // Sujit Tomar Available Here


// Now i can give a self made function for array
Array.prototype.tomar = ()=>{
    console.log("Tomar is a title of sujit");
}

// now i can use the array self made method
vegetable.tomar() //  Tomar is a title of sujit
/* vegetablePrice.tomar() // Error here because it is object but this method onle give to array */


