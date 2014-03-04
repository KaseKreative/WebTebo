/**
 * Created by KaseTebo on 2/6/14.
 */

(function(){

   console.log("BEGIN!");

//    var playerOne = "Spiderman";
//    var playerTwo = "Batman";

//    var playerOneHealth= 100;
//    var playerTwoHealth= 100;

   var spiderman = 0;
   var batman = 1;

    var health = 0;
    var damage = 1;
    var type = 2;

    var min = 0;
    var max = 1;

players = [];
    players =[health];
    players =[damage];
    players =[type];

    players[health]=[spiderman];
    players[health]=[batman];

    players[damage]=[spiderman];
    players[damage]=[batman];

    players[type]=[spiderman];
    players[type]=[batman];

    players[health][spiderman]=100;
    players[health][batman]=100;

    players[damage][spiderman]=[];
        players[damage][spiderman] = [min];
        players[damage][spiderman] = [max];
            players[damage][spiderman][min]=10;
            players[damage][spiderman][max]=20;
    players[damage][batman]=[];
        players[damage][batman] = [min];
        players[damage][batman] = [max];
            players[damage][batman][min]=10;
            players[damage][batman][max]=20;

players[type][spiderman]="Spiderman";
players[type][batman]="Batman";


function combat(){
    alert(players[type][spiderman]+": "+players[health][spiderman]+" *BEGIN* "+players[type][batman]+": "+players[health][batman]);
    for (var i = 1; i < 11; i++){
        var playerOneDmg = ~~(Math.random()*players[damage][spiderman][min])+players[damage][spiderman][min];
        var playerTwoDmg =  ~~(Math.random()*players[damage][batman][min])+players[damage][batman][min];

//            console.log (playerOneDmg);
//            console.log (playerTwoDmg);

        players[health][spiderman] -= playerTwoDmg;
        players[health][batman] -= playerOneDmg;

        alert(players[type][spiderman]+": "+players[health][spiderman]+" *Round "+i+" Over* "+ players[type][batman]+": "+players[health][batman]);
        console.log(players[type][spiderman]+": "+players[health][spiderman]+" *Round "+i+" Over* "+ players[type][batman]+": "+players[health][batman]);


        if (players[health][spiderman] <= 0 && players[health][batman] <= 0) {
            alert("You Both Die..");
            console.log("You Both Die..");
            break
        } else if (players[health][spiderman] <= 0 ){
            alert("Winner!: "+players[type][batman]);
            console.log("Winner!: "+players[type][batman]);
            break
        } else if (players[health][batman] <= 0){
            alert("Winner!: "+players[type][spiderman]);
            console.log("Winner!: "+players[type][spiderman]);
            break
        }
    }
}

combat();


})();