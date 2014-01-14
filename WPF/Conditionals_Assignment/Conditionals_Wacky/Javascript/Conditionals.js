/**
 * Created by KaseTebo on 1/13/14.
 */



var tacos=prompt("What kind of taco do you want?"+"\n"+" Chicken, Beef, Fish");
var howManyTacos=parseInt(prompt("How many tacos do you want?"));

var fish =6;
var chicken =5;
var beef =4;

var chickenPrice = chicken*howManyTacos;
var beefPrice = beef*howManyTacos;
var fishPrice = fish*howManyTacos;

if (tacos == "Chicken".toLowerCase() ){
    console.log("Your price will be $"+chickenPrice);
        } else {
            if ( tacos == "Beef".toLowerCase()){
                console.log("Your price will be $"+beefPrice);
            } else {
                if (tacos == "Fish".toLowerCase()){
                    console.log("Your price will be $"+fishPrice);
                } else {
                    console.log("Incorrect type of taco");
                }}}