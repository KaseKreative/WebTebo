/**
 * Created by KaseTebo on 1/17/14.
 */

// Create a class by prompting asking their class and using conditionals
// to Math.random(); their skills.

// Str Dex Cons Cha Wis Int
// 3 - 18 Values for each of those
// Exp:    Gold:    Hit points (Max and Current)

var str = 0;
var dex = 1;
var con = 2;
var cha = 3;
var wis = 4;
var int = 5;

min = 3;
max = 18;

var health= 100;
var currentHealth=Math.floor(100*Math.random());
var experience=0;



var characterSheet= [];

characterSheet[str]=Math.floor((max-min)*Math.random()+min);
characterSheet[dex]=Math.floor((max-min)*Math.random()+min);
characterSheet[con]=Math.floor((max-min)*Math.random()+min);
characterSheet[cha]=Math.floor((max-min)*Math.random()+min);
characterSheet[wis]=Math.floor((max-min)*Math.random()+min);
characterSheet[int]=Math.floor((max-min)*Math.random()+min);


var characterStats =
    "Str: " + characterSheet[str] + "\t \t" + "HP: " +currentHealth+"/"+health + "\n" +
    "Dex: " + characterSheet[dex] + "\n" +
    "Con: " + characterSheet[con] + "\t \t" + "Exp: " + experience + "\n" +
    "Cha: " + characterSheet[cha] + "\n" +
    "Wis: " + characterSheet[wis] + "\n" +
    "Int: " + characterSheet[int] + "\n";

//console.log(characterStats);
