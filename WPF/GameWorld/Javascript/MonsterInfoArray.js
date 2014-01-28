/**
 * Created by KaseTebo on 1/27/14.
 */

var type= 0;
var exp= 1;
var gold = 2;
var dmg = 3;
var health= 4;

var troll=0;
var kobold =1;
var merman=2;
var bat = 3;
var elemental = 4;
var mudman = 5;

var min=0;
var max=1;



monster = [];

monster[troll]=[];
monster[kobold]=[];
monster[merman]=[];
monster[bat]=[];
monster[elemental]=[];
monster[mudman]=[];

monster[troll] = [type];
monster[troll] = [exp] ;
monster[troll] = [gold];
monster[troll] = [dmg];
monster[troll] = [health];

monster[kobold] = [type];
monster[kobold] = [exp] ;
monster[kobold] = [gold];
monster[kobold] = [dmg];
monster[kobold] = [health];

monster[merman] = [type];
monster[merman] = [exp] ;
monster[merman] = [gold];
monster[merman] = [dmg];
monster[merman] = [health];

monster[bat] = [type];
monster[bat] = [exp] ;
monster[bat] = [gold];
monster[bat] = [dmg];
monster[bat] = [health];

monster[elemental] = [type];
monster[elemental] = [exp] ;
monster[elemental] = [gold];
monster[elemental] = [dmg];
monster[elemental] = [health];

monster[mudman] = [type];
monster[mudman] = [exp] ;
monster[mudman] = [gold];
monster[mudman] = [dmg];
monster[mudman] = [health];

// Troll

monster[troll][type]="Troll";
monster[troll][exp]=10;
monster[troll][gold]=[];
monster[troll][dmg]= Dmg();
monster[troll][health] = 175;

monster[troll][gold]=[min];
monster[troll][gold]=[max];

monster[troll][gold][min]= 5;
monster[troll][gold][max]= 12;

// Kobold

monster[kobold][type]="Kobold";
monster[kobold][exp]=5;
monster[kobold][gold]=[];
monster[kobold][dmg]= Dmg();
monster[kobold][health] = 105;

monster[kobold][gold]=[min];
monster[kobold][gold]=[max];

monster[kobold][gold][min]= 3;
monster[kobold][gold][max]= 20;

// Merman

monster[merman][type]="merman";
monster[merman][exp]=15;
monster[merman][gold]=[];
monster[merman][dmg]= Dmg();
monster[merman][health]= 150;

monster[merman][gold]=[min];
monster[merman][gold]=[max];

monster[merman][gold][min]= 3;
monster[merman][gold][max]= 20;


// Dungeon Monsters
// Bat
monster[bat][type]="Bat";
monster[bat][exp]=5;
monster[bat][gold]=[];
monster[bat][dmg]= Dmg();
monster[bat][health]= 40;

monster[bat][gold]=[min];
monster[bat][gold]=[max];

monster[bat][gold][min]= 2;
monster[bat][gold][max]= 5;

// Elemental

monster[elemental][type]="Elemental";
monster[elemental][exp]=25;
monster[elemental][gold]=[];
monster[elemental][dmg]= Dmg();
monster[elemental][health]= 225;

monster[elemental][gold]=[min];
monster[elemental][gold]=[max];

monster[elemental][gold][min]= 20;
monster[elemental][gold][max]= 40;

// Mudman

monster[mudman][type]="Mudman";
monster[mudman][exp]=15;
monster[mudman][gold]=[];
monster[mudman][dmg]= Dmg();
monster[mudman][health]= 175;

monster[mudman][gold]=[min];
monster[mudman][gold]=[max];

monster[mudman][gold][min]= 7;
monster[mudman][gold][max]= 24;





function Dmg(){


    var maxStat = 15;
    var minStat= 10;
    var Str = 0;
    var stats = [];

    stats[Str] = Math.floor((maxStat - minStat)*Math.random() + minStat);

    damage = Math.floor(stats[Str]*Math.random() + stats[Str]);
    return damage;

}