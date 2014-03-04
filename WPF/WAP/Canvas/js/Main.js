/**
 * Created by KaseTebo on 2/27/14.
 */
console.log("Start Canvas");

(function(){
var canvas = document.createElement("canvas"); // Creates a canvas element
document.body.appendChild(canvas); // Adds canvas to the DOM
    var ctx = canvas.getContext("2d"); // Gain access to the canvas API
    canvas.height = 400;
    canvas.width  = 400;








    ctx.beginPath(); // Starts drawing path ir resets current path
    ctx.strokeStyle = "#ff0000"; // Sets stroke color
    ctx.lineWidth = 2; // sets stroke size
    ctx.moveTo(200, 0); // Defines the starting point of the line
    ctx.lineTo(200,400); //Defines the ending point of the line
    ctx.stroke(); // render (draws) the line on the canvas


    ctx.beginPath();
    ctx.fillStyle = "ff0000"; // Defines fill color
    ctx.lineWidth = 2;
    ctx.rect(175,175,50,50); // defines the rectangle at x: 175 y: 175 with a width and height of 50
    ctx.fill(); // Renders the fill
    ctx.stroke();


    ctx.beginPath();
    ctx.fillStyle = "00ff00";
    ctx.strokeStyle = "#0000ff";
    ctx.lineWidth = 8;
    ctx.arc(300,100,40,0,2*Math.PI); //Defines the arc at x: 300 y: 100 and a radius of 40
    ctx.stroke();
    ctx.fill();
})();