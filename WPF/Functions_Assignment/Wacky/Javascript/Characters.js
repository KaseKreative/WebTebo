/**
 * Created by KaseTebo on 1/29/14.
 */

function statGenerator (player1,player2,player3){
    if (player1=="mage"){return "Mage: "+ characterSheet(player1)+"\n"}
    if (player1=="fighter"){return "Fighter: "+characterSheet(player1)+"\n"}
    if (player1=="rogue"){return "Rogue: "+ characterSheet(player1)+"\n"}
    if (player1=="priest"){return "Priest: "+ characterSheet(player1)+"\n"}
    if(player1=="ranger"){return "Ranger: "+ characterSheet(player1)+"\n"}

    if (player2=="mage"){return "Mage: "+ characterSheet(player2)+"\n"}
    if (player2=="fighter"){return "Fighter: "+ characterSheet(player2)+"\n"}
    if (player2=="rogue"){return "Rogue: "+ characterSheet(player2)+"\n"}
    if (player2=="priest"){return "Priest: "+ characterSheet(player2)+"\n"}
    if (player2=="ranger"){return "Ranger: "+ characterSheet(player2)+"\n"}

    if (player3=="mage"){return "Mage: "+ characterSheet(player3)+"\n"}
    if (player3=="fighter"){return "Fighter: "+ characterSheet(player3)+"\n"}
    if (player3=="rogue"){return "Rogue: "+ characterSheet(player3)+"\n"}
    if (player3=="priest"){return "Priest: "+ characterSheet(player3)+"\n"}
    if(player3=="ranger"){return "Ranger: "+ characterSheet(player3)+"\n"}

    function characterSheet(player){

        Str = Math.round(3*(Math.random()*6));
        Dex = Math.round(3*(Math.random()*6));
        Dmg = Math.round(3*(Math.random()*6))+Str;
        currentMana = 100;
        totalMana= 100;
        Mana = currentMana+"/"+totalMana;
        var stats = "\n"+"Str: "+Str+"\n"+
            "Dex: "+Dex+"\n"+
            "Damage: "+ Dmg+"\n";

        if (player == "mage" || player == "priest"){stats += "Mana: "+ Mana}


        return stats;

    }
}