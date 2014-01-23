/**
 * Created by KaseTebo on 1/23/14.
 */

var degree = prompt("What degree are you in?") ;
var degreeLength = parseInt(prompt("How long is your degree? \n"+"In Months"));
var failedClasses = prompt("Have you failed any classes? \n").toLowerCase();
var howMany = 0;

if (failedClasses == "yes"){
     howMany = parseInt(prompt("How many classes have you failed?"))
} else if (failedClasses == "no") {
    console.log("");
}

var totalDegreeLength = degreeLength + howMany;

console.log("Your "+degree+" degree length will be: "+ totalDegreeLength+" months");