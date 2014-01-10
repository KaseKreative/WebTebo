/**
 * Created by KaseTebo on 1/10/14.
 */
//
//var x="Welcome!";
//var n=5;
//var b="Hello!"
//
//
//var Game=[];
//Game[0]=[0];
//Game[1]=[];
//Game[2]=[];
//Game[3]=[3];
//Game[4]=[];
//Game[5]=[];
//Game[6]=[];
//Game[7]=[];
//Game[8]=[];
//Game[9]=[];;
//Game[10]=[];
//Game[11]=[];
//Game[12]=[];
//Game[13]=[];
//Game[14]=[];
//Game[15]=[];
//Game[16]=[];
//Game[17]=[];
//Game[18]=[];
//Game[19]=[];
//
//
//Game[0][0]="water";
//Game[0][1]="water";
//Game[0][2]="water";
//Game[0][3]="water";
//Game[0][4]="water";
//Game[0][5]="Forest";
//Game[0][6]="Forest";
//Game[0][7]="Forest";
//Game[0][8]="Forest";
//Game[0][9]="Forest";
//
//Game[1][0]="water";
//Game[1][1]="water";
//Game[1][2]="water";
//Game[1][3]="water";
//Game[1][4]="Forest";
//Game[1][5]="Forest";
//Game[1][6]="Forest";
//Game[1][7]="Forest";
//Game[1][8]="Forest";
//Game[1][9]="Forest";
//
//Game[2][0]="water";
//Game[2][1]="water";
//Game[2][2]="water";
//Game[2][3]="Forest";
//Game[2][4]="Forest";
//Game[2][5]="Forest";
//Game[2][6]="Forest";
//Game[2][7]="Forest";
//Game[2][8]="Forest";
//Game[2][9]="Forest";
//
//Game[3][0]="water";
//Game[3][1]="Forest";
//Game[3][2]="Forest";
//Game[3][3]="Forest";
//Game[3][4]="Forest";
//Game[3][5]="Forest";
//Game[3][6]="Forest";
//Game[3][7]="Forest";
//Game[3][8]="Forest";
//Game[3][9]="Forest";
//
//Game[4][0]="Forest";
//Game[4][1]="Forest";
//Game[4][2]="Forest";
//Game[4][3]="Forest";
//Game[4][4]="Forest";
//Game[4][5]="Forest";
//Game[4][6]="Forest";
//Game[4][7]="Forest";
//Game[4][8]="Forest";
//Game[4][9]="Forest";
//
//Game[5][0]="water";
//Game[5][1]="water";
//Game[5][2]="water";
//Game[5][3]="water";
//Game[5][4]="Forest";
//Game[5][5]="Forest";
//Game[5][6]="Forest";
//Game[5][7]="Forest";
//Game[5][8]="Forest";
//Game[5][9]="Forest";
//
//Game[6][0]="water";
//Game[6][1]="water";
//Game[6][2]="water";
//Game[6][3]="water";
//Game[6][4]="Forest";
//Game[6][5]="Forest";
//Game[6][6]="Forest";
//Game[6][7]="Forest";
//Game[6][8]="Forest";
//Game[6][9]="Forest";
//
//Game[7][0]="water";
//Game[7][1]="water";
//Game[7][2]="water";
//Game[7][3]="water";
//Game[7][4]="Forest";
//Game[7][5]="Forest";
//Game[7][6]="Forest";
//Game[7][7]="Forest";
//Game[7][8]="Forest";
//Game[7][9]="Forest";
//
//Game[8][0]="Forest";
//Game[8][1]="Forest";
//Game[8][2]="Dessert";
//Game[8][3]="Dessert";
//Game[8][4]="Dessert";
//Game[8][5]="Dessert";
//Game[8][6]="Dessert";
//Game[8][7]="Dessert";
//Game[8][8]="Dessert";
//Game[8][9]="Dessert";
//
//Game[9][0]="Dessert";
//Game[9][1]="Dessert";
//Game[9][2]="Dessert";
//Game[9][3]="Dessert";
//Game[9][4]="Dessert";
//Game[9][5]="Dessert";
//Game[9][6]="Dessert";
//Game[9][7]="Dessert";
//Game[9][8]="Dessert";
//Game[9][9]="Dessert";
//
//
//if(Game[0][0]=="water"){
//    console.log("WATER")
//} else if(Game[0][0] == "Forest"){
//    console.log("Forest");
//}
//else {console.log("Desert");}

var Pokemon=[];

Pokemon[0][0]="Two wild pokemon!";
Pokemon[0][1]="No wild pokemon";
Pokemon[0][2]="No wild pokemon";
Pokemon[0][3]="No wild pokemon";

Pokemon[1][0]="No wild pokemon!";
Pokemon[1][1]="No wild pokemon";
Pokemon[1][2]="One wild pokemon!";
Pokemon[1][3]="No wild pokemon";

Pokemon[2][0]="No wild pokemon";
Pokemon[2][1]="One wild Pokemon";
Pokemon[2][2]="No wild pokemon";
Pokemon[2][3]="No wild pokemon";

Pokemon[3][0]="No wild pokemon!";
Pokemon[3][1]="No wild pokemon";
Pokemon[3][2]="Mewtwo Appeared!";
Pokemon[3][3]="No wild pokemon";

if(Pokemon[0][0]=="Two wild pokemon!"){
   console.log("Two wild pokemon! Get ready for battle!")
} else if (Pokemon[0][0]=="One wild Pokemon"){
        console.log("One wild pokemon! Get ready for battle!")
    else {console.log("No pokemon here");}
}


var seed1=1;
var seed2=3;
var seed3=5;

if(seed2>=seed1)
{
    console.log('seed2>=seed1');
}
else if(seed2==seed1)
{
    console.log("seed2==seed1");
}
else
{
    console.log("seed2<=seed1");
}

if(seed1!=seed3){console.log("seed1 and 3 are different.")}