// sets the canvas
var canvas = document.getElementById('myCanvas'); // gets the myCanvas Id
var ctx = canvas.getContext('2d'); // gets the 2d rendering context

// sets starting position of ball
var x = canvas.width/2; 
var y = canvas.height-30; 

//small values to update the position of the ball
var dx = 2;
var dy = -2;
var ballRadius = 10;

// creates values for the paddle size
var paddleHeight = 10;
var paddleWidth = 75;
var paddleX = (canvas.width-paddleWidth)/2;

//variables to check whether left or right key is pressed
var goRight = false; 
var goLeft = false;

//variables for the bricks
var bricks = [];
var brickRowCount = 5;
var brickColumnCount = 5;
var brickWidth = 75;
var brickHeight = 20;
var brickPadding = 10;
var brickOffsetTop = 30;
var brickOffsetLeft = 30;

//variables to hold the score and lives of the game
var score = 0;
var lives = 5;

// holds number of rows and columns for bricks in a 2D array
for(var c=0; c<brickColumnCount; c++) 
    {
        bricks[c] = [];
        for(var r=0; r<brickRowCount; r++) 
            {
                bricks[c][r] = { x: 0, y: 0, status: 1};
            }
    }


// event listeners to listen for left and right clicks and mouse movement, set to false because initially because no key has been pressed
document.addEventListener('keydown', keyDownHandler, false); 
document.addEventListener('keyup', keyUpHandler, false);    
document.addEventListener("mousemove", mouseMoveHandler, false);

function mouseMoveHandler(e) 
    {
        var relativeX = e.clientX - canvas.offsetLeft;
        if(relativeX > 0 && relativeX < canvas.width) 
            {
                paddleX = relativeX - paddleWidth/2;
            }
    }

//when a key is pressed down this function will change the values to true and make the paddle move
function keyDownHandler(e) 
{
    if(e.keyCode == 39) 
    {
        goRight = true;
    }
    else if(e.keyCode == 37) 
    {
        goLeft = true;
    }
}

// the key is no longer being pressed, or not being pressed at all sets the values back to false to stop the paddle from moving
function keyUpHandler(e) 
{
    if(e.keyCode == 39) 
    {
        goRight = false;
    }
    else if(e.keyCode == 37) 
    {
        goLeft = false;
    }
}


function collisionDetection() 
    {
        for(var c=0; c<brickColumnCount; c++) 
            {
             for(var r=0; r<brickRowCount; r++) 
                {
                    var b = bricks[c][r];

                    if(b.status == 1)
                        {
                            if(x > b.x && x < b.x+brickWidth && y > b.y && y < b.y+brickHeight) 
                                {
                                    dy = -dy;
                                    b.status = 0;
                                    score++;
                                    
                                        if(score == brickRowCount*brickColumnCount) 
                                            {
                                                alert("YOU WIN, CONGRATULATIONS!");
                                                document.location.reload()
                                            }
                                }
            
                        }
    
                }             
            } 
    }        

    var bouncingSound = new Audio('bounce')

function drawScore()
    {
        ctx.font = '16px Arial';
        ctx.fillStyle = '0095DD';
        ctx.fillText('Score: ' + score, 8,20)
    }

function drawLives()
    {
        ctx.font = "16px Arial";
        ctx.fillStyle = "#0095DD";
        ctx.fillText("Lives: "+lives, canvas.width-65, 20);
    }


 // function to create the ball        
function drawBall()
    {
        ctx.beginPath();
        ctx.arc(x, y, ballRadius, 0, Math.PI*2); // creates the red ball
        ctx.fillStyle = "red"; // determines color of ball
        ctx.fill(); // paints the color of the
        ctx.closePath(); 
    }
// function to create the paddle
function drawPaddle() 
    {
        ctx.beginPath();
        ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
        ctx.fillStyle = "#0095DD";
        ctx.fill();
        ctx.closePath();
    }
 
// functions to draw bricks
function drawBricks() 
    {
        for(var c=0; c<brickColumnCount; c++) 
            {
                 for(var r=0; r<brickRowCount; r++) 
                    {
                        if(bricks [c][r].status == 1)
                            {
                                var brickX = (c*(brickWidth+brickPadding))+brickOffsetLeft;
                                var brickY = (r*(brickHeight+brickPadding))+brickOffsetTop;

                                bricks[c][r].x = brickX;
                                bricks[c][r].y = brickY;
                                ctx.beginPath();
                                ctx.rect(brickX, brickY, brickWidth, brickHeight);
                                ctx.fillStyle = "#0095DD";
                                ctx.fill();
                                ctx.closePath();
                            }
                    }
            }
    }

// function that draws the path that the ball and paddle will go
function draw()
    {
        ctx.clearRect(0,0,canvas.width, canvas.height);
        drawBricks();
        drawBall();
        drawPaddle();
        drawScore();
        drawLives();
        collisionDetection();

        if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) // Allows the ball to bounce off the left and right side of the canvas)
            {
              dx = -dx;  
            }
        if(y + dy < ballRadius)  // Allows the ball to bounce off the botom and top of the canvas
            {
                dy = -dy;
            }
            else if(y + dy > canvas.height-ballRadius) 
                {
                    if (x > paddleX && x < paddleX + paddleWidth) // allows the ball to bounce off the paddle
                        {
                            dy = -dy;
                        }
                
             else // end game cause
                {
                    lives--; //decrease number of lives if the ball hits the bottom of canvas
                        if (!lives)
                        {
                            alert("YOU LOSE, GAME OVER"); 
                            document.location.reload();
                        }
                        else
                        {
                            x = canvas.width/2;
                            y = canvas.height-30;
                            dx = 2;
                            dy = -2;
                            paddleX = (canvas.width-paddleWidth)/2;
                            setInterval(draw(), 0.5);
                        }
                }
        }   

        if(goRight && paddleX < canvas.width-paddleWidth) 
        {
            paddleX += 7;                       //if the right key is pressed, move the paddle 7 pixels to the right
        }
        else if(goLeft && paddleX > 0) 
        {
            paddleX -= 7;                       //if the left key is pressed, move the paddle 7 pixels to the left
        }

        x += dx;
        y += dy;
        requestAnimationFrame(draw);
    }

draw();

   