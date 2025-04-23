let startButton = document.querySelector('#start')
let stopButton = document.querySelector('#stop')

let datePrintFunction = function(){
    let date = new Date()
    let dateAndTime = date.toLocaleString()
    console.log(dateAndTime)
}

let str = "Current Time"

let interval;

startButton.addEventListener('click', function() {
    console.log('Start Button Clicked')
    interval = setInterval(datePrintFunction, 2000, str)
})

stopButton.addEventListener('click', function() {
    console.log('Stop Button Clicked')
    clearInterval(interval)
})

