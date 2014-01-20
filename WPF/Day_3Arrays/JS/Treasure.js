/**
 * Created by KaseTebo on 1/17/14.
 */

var leather = 0;
var wood = 1;
var bronze = 2;
var steel = 3;

var helm = 0;
var chest = 1;
var legs = 2;
var sword= 3;
var shield= 4;

var treasure=[];

treasure[leather]=[helm];
treasure[leather]=[chest];
treasure[leather]=[legs];
treasure[leather]=[sword];
treasure[leather]=[shield];

treasure[wood]=[helm];
treasure[wood]=[chest];
treasure[wood]=[legs];
treasure[wood]=[sword];
treasure[wood]=[shield];

treasure[bronze]=[helm];
treasure[bronze]=[chest];
treasure[bronze]=[legs];
treasure[bronze]=[sword];
treasure[bronze]=[shield];

treasure[steel]=[helm];
treasure[steel]=[chest];
treasure[steel]=[legs];
treasure[steel]=[sword];
treasure[steel]=[shield];









treasure[leather][helm]="Leather Helmet";
treasure[leather][chest]="Leather Chest";
treasure[leather][legs]="Leather Legs";
treasure[leather][sword]="Leather Sword";
treasure[leather][shield]="Leather Shield";

treasure[wood][helm]="Wood Helmet";
treasure[wood][chest]="Wood Chest";
treasure[wood][legs]="Wood Legs";
treasure[wood][sword]="Wood Sword";
treasure[wood][shield]="Wood Shield";

treasure[bronze][helm]="Bronze Helmet";
treasure[bronze][chest]="Bronze Chest";
treasure[bronze][legs]="Bronze Legs";
treasure[bronze][sword]="Bronze Sword";
treasure[bronze][shield]="Bronze Shield";

treasure[steel][helm]="Steel Helmet";
treasure[steel][chest]="Steel Chest";
treasure[steel][legs]="Steel Legs";
treasure[steel][sword]="Steel Sword";
treasure[steel][shield]="Steel Shield";

function selectGearDrop(treasure){
var randomNumber= Math.random();
    if (randomNumber <= .4){
        if (randomNumber <= .08){
            return treasure[leather][helm];
        } else if (randomNumber<= .16 && randomNumber> .08) {
            return treasure[leather][chest];
        } else if (randomNumber<= .24 && randomNumber> .16){
            return treasure[leather][legs];
        } else if (randomNumber<=.32 && randomNumber> .24) {
            return treasure[leather][sword];
        } else if (randomNumber<=.4 && randomNumber> .32){
            return treasure[leather][shield];
        }
    } else if (randomNumber<=.7 && randomNumber>.4){
          if (randomNumber<= .46 && randomNumber> .4){
              return treasure[wood][helm];
          } else if (randomNumber<= .52 && randomNumber> .46){
              return treasure[wood][chest];
          } else if (randomNumber<= .58 && randomNumber> .52){
              return treasure[wood][legs];
          } else if (randomNumber<= .64 && randomNumber> .58){
              return treasure[wood][sword];
          } else if (randomNumber<= .7 && randomNumber> .64){
              return treasure[wood][shield]
          }
    } else if (randomNumber<= .9 && randomNumber> .7){
          if (randomNumber<= .74 && randomNumber> .7){
              return treasure[bronze][helm];
          } else if (randomNumber<= .78 && randomNumber> .74){
              return treasure[bronze][chest];
          } else if (randomNumber<= .82 && randomNumber> .78){
              return treasure[bronze][legs];
          } else if (randomNumber<= .86 && randomNumber> .82){
              return treasure[bronze][sword];
          } else if (randomNumber<= .9 && randomNumber> .86){
              return treasure[bronze][shield];
          }
    } else if (randomNumber<= 1 && randomNumber > .9){
        if (randomNumber<= .92 && randomNumber > .9){
            return treasure[steel][helm];
        } else if (randomNumber <= .94 && randomNumber > .92) {
            return treasure[steel][chest];
        } else if (randomNumber<= .96 && randomNumber > .94) {
            return treasure[steel][legs];
        } else if (randomNumber<= .98 && randomNumber > .96) {
            return treasure[steel][sword];
        } else if (randomNumber<= 1 && randomNumber > .96) {
            return treasure[steel][shield];
        }
    } else {
        return "";
    }
}


function treasureDrop(monsterGenerator,randomNumber,treasure){
        if (monsterGenerator == "You have encountered a Troll" || "You have encountered a Kobold" || "You have encountered a Merman") {
               return selectGearDrop(treasure);
        }
}








console.log(treasureDrop(makeMonster(), Math.random(), treasure))

