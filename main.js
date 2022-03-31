import {answers} from "./modules/answers.js"

let submitButton = document.querySelector("#fortunebutton");
let resetTheQuestion = document.querySelector("#resetbutton");

function yourQuestion() {
    let result = answers[Math.floor(Math.random() * answers.length)];
    let audio1 = new Audio('data/firework_sound.mp3');
    let audio2 = new Audio('data/Tada-sound.mp3');
    document.getElementById("magic8ballanswer").innerHTML = "The ball says: " + result;
    audio1.play();
    setTimeout(function() {
        document.getElementById('answer').style.display = "inline";
        audio2.play();
        }, 1200);
    setTimeout(function() {
        document.getElementById('resetbutton').style.display = "inline";
        }, 2000);
       
};

function resetQuestion(){
    window.location.reload();
};


submitButton.addEventListener('click', yourQuestion);
resetTheQuestion.addEventListener('click', resetQuestion);
