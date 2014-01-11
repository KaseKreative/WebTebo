/**
 * Created by KaseTebo on 1/10/14.
 */

//Stuff Your Face I

//var CompetitorsWeight=parseInt(prompt("What is your weight?"));
//
////If the competitor is under 250
//
//if (CompetitorsWeight > 250){
//    console.log("The competitor qualifies for the heavyweight division");
//
//} else {
//    console.log("The competitor needs to gain some weight");
//}


//Celsius to Fahrenheit converter

//var Degrees =parseInt(prompt("What is the temperature?"));
//var ForC = prompt("F or C?");
//
//if (ForC == "F"){
//   console.log("The temperature is "+ ((Degrees - 32)*(5/9))+ " degrees Celsius");
//}else if (ForC == "C"){
//     console.log("The temperature is "+ (Degrees*(9/5)+32) +"degrees Fahrenheit");
//}else {
//    console.log("Incorrect Scale of Temperature")
//}


// Check The Login

//var Username="KaseKreative";
//var Password="Password";
//
//var EnteredUsername= prompt("Username:");
//var EnteredPassword= prompt("Password:");
//
//if(EnteredUsername =="KaseKreative") {
//    if(EnteredPassword =="Password"){
//            console.log("Welcome! " + Username);
//    }else{
//            console.log("Incorrect Password");
//     }
//
//
//} else {
//    console.log("Incorrect Username");
//}


//Movie Ticket Price

var TimeOfMovie=parseInt(prompt("Time of movie?"));
var AgeOfCustomer=parseInt(prompt("Age?"));

var Price="$12.00";
var DiscountPrice="$7.00";


if (AgeOfCustomer>=55 || AgeOfCustomer <=10){
        console.log("The ticket price is" + " " + DiscountPrice);
    } else {
        if(TimeOfMovie>=3 && TimeOfMovie<=5){
                console.log("The ticket price is" + " " + DiscountPrice);
             } else {
                console.log("The ticket price is" + " " + Price);
        }
}




