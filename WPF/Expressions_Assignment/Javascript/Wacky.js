/**
 * Created by KaseTebo on 1/23/14.
 */
var chicken = 2;
var hamburger = 1;
var fish = 2.50;

var lettuce = 0.25;
var tomatoe = 0.25;
var cheese = 0.50;
var pickles = 0.25;



console.log(
    "Build your own sandwich \n" +
        "Chicken: $"+chicken+".00 \n" +
        "Hamburger: $"+hamburger+".00 \n" +
        "Fish: $"+fish+"\n \n" +

        "Lettuce: $"+lettuce+"\n" +
        "Tomatoes: $"+tomatoe+"\n" +
        "Cheese: $"+cheese+"\n" +
        "Pickles: $"+pickles+"\n"
);

var sandwich = true;
var total = 0;

var burger = prompt("what kind of burger would you like?").toLowerCase();

if (burger == "chicken" ){
    total += chicken;
} else if (burger == "hamburger"){
    total += hamburger;
} else if (burger == "fish"){
    total += fish;
} else {console.log("Not a correct type of burger")}




while (sandwich == true){

    var toppings = prompt("What kind of condiments would you like? \n"+"or end").toLowerCase();

    if (toppings == "lettuce"){
        total += lettuce;
    } else if (toppings == "tomatoes" || toppings == "tomatoe"){
        total += tomatoe;
    } else if (toppings == "cheese"){
        total += cheese;
    } else if (toppings == "pickles"){
        total += pickles;
    } else if (toppings == "end"){
       sandwich = false;
    }




}

console.log("Your sandwich will cost: $"+total);