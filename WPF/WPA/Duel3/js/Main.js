/**
 * Created by KaseTebo on 2/11/14.
 */


(function(){

    console.log("BEGIN!");



    var player1 = { name:"Kase", health:100, damage: function(){return Math.round((Math.random()*11)+10)}};

    var player2 = { name:"Kratos", health:100, damage: function(){return Math.round((Math.random()*11)+10)}};

    var button = document.querySelector("#fightBtn");

    button.addEventListener("click",onClick);

    var players = [player1,player2];

    var counter = 0;

    var round = document.querySelector("#round");

    var p1 = document.querySelector("#kabal");
    var p2 = document.querySelector("#kratos");









    function onClick(e){
        counter++;
        if (winnerCheck(players) == "no winner"){
            if (counter < 11){
            combat(players);
            }

            p1.innerHTML = players[0].name + ": " + players[0].health;
            p2.innerHTML = players[1].name + ": " + players[1].health;
        }









    function combat(arr){

        arr[1].health-=arr[0].damage();
        arr[0].health-=arr[1].damage();

        if (arr[0].health < 1){
            console.log("You have lost!");
        } else if (arr[1].health < 1){
            console.log("You have won!");
        }

        var  roundSequence = arr[0].name +": "+arr[0].health+" *Round "+counter+" Over* "+ arr[1].name+": "+arr[1].health;
        round.innerHTML = counter;
            console.log(roundSequence);



        }

    }

    function winnerCheck(arr){
        if (arr[0].health < 1){
            console.log("You have lost!");
            round.innerHTML = "You have lost!";
        } else if (arr[1].health < 1){
            console.log("You have won!");
            round.innerHTML = "You have won!";
        } else {
            console.log("no winner");
            return "no winner";
        }

    }


})();