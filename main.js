function yourQuestion() {
    let answerOption = ["yes", "no", "let me think about it", "maybe", "probably yes", "probably not", "ask again", "it's a stupid question if I'm honest"];
    let result = answerOption[Math.floor(Math.random() * answerOption.length)];
    var audio = new Audio('data/firework_sound.mp3');
    let userAnswer = document.getElementById("QUESTION").value
    // document.getElementById("magic8ballquestion").innerHTML = "Your question: " + user_answer;
    document.getElementById("magic8ballanswer").innerHTML = "The ball says: " + result;
    document.getElementById("QUESTION").value="";
    audio.play();
};

function resetQuestion(){
    //when user hit go back button, page resets to default stage
    window.location.reload();
};
