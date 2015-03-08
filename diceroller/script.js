$(document).ready(function() {
    addListener();
    function addListener() {
        //Skicka form när knappen trycks
        $(".formBtn").click(function() {
            $('form').submit(function(event) {
                event.preventDefault();
            });
        });
    }
    
    function rollDice() {

    }
    ;
    function getData() {

    }
    function calcSum(diceAmount, diceOne, diceTwo, diceThree){

    }
});



