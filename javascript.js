var playing = false;
var score;
var timeremaining;
var action;

// Check game is start or reset
document.getElementById("startreset").onclick = function(){
// if playing
    if(playing == true){
        location.reload();
    }else{
        playing = true;
        score = 0;
        document.getElementById("scorevalue").innerHTML = score;
    
        // Time counter
        show("timeremaining");
        timeremaining = 12;
        document.getElementById("timeremainingvalue").innerHTML = timeremaining;


        hide("gameover");

        document.getElementById("startreset").innerHTML = "Reset Game";

 // start countdown
        startCountdown();

    }
}

function startCountdown(){
    action = setInterval(function(){
        timeremaining -=1;
        document.getElementById("timeremainingvalue").innerHTML = timeremaining;
        if(timeremaining == 0){

            stopCountdown();
           
            show("gameover");

            document.getElementById("gameover").innerHTML = "<p>Game Over!</p> <p>Your Score is" + score +  "</p>";


            hide("timeremaining");


        }
    }, 1000);
}
function stopCountdown(){
    clearInterval(action);
}
//hide an element

function hide(Id) {
    document.getElementById(Id).style.display = "none";
}

//show an element

function show(Id) {
    document.getElementById(Id).style.display = "block";
}
