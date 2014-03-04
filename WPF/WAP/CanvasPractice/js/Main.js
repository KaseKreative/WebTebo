/**
 * Created by KaseTebo on 2/27/14.
 */

(function(){

    var canvas = document.createElement("canvas");
    document.body.appendChild(canvas);
    var ctx = canvas.getContext("2d");
    canvas.width = 400;
    canvas.height = 400;
//
//    ctx.beginPath();
//    ctx.fillStyle = "#00ff00";
//    ctx.rect(170, 170, 60, 60);
//    ctx.fill();
//
//    ctx.beginPath();
//    ctx.fillStyle = "#0000ff";
//    ctx.arc(200, 200, 30, 0, 2*Math.PI);
//    ctx.fill();
//
//    ctx.beginPath();
//    ctx.strokeStyle = "#ff0000";
//    ctx.lineWidth = 2;
//    ctx.moveTo(0,0);
//    ctx.lineTo(400,400);
//    ctx.moveTo(400, 0);
//    ctx.lineTo(0, 400);
//    ctx.stroke();


    for(var i = 0; i < 1000; i++){

        var random = ~~(Math.random()*255);
        var random2 = ~~(Math.random()*255);
        var random3 = ~~(Math.random()*255);

//        ctx.beginPath();
//        ctx.strokeStyle = "rgb("+random+","+random2+","+random3+")";
//        ctx.lineWidth = 2;
//        ctx.moveTo(Math.random()*400, Math.random()*400);
//        ctx.lineTo(Math.random()*400, Math.random()*400);
//        ctx.stroke();

        ctx.beginPath();
        ctx.arc(~~(Math.random()*400), ~~(Math.random()*400), ~~(Math.random()*40), 0, 2*Math.PI);
        ctx.fillStyle = "rgb("+random+","+random2+","+random3+")";
        ctx.fill();


    };







})();