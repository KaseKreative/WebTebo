/**
 * Created by KaseTebo on 1/30/14.
 */
console.log("What are you trying to program?");
var what =prompt ("Game, Software, Plugin").toLowerCase();
var simpleOrComplex = prompt("Simple or Complex?").toLowerCase();



function time (what, simpleOrComplex){

    if (what == "game" && simpleOrComplex == "simple"){
            return "A simple game can take up to a week";
    }   else if (what == "game" && simpleOrComplex == "complex"){
            return "I am not sure how long a game takes to program probably a while"
    }


}