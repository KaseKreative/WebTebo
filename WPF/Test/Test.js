/**
 * Created by KaseTebo on 1/17/14.
 */
//var monster = [];

//var type= 0;
//var exp= 1;
//var gold = 2;
//
//var troll=0;
//var kobold=1;
//var merman=2;

//monster[Troll]=[];
//monster[Kobold]=[];
//monster[Merman]=[];
//
//monster[Troll][type]= "Troll";
//monster[Troll][Exp]= 10;
//monster[Troll][Gold]= 5, 12;
//
//monster[Kobold][type]= "Kobold";
//monster[Kobold][Exp]= 5;
//monster[Kobold][Gold]= 3, 20;
//
//monster[Merman][type]= "Merman";
//monster[Merman][Exp]= 15;
//monster[Merman][Gold]= 9, 34;
//
//// 3 Kobolds 2 Trolls
//
//var howManyTrolls=parseInt(prompt("How many Trolls did you kill?"));
//var howManyKobolds=parseInt(prompt("How many Kobolds did you kill?"));
//
//var expGained= monster[Troll][Exp]*howManyTrolls + monster[Kobold][Exp]*howManyKobolds;
//
//console.log(expGained);


var type= 0;
var exp= 1;
var gold = 2;

var troll=0;
var kobold=1;
var merman=2;

min=0;
max=1;

var monster=[["Troll", 10,[5,12]],["kobold",5,[3,20]],["Merman",15,[9,35]]];

console.log (2*monster[troll][exp]+ 3*monster[kobold][exp]);

console.log(math.floor(monster[troll][gold][max]-monster[troll][gold][min])
    *Math.random()
    +monster[troll][gold][min]);

// Begin experience sheet, take in a name and display on the bottom
// Prepared to take experience and loot
