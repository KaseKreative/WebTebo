/**
 * Created by KaseTebo on 1/27/14.
 */


type = 0;
health = 1;
damage = 2;
dexterity = 3;
strength = 4;


function str (){
   Str =  Math.floor(3*(Math.random()*6));
    return Str;
}

function dex (){
    Dex = Math.floor(3*(Math.random()*6));
    return Dex;
}

function dmg (str){
    Dmg = Math.floor((Math.random()*6) + str);
    return Dmg;
}

// Cave Array
bear = 0;
bat = 1;
yeti = 2;
skeleton = 3;
mudman = 4;

cave = [];
cave[bear] = [];
cave[bat] = [];
cave[yeti] = [];
cave[skeleton] = [];
cave[mudman] = [];




cave[bear] = [type];
cave[bear] = [health];
cave[bear] = [damage];
cave[bear] = [dexterity];
cave[bear] = [strength];

cave[bear][type] = "Bear";
cave[bear][health] = 20;
cave[bear][damage]= dmg(str());
cave[bear][dexterity]= dex();
cave[bear][strength] = str();

cave[bat] = [type];
cave[bat] = [health];
cave[bat] = [damage];
cave[bat] = [dexterity];
cave[bat] = [strength];

cave[bat][type] = "Bat";
cave[bat][health] = 3;
cave[bat][damage]= dmg(str());
cave[bat][dexterity]= dex();
cave[bat][strength] = str();

cave[yeti] = [type];
cave[yeti] = [health];
cave[yeti] = [damage];
cave[yeti] = [dexterity];
cave[yeti] = [strength];

cave[yeti][type] = "Yeti";
cave[yeti][health] = 35;
cave[yeti][damage]= dmg(str());
cave[yeti][dexterity]= dex();
cave[yeti][strength] = str();

cave[skeleton] = [type];
cave[skeleton] = [health];
cave[skeleton] = [damage];
cave[skeleton] = [dexterity];
cave[skeleton] = [strength];

cave[skeleton][type] = "Skeleton";
cave[skeleton][health] = 5;
cave[skeleton][damage]= dmg(str());
cave[skeleton][dexterity]= dex();
cave[skeleton][strength] = str();


cave[mudman] = [type];
cave[mudman] = [health];
cave[mudman] = [damage];
cave[mudman] = [dexterity];
cave[mudman] = [strength];

cave[mudman][type] = "Mudman";
cave[mudman][health] = 20;
cave[mudman][damage]= dmg(str());
cave[mudman][dexterity]= dex();
cave[mudman][strength] = str();











// Dungeon Array
skeleton = 0;
orc = 1;
blob = 2;
zombie = 3;
beholder = 4;

dungeon = [];
dungeon[skeleton] = [];
dungeon[orc] = [];
dungeon[blob] = [];
dungeon[zombie] = [];
dungeon[beholder] = [];


dungeon[skeleton] = [type];
dungeon[skeleton] = [health];
dungeon[skeleton] = [damage];
dungeon[skeleton] = [dexterity];
dungeon[skeleton] = [strength];

dungeon[skeleton][type] = "Skeleton";
dungeon[skeleton][health] = 5;
dungeon[skeleton][damage]= dmg(str());
dungeon[skeleton][dexterity]= dex();
dungeon[skeleton][strength] = str();

dungeon[orc] = [type];
dungeon[orc] = [health];
dungeon[orc] = [damage];
dungeon[orc] = [dexterity];
dungeon[orc] = [strength];

dungeon[orc]  [type] = "Orc";
dungeon[orc]  [health] = 5;
dungeon[orc]  [damage] = dmg(str());
dungeon[orc]  [dexterity] = dex();
dungeon[orc]  [strength] = str();

dungeon[blob] = [type];
dungeon[blob] = [health];
dungeon[blob] = [damage];
dungeon[blob] = [dexterity];
dungeon[blob] = [strength];

dungeon[blob]  [type] = "Blob";
dungeon[blob]  [health] = 20;
dungeon[blob]  [damage] = dmg(str());
dungeon[blob]  [dexterity] = dex();
dungeon[blob]  [strength] = str();

dungeon[zombie] = [type];
dungeon[zombie] = [health];
dungeon[zombie] = [damage];
dungeon[zombie] = [dexterity];
dungeon[zombie] = [strength];

dungeon[zombie]  [type] = "Zombie";
dungeon[zombie]  [health] = 10;
dungeon[zombie]  [damage] = dmg(str());
dungeon[zombie]  [dexterity] = dex();
dungeon[zombie]  [strength] = str();

dungeon[beholder] = [type];
dungeon[beholder] = [health];
dungeon[beholder] = [damage];
dungeon[beholder] = [dexterity];
dungeon[beholder] = [strength];

dungeon[beholder]  [type] = "Beholder";
dungeon[beholder]  [health] = 75;
dungeon[beholder]  [damage] = dmg(str());
dungeon[beholder]  [dexterity] = dex();
dungeon[beholder]  [strength] = str();



// Castle Array
orc = 0;
ghost = 1;
dragon = 2;
knight = 3;
king = 4;

castle = [];
castle[orc] = [];
castle[ghost] = [];
castle[dragon] = [];
castle[knight] = [];
castle[king] = [];


castle[orc] = [type];
castle[orc] = [health];
castle[orc] = [damage];
castle[orc] = [dexterity];
castle[orc] = [strength];

castle[orc]  [type] = "Orc";
castle[orc]  [health] = 5;
castle[orc]  [damage] = dmg(str());
castle[orc]  [dexterity] = dex();
castle[orc]  [strength] = str();

castle[ghost] = [type];
castle[ghost] = [health];
castle[ghost] = [damage];
castle[ghost] = [dexterity];
castle[ghost] = [strength];

castle[ghost]  [type] = "Ghost";
castle[ghost]  [health] = 8;
castle[ghost]  [damage] = dmg(str());
castle[ghost]  [dexterity] = dex();
castle[ghost]  [strength] = str();

castle[dragon] = [type];
castle[dragon] = [health];
castle[dragon] = [damage];
castle[dragon] = [dexterity];
castle[dragon] = [strength];

castle[dragon]  [type] = "Dragon";
castle[dragon]  [health] = 500;
castle[dragon]  [damage] = dmg(str());
castle[dragon]  [dexterity] = dex();
castle[dragon]  [strength] = str();



castle[knight] = [type];
castle[knight] = [health];
castle[knight] = [damage];
castle[knight] = [dexterity];
castle[knight] = [strength];

castle[knight]  [type] = "Knight";
castle[knight]  [health] = 15;
castle[knight]  [damage] = dmg(str());
castle[knight]  [dexterity] = dex();
castle[knight]  [strength] = str();



castle[king] = [type];
castle[king] = [health];
castle[king] = [damage];
castle[king] = [dexterity];
castle[king] = [strength];

castle[king]  [type] = "King";
castle[king]  [health] = 30;
castle[king]  [damage] = dmg(str());
castle[king]  [dexterity] = dex();
castle[king]  [strength] = str();


console.log(castle[king][damage]);