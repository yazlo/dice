<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Online Dice Roller!</title>
        <script src="jquery-1.11.2.min.js"></script>
        <script src="script.js"></script>
        <link rel="stylesheet" type="text/css" href="style.css">
    </head>
    <body>
       <div id="wrapper">
        <div id="options">
            <form>
                <p>Amount of dice:</p>
                <br>
                <input type="radio" class="radBtn" name="number" value="1">1 die<br>
                <input type="radio" class="radBtn" name="number" value="2">2 dice<br>
                <input type="radio" class="radBtn" name="number" value="3">3 dice<br>
                <input class="formBtn" type="submit" name="roll" value="Roll!">
            </form>
        </div>
        </div>
    </body>
</html>
