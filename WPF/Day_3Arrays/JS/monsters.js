/**
 * Created by KaseTebo on 1/17/14.
 */



// Trolls = Forest   Kobolds = Dessert  Merman = Water
var randomNumber= Math.random();

function makeMonster(landType, randomNumber){
// Takes in land type and a random number and returns a monster. maybe.
    var trollPercentage=.4;
    var koboldPercentage= .3;
    var mermanPercentage= .2;

    if (landType == "Forest" && randomNumber < trollPercentage){return "You have encountered a Troll"}
    if (landType == "Dessert" && randomNumber < koboldPercentage){return "You have encountered a Kobold"}
    if (landType == "water" && randomNumber < mermanPercentage){return "You have encountered a Merman"}
    else {return "";}
}



//console.log(makeMonster(rowString,randomNumber1 ));