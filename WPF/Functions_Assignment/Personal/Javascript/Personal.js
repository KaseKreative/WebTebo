/**
 * Created by KaseTebo on 1/28/14.
 */


console.log("Rock Paper Scissors!");
var choice=prompt("Rock, Paper or Scissors?").toLowerCase();


function rockPaperScissors(choice){
    var opponent = Math.ceil(Math.random()*3);
    var final = "";;

    if (opponent == 1){
         opponent = "Rock";
    } else if (opponent == 2){
         opponent = "Paper";
    } else {
        opponent = "Scissors";
    }


    if (choice == "rock" && opponent == "Scissors"){
         final = "You: Rock"+"\n"+
                  "Opponent: Scissors"+"\n"+
                  "You Win!";
    } else if (choice == "rock" && opponent =="Paper"){
         final = "You: Rock"+"\n"+
                 "Opponent: Paper"+"\n"+
                 "You Lose!";
    } else if (choice == "rock" && opponent == "Rock"){
         final = "You: Rock"+"\n"+
                 "Opponent: Rock"+"\n"+
                 "It's a Tie!"
    } else if (choice == "paper" && opponent == "Scissors"){
        final = "You: Paper"+"\n"+
            "Opponent: Scissors"+"\n"+
            "You Lose!";
    } else if (choice == "paper" && opponent =="Paper"){
        final = "You: Paper"+"\n"+
            "Opponent: Paper"+"\n"+
            "It's a Tie!";
    } else if (choice == "paper" && opponent == "Rock"){
        final = "You: Paper"+"\n"+
            "Opponent: Rock"+"\n"+
            "You Win!";
    } else if (choice == "scissors" && opponent == "Scissors"){
        final = "You: Scissors"+"\n"+
            "Opponent: Scissors"+"\n"+
            "It's a Tie!";
    } else if (choice == "scissors" && opponent =="Paper"){
        final = "You: Scissors"+"\n"+
            "Opponent: Paper"+"\n"+
            "You Win!";
    } else if (choice == "scissors" && opponent == "Rock"){
        final = "You: Scissors"+"\n"+
            "Opponent: Rock"+"\n"+
            "You Lose!"
    }


    return final;

}

console.log(rockPaperScissors(choice));