var canvas = document.getElementById("gameScreen");
var ctx = canvas.getContext("2d");
var x = canvas.width/2;
var y = canvas.height-30;

var ballRadius = 10;
var dx = 5;
var dy = -5;

var paddleHeight = 10;
var paddleWidth = 50;
var paddleX = (canvas.width - paddleWidth)/2;

var leftPressed = false;
var rightPressed = false; 

var score = 0; 
var attempts = 3;

var bubble = new Audio("BUBBLE.mp3");

//variables for the bricks
var brickRowCount = 5;
var brickColumnCount = 7;
var brickWidth = 75;
var brickHeight = 20;
var brickPadding = 10;
var brickOffsetTop = 30;
var brickOffsetLeft = 5;

//2d array to hold the bricks
var bricks = [];
for(var c = 0; c < brickColumnCount; c++){
    bricks[c] = [];
    for(var r = 0; r < brickRowCount; r ++){
        bricks[c][r] = {x: 0, y: 0, status: 1};
    }
}

//event listeners for the left and right arrow keys as well as the mouse
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
document.addEventListener("mousemove", mouseMoveHandler, false);

//draw the ball
function drawBall(){    
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "blue";
    ctx.fill();
    ctx.closePath();
}

//draw the paddle
function drawPaddle(){
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "yellow";
    ctx.fill();
    ctx.closePath;
}

//loop through all bricks and draw them to the screen
function drawBricks(){
    for(var c = 0; c < brickColumnCount; c++){
        for(var r = 0; r < brickRowCount; r++){
            if(bricks[c][r].status == 1){
            var brickX = (c * (brickWidth + brickPadding)) + brickOffsetLeft;
            var brickY = (r * (brickHeight + brickPadding)) + brickOffsetTop;
            bricks[c][r].x = brickX;
            bricks[c][r].y = brickY;
            ctx.beginPath();
            ctx.rect(brickX, brickY, brickWidth, brickHeight);
            ctx.fillStyle = "red";
            ctx.fill();
            ctx.closePath();
            }            
        }
    }
}

// draw the score
function drawScore(){
    ctx.font = "16 px Comic Sans"
    ctx.fillStyle = "orange";
    ctx.fillText("Score: " + score, 8, 20);
}

function drawAttempts(){
    ctx.font = "16px Comic Sans";
    ctx.fillStyle = "purple";
    ctx.fillText("Attempts: " + attempts, canvas.width -85, 20);
}

//movent of the ball and paddle
function draw(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawBall();
    drawPaddle();
    drawBricks();
    collisionDetecion();
    drawScore();
    drawAttempts();

    //left and right wall collision detection and change ball's direction
    if(x + dx > canvas.width-ballRadius || x + dx < ballRadius){
        dx = -dx;
    }

   /*top and bottom wall and paddle collision detection 
     change ball's direction if top wall and paddle
     reduce remaining attempts if bottom wall and reset
     game over if out of attempts */ 
    if(y + dy < ballRadius){
        dy = -dy;
    }
    else if(y + dy > canvas.height-ballRadius){
        if(x > paddleX && x < paddleX + paddleWidth){
            dy = -dy;
        }
        else{
            attempts--;
            if(!attempts){
                alert("MWAHAHAHAHA!!! GO BACK TO EASY MODE");
            window.location = "file:///C:/my_git_repos/1806-SNOW/Project_Zero/BreakoutMain.html";
            }
            else{
                x = canvas.width/2;
                y = canvas.height -30;
                dx = 5;
                dy = -5;
                paddleX = (canvas.width - paddleWidth) / 2;
            }
        }
    }

    //move the paddle and keep it in the screen
    if(rightPressed && paddleX < canvas.width-paddleWidth){
        paddleX += 7;
    }
    else if(leftPressed && paddleX > 0){
        paddleX -= 7;
    }

    x += dx;
    y += dy;

    // cause the draw function to repeatedly call itself
    requestAnimationFrame(draw);
}

//handler for left and right keys pressed down
function keyDownHandler(e){
    if(e.keyCode == 39){
        rightPressed = true;
    }
    else if(e.keyCode == 37){
        leftPressed = true;
    }
}

// handlers for left and right keys up
function keyUpHandler(e){
    if(e.keyCode == 39){
        rightPressed = false;
    }
    else if(e.keyCode == 37){
        leftPressed = false;
    }
}

//handler for mouse movement
function mouseMoveHandler(e){
    var relativeX = e.clientX - canvas.offsetLeft;
    if(relativeX > 0 && relativeX < canvas.width){
        paddleX = relativeX - paddleWidth/2;
    }
}

/*loop through all the bricks
compair their position with the ball's position
add one point to score per brick
end game when all bricks are broken*/
function collisionDetecion(){
    for(var c = 0; c < brickColumnCount; c++){
        for(var r = 0; r < brickRowCount; r++){
            var b = bricks[c][r];
            if(b.status == 1){
                if(x > b.x && x < b.x + brickWidth && y > b.y && y < b.y + brickHeight){
                    dy = -dy;
                    b.status = 0;
                    score++;
                    bubble.play();
                    if(score == brickRowCount * brickColumnCount){
                        alert("GWAAAA NOOOO!!!!!")
                        window.location = "file:///C:/my_git_repos/1806-SNOW/Project_Zero/BreakoutMain.html";
                    }
                } 
            }
        }
    }
}

//call the draw function 
draw();