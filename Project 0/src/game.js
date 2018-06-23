var c = document.getElementById("game");
var ctx = c.getContext("2d");
var FPS = 30;
var posX = 50;
var posY = 50;
var keyState = {};
var player = {
    color: "#0BA",
    x: 220,
    y: 270,
    width: 20,
    height: 20,
    draw: function(){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
};

setInterval(function(){
    update();
    draw();
    if(keyState[38]){
        console.log("confirmed");
        player.y -= 2;
    }
    if(keyState[37]){
        console.log("confirmed");
        player.x -= 2;
    }
    if(keyState[39]){
        console.log("confirmed");
        player.x += 2;
    }
    if(keyState[40]){
        console.log("confirmed");
        player.y += 2;
    }
    player.x = player.x.clamp(0, c.width - player.width);
    player.y = player.y.clamp(0, c.height - player.height);
}, 1000/FPS);

function update(){
   posX += 1;
   posY += 1;
}
function draw(){
    //console.log("Mouse over");
    //ctx.fillStyle = "#020";
    ctx.clearRect(0,0, c.width, c.height);
    player.draw();
}
document.addEventListener('keydown', function(e){
    keyState[e.keyCode || e.which] = true;
    
})
document.addEventListener('keyup', function(e){
    keyState[e.keyCode || e.which] = false;
}, true);
//document.getElementById("game").addEventListener("mouseover", draw);
