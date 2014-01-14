/**
 * Created by KaseTebo on 1/13/14.
 */


var experience = parseInt(prompt("How many years of experience do you have?"));
var jobTitle = prompt("What job title are you looking for?\n (Entry, Intermediate, Senior")

if ( jobTitle=="Entry"){
        console.log("Available");
        } else { if (experience<=8 && experience>1  && jobTitle=="Intermediate") {
            console.log("Available");
            } else {   if(experience>8 && jobTitle=="Senior"){
                    console.log("Available");
}else{
    console.log("Insufficient Experience")
}}}