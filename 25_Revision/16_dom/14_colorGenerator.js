
const randomColor = function() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

let startButton = document.querySelector('#start')
let stopButton = document.querySelector('#stop')
let body = document.querySelector('#body')

let interval;

// if (!interval){

// }

startButton.addEventListener('click', function() {
    console.log('Start Button Clicked')
    interval = setInterval(function() {
        body.style.backgroundColor = randomColor()
    }, 2000)
})

stopButton.addEventListener('click', function() {
    console.log('Stop Button Clicked')
    clearInterval(interval)
    interval = null
})

