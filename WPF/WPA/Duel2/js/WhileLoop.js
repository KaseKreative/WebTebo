/**
 * Created by KaseTebo on 2/4/14.
 */

var playerOne = "Spiderman";
var playerTwo = "Batman";

var playerOneHealth= 100;
var playerTwoHealth= 100;

var playerOneDmg = Math.round((Math.random()*25)+25);
var playerTwoDmg = Math.round((Math.random()*25)+25);


function combat(health1,health2, player1, player2){
    healthOne = health1;
    healthTwo = health2;
var i = 1;
whileLoop = true;

   while ( whileLoop){

        var playerOneDmg = Math.round((Math.random()*25)+25);
        var playerTwoDmg = Math.round((Math.random()*25)+25);

         healthOne -= playerTwoDmg;
         healthTwo -= playerOneDmg;


       if (healthOne <= 0){
            alert("Winner!: "+player2);
           console.log("Winner!: "+player2);
           whileLoop = false;
       } else if (healthTwo <= 0){
           alert("Winner!: "+playerOne);
           console.log("Winner!: "+player1);
           whileLoop = false;
       } else {
           alert(player1+":"+healthOne+" *Round "+i+" Over* "+player2+": "+healthTwo);
       }







i++;

console.log(player1+":"+healthOne+" *Round "+i+" Over* "+player2+": "+healthTwo)
       console.log()
    }

}

console.log(combat(playerOneHealth,playerTwoHealth,playerOne,playerTwo));