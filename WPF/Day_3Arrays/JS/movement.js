


// Variables
var character= "<XXXX>";
var xx = 3;
var yy = 2;
// Undefined variable that gets assigned inside of the loop
var rowString='';
var direction=prompt("What direction do you want to go? (Lowercase or End)");
var whileCondition= true;


// While loop - Will loop until told not to.
while(whileCondition== true){
    // Reassigning the rowString variable to 0
    rowString='';
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
    console.log(rowString);





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
                    if (direction == "end"){
                        whileCondition = false;
                    }}}}}
}











  //  console.log(Game[xx][yy]);                This allows us to check the specific values of the world.



