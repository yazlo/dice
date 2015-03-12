$(document).ready(function() {
    addListener();
    function addListener() {
        //Skicka form när knappen trycks
        $(".formBtn").click(function() {
            var numbers = rollDice(getData());
            write(numbers);
        });

        $('form').submit(function(event) {
            event.preventDefault();
        });

    }

    function rollDice(nrDice) {
        var numbers = [];
        for (var i = 0; i < nrDice; i++) {
            numbers[i] = Math.floor((Math.random() * 6) + 1);
        }
        return(numbers);
    }
    ;
    function getData() {
        var nrDice = $(".radBtn:checked").val();
        return(nrDice);
    }
    function calcSum(diceAmount, diceOne, diceTwo, diceThree) {

    }
    function write(numbers) {
        $(".box,.sum").remove();
        $.each(numbers, function(index, value) {
            $("#wrapper").append(
                    "<div class='box'>" + value + "</div>"
                    );
        });
        var total = 0;
        for (var i = 0; i < numbers.length; i++) {
            total += numbers[i] << 0;
        }
        $("#wrapper").append(
                "<p class='sum none'>Summa:</p><div class='dice sum'>" + total + "</div>"
                );
    }
});