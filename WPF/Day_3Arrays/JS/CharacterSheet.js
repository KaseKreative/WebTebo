/**
 * Created by KaseTebo on 1/17/14.
 */

// Create a class by prompting asking their class and using conditionals
// to Math.random(); their skills.

// Str Dex Cons Cha Wis Int
// 3 - 18 Values for each of those
// Exp:    Gold:    Hit points (Max and Current)

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
