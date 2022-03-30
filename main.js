function yourQuestion() {
    let answerOption = ["yes", "no", "let me think about it", "maybe", "probably yes", "probably not", "ask again", "it's a stupid question if I'm honest"];
    let result = answerOption[Math.floor(Math.random() * answerOption.length)];
    let audio = new Audio('data/firework_sound.mp3');
    document.getElementById("magic8ballanswer").innerHTML = "The ball says: " + result;
    document.getElementById('answer').style.display = "inline";
    document.getElementById('resetbutton').style.display = "inline";
    document.getElementById("question").value="";
    audio.play();
};

function resetQuestion(){
    window.location.reload();
};
