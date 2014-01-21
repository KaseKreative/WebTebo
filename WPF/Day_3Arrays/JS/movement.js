


// Variables
var character= "<XXXX>";
var xx = 3;
var yy = 2;
// Undefined variable that gets assigned inside of the loop
var rowString="";
var whileCondition= true;







// While loop - Will loop until told not to.
while(whileCondition== true){

    // Reassigning the rowString variable to 0
    rowString="";
    //looping the Y axis adding +1 every time up to the total length of the game
    for(outerLoop=0;outerLoop<Game.length;outerLoop++){
        //Looping the X axis adding +1 every time up to the total length of the outer loop.
        for (innerLoop=0;innerLoop<Game[outerLoop].length;innerLoop++){
            // Conditional to find out where to place the character
            if (xx == outerLoop && yy == innerLoop){
                rowString+= character+"\t";
            } else {
            // Stringing it all together
            rowString=rowString+Game[outerLoop] [innerLoop];
            rowString=rowString+"\t";}
        }
        // Adding the break after the string
        rowString=rowString+"\n";
        // rowString+="\n"; equals the same as ^

    }
    // clears the console so that the grid doesn't stack on top of itself just replaces the old one.

    console.clear();
    console.log("Character Name: "+name);
    console.log("Class: "+ promptcharacterClass);
    // This is the map
    console.log(rowString);

    // This is recognizing if there is a monster on the square you land.
    console.log (makeMonster(Game[xx][yy],Math.random()));

    // Characters Stats
    console.log(characterStats);

    var direction=prompt("What action do you want to make?"+ "\n" + "up, down, left, right" + "\n" + "Search, Enter, Attack, End").toLowerCase();




// Conditional to figure out movement of character.
    if (direction == "up") {
        xx--;
    } else {
        if (direction == "down")  {
            xx++;
        } else {
            if (direction == "left"){
                yy--;
            } else {
                if (direction == "right") {
                    yy++;
                } else {
                    if(direction == "enter"){
                        if (Game[xx][yy] == Game[4][7]){
                            console.clear();
                            console.log(generateDungeon());
                            whileCondition=false;
                    }
                    } else {
                    if (direction == "end"){
                        whileCondition = false;
                    }}}}}}

    // Setting it so if you go off the map it resets you to the other side.
    if (xx>= Game.length){
        xx=0;
    } else if ( xx< 0){
        xx= Game.length-1;
    } else if ( yy>= Game.length){
        yy=0;
    } else if ( yy< 0){
        yy= Game.length-1;
    }



}



//var Out = 5;
// function addTwoValues(value1, value2){
//     var addedValue = Value1+Value2;
//     return addedValue;
// }

//function that takes in an array


//function countArray(Game){
//    return Game.length;
//}

  //  console.log(Game[xx][yy]);                This allows us to check the specific values of the world.



