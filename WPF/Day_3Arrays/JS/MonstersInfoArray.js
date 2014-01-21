/**
 * Created by KaseTebo on 1/17/14.
 */

var type= 0;
var exp= 1;
var gold = 2;
var dmg = 3;
var health= 4;

var troll=0;
var kobold=1;
var merman=2;

min=0;
max=1;

function Dmg(){
    damage = "";
    var maxStat = 15;
    var minStat= 10;
    var Str = 0;
    var stats = [];

    stats[Str] = Math.floor((maxStat - minStat)*Math.random() + minStat);

     damage = Math.floor(stats[Str]*Math.random() + stats[Str]);

    return  damage;

}

function MonsterGen(){
monster = [];

monster[troll]=[];
monster[kobold]=[];
monster[merman]=[];

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

}