/**
 * Created by KaseTebo on 1/17/14.
 */



// Trolls = Forest   Kobolds = Dessert  Merman = Water
var randomNumber= Math.random();

function makeMonster(landType, randomNumber){
// Takes in land type and a random number and returns a monster. maybe.
    var trollPercentage=.2;
    var koboldPercentage= .2;
    var mermanPercentage= .1;

    if (landType == "Forest" && randomNumber < trollPercentage){
        MonsterGen();
return "You have encountered a " + monster[troll][type] + "\n" + "His damage is: " + monster[troll][dmg] +"\n" + "His health is: " + monster[troll][health]+ "\n"}
    if (landType == "Dessert" && randomNumber < koboldPercentage){
        MonsterGen();
return "You have encountered a "+ monster[kobold][type] + "\n"+ "His damage is: " + monster[kobold][dmg] +"\n" + "His health is: " + monster[kobold][health]+ "\n"}
    if (landType == "water" && randomNumber < mermanPercentage){
        MonsterGen();
return "You have encountered a "+ monster[merman][type] + "\n"+ "His damage is: " + monster[merman][dmg] +"\n" + "His health is: " + monster[merman][health]+ "\n"}
    else { return "" ;}
}



//console.log(makeMonster(rowString,randomNumber1 ));