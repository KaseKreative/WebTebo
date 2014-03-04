/**
 * Created by KaseTebo on 2/3/14.
 */

var player = "";
var opponent = "";

function InitRoll(player, opponent){
    var roll = "";

    for (InitRoller=0;InitRoller<2;InitRoller++){

        var randomNumber =Math.round(Math.random()*6);
         if (randomNumber == 0){
            while (randomNumber == 0){randomNumber =Math.round(Math.random()*6);}
            }

    // console.log(randomNumber);

        if (InitRoller == 0){
            player = randomNumber
        } else  {
            opponent = randomNumber
        }
    }

    if (player >= opponent){
        // If 1 Player will attack first
        roll = 1;
    } else {
        // If 2 Monster will attack first
        roll = 2;
    }

return roll;

}

console.log(InitRoll(player,opponent));

