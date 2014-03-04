/**
 * Created by KaseTebo on 2/22/14.
 */

(function(){

    function House(c,a){
        this.color = c;
        this.age = a;
    }
    var patricksHouse = new House("White", 12);
    var scottsHouse = new House("Green", 25);
    console.log(patricksHouse.color);
    console.log(scottsHouse.color);







    var colors = ["Purple","Brown","Orange","Green","Blue","Pink","Turqouise","Red","Yellow","Navy"];
    var houses = [];


    for (var i = 0; i < 1000; i++){
        var color = colors[~~(Math.random()*colors.length)];
        var house = new House(color,~~(Math.random()*99+1));
        houses.push(house);
    }
//        console.log(houses);

    function listHouses(){
        for(var i=0; i<houses.length;i++){
            console.log("House Number: "+i+ "\n"+ "Color: " + houses[i].color + "\n"+"Age: " +  houses[i].age)
        }
    }

listHouses();



houses.forEach(function(element){

})








})();








