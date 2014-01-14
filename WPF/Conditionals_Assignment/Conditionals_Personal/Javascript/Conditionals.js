/**
 * Created by KaseTebo on 1/13/14.
 */


var videoGames=parseInt(prompt("How many video games do you own?"));
var consoles=parseInt(prompt("How many consoles do you own?"));

if(videoGames>=50){
        console.log("Wow you have a lot of video games.");
} else {
    console.log("A decent amount but you need more games!");
}

if(consoles==2){
    console.log("That's about average for consoles.")
} else {
    if(consoles>=2){
        console.log("How's the rich life treating you?")
    } else {
        console.log("Get some more consoles!")
    }}