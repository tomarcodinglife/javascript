// Question and Options are stored in an array of objects
const quizData = [
    {
        question: "What is the capital of France?",
        options : {
            a: "Berlin",
            b: "Madrid",
            c: "Paris",
            d: "Rome"
        },
        answer: 2
    }
    ,
    {
        question: "Which planet is known as the Red Planet?",
        options : {
            a: "Earth",
            b: "Mars",
            c: "Jupiter",
            d: "Saturn"
        },
        answer: 1
    },
    {
        question: "What is the largest ocean on Earth?",
        options : {
            a: "Atlantic Ocean",
            b: "Indian Ocean",
            c: "Arctic Ocean",
            d: "Pacific Ocean"
        },
        answer: 3
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        options : {
            a: "Charles Dickens",
            b: "William Shakespeare",
            c: "Mark Twain",
            d: "Jane Austen"
        },
        answer: 1
    }
    ,
    {
        question: "What is the chemical symbol for gold?",
        options : {
            a: "Au",
            b: "Ag",
            c: "Pb",
            d: "Fe"
        },
        answer: 0
    },
    {
        question: "Which gas do plants absorb from the atmosphere?",
        options : {
            a: "Oxygen",
            b: "Carbon Dioxide",
            c: "Nitrogen",
            d: "Hydrogen"
        },
        answer: 1
    }
]

// Selectors for the quiz elements (refrence the HTML elements)
const questionElement = document.getElementById("question");
const optionstag = {
    a   : document.getElementById("option_1"),
    b   : document.getElementById("option_2"),
    c   : document.getElementById("option_3"),
    d   : document.getElementById("option_4")
};
const answertag = document.querySelectorAll(".answer");
// console.log(`answer : ${answer}`);
const submitButton = document.getElementById("submit");
// const resultElement = document.getElementById("result");

let currentQuestion = 0;
let score = 0;


const loadQuiz = () => {
    // deselectAnswers();
    const currentQuizData = quizData[currentQuestion];
    // console.log(currentQuizData); // compleate object
    questionElement.innerText = currentQuizData.question;
    // console.log(currentQuizData.question); // question text
    

    // Dynamically assign options
    const optiondata = Object.keys(currentQuizData.options); // 
    // console.log(optiondata); // ['a', 'b', 'c', 'd']
    

    let i = 0;
    for (const key in optionstag) {
        // console.log(key); // 'a', 'b', 'c', 'd'
        optionstag[key].innerText = currentQuizData.options[key];
        // console.log(currentQuizData.options); // {a: 'Berlin', b: 'Madrid', c: 'Paris', d: 'Rome'}
        
        // Assign custom data-index for answer validation
        answertag[i].setAttribute('data-index', i);  
        i++;
    }
    
}
console.log(answertag); // {a: div#option_1, b: div#option_2, c: div#option_3, d: div#option_4}
console.log(typeof answertag); // object

// Function to deselect all answers
let answer;
const deselectAnswers = () => {
    // answertag.forEach(answer => {
    //     answer.checked = false;
    // });
    i = 0;
    for (const key in answertag) {
        console.log(key); // 'a', 'b', 'c', 'd'
        answertag[key].checked = false;
        // Assign custom data-index for answer validation
        answertag[i].setAttribute('data-index', i);  
        i++;
    }
}


// Function to get the selected answer
const getSelected = () => {
    let selectedIndex = null;
    // answertag.forEach(answer => {
    //     if (answer.checked) {
    //         selectedIndex = parseInt(answer.getAttribute('data-index'));
    //     }
    // });

    let i = 0;
    for (const key in answertag) {
        // console.log(key); // 'a', 'b', 'c', 'd'
        if (answertag[key].checked) {
            selectedIndex = parseInt(answertag[i].getAttribute('data-index')); // parseInt convert string to number
            // console.log(selectedIndex); // 0, 1, 2, 3
        }
        i++;
    }

    return selectedIndex; // return the selected answer index like 0, 1, 2, 3
}

// Function to handle the submit button click
submitButton.addEventListener("click", () => {
    const selected = getSelected();
    // console.log(selected); // selected answer index

    if (selected !== null) {
        if (selected === quizData[currentQuestion].answer) {
            score++;
        }
        currentQuestion++;
        if (currentQuestion < quizData.length) {
            loadQuiz();
            deselectAnswers ();
        } else {
            // Display result
            alert(`You scored ${score} out of ${quizData.length}`);
            // Reset the quiz
            currentQuestion = 0;
            score = 0;
            loadQuiz();
        }
    }
});

// Load initial question



loadQuiz();
