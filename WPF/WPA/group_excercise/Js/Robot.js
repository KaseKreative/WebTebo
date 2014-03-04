/**
 * Created by KaseTebo on 2/25/14.
 */

(function(){

    Robot.weaponList = ["Axe", "Gun", "Cat", "Bare Hands", "Pencil", "Sword"]
    function Robot(n,r){
        this.name = n;
        this.hand = r;
        this.weapon = Robot.weaponList[~~Math.random()*Robot.weaponList.length];
    }
    Robot.prototype.attack = function (){
        console.log("I am attacking you with my" + this.weapon);
    }

    window.Robot = Robot;
})();