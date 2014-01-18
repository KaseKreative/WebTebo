/**
 * Created by KaseTebo on 1/17/14.
 */

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
