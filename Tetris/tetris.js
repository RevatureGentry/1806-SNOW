
//ids the canvas created in my Html file and gets the context as 2d as apposed to 3d canvas
const canvas = document.getElementById('tetris');
const context = canvas.getContext('2d');


//sets the scale of my canvas
context.scale(20,20);


//the function for writing the score on the page
function updateScore(){
    document.getElementById('score').innerText = "Score:" + player.score;
}


//this function fills the rectangel in my canvas black 
//and sets the width and hight to the max size of the canvas
//this also hoists a fuction DrawMatirx which draws an unseen grid of 0s
// and then creates pices if the number is not 0
function draw(){
    context.fillStyle = 'black';
    context.fillRect(0,0, canvas.width, canvas.height);

    drawMatrix(arena, {x: 0, y: 0});
    drawMatrix(player.matrix, player.pos);
}

//this function first runs a for loop checking for certain paramiters within my arena runing the length
//it is checking to see if all numbers in the preveously mentioned number grid are not 0 on any one row
//if it finds a full non 0 row it delets it updates the score and refills the row with 0s
//it the nmoves on the next row and give the player points
 function arenasweep(){
     let rowCount = 1;
     outer: for (let y = arena.length - 1; y > 0; --y){
         for (let x = 0; x < arena[y].length; ++x){
             if (arena[y][x] === 0){
                 continue outer;
             }
         }

         const row = arena.splice(y, 1)[0].fill(0);
         arena.unshift(row);
         ++y;
         player.score += rowCount * 100;
         rowCount += 2;
     }
 }


 //this function is where the pieces are made
 //I used objects stored in arrays with 0s and a corisponding number for each piece
function createPiece(type){
    if (type === 'T'){
       return  [
            [0,0,0],
            [1,1,1],
            [0,1,0],
        
        ];
    }else if(type === 'O'){
        return  [
             [2,2],
             [2,2],
         
         ];
        }else if(type === 'L'){
            return  [
                [0,3,0],
                [0,3,0],
                [0,3,3],
             
             ];
            }else if(type === 'J'){
                return  [
                    [0,4,0],
                    [0,4,0],
                    [4,4,0],
                 
                 ];
                } else if(type === 'I'){
                    return  [
                        [0,5,0,0],
                        [0,5,0,0],
                        [0,5,0,0],
                        [0,5,0,0],
                     
                     ];
                    }else if(type === 'S'){
                        return  [
                            [0,6,6],
                            [6,6,0],
                            [0,0,0],
                         
                         ];
                        }
                        else if(type === 'Z'){
                            return  [
                                [7,7,0],
                                [0,7,7],
                                [0,0,0],
                             
                             ];
                            }
}


//this function takes an imput and uses it to alter the players current x postion
//it also checks to see if the player has colided with the arena and moves them so they don't go off the map
function playerMove(dir){
    player.pos.x += dir;
    if(collide(arena, player)){
        player.pos.x -= dir;
    }
}


//this is an array of colors used to give my pieces individual color
const colors = [
    null,
    'red',
    'blue',
    'orange',
    'green',
    'violet',
    'purple',
    'pink',
]


//this function takes in the arena ans the current position of the player 
//and uses that to see if the player has touched the walls 
function collide(arena, player){
    const [m,o] = [player.matrix, player.pos];
    for (let y = 0; y < m.length; ++y){
        for(let x = 0; x< m[y].length; ++x){
            if(m[y][x] !== 0 && 
                (arena[y+ o.y]&&
                arena[y+o.y][x+o.x]) !==0) {
                    return true;
                }
        }
    }
    return false;
}


//this sets up the a blank matrix for me to put a piece in
function createMatrix(w,h){
    const matrix = [];
        while(h--){
            matrix.push(new Array(w).fill(0));
        }
        return matrix;
}


//this is the magic....it takes in the preveously created matrix and an offset to be added later
//it then runs a for each thrugh out the created matrix in both the x and y axis 
//checks if the value is not 0 if it isnint the color in the colors array that corosponds to the number is added
//it then draws a rect around each non 0 in the matrix giving us our piece
function drawMatrix(matrix, offset){
    matrix.forEach((row, y)=>{
        row.forEach((value,x) => {
            if (value !==0){
                context.fillStyle = colors[value];
                context.fillRect(x + offset.x,
                                 y + offset.y,
                                 1, 1);
            }
        });
    });
}


//merges the arena and player into one array (grid) of numbers 
function merge(arena, player){
    player.matrix.forEach((row,y)=>{
        row.forEach((value,x)=>{
            if (value!== 0){
                arena[y+player.pos.y][x+player.pos.x] = value;
            }
        });
    });
}

//little lets for player scores in the top 5
let topOne = 0;
let topTwo = 0;
let topThree = 0;
let topFour = 0;
let topFive = 0;

//function for changeing top score refreshing the page will get rid of them
function topScore(){
    if (player.score > topOne){
        topFive = topFour;
        topFour = topThree;
        topThree = topTwo;
        topTwo = topOne;
        topOne = player.score;
    } else if (player.score > topTwo && player.score < topOne) {
        topFive = topFour;
        topFour = topThree;
        topThree = topTwo;

        topTwo = player.score;
    }else if (player.score > topThree && player.score < topTwo) {
        topFive = topFour;
        topFour = topThree;

        topThree = player.score;
    }else if (player.score > topFour && player.score < topThree) {
        topFive = topFour;
     
        topFour = player.score;
    }else if (player.score > topFive && player.score < topFour) {
        topFive = player.score;
    }
}


//this drops the player down and if they colide with something on the underside of the piece it turns it into arena
//that allows me to stack pieces and have the game now they are no longer the player.
function playerDrop(){
    player.pos.y++;
    if(collide(arena, player)){
        player.pos.y--;
        merge(arena, player);
        playerReset();
        arenasweep();
        updateScore();
    }
    dropCounter = 0;
}

//i have a need a need for speed 
//i feel bad about that one
let levelSpeed;


//this increments the level and speed based on player score
//it goes up to 11
function updateLevelSpeed(){
if (player.score < 1000){
    player.level = 1;
levelSpeed = 600;
} else if (player.score < 2000){
    player.level = 2;
levelSpeed = 550;
}
else if (player.score < 3000){
    player.level = 3;
    levelSpeed = 500;
}else if (player.score < 4000){
    player.level = 4;
    levelSpeed = 450;
}else if (player.score < 5000){
    player.level = 5;
    levelSpeed = 400;
}else if (player.score < 6000){
    player.level = 6;
    levelSpeed = 350;
}
else if (player.score < 7000){
    player.level = 7;
    levelSpeed = 300;
}else if (player.score < 8000){
    player.level = 8;
    levelSpeed = 250;
}else if (player.score < 9000){
    player.level = 9;
    levelSpeed = 200;
}else if (player.score < 10000){
    player.level = 10;
    levelSpeed = 1500;
}else if (player.score < 11000){
    player.level = 11;
    levelSpeed = 100;
}
document.getElementById('level').innerText = "Level:" + player.level;
}


//a counter to count down to a drop
//the the number it counts too
//gets modifyied by the above function
let dropCounter = 0;
let dropInterval = 1000;
//to help rest the drop counter
let lastTime = 0;
//drops the player every n seconds or so
//draws the player to ceek it looking like it is falling 
function update(time = 0){
    const deltaTime = time - lastTime;
    lastTime = time;
    dropInterval = levelSpeed;
    dropCounter += deltaTime;
    
    if (dropCounter > dropInterval){
        playerDrop();
    }
    draw();
    updateLevelSpeed();
    requestAnimationFrame(update);
   
    }

//creates the arana matrix to be hoised up
const arena = createMatrix(12,20);
// info on player with starting position and null matrix to be filled as i plaese 
const player = {
    pos : {x: 0, y: 0},
    matrix : null,
    score : 0,
    level : 1,
}


//this hoists a function caled rotate giving it a direction and giving it the player matrix to use
//this also detects if rotating would putth e piece into the wall and offsets to keep the player on the playing field
function playerRotate(dir){
    const pos = player.pos.x;
    let offset = 1
    rotate(player.matrix, dir); 
    while(collide(arena, player)){
        player.pos.x += offset;
        offset = -(offset + (offset > 0 ? 1 : -1));
        if (offset > player.matrix[0].length){
            rotate(player.matrix, -dir);
            player.pos.x = pos;
            return; 
        }
    }
}


//this function has two utilities when a player has placed down a piece i call thins function to randomly generate
//a piece using math random
//and if i gnerate a piece and it instanly colides with the top of the box i reset the game and generate my top five scores
function playerReset(){
    const pieces = 'ILJOTSZ';
    player.matrix = createPiece(pieces[pieces.length * Math.random()| 0]);
    player.pos.y = 0;
    player.pos.x = (arena[0].length / 2 | 0) - 
                    (player.matrix[0].length / 2 | 0);
    if(collide(arena, player)){
        arena.forEach(row => row.fill(0));
        topScore();
        document.getElementById('score1').innerText = "King or Queen Or Nongender Ruler:" + topOne;
        document.getElementById('score2').innerText = "First Loser:" + topTwo;
        document.getElementById('score3').innerText = "Try Again:" + topThree;
        document.getElementById('score4').innerText = "Not Even Close:" + topFour;
        document.getElementById('score5').innerText = "Your Doing This on Purpose:" + topFive;
        player.score = 0;
        updateScore();
    }
}


//this function rotates the matrix based on a direction and a position taking the array of objects that is the 
// matrix and turns but also flips them as the nature of how i set up my matrix will give me an undesirable out come 
//if i dont also flip it
function rotate(matrix, dir){
    for(let y = 0; y < matrix.length; ++y) {
        for (let x = 0; x < y; ++x){
            [
            matrix[x][y],
            matrix[y][x],
            ] = [
            matrix[y][x],
            matrix[x][y],

            ];
        }
    }
    if (dir > 0){
        matrix.forEach(row => row.reverse());
    }else{
        matrix.reverse();
    }
}


//this listens for player imput
document.addEventListener('keydown', event =>{
    if (event.keyCode === 37){
        playerMove(-1);
        
    }else if (event.keyCode === 39){
        playerMove(+1);
    }else if (event.keyCode === 40){
        playerDrop();
        player.score = player.score + 1;
        updateScore();
    }else if (event.keyCode === 38){
        playerRotate(+1);
    }
    player.score = player.score;
    updateScore();
});

//And calling nessasary functions like update to be run
playerReset();
topScore();
updateScore();
updateLevelSpeed();
update();