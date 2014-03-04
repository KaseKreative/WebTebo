/**
 * Created by KaseTebo on 2/6/14.
 */

(function(){

   console.log("BEGIN!");

    var playerOne = "Spiderman";
    var playerTwo = "Batman";

    var playerOneHealth= 100;
    var playerTwoHealth= 100;



    function combat(){
        alert(playerOne+": "+playerOneHealth+" *BEGIN* "+playerTwo+": "+playerTwoHealth);
        for (var i = 1; i < 11; i++){
        var playerOneDmg = ~~(Math.random()*11+10);
        var playerTwoDmg = ~~(Math.random()*11+10);
        playerOneHealth -= playerTwoDmg;
        playerTwoHealth -= playerOneDmg;

        alert(playerOne+": "+playerOneHealth+" *Round "+i+" Over* "+ playerTwo + ": "+playerTwoHealth);
            console.log(playerOne+": "+playerOneHealth+" *Round "+i+" Over* "+ playerTwo + ": "+playerTwoHealth);


             if (playerOneHealth <= 0 && playerTwoHealth <= 0) {
                alert("You Both Die..");
                console.log("You Both Die..");
                 break
                    } else if (playerOneHealth <= 0 ){
                    alert("Winner!: "+playerTwo);
                    console.log("Winner!: "+playerTwo);
                    break
                    } else if (playerTwoHealth <= 0){
                    alert("Winner!: "+playerOne);
                    console.log("Winner!: "+playerOne);
                    break
            }
        }
    }

 combat();


})();