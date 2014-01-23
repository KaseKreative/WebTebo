/**
 * Created by KaseTebo on 1/20/14.
 */

function generateDungeon(name){

console.clear();

var dungeon=[];

dungeon[0]=[];
dungeon[1]=[];
dungeon[2]=[];
dungeon[3]=[];
dungeon[4]=[];
dungeon[5]=[];
dungeon[6]=[];
dungeon[7]=[];
dungeon[8]=[];
dungeon[9]=[];

var row=4;
var column=7;
characterPosition= name;

    var movement= true;
    while (movement == true){


        for (loopCounter=0; movement == true; loopCounter++){




grid="";
for (xPosition=0; xPosition<10;xPosition++){
    for (yPosition=0; yPosition<10;yPosition++){
     if (loopCounter == 0){
        dungeon[yPosition][xPosition]=Math.floor((Math.random()*5)+1);
     }



      if (row == xPosition && column == yPosition) {
            grid+=characterPosition+"\t";
         }


      else{


             if (dungeon[yPosition][xPosition]== 1 || dungeon [yPosition][xPosition]== 2 ){
                dungeon[yPosition][xPosition]="Dirt"+ "\t";
                grid+= dungeon[yPosition][xPosition];
            } else if (dungeon[yPosition][xPosition]== 3 ){
                dungeon[yPosition][xPosition]= "Pillar" + "\t";
                grid+= dungeon[yPosition][xPosition];
            } else if (dungeon[yPosition][xPosition]== 4){
                dungeon[yPosition][xPosition]="Water"+"\t";
                grid+= dungeon[yPosition][xPosition];
            } else if (dungeon[yPosition][xPosition]==5){
                dungeon[yPosition][xPosition]="Sludge"+"\t";
                grid+= dungeon[yPosition][xPosition];
             } else {
            grid+= dungeon[yPosition][xPosition];
        }
      }
    }
    grid=grid+"\n\n";
}
    console.clear();
    console.log(grid);




        var direction=prompt("What action do you want to make?"+ "\n" + "Up, Down, Left, Right" + "\n" + "Attack, End").toLowerCase();


    if (direction == "up") {
        row--;
    } else {
        if (direction == "down")  {
            row++;
        } else {
            if (direction == "left"){
                column--;
        } else {
            if (direction == "right") {
                column++;
        } else {
                        if (direction == "end"){
                            movement = false;
                        }}}}}
        console.clear();
        console.log(grid);

    }
    }
}