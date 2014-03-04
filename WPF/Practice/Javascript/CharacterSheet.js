/**
 * Created by KaseTebo on 2/3/14.
 */

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


var characterSheet = [];

characterSheet[str]=Math.floor((max-classMin)*Math.random()+classMin);
characterSheet[dex]=Math.floor((max-min)*Math.random()+min);
characterSheet[con]=Math.floor((max-classMin)*Math.random()+classMin);
characterSheet[cha]=Math.floor((max-min)*Math.random()+min);
characterSheet[wis]=Math.floor((classMax-min)*Math.random()+min);
characterSheet[int]=Math.floor((classMax-min)*Math.random()+min);
health += Math.floor(health*Math.random() + con);


characterStats =
    "Str: " + characterSheet[str] + "\t \t" + "HP: " +currentHealth+"/"+health + "\n" +
        "Dex: " + characterSheet[dex] + "\t \t" + "Mana: "+currentMana+"/"+mana+ "\n" +
        "Con: " + characterSheet[con] + "\t \t" + "Exp: " + experience + "\n" +
        "Cha: " + characterSheet[cha] + "\n" +
        "Wis: " + characterSheet[wis] + "\n" +
        "Int: " + characterSheet[int] + "\n" ;