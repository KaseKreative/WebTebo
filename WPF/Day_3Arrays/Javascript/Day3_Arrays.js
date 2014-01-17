
/**
* Created by KaseTebo on 1/13/14.
*/

    // Practicing Loops

//for(loopItt=0;loopItt<Game.length;loopItt++){
                // Doing modulus to figure out if the number the loop is on is negative
                // Does this by noticing if there is 1 remainder or 0 remainders
////    if(loopItt%2 == 1 ){
////        console.log(loopItt);
////    } else {
////        console.log("Not a negative");
////    }
//}
//
//// console.log(Game[0]);
//
//for(loopItt=0;loopItt<Game.length;loopItt++){
//    console.log(Game[loopItt]);
//}

//
//var rowString='';
//for(loopItt=0;loopItt<Game[0].length;loopItt++){
//    rowString=rowString+Game[0][loopItt];
//    rowString=rowString +"\t";
//}
//
//console.log(rowString);


//Step through each element of the array Game and load the data into a
// formatted string and display the values

















// console.log(Math.random());


// Create Widget
// move re widget with a prompt
// "up down left right"
//var direction=prompt("What direction do you want to go? (Lowercase)");
//var xx = 3;
//var yy = 2;
//
//console.log(Game[xx][yy]);
// Works but incorrect context

//if (direction == "up") {
//        console.log(Game[xx-1][yy]);
//}   else {
//        if (direction == "down")  {
//            console.log(Game[xx+1][yy]);
//        } else {
//               if (direction == "left"){
//                   console.log(Game[xx][yy-1]);
//               } else {
//                   if (direction == "right") {
//                       console.log(Game[xx][yy+1]);
//                   }}}}














var rowString='';
for(outerLoop=0;outerLoop<Game.length;outerLoop++){
    for (innerLoop=0;innerLoop<Game[outerLoop].length;innerLoop++){
        rowString=rowString+Game[outerLoop] [innerLoop];
        rowString=rowString+"\t";
    }
    rowString=rowString+"\n";
       // rowString+="\n"; equals the same as ^
}

console.log(rowString);


