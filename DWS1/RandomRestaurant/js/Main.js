/**
 * Created by KaseTebo on 3/20/14.
 */

(function(){

   var input = document.querySelector("#input");
   var button = document.querySelector("#button");
   var header = document.querySelector("#header");

    button.addEventListener("click", onClick);

    console.log(input.value);

function onClick(){
    var drinking = Drinking(input.toLowerCase());

    function Drinking (input){
        var drinking = 0;
        if (input == "yes"){
            drinking = 1;
        } else if (input = "no"){
             drinking = 2;
        } else {
            drinking = 3;
        }
        return drinking;
    }

    function Car (drinking){
        if (drinking == 1 || drinking == 2){
          header.innerHTML = "Do you have a car?";
        } else {
          header.innerHTML = "Incorrect Answer";
        }

    }

    Car(drinking);
}

})();