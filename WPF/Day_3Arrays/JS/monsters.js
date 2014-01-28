/**
 * Created by KaseTebo on 1/17/14.
 */



// Trolls = Forest   Kobolds = Dessert  Merman = Water

function makeMonster( landType, randomNumber){
// Takes in land type and a random number and returns a monster. maybe.
    var trollPercentage=.4;
    var koboldPercentage= .6;
    var mermanPercentage= .2;


    if (landType == "Forest" &&  randomNumber < trollPercentage){
return "You have encountered a " + monster[troll][type] + "\n" + "His damage is: " + monster[troll][dmg] +"\n" + "His health is: " + monster[troll][health]+ "\n"}
    if (landType == "Desert" &&  randomNumber < koboldPercentage){
return "You have encountered a "+ monster[kobold][type] + "\n"+ "His damage is: " + monster[kobold][dmg] +"\n" + "His health is: " + monster[kobold][health]+ "\n"}
    if (landType == "water" &&  randomNumber < mermanPercentage){
return "You have encountered a "+ monster[merman][type] + "\n"+ "His damage is: " + monster[merman][dmg] +"\n" + "His health is: " + monster[merman][health]+ "\n"}
    else {
        return "" ;
    }
}

function makeDungeonMonster(landtype, randomNumber){

    var batPercentage= .6;
    var elementalPercentage=.2;
    var mudmanPercentage= .4;


    if (landType == "Caves" && randomNumber< batPercentage){
        return "You have encountered a"+ monster[bat][type]+ "\n"+ "His damage is: "+ monster[bat][dmg] + "\n" + "His health is: " + monster[bat][health]+ "\n"}
    if (landType == "Lava" && randomNumber< elementalPercentage){
        return "You have encountered a"+ monster[elemental][type]+ "\n"+ "His damage is: "+ monster[elemental][dmg] + "\n" + "His health is: " + monster[elemental][health]+ "\n"}
    if (landType == "Dirt" && randomNumber< mudmanPercentage){
        return "You have encountered a"+ monster[mudman][type]+ "\n"+ "His damage is: "+ monster[mudman][dmg] + "\n" + "His health is: " + monster[mudman][health]+ "\n"}
    else { return "" ;}
}


//console.log(makeMonster(rowString,randomNumber1 ));