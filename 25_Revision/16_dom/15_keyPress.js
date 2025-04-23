
let key = document.querySelector('#keypress')
let code = document.querySelector('#code')
let keyCode = document.querySelector('#keyCode')    

// window.addEventListener('keypress', function(event) {
//     console.log(event)
//     key.innerHTML = event.key
//     code.innerHTML = event.code
//     keyCode.innerHTML = event.keyCode
// })

window.addEventListener('keydown', (e) => {
    console.log(e)
    key.innerHTML = e.key
    code.innerHTML = e.code
    keyCode.innerHTML = e.keyCode
})
