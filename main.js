import {answers} from "./modules/answers.js"

let submitButton = document.querySelector("#fortunebutton");
let resetTheQuestion = document.querySelector("#resetbutton");

function yourQuestion() {
    let result = answers[Math.floor(Math.random() * answers.length)];
    let audio = new Audio('data/firework_sound.mp3');
    document.getElementById("magic8ballanswer").innerHTML = "The ball says: " + result;
    audio.play();
    setTimeout(function() {
        document.getElementById('answer').style.display = "inline";
        document.getElementById('resetbutton').style.display = "inline";
        document.getElementById("question").value="";
        }, 1000);
    
    
};

function resetQuestion(){
    window.location.reload();
};

submitButton.addEventListener('click', yourQuestion);
resetTheQuestion.addEventListener('click', resetQuestion);
