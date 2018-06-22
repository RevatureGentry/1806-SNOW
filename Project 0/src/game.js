var c = document.getElementById("game");
var ctx = c.getContext("2d");

var FPS = 30;
setInterval(function(){
    update();
    draw();
}, 1000/FPS);

function update(){
    ctx.clearRect(0,0, c.width, c.height);
}
function draw(){
    //console.log("Mouse over");
    //ctx.fillStyle = "#020";
    ctx.font = "30px Arial";
    ctx.fillText("hello world", 10, 50);
}

document.getElementById("game").addEventListener("mouseover", draw);
