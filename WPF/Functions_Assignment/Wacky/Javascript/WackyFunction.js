/**
 * Created by KaseTebo on 1/27/14.
 */



var PlayersTeam= "";
var mission = prompt("Cave, Dungeon or Castle").toLowerCase();

function Team(playersTeam){
var whileCounter = 0;

    while (whileCounter < 3){
    whileCounter++;



    var Team= prompt("Who do you want on your team? (One at a time) \n" + "Mage, Rogue, Fighter, Priest, Ranger").toLowerCase();



        if (whileCounter==1){
        player1= Team;
    } else if (whileCounter==2){
        player2=Team;
    } else {
        player3=Team;
    }




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







    function statGenerator (player1,player2,player3){
        var Player1 = "";
        var Player2 = "";
        var Player3 = "";

        if (player1=="mage"){Player1 ="\n"+"Mage: "+ characterSheet(player1)+"\n"}
        if (player1=="fighter"){ Player1 ="\n"+"Fighter: "+characterSheet(player1)+"\n"}
        if (player1=="rogue"){ Player1 ="\n"+"Rogue: "+ characterSheet(player1)+"\n"}
        if (player1=="priest"){ Player1 ="\n"+"Priest: "+ characterSheet(player1)+"\n"}
        if(player1=="ranger"){ Player1 ="\n"+"Ranger: "+ characterSheet(player1)+"\n"}

        if (player2=="mage"){ Player2 = "Mage: "+ characterSheet(player2)+"\n"}
        if (player2=="fighter"){ Player2 ="Fighter: "+ characterSheet(player2)+"\n"}
        if (player2=="rogue"){ Player2 ="Rogue: "+ characterSheet(player2)+"\n"}
        if (player2=="priest"){ Player2 = "Priest: "+ characterSheet(player2)+"\n"}
        if (player2=="ranger"){ Player2 ="Ranger: "+ characterSheet(player2)+"\n"}

        if (player3=="mage"){ Player3 = "Mage: "+ characterSheet(player3)+"\n"}
        if (player3=="fighter"){ Player3 = "Fighter: "+ characterSheet(player3)+"\n"}
        if (player3=="rogue"){ Player3 ="Rogue: "+ characterSheet(player3)+"\n"}
        if (player3=="priest"){ Player3 = "Priest: "+ characterSheet(player3)+"\n"}
        if(player3=="ranger"){ Player3 = "Ranger: "+ characterSheet(player3)+"\n"}

        function characterSheet(player){

            Str = Math.round(3*(Math.random()*6));
            Dex = Math.round(3*(Math.random()*6));
            Dmg = Math.round(3*(Math.random()*6))+Str;
            currentMana = 100;
            totalMana= 100;
            Mana = currentMana+"/"+totalMana;
            var stats = "\n"+
                "Str: "+Str+"\n"+
                "Dex: "+Dex+"\n"+
                "Damage: "+ Dmg+"\n";

            if (player == "mage" || player == "priest"){stats += "Mana: "+ Mana+"\n"}


            return stats;

        }

        return Player1 + Player2 + Player3
    }



//    return playersTeam

    return playersTeam + statGenerator(player1,player2,player3);













}


console.log("Your team consists of a "+ Team(PlayersTeam));
console.log();
console.log(mission+":");


































function caveMonsters(cave){
    bear1 = .05; // 0 - .05 = .05
    yeti1 = .13; // .05 - .13   = .08
    mudman1 = .3; // .13 - .3 = .27
    skeleton1 = .65; // .3 - .65
    bat1 = 1; //  // .65 - 1

    var monstersTeam = "";
    var monsterStats= "";

    var counter = 0;
    for (MonsterGen=0;MonsterGen<3;MonsterGen++){

if (counter == 1){monstersTeam+= "a "} else if(counter == 2){monstersTeam+="and a "}

    var randomNumber = Math.random();
        if (randomNumber<bear1){
            monstersTeam+= cave[bear][type]+", ";
            monsterStats+= "Bear: "+"\n"+
                           "Str: "+cave[bear][strength] +"\n"+
                           "Dex: "+cave[bear][dexterity] +"\n"+
                           "Health: "+cave[bear][health]+"\n"+
                           "Damage: "+cave[bear][damage]+"\n\n";
        } else if (randomNumber>bear1 && randomNumber<yeti1){
            monstersTeam+= cave[yeti][type]+", ";
            monsterStats+= "Yeti: "+"\n"+
                           "Str: "+cave[yeti][strength] +"\n"+
                           "Dex: "+cave[yeti][dexterity] +"\n"+
                           "Health: "+cave[yeti][health]+"\n"+
                           "Damage: "+cave[yeti][damage]+"\n\n";
        } else if (randomNumber>yeti1 && randomNumber<mudman1){
            monstersTeam+= cave[mudman][type]+", ";
            monsterStats+= "Mudman:"+"\n"+
                           "Str: "+cave[mudman][strength] +"\n"+
                           "Dex: "+cave[mudman][dexterity] +"\n"+
                           "Health: "+cave[mudman][health]+"\n"+
                           "Damage: "+cave[mudman][damage]+"\n\n";
        } else if (randomNumber>mudman1 && randomNumber<skeleton1){
            monstersTeam+= cave[skeleton][type]+", ";
            monsterStats+= "Skeleton:"+"\n"+
                           "Str: "+cave[skeleton][strength] +"\n"+
                           "Dex: "+cave[skeleton][dexterity] +"\n"+
                           "Health: "+cave[skeleton][health]+"\n"+
                           "Damage: "+cave[skeleton][damage]+"\n\n";
        } else {
            monstersTeam+= cave[bat][type]+", ";
            monsterStats+= "Bat: "+"\n"+
                           "Str: "+cave[bat][strength] +"\n"+
                           "Dex: "+cave[bat][dexterity] +"\n"+
                           "Health: "+cave[bat][health]+"\n"+
                           "Damage: "+cave[bat][damage]+"\n\n";
        }



        counter++
    }
    monstersTeam+= "\n";
    return monstersTeam+ "\n" +
           monsterStats;

}








function dungeonMonster(dungeon){
    beholder1 = .05; // 0 - .05 = .05
    blob1 = .13; // .05 - .13   = .08
    zombie1 = .3; // .13 - .3 = .27
    skeleton1 = .65; // .3 - .65
    orc1 = 1; //  // .65 - 1

    var monstersTeam = "";
    var monsterStats= "";

    var counter = 0;
    for (MonsterGen=0;MonsterGen<3;MonsterGen++){

        if (counter == 1){monstersTeam+= "a "} else if(counter == 2){monstersTeam+="and a "}

        var randomNumber = Math.random();
        if (randomNumber<beholder1){
            monstersTeam+= dungeon[beholder][type]+", ";
            monsterStats+= "Beholder: "+"\n"+
                "Str: "+dungeon[beholder][strength] +"\n"+
                "Dex: "+dungeon[beholder][dexterity] +"\n"+
                "Health: "+dungeon[beholder][health]+"\n"+
                "Damage: "+dungeon[beholder][damage]+"\n\n";
        } else if (randomNumber>beholder1 && randomNumber<blob1){
            monstersTeam+= dungeon[blob][type]+", ";
            monsterStats+= "Blob: "+"\n"+
                "Str: "+dungeon[blob][strength] +"\n"+
                "Dex: "+dungeon[blob][dexterity] +"\n"+
                "Health: "+dungeon[blob][health]+"\n"+
                "Damage: "+dungeon[blob][damage]+"\n\n";
        } else if (randomNumber>blob1 && randomNumber<zombie1){
            monstersTeam+= dungeon[zombie][type]+", ";
            monsterStats+= "Zombie:"+"\n"+
                "Str: "+dungeon[zombie][strength] +"\n"+
                "Dex: "+dungeon[zombie][dexterity] +"\n"+
                "Health: "+dungeon[zombie][health]+"\n"+
                "Damage: "+dungeon[zombie][damage]+"\n\n";
        } else if (randomNumber>zombie1 && randomNumber<skeleton1){
            monstersTeam+= dungeon[skeleton][type]+", ";
            monsterStats+= "Skeleton:"+"\n"+
                "Str: "+dungeon[skeleton][strength] +"\n"+
                "Dex: "+dungeon[skeleton][dexterity] +"\n"+
                "Health: "+dungeon[skeleton][health]+"\n"+
                "Damage: "+dungeon[skeleton][damage]+"\n\n";
        } else {
            monstersTeam+= dungeon[orc][type]+", ";
            monsterStats+= "Orc: "+"\n"+
                "Str: "+dungeon[orc][strength] +"\n"+
                "Dex: "+dungeon[orc][dexterity] +"\n"+
                "Health: "+dungeon[orc][health]+"\n"+
                "Damage: "+dungeon[orc][damage]+"\n\n";
        }



        counter++
    }
    monstersTeam+= "\n";
    return monstersTeam+ "\n" +
        monsterStats;

}





function castleMonsters(castle){
    dragon1 = .05; // 0 - .05 = .05
    king1 = .13; // .05 - .13   = .08
    knight1 = .3; // .13 - .3 = .27
    ghost1 = .65; // .3 - .65
    orc1 = 1; //  // .65 - 1

    var monstersTeam = "";
    var monsterStats= "";

    var counter = 0;
    for (MonsterGen=0;MonsterGen<3;MonsterGen++){

        if (counter == 1){monstersTeam+= "a "} else if(counter == 2){monstersTeam+="and a "}

        var randomNumber = Math.random();
        if (randomNumber<dragon1){
            monstersTeam+= castle[dragon][type]+", ";
            monsterStats+= "Dragon: "+"\n"+
                "Str: "+castle[dragon][strength] +"\n"+
                "Dex: "+castle[dragon][dexterity] +"\n"+
                "Health: "+castle[dragon][health]+"\n"+
                "Damage: "+castle[dragon][damage]+"\n\n";
        } else if (randomNumber>dragon1 && randomNumber<king1){
            monstersTeam+= castle[king][type]+", ";
            monsterStats+= "King: "+"\n"+
                "Str: "+castle[king][strength] +"\n"+
                "Dex: "+castle[king][dexterity] +"\n"+
                "Health: "+castle[king][health]+"\n"+
                "Damage: "+castle[king][damage]+"\n\n";
        } else if (randomNumber>king1 && randomNumber<knight1){
            monstersTeam+= castle[knight][type]+", ";
            monsterStats+= "Knight:"+"\n"+
                "Str: "+castle[knight][strength] +"\n"+
                "Dex: "+castle[knight][dexterity] +"\n"+
                "Health: "+castle[knight][health]+"\n"+
                "Damage: "+castle[knight][damage]+"\n\n";
        } else if (randomNumber>knight1 && randomNumber<ghost1){
            monstersTeam+= castle[ghost][type]+", ";
            monsterStats+= "Ghost:"+"\n"+
                "Str: "+castle[ghost][strength] +"\n"+
                "Dex: "+castle[ghost][dexterity] +"\n"+
                "Health: "+castle[ghost][health]+"\n"+
                "Damage: "+castle[ghost][damage]+"\n\n";
        } else {
            monstersTeam+= castle[orc][type]+", ";
            monsterStats+= "Orc: "+"\n"+
                "Str: "+castle[orc][strength] +"\n"+
                "Dex: "+castle[orc][dexterity] +"\n"+
                "Health: "+castle[orc][health]+"\n"+
                "Damage: "+castle[orc][damage]+"\n\n";
        }



        counter++
    }
    monstersTeam+= "\n";
    return monstersTeam+ "\n" +
        monsterStats;

}







if (mission == "cave"){
    console.log("You have encountered a "+ caveMonsters(cave));
} else if (mission == "dungeon"){
    console.log("You have encountered a "+ dungeonMonster(dungeon));
} else if (mission == "castle"){
    console.log("You have encountered a "+ castleMonsters(castle));
} else {
    console.log("");
}