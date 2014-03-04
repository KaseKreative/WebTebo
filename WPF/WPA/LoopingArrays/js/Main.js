/**
 * Created by KaseTebo on 2/18/14.
 */

(function(){

//    var grades = [30,46,58];
//    for (var i = 0; i < grades.length;i++){
//        console.log(grades[i]);
//                }
//
//
//    grades.forEach(function(element){
//        console.log(element);
//    });
//
//    var dice = ~~(Math.random()*11+2);
//
//    if (dice == 2){
//        console.log("You rolled a 2");
//    }
//
//    switch (dice){
//        case 2:
//                console.log("You rolled a 2");
//                break;
//        case 3:
//                console.log("You rolled a 3");
//                break;
//        default:
//
//
//    }


    var emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    var email = document.querySelector("#email");
    var button = document.querySelector("#btn");
    button.addEventListener("click", onClick);

    var alert = document.querySelector("#alert");

    var pass = emailPattern.test(email.value);



    function onClick(e){
        if (pass){
            console.log("Nice you know how to type an email address");
        } else {
            alert.innerHTML = "Incorrect email"
        }
    }


})();