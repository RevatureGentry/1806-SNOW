const canvas = document.getElementById("thecanvas");
const canvasContex = canvas.getContext("2d");

var x = canvas.width/2; // Puts the ball at the middle of screen
var y = canvas.height-30; // Puts the ball at the bottom of the screen
var dx = 3;
var dy = -3;
const ballRadius = 10; // Change this for a different ball size
var paddleHeight = 12.5; // Change this for different paddle height
var paddleWidth = 75; // Change this for different paddle width
var paddleX = (canvas.width-paddleWidth)/2; // Puts the paddle in the middle of the screen

// The Bricks Attributes
function drawBricks() {
    for (var c=0; c<brickColumnCount; c++) {
        for(var r = 0; r<brickRowCount; r++) {
            // Draws bricks with a status of 2 with magenta
            if(bricks [c][r].status == 2) {
                var brickX = (c*(brickWidth+brickPadding)) + brickOffsetLeft;
                var brickY = (r*(brickHeight+brickPadding)) + brickOffsetTop;
    
                bricks[c][r].x = brickX;
                bricks[c][r].y = brickY;
                
                canvasContex.beginPath();
                canvasContex.rect(brickX, brickY, brickWidth, brickHeight);
                canvasContex.fillStyle = "#f442f1";
                canvasContex.fill();
                canvasContex.closePath();  
            }
            // Draws bricks with a status of 1 with red
            else if(bricks [c][r].status == 1) {
                var brickX = (c*(brickWidth+brickPadding)) + brickOffsetLeft;
                var brickY = (r*(brickHeight+brickPadding)) + brickOffsetTop;
    
                bricks[c][r].x = brickX;
                bricks[c][r].y = brickY;
                
                canvasContex.beginPath();
                canvasContex.rect(brickX, brickY, brickWidth, brickHeight);
                canvasContex.fillStyle = "#E20000";
                canvasContex.fill();
                canvasContex.closePath();  
            }
        }
    }
}

// The Ball Attributes 
function drawBall () {
    canvasContex.beginPath();
    canvasContex.arc(x, y, ballRadius, 0, Math.PI*3); // This is the size of the ball
    canvasContex.fillStyle = "#34D41A"; // Changes the color of the ball
    canvasContex.fill();  // Fills the ball
    canvasContex.closePath(); 
}

// The Paddle attributes 
function drawPaddle() {
    canvasContex.beginPath();
    canvasContex.rect(paddleX, canvas.height-(paddleHeight + 10), paddleWidth, paddleHeight);
    canvasContex.fillStyle = "#0095DD";
    canvasContex.fill();
    canvasContex.closePath();
}

var score = 0;
// Draw the score on the canvas
function drawScore() {
    canvasContex.font = "16px Arial";
    canvasContex.fillStyle = "#000000";
    canvasContex.fillText ("Score: " + score, 8, 20);
}

var lives = 3;
// Draw how many lives on the canvas
function drawLives() {
    canvasContex.font = "16px Arial";
    canvasContex.fillStyle = "#000000";
    canvasContex.fillText("Lives: " + lives, canvas.width - 65, 20);
}
function gameOver(){
    canvasContex.font = "32px Arial";
    canvasContex.fillStyle = "#000000";
    canvasContex.textAlign = "center";
    canvasContex.fillText("Game Over!", canvas.width/2, canvas.height/2);
    canvasContex.fillText("Score: " + score,canvas.width/2, canvas.height/1.5);
    
}

function win(){
    canvasContex.font = "32px Arial";
    canvasContex.fillStyle = "#000000";
    canvasContex.textAlign = "center";
    canvasContex.fillText("YOU WIN!!!!", canvas.width/2, canvas.height/2);
    canvasContex.fillText("Score: " + score, canvas.width/2, canvas.height/1.5);
}

// Draw a button
function drawButton() {
    canvasContex.beginPath();
    document.getElementById("overlay").style.display = "block";
    canvasContex.closePath();
}

// This draws the ball on the canvas
function draw() {
    canvasContex.clearRect(0, 0, canvas.width, canvas.height);
    drawBricks();
    drawBall();
    drawPaddle();
    collisionDetection();
    drawScore();
    drawLives();

    // Ball Movement if spacePressed is true
    if (spacePressed == true) {
        x += dx;
        y += dy; 
    }


    // Checks to see if the ball is hitting the top/bottom sides of the canvas
    if( y + dy < ballRadius + 20) {
        dy = -dy;
    }else if (y + dy > canvas.height-ballRadius) {
        if(x > paddleX && x < paddleX + paddleWidth) {
            if(x > paddleX && x < paddleX + (paddleWidth/2)){
                dx = -3;
                dy = -dy;
            }else if (x> paddleX && x < paddleX + paddleWidth && x > paddleWidth/2){
                dy = -dy;
                dx = 3;
            }
            
            console.log(paddleX);
            console.log(dx, dy);
            console.log(x, y);
         }else {
            lives --;
            spacePressed = false;
            if(!lives) {
                dx = 0;
                dy = 0;                            
            }else {
                x = canvas.width/2;
                y = canvas.height-30;
                dx = 3;
                dy = -3;
                paddleX = (canvas.width - paddleWidth)/2;
            }           
        }
    }
    
    // Checks to see if the ball is hitting the left/right sides of the canvas
    if (x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }

    // Moves the paddles left or right depending on what key is presed. It all depends on if spacePressed equals false or true. 
    if (spacePressed == false) {
        if(rightPressed && paddleX < canvas.width-paddleWidth) {
            paddleX += 7;
            x += 7;
        } else if (leftPressed && paddleX > 0) {
            paddleX -= 7;
            x -=7;
        }        
    }else if (spacePressed == true){
        if(rightPressed && paddleX < canvas.width-paddleWidth) {
            paddleX += 7;
        } else if (leftPressed && paddleX > 0) {
        paddleX -= 7;
        }
    }

    // This redraws the draw() function every frame, at a much smoother rate than setInterval. It also only draws if the lives are above 0. It pushes the gameOver() function if the lives equal 0. It also checks if the player has won pushes the win() function. 
    if (lives > 0){
        requestAnimationFrame(draw);
    }else if(lives == 0){
        gameOver();
    }else if (score === brickRowCount*brickColumnCount + 11){
        win();
    } 
}

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

var rightPressed = false;
var leftPressed = false;
var spacePressed = false;
// When you press down the Left Arrow Key, the Right Arrow Key, or the Space bar, leftPressed, rightPressed, and spacePressed turn true. 
function keyDownHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = true;
        if(lives == 0) {
            rightPressed = false;
        }
    }
    else if(e.keyCode == 37) {
        leftPressed = true;
        if(lives == 0) {
            leftPressed = false;
        }
    }else if (e.keyCode == 32) {
        spacePressed = true;
    }
}

// When you stop pressing down the Left Arrow Key or Right Rrrow Key, leftPressed and rightPressed turn false.
function keyUpHandler(e) {
    if (e.keyCode == 39) {
        rightPressed = false;
    }
    else if (e.keyCode == 37) {
        leftPressed = false;
    }
}

// Sets the interval at which the ball is drawn.  Allows for the ball movement
draw();

// All the brick variables
var brickRowCount = 5; // Change this for more rows of bricks
var brickColumnCount = 6; // Change this for more columns of bricks
var brickWidth = 70; // Change this for different brick width 
var brickHeight = 15; // Change this for different brick height
var brickPadding = 10; // CHange this for the padding between the bricks
var brickOffsetTop = 25;
var brickOffsetLeft = 15;

// Putting the bricks into the arrays
var bricks = [];
for (var c=0; c < brickColumnCount; c++) {
    bricks[c] = [];
    for(var r=0; r < brickRowCount; r++) {
        // All bricks except at row index 0 only need to be hit once
        if (bricks[c][1]){
            bricks[c][r] = {x: 0, y: 0, status: 1};
        }
        // All bricks at row index 0 need to be hit twice
        else {
            bricks[c][r] = { x: 1, y: 1, status: 2};
        }
    }
}

// Changes the direction of the ball when it hits the brick
function collisionDetection() {
    for(var c = 0; c < brickColumnCount; c++) {
        for(var r = 0; r < brickRowCount; r++) {
            var b = bricks [c][r];
            if(b.status == 2){
                if ( x > b.x && x < b.x + brickWidth && y > b.y && y < b.y + brickHeight) {
                    dy = -dy;
                    b.status = 1;
                    score ++;
                 }
            }
            else if(b.status == 1) {
                if ( x > b.x && x < b.x + brickWidth && y > b.y && y < b.y + brickHeight) {
                   dy = -dy;
                   b.status = 0;
                   score++;
                }
            }
        }
        if(score === brickRowCount*brickColumnCount + 12) {
            win();
            dy = 0;
            dx = 0;
        }
    }
}

const restartButton = document.getElementById("restartButton");

function restart() {
    document.location.reload();
}
