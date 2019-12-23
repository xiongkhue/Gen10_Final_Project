// JavaScript source code
(function () {
    document.getElementById("results").style.display = "none";
    'use strict';
    window.addEventListener('load', function () {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                    window.alert("Must enter a starting bet more than 0");
                }
                if (form.checkValidity() === true) {
                    if (document.getElementById("stBet").value <= 0) {
                        event.preventDefault();
                        event.stopPropagation();
                        window.alert("Must enter a starting bet more than 0");
                    }
                    else {
                        event.preventDefault();
                        event.stopPropagation();
                        play();
                    }
                }
            }, false);
        });
    }, false);
})();


function play() {
    var startBet = document.getElementById("stBet").value;;
    var bet = parseInt(startBet);
    var dice0 = 0;
    var dice1 = 0;
    var highestAmt = 0;
    var diceSum = 0;
    var highRollCount = 0;
    var diceRollCount = 0;

    while (bet > 0) {
        var dice0 = Math.floor(Math.random() * 6) + 1;
        var dice1 = Math.floor(Math.random() * 6) + 1;
        diceSum = dice0 + dice1;
        diceRollCount++;
        if (diceSum != 7) {
            bet -= 1
        } else {
            bet = bet + 4;
            if (bet > highestAmt) {
                highestAmt = bet;
                highRollCount = diceRollCount;
            }
        }
    }
    function showResults() {
        document.getElementById("results").style.display = "inline";
        document.getElementById("playbtn").innerHTML = "Play Again";
        document.getElementById("startingBet").innerHTML = startBet;
        document.getElementById("diceRCount").innerHTML = diceRollCount;
        document.getElementById("highestAmount").innerHTML = highestAmt;
        document.getElementById("highRCount").innerHTML = highRollCount;
    };
    showResults();
};