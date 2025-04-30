function squarValue (num){
    this.num = num * num
    console.log(num) // 5
    console.log(this.num) // 25
    return this.num
}

squarValue(5)

