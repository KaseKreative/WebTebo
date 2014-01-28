/**
 * Created by KaseTebo on 1/27/14.
 */


var promptcharacterClass= prompt("Which class would you like to be?"+"\n"+"Mage, Fighter, Ranger");
var characterClass= promptcharacterClass.toLowerCase();



var str = 0;
var dex = 1;
var con = 2;
var cha = 3;
var wis = 4;
var int = 5;

min = 3;
max = 18;

var classMin= 15;
var classMax= 12;


var health= 100;
var mana= 100;
var currentHealth=Math.floor(health*Math.random());
var currentMana= Math.floor(mana*Math.random());
var experience=0;



var characterSheet= [];

//characterSheet[str]=Math.floor((max-min)*Math.random()+min);
//characterSheet[dex]=Math.floor((max-min)*Math.random()+min);
//characterSheet[con]=Math.floor((max-min)*Math.random()+min);
//characterSheet[cha]=Math.floor((max-min)*Math.random()+min);
//characterSheet[wis]=Math.floor((max-min)*Math.random()+min);
//characterSheet[int]=Math.floor((max-min)*Math.random()+min);


// var characterStats =
//    "Str: " + characterSheet[str] + "\t \t" + "HP: " +currentHealth+"/"+health + "\n" +
//    "Dex: " + characterSheet[dex] + "\n" +
//    "Con: " + characterSheet[con] + "\t \t" + "Exp: " + experience + "\n" +
//    "Cha: " + characterSheet[cha] + "\n" +
//    "Wis: " + characterSheet[wis] + "\n" +
//    "Int: " + characterSheet[int] + "\n";

//console.log(characterStats);




if (characterClass == "mage"){
    characterSheet[str]=Math.floor((classMax-min)*Math.random()+min);
    characterSheet[dex]=Math.floor((max-min)*Math.random()+min);
    characterSheet[con]=Math.floor((classMax-min)*Math.random()+min);
    characterSheet[cha]=Math.floor((max-min)*Math.random()+min);
    characterSheet[wis]=Math.floor((max-classMin)*Math.random()+classMin);
    characterSheet[int]=Math.floor((max-classMin)*Math.random()+classMin);
    mana += Math.floor(characterSheet[int]*Math.random()+ characterSheet[int]);
} else if (characterClass == "fighter"){
    characterSheet[str]=Math.floor((max-classMin)*Math.random()+classMin);
    characterSheet[dex]=Math.floor((max-min)*Math.random()+min);
    characterSheet[con]=Math.floor((max-classMin)*Math.random()+classMin);
    characterSheet[cha]=Math.floor((max-min)*Math.random()+min);
    characterSheet[wis]=Math.floor((classMax-min)*Math.random()+min);
    characterSheet[int]=Math.floor((classMax-min)*Math.random()+min);
    health += Math.floor(health*Math.random() + con);
} else if (characterClass == "ranger") {
    characterSheet[str]=Math.floor((classMax-min)*Math.random()+min);
    characterSheet[dex]=Math.floor((max-classMin)*Math.random()+classMin);
    characterSheet[con]=Math.floor((classMax-min)*Math.random()+min);
    characterSheet[cha]=Math.floor((max-classMin)*Math.random()+classMin);
    characterSheet[wis]=Math.floor((max-min)*Math.random()+min);
    characterSheet[int]=Math.floor((classMax-min)*Math.random()+min);
}






// Current Mana





if (characterClass == "mage"){
    characterStats =
        "Str: " + characterSheet[str] + "\t \t" + "HP: " +currentHealth+"/"+health + "\n" +
            "Dex: " + characterSheet[dex] + "\t \t" + "Mana: "+currentMana+"/"+mana+ "\n" +
            "Con: " + characterSheet[con] + "\t \t" + "Exp: " + experience + "\n" +
            "Cha: " + characterSheet[cha] + "\n" +
            "Wis: " + characterSheet[wis] + "\n" +
            "Int: " + characterSheet[int] + "\n" ;
} else {
    characterStats =
        "Str: " + characterSheet[str] + "\t \t" + "HP: " +currentHealth+"/"+health + "\n" +
            "Dex: " + characterSheet[dex] + "\n" +
            "Con: " + characterSheet[con] + "\t \t" + "Exp: " + experience + "\n" +
            "Cha: " + characterSheet[cha] + "\n" +
            "Wis: " + characterSheet[wis] + "\n" +
            "Int: " + characterSheet[int] + "\n" ;

}



// 1 2 3 / 4 5 / 6 7 / 8 9 / 10 11 / 12 13 / 14 15 / 16 17 / 18
//  -4     -3    -2    -1     +0      +1      +2      +3     +4

// Start of Combat
// Initiative roll 1 - 20 + Dexterity(Who ever's is higher goes first)
// Does the character go first? (Yes, No)
// Yes - Player starts combat
// No - Start monster combat

// Player Combat
// Punch in face sequence
//D20 + Str Modifier - Dex of Opponent > Armor Class
//Calculate Dmg : D6 + Str Modifier
//Asses enemies current hit points
//Are enemies hitpoints =< 0
            // Experience Process
//If Hitpoints > 0 Enemies turn

//Monster Combat Sequence
//Punch in Face sequence
//D20 + Str Modifier - Dex of Player > Armor Class
// Calculate  Dmg : D6 + Str Modifier
//Assess players Health
    // Death Sequence

// Face punch Function
//function facePunch(str, Dex, Ac){
//    if(Math.Floor((Math.Random()*20)+str - Dex) > AC){
//    return 1; }
//else {
//    return 0; }
//
//}

//Death
// Death Screen : "You have died"
//Win
// Experience
//Monster killed has experience stat
//Experience += Monster Experience
// calculate if we cross in another bucket
    // If no: Nothing
    // Level up if yes
//

// function(statsPlayer, MonsterArray)
    // while (monsterHP > 0 && PlayerHP > 0){
// if(InitiativePlayer > MonsterInitiative){
//          Player Goes First}
// else {
//      Monster goes first





// Combat Function

//function combat (Participant1, Participant2){
//    var Hp1 = "";
//    var Ac1 = "";
//    var StrMod1 = "";
//    var DexMod1= "";
//    var ConMod1= "";
//
//
//    var Hp2 = "";
//    var Ac2 = "";
//    var StrMod2 = "";
//    var DexMod2= "";
//    var ConMod2= "";
//
//    var order = 1;  // 1 or 2
//
//    //Set Order
//
//    // While players are both active - Death results in end of while condition
//
//    if(order == 1){
//        "player1 hits player2";
//    } else {
//        "player2 hits player1";
//    }
//
//}

// Either Death or Experience Sequence