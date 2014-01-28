


// Variables
var character= name;
var xx = 3;
var yy = 2;
// Undefined variable that gets assigned inside of the loop
var rowString="";
var whileCondition= true;
var currentLevel=0;
var generator = twoLayeredWorld(Game);

console.log(worldDisplay(generator[currentLevel],xx,yy,character));
// Function to make monsters (monster, worldDisplay(generator[currentLevel],xx,yy,character)


// While loop - Will loop until told not to.
while(whileCondition== true){

    console.clear();
    console.log(worldDisplay(generator[currentLevel],xx,yy,character));

//    // Reassigning the rowString variable to 0
//    rowString="";
//    //looping the Y axis adding +1 every time up to the total length of the game
//    for(outerLoop=0;outerLoop<Game.length;outerLoop++){
//        //Looping the X axis adding +1 every time up to the total length of the outer loop.
//        for (innerLoop=0;innerLoop<Game[outerLoop].length;innerLoop++){
//            // Conditional to find out where to place the character
//            if (xx == outerLoop && yy == innerLoop){
//                rowString+= character+"\t";
//            } else {
//            // Stringing it all together
//            rowString=rowString+Game[outerLoop] [innerLoop];
//            rowString=rowString+"\t";}
//        }
//        // Adding the break after the string
//        rowString=rowString+"\n";
//        // rowString+="\n"; equals the same as ^
//
//    }
    // clears the console so that the grid doesn't stack on top of itself just replaces the old one.

    console.clear();
    console.log("Character Name: "+name);
    console.log("Class: "+ promptcharacterClass);
    // This is the map
    console.log(rowString);

    // This is recognizing if there is a monster on the square you land.

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
//                } else {
//                    if(direction == "enter"){
//                        if (Game[xx][yy] == Game[4][1] || Game[xx][yy] == Game[8][2]){
//                            console.clear();
//                            console.log(generateDungeon(name));
//                            whileCondition=false;
//                    }
                    } else if ((direction == "end")) {
                        whileCondition = false;
                    } else if (generator[currentLevel][xx][yy]== "Dungeon" && direction == "enter"){currentLevel++}
                    else if (generator[currentLevel][xx][yy]=="Ladder" && direction == "enter"){currentLevel--}
                    }}}



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









function twoLayeredWorld(Game){
    var dungeonX1=0;
    var dungeonX2=0;
    var dungeonY1=0;
    var dungeonY2=0;
    var firstVsSecondDungeonInstance = true;
    var completedWorld=[];
    // Whole world in [0]
    // Dungeon in [1]
    completedWorld[0]=Game;
    completedWorld[1]=[];
    completedWorld[2]=[];
    completedWorld[3]=[];
    completedWorld[4]=[];
    completedWorld[5]=[];

// Finding the dungeons inside of the Game array
    for (Outer=0; Outer<Game.length; Outer++){
        for(Inner=0;Inner<Game.length;Inner++){
            if (Game[Outer][Inner]== "Dungeon" && firstVsSecondDungeonInstance == true){
                dungeonX1=Outer;
                dungeonY1=Inner;
                firstVsSecondDungeonInstance = false;
            } else if (Game[Outer][Inner] == "Dungeon"){
                dungeonX2=Outer;
                dungeonY2=Inner;
            }
        }
    }
    // Generating the dungeon
    for (Outer2=0;Outer2<Game.length;Outer2++){
        completedWorld[1][Outer2]=[];   // Dungeon
        completedWorld[2][Outer2]=[];   // Monsters for level 0
        completedWorld[3][Outer2]=[];   // Monsters for level 1
        completedWorld[4][Outer2]=[];   // Treasure for level 0
        completedWorld[5][Outer2]=[];   // Treasure for level 1



        for(Inner2=0;Inner2<Game.length;Inner2++){


            var randomWorldSeed=Math.random();
            // cave 1/3, lava 1/3, dirt 1/3, ladder on dungeon squares

            if ((Outer2==dungeonX1 && Inner2==dungeonY1) || (Outer2==dungeonX2 && Inner2 == dungeonY2)){
                completedWorld[1][Outer2][Inner2]="Ladder";
            } else if (randomWorldSeed<= 1/3){
                completedWorld[1][Outer2][Inner2]="Caves";
            } else if (randomWorldSeed>=2/3){
                completedWorld[1][Outer2][Inner2]="Lava";
            } else {
                completedWorld[1][Outer2][Inner2]="Dirt";
            }

        }
    }




    return completedWorld;


}



for (Outer3 = 0; Outer3<Game.length;)
if ( currentLevel = 0 ) {
      generator[2][Outer3][Inner3]=makeMonster(generator[0][Outer3][Inner3], Math.random());
    console.log(generator[2][])
} else if ( currentLevel = 1 ) {
      generator[3][Outer3][Inner3]=makeDungeonMonster(generator[1][Outer3][Inner3], Math.random());
}











function worldDisplay(Game,xx, yy, character){

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


    return rowString;

}

// Surface, Dungeon, Monster Surface, Monster Dungeon, Treasure Surface, Treasure Dungeon.