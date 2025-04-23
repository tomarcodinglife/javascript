    // Sync and Async
    let button01 = document.querySelector('#btn01');
    let button02 = document.querySelector('#btn02');
    let button = document.querySelector('.button');

    let namePrint = function(name) {
        return(name);
    }

    let timeOutFun;


    button01.addEventListener('click', function() {
        console.log('Start Button Clicked');
        timeOutFun =  setTimeout(function() {
            console.log(namePrint('Sujit'));
        }, 2000);

    });

    button02.addEventListener('click', function() {
        console.log('Stop Button Clicked');
        clearTimeout(timeOutFun);
    });

    // setTimeout is an asynchronous function, it will not block the execution of the code.
    // The code inside setTimeout will be executed after 2 seconds, but the code after setTimeout will be executed immediately.
