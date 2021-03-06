$(document).ready(function(){
    var numOne = "";
    var numTwo = "";
    var correctScore = 0;
    var wrongScore = 0;
    $(document).keypress(function(e){
        if (e.which === 13) { //13 is the enter key
            checkProblem();
        }
    })

    function randomNum () {
        return Math.floor(Math.random()*10);
    }

    function newProblem () {
        numOne = randomNum();
        numTwo = randomNum();
        $(".numberOne").html(numOne);
        $(".numberTwo").html(numTwo);
    }
    
    function checkProblem () {
        var rightAnswer = numOne + numTwo;
        var inputAnswer = $("#input").val();
        if (Number.parseFloat(inputAnswer) === rightAnswer) {
            correctScore++;
            $("#correctSpan").html(correctScore);
        } else {
            wrongScore++;
            $("#wrongSpan").html(wrongScore);
            alert("Wrong! Review " + numOne + " + " + numTwo + "!");
        }
        newProblem();
        $("#input").val("");
    }

    function startTimer(duration, display) {
        var timer = duration
        var minutes;
        var seconds;
        setInterval(function () {
            minutes = parseInt(timer / 60);
            seconds = parseInt(timer % 60);
    
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
    
            display.text(minutes + ":" + seconds);
    
            if (--timer < 0) {
                var confirmed = confirm("Time's up!");
                if (confirmed === true) {
                    location.reload();
                } else {
                    location.reload();
                }
            }
        }, 1000);
    }
    
    jQuery(function ($) {
        var timerTime = 60;
            display = $('#time');
        display.html(timerTime);
        startTimer(timerTime, display);
    });
    
    newProblem();
})