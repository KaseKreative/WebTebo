/**
 * Created by KaseTebo on 1/15/14.
 */
/**
 * Created by KaseTebo on 1/13/14.
 */

var Game=[];

Game[0]=[];
Game[1]=[];
Game[2]=[];
Game[3]=[];
Game[4]=[];
Game[5]=[];
Game[6]=[];
Game[7]=[];
Game[8]=[];
Game[9]=[];

Game[0][0]=[];
Game[0][1]=[];
Game[0][2]=[];
Game[0][3]=[];
Game[0][4]=[];
Game[0][5]=[];
Game[0][6]=[];
Game[0][7]=[];
Game[0][8]=[];
Game[0][9]=[];


Game[0][0]="water";
Game[0][1]="water";
Game[0][2]="water";
Game[0][3]="water";
Game[0][4]="water";
Game[0][5]="Forest";
Game[0][6]="Forest";
Game[0][7]="Forest";
Game[0][8]="Forest";
Game[0][9]="Forest";

Game[1][0]="water";
Game[1][1]="water";
Game[1][2]="water";
Game[1][3]="water";
Game[1][4]="Forest";
Game[1][5]="Forest";
Game[1][6]="Forest";
Game[1][7]="Forest";
Game[1][8]="Forest";
Game[1][9]="Forest";

Game[2][0]="water";
Game[2][1]="water";
Game[2][2]="water";
Game[2][3]="Forest";
Game[2][4]="Forest";
Game[2][5]="Forest";
Game[2][6]="Forest";
Game[2][7]="Forest";
Game[2][8]="Forest";
Game[2][9]="Forest";

Game[3][0]="water";
Game[3][1]="Forest";
Game[3][2]="Forest";
Game[3][3]="Forest";
Game[3][4]="Forest";
Game[3][5]="Forest";
Game[3][6]="Forest";
Game[3][7]="Forest";
Game[3][8]="Forest";
Game[3][9]="Forest";

Game[4][0]="Forest";
Game[4][1]="Forest";
Game[4][2]="Forest";
Game[4][3]="Forest";
Game[4][4]="Forest";
Game[4][5]="Forest";
Game[4][6]="Forest";
Game[4][7]="Forest";
Game[4][8]="Forest";
Game[4][9]="Forest";

Game[5][0]="water";
Game[5][1]="water";
Game[5][2]="water";
Game[5][3]="water";
Game[5][4]="Forest";
Game[5][5]="Forest";
Game[5][6]="Forest";
Game[5][7]="Forest";
Game[5][8]="Forest";
Game[5][9]="Forest";

Game[6][0]="water";
Game[6][1]="water";
Game[6][2]="water";
Game[6][3]="water";
Game[6][4]="Forest";
Game[6][5]="Forest";
Game[6][6]="Forest";
Game[6][7]="Forest";
Game[6][8]="Forest";
Game[6][9]="Forest";

Game[7][0]="water";
Game[7][1]="water";
Game[7][2]="water";
Game[7][3]="water";
Game[7][4]="Forest";
Game[7][5]="Forest";
Game[7][6]="Forest";
Game[7][7]="Forest";
Game[7][8]="Forest";
Game[7][9]="Forest";

Game[8][0]="Forest";
Game[8][1]="Forest";
Game[8][2]="Dessert";
Game[8][3]="Dessert";
Game[8][4]="Dessert";
Game[8][5]="Dessert";
Game[8][6]="Dessert";
Game[8][7]="Dessert";
Game[8][8]="Dessert";
Game[8][9]="Dessert";

Game[9][0]="Dessert";
Game[9][1]="Dessert";
Game[9][2]="Dessert";
Game[9][3]="Dessert";
Game[9][4]="Dessert";
Game[9][5]="Dessert";
Game[9][6]="Dessert";
Game[9][7]="Dessert";
Game[9][8]="Dessert";
Game[9][9]="Dessert";

//for(loopItt=0;loopItt<Game.length;loopItt++){
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
var xx = 3;
var yy = 2;
var whileCondition= true;
while(whileCondition== true){

    var direction=prompt("What direction do you want to go? (Lowercase or End)");



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
    console.log(Game[xx][yy]);

