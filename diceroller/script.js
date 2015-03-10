$(document).ready(function() {
    addListener();
    function addListener() {
        //Skicka form när knappen trycks
        $(".formBtn").click(function() {
            console.log("Jag funkar!");
            getData();
            rollDice(nrDice);
        });

        $('form').submit(function(event) {
            event.preventDefault();
        });

    }

    function rollDice(nrDice) {
        console.log(nrDice);
        var numbers = [];
        for (var i = 0; i < nrDice; i++) {
            numbers[i] = Math.floor((Math.random() * 6) + 1);
        }
        console.log(numbers);
        return(numbers);
    }
    ;
    function getData() { 
        var nrDice = 3;
        return(nrDice);
    }
    function calcSum(diceAmount, diceOne, diceTwo, diceThree) {

    }
});