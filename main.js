function yourQuestion() {
    var answer_option = ["yes", "no", "let me think about it", "maybe", "probably yes", "probably not", "ask again", "it's a stupid question if I'm honest"];
    var result = answer_option[Math.floor(Math.random() * answer_option.length)];
    // var audio = new Audio('data/firework.mp3');
    var user_answer = document.getElementById("QUESTION").value
    // document.getElementById("magic8ballquestion").innerHTML = "Your question: " + user_answer;
    document.getElementById("magic8ballanswer").innerHTML = "The ball says: " + result;
    document.getElementById("QUESTION").value="";
    audio.play();
};

function resetQuestion(){
    //when user hit go back button, page resets to default stage
    window.location.reload();
};
