/**
 * Created by KaseTebo on 2/13/14.
 */

(function(){
console.log("Dom Stuff Started");
var button = document.querySelector("#btn");
    //button.removeEventListener("click", onClick);
button.addEventListener("click",onClick);

    var h3 = document.querySelector("#Header");
    var body = document.querySelector("#body");
    var p = document.querySelector("#P1");
    var form1 = document.querySelector("#form1");
    var p2 = document.querySelector("#P2");
    var first = document.querySelector("#first");
    var last = document.querySelector("#last");











function onClick(e){


    h3.innerHTML = "Bye World!";
    h3.style.color = "white";
    body.style.backgroundColor="purple";
    p.style.color = "white";
    p.innerHTML="Told you so.";
    form1.innerHTML = "";
//    p2.innerHTML = "Welcome! "+first+" "+last;

}
})();