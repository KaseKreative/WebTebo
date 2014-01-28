/**
 * Created by KaseTebo on 1/27/14.
 */



var PlayersTeam= "";

function Team(playersTeam){
var whileCounter = 1;

    while (whileCounter <= 3){
    whileCounter++;

    var Team= prompt("Who do you want on your team? (One at a time) \n" + "Mage, Rogue, Fighter, Priest, Ranger").toLowerCase();

    if (Team == "mage"){
        playersTeam+= "Mage, ";
    } else if (Team == "rogue"){
        playersTeam+= "Rogue, "
    } else if (Team == "fighter") {
        playersTeam+= "Fighter, "
    } else if (Team == "priest"){
        playersTeam+= "Priest, "
    } else if (Team == "ranger"){
        playersTeam+= "Ranger, "
    } else {
        console.log("");
    }

    }
return playersTeam ;
}

console.log("Your team consists of a "+ Team(PlayersTeam));

var mission = prompt("Cave, Dungeon or Castle");





function fightGeneration(mission ,dungeon, castle, cave){


}