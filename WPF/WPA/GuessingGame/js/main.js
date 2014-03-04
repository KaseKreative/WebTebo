/**
 * GUESSING GAME:
 *
 * Created By:
 * Date:
 *
 * GUESSING GAME
 */

//Game variables
(function () {

    var button = document.querySelector("#btn");
    button.addEventListener("click", onClick);
    var Input = document.querySelector("#input");
    var text = document.querySelector("#output");

    var randomNumber = Math.round(Math.random() * 9) + 1;
    var counter = 3;
    var guesses = "";


    function onClick(e) {
        counter--;
        winnercheck();



}






        function winnercheck() {
if (counter == -1){text.innerHTML = "Sorry You've Lost";
                   button.removeEventListener("click", onClick)}
            else {

            if (Input.value < randomNumber) {
                text.innerHTML = "Your number is to low! "+ "<br>" + counter + " Guesses remaining";
//
            } else if (Input.value > randomNumber) {
                text.innerHTML = "Your number is to high! "+ "<br>" + counter + " Guesses remaining";
//
            } else if (Input.value == randomNumber) {
                text.innerHTML = "You got the number correct!";
                button.removeEventListener("click", onClick);
            }


        }
        }



})();