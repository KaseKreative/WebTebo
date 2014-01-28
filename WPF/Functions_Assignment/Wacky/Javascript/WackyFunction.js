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
type = 0;
health = 1;
damage = 2;
dexterity = 3;
strength = 4;

bear = 0;
bat = 1;
yeti = 2;
skeleton = 3;
raccoon = 4;
mudman = 5;

cave = [];
cave[bear] = [];
cave[bat] = [];
cave[yeti] = [];
cave[skeleton] = [];
cave[raccoon] = [];
cave[mudman] = [];




skeleton = 0;
orc = 1;
blob = 2;
skeletonArcher = 3;
zombie = 4;
beholder = 5;

dungeon = [];
dungeon[skeleton] = [];
dungeon[orc] = [];
dungeon[blob] = [];
dungeon[skeletonArcher] = [];
dungeon[zombie] = [];
dungeon[beholder] = [];








orc = 0;
skeleton = 1;
ghost = 2;
dragon = 3;
knight = 4;
king = 5;

castle = [];
castle[orc] = [];
castle[skeleton] = [];
castle[ghost] = [];
castle[dragon] = [];
castle[knight] = [];
castle[king] = [];

function fightGeneration(mission ,dungeon, castle, cave){


}