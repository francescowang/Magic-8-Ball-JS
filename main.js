import {answers} from "./modules/answers.js"

let submitButton = document.querySelector("#fortunebutton");
let resetTheQuestion = document.querySelector("#resetbutton");
let question = document.querySelector("#question");

function yourQuestion() {
    // Initializing variables
    let result = answers[Math.floor(Math.random() * answers.length)];
    let audio1 = new Audio('data/firework_sound.mp3');
    let audio2 = new Audio('data/Tada-sound.mp3');
    // To show the asnwer with audio and delay
    document.getElementById("magic8ballanswer").innerHTML = "The ball says: " + result;
    audio1.play();
    setTimeout(function() {
        document.getElementById('answer').style.display = "inline";
        audio2.play();
        }, 1200);
    // To diable input and submit button after showing asnwer
    setTimeout(function() {
        document.getElementById('resetbutton').style.display = "inline";
        document.getElementById("fortunebutton").disabled = true;
        document.getElementById("question").disabled = true;
        }, 2500);
   
};

// To reset after showing answer
function resetQuestion(){
    window.location.reload();
};

function EnableDisable() {
    //Verify the TextBox value.
    if (question.value.trim() != "") {
        //Enable the TextBox when TextBox has value.
        submitButton.disabled = false;
    } else {
        //Disable the TextBox when TextBox is empty.
        submitButton.disabled = true;
    }
};

// To call the fuctions after appropriate events
submitButton.addEventListener('click', yourQuestion);
resetTheQuestion.addEventListener('click', resetQuestion);
question.addEventListener('keyup', EnableDisable);
