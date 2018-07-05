var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var paddleHeight = 20;
var paddleWidth = 150;
var paddleX = (canvas.width-paddleWidth)/2;
var paddleX2 = (canvas.width-paddleWidth)/2;
var x = canvas.width/2;
var y = canvas.height-60;
var dx2 = 3.2;
var dx = 3;
var dy = 3;
var play1RightPressed = false;
var play1LeftPressed = false;
var ballRadius = 20;
var score1 = localStorage.getItem("on_load_counter");
var r1 = document.getElementById("score").rows[2].cells;
var r2 = document.getElementById("score").rows[3].cells;
if (score1 === null){
    score1 = 0;
    //document.getElementById('score1').innerHTML = `Player 1: ${score1}`;
    r1[1].innerHTML = score1;
}
else{
    r1[1].innerHTML = score1;
}
var scorePlay2 = localStorage.getItem("on_load_counter2");
if (scorePlay2 === null){
    scorePlay2 = 0;    
    //document.getElementById('score2').innerHTML = `Player 2: ${scorePlay2}`;
    r2[1].innerHTML = scorePlay2;
}
else{
    r2[1].innerHTML = scorePlay2;
}
document.addEventListener("keydown", keyPlay1DownHandler,false);
document.addEventListener("keyup", keyPlay1UpHandler, false);

function keyPlay1DownHandler(e){
    if(e.keyCode == 39){
        play1RightPressed = true;
    }
    else if(e.keyCode == 37){
        play1LeftPressed = true;
    }
}

function keyPlay1UpHandler(e){
    if(e.keyCode == 39){
        play1RightPressed = false;
    }
    else if(e.keyCode == 37){
        play1LeftPressed = false;
    }
}

function drawBall(){
    ctx.beginPath();
    ctx.arc(x,y,ballRadius,0,Math.PI*2);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.closePath();
}

function drawPlayer1(){
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.closePath();
}

function drawPlayer2(){
    ctx.beginPath();
    ctx.rect(paddleX2, 0, paddleWidth, paddleHeight);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.closePath();
}

function pong(){
    ctx.clearRect(0,0,canvas.width, canvas.height);
    drawBall();
    drawPlayer1();
    drawPlayer2();

    if(x+dx > canvas.width-ballRadius || x+dx < ballRadius){
        dx = -dx;
        dx2 = -dx2;
    }

     if(paddleX2 + dx2 > canvas.width-paddleWidth || paddleX2 + dx2 < 0){
        dx2 = -dx2;
    } 

    if(y + dy < ballRadius){
        if (x > paddleX2 && x < paddleX2 + paddleWidth){
            dy = -dy;
        }
    
        else{
            //alert("GAME OVER!");
            
            //document.getElementById('score1').innerHTML = `Player 1: ${score1}`;
            if(score1 == 9){
                // score1 = 0;
                // scorePlay2 = 0;
                // localStorage.setItem("on_load_counter", score1);
                // localStorage.setItem("on_load_counter2", scorePlay2);
                document.location.reload();
                redirect1();
                function redirect1(){
                    // alert("Player WINS");
                    window.location="cpulose.html"
                    localStorage.removeItem('on_load_counter');
                    localStorage.removeItem('on_load_counter2');
                }
            } 
            else{
                localStorage.setItem("on_load_counter", parseInt(score1)+1);
                document.location.reload();
            }
        }
    }
    else if(y+dy > canvas.height-ballRadius){
        if (x > paddleX && x < paddleX + paddleWidth){
            dy = -dy;
        }
    
        else{
            //score++;
            //localStorage.setItem('on_load_counter', score);
            //console.log(score);
           // document.getElementById('score2').innerHTML = `Player 2: ${scorePlay2}`;

            if(scorePlay2 == 9){
                // score1 = 0;
                // scorePlay2 = 0;
                // localStorage.setItem("on_load_counter", score1);
                // localStorage.setItem("on_load_counter2", scorePlay2);
                // document.location.reload();
                redirect2();
                function redirect2(){
                    //alert("CPU WINS");
                    window.location="cpuwins.html"
                    localStorage.removeItem('on_load_counter');
                    localStorage.removeItem('on_load_counter2');
                }
            }
            else{
                localStorage.setItem("on_load_counter2", (parseInt(scorePlay2)+1));
                document.location.reload();
            }
        }
    }

    if(play1RightPressed && paddleX < canvas.width-paddleWidth){
        paddleX += 7;
    }
    else if(play1LeftPressed && paddleX > 0){
        paddleX -= 7;
    }

    paddleX2 += dx2;
    x += dx;
    y += dy;

}
console.log(score1);
console.log(scorePlay2);
setInterval(pong, 1);