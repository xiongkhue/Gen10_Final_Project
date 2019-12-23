// JavaScript source code
(function () {
    'use strict';
    window.addEventListener('load', function () {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (document.getElementById("startBet").validity.rangeUnderflow) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
                if (form.checkValidity() === true) {
                    event.preventDefault();
                    event.stopPropagation();
                        play():
                        showResults();
                }
            }, false);
        });
    }, false);
})();

function showResults() {
    document.getElementById("results").style.display = "inline";
    document.getElementById("playButton").innerHTML = "Play Again";
    document.getElementById("startBet").innerHTML = "$" + startBet + ".00";
    document.getElementById("diceRCount").innerHTML = diceRCount;
    document.getElementById("highestAmt").innerHTML = "$" + highestAmt + ".00";
    document.getElementById("highRCount").innerHTML = highRCount;
};

function play() {
    var startBet = document.getElementById("stBet").value;
    var bet = startBet;
    var highestAmt = startBet;
    var diceSum = 0;
    var highRCount = 0;
    var diceRCount = 0;
    while (bet > 0) {
        var dice0 = Math.floor(Math.random() * 6) + 1;
        var dice1 = Math.floor(Math.random() * 6) + 1;
        diceSum = dice0 + dice1;
        diceRCount++;
        if (diceSum != 7) {
            bet -= 1
        } else {
            bet += 4
            if (bet > highestAmt) {
                highestAmt = bet;
                highRCount = diceRCount;
            }
        }
    }
};
