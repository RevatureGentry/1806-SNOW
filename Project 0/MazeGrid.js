import Cell from "./Cell.js"

"use strict"

let radEasy, radMed,radHard;
window.onload = function(){

    //event listners for difficulty radio buttons
    radEasy = document.getElementById("easy");
    radMed = document.getElementById("medium");
    radHard = document.getElementById("hard");

    radEasy.onchange= function(){
        if(this.checked){
            easyDifficulty();
        }
    }
    radMed.onchange = function(){
        if(this.checked){
            mediumDifficulty();
        }
    }
    radHard.onchange = function(){
        if(this.checked){
            hardDifficulty();
        }
    }
   

}


/*manages the overall canvas
  ctx- represents the context canvas that controls the actual drawing on the canvas
  
*/
let canvas = {
    ctx: null,
    canvasElement: null,
    //creates the canvas based on the specified height and width
    createCanvas : function(height, width){
        this.canvasElement = document.getElementById("myCanvas");
        this.ctx = this.canvasElement.getContext("2d");
        this.canvasElement.height = height;
        this.canvasElement.width = width;
        this.ctx.fillStyle = "white";
        this.ctx.fillRect(0,0, height, width);
    },
    //draws a line between the point (x,y) and point(x1,y1)
    drawLine : function(x, y, x1, y1,color){
        this.ctx.beginPath();
        this.ctx.moveTo(x,y);
        this.ctx.lineTo(x1,y1);
        this.ctx.lineWidth = 2;
        this.ctx.strokeStyle = color;
        this.ctx.stroke();
    } 
}
canvas.createCanvas(400,400);



let dimension = canvas.canvasElement.height;
//draws the outer 4 borders of the maze
function drawBorders(){
    canvas.drawLine(0,0,dimension,0,'black');
    canvas.drawLine(dimension,0,dimension,dimension,'black');
    canvas.drawLine(dimension,dimension,0,dimension,'black');
    canvas.drawLine(0,dimension,0,0,'black');
}


//cellList: 2d array of all cells 
let cellList = [];
//unvisitedCells: list of all cells that haven't been visited
let unvisitedCells = [];

//size: number of cells in a row and column
let size = 20;
function createCells(){
    for(let x = 0;x < size; x++){
        cellList[x] = new Array(size);
        for(let y = 0; y < size; y++){
            cellList[x][y] = new Cell(x,y,canvas);
            cellList[x][y].drawLine();
            unvisitedCells.push(cellList[x][y]);
        }
    }
}


//finds all cells that are adjacent to the current cell(currCell)
//if cell hasn't been visited then mark that as an adjacent cell
function findAdjacentCells(currCell){
    //check top
    if(currCell.y-1 >=0 ){
        let topCell = cellList[currCell.x][currCell.y-1];
        if(!topCell.isVisited())
            currCell.addAdjacentCell(topCell);
    }
    //check right
    if(currCell.x+1 <= cellList[0].length-1 ){
        let rightCell = cellList[currCell.x+1][currCell.y];
        if(!rightCell.isVisited())
            currCell.addAdjacentCell(rightCell);
    }
    //check bottom
    if(currCell.y+1 <= cellList[0].length-1){
        let bottomCell = cellList[currCell.x][currCell.y+1];
        if(!bottomCell.isVisited())
            currCell.addAdjacentCell(bottomCell);
    }
    //check left
    if(currCell.x-1 >= 0){
        let leftCell = cellList[currCell.x-1][currCell.y];
        if(!leftCell.isVisited())
            currCell.addAdjacentCell(leftCell);
    }
}

//removes a wall between the current cell and the adjacent cell
function removeWall(currCell, adjCell){
    if(currCell.y === adjCell.y){
        //check left or right for wall
        if(currCell.x < adjCell.x){
            //check right
            currCell.removeWall('v');
        }else{
            //check left
            adjCell.removeWall('v');
        }
    }else{
        //check up or down
        if(currCell.y < adjCell.y){
            //check down
            currCell.removeWall('h');
        }else{
            //check up
            adjCell.removeWall('h');
        }
    }
}

//remove the specified element from the unvisitedCells list
function remove(element) {
    return unvisitedCells.filter(e => e !== element);
}

/*
    Recursive back tracking algroithm that randomly generates a maze
    Algorithm can be found on the "Maze Generation algorithm" page in wikipedia
*/
function recursiveBackTracker(){
    //initialize a cell as the currentcell
    let currentCell = cellList[0][0];
    let stack = [];
    //mark it as visited
    currentCell.visitCell();
    unvisitedCells = remove(currentCell);
    while(unvisitedCells.length > 0){
        findAdjacentCells(currentCell);
        //pick a random neighbor from list of adjacent cells to visit
        let neighborCell = currentCell.getRandomNeighbor();
        currentCell.clearAdjacentCells();
        if(neighborCell !== null){
            stack.push(currentCell);
            removeWall(currentCell, neighborCell);
            currentCell = neighborCell;
            currentCell.visitCell();
            unvisitedCells =  remove(currentCell);
        }else if(stack.length > 0){
            currentCell = stack.pop();
        }
    }
 }

 //originalCount: counts the number of black pixels in the canvas once the maze is generated
 /*
    pixelCount will count all the black pixels in the canvas
    the pixel count is one of the scoring mechanism for this maze
    when the player come in contact with the maze wall, the part of the wall that made contact will be erased
    the scroing will then be about traversing the maze will little to no contact with the wall
    The total number of black pixels erased will be shown as the final score. Lower is better
 */
 let originalCount = 0;
 function pixelCount(){
     let imgData=canvas.ctx.getImageData(0,0,canvas.canvasElement.width,canvas.canvasElement.height);
     let count = 0;
     for (let i=0;i<imgData.data.length;i+=4)
     {
        if(imgData.data[i+0]===0 && imgData.data[i+1]===0 && imgData.data[i+2]===0 && imgData.data[i+3]===255 ){
             count++;
         }
     }
     return count;
 }

let objectPositions = [];
let timerStart = false;
let speed =2;



let controller;
let player;     
let finishBox;   //represent the end of the maze
//startGame: determines the games difficulty and creates both the player and finish box on the canvas
function startGame(difficulty) {
    switch(difficulty){
        case "easy":
            controller.startEasy();
            break;
        case "medium":
            controller.startMedium();
            break;
        case "hard":
            controller.startHard();
            break;
    }
    player = new component(5, 5, 8, 8 , "red");
    finishBox = new component(385,385,10,10,'green');
    finishBox.updatePosition();   
}

//event handler function for moving the player
let createController = function(){
    function keydown(e) {
        controller.keys = (controller.keys || []);
        controller.keys[e.keyCode] = (e.type == "keydown");
    };
    function keyup(e) {
        controller.keys[e.keyCode] = (e.type == "keydown");
    }
    controller = {
        startEasy : function() {
            this.interval = setInterval(updateGame, 20);
            document.addEventListener('keyup', keyup)
            document.addEventListener('keydown', keydown)
            
        }, 
        startMedium : function() {
            this.interval = setInterval(updateGameMedium, 20);
            document.addEventListener('keyup', keyup)
            document.addEventListener('keydown', keydown)
            
        },
        startHard : function() {
            this.interval = setInterval(updateGame, 20);
            document.addEventListener('keyup', keyup)
            document.addEventListener('keydown', keydown)
            
        },
        clear : function(){
            //trail
             objectPositions = [];
            canvas.ctx.clearRect(0, 0, canvas.canvasElement.width, canvas.canvasElement.height);
            this.removeEvents();
        },
        removeEvents : function(){
            document.removeEventListener('keydown',keydown,false);
            document.removeEventListener('keyup', keyup,false);
            clearInterval(this.interval);
        }

        
    }
}

//function that creates the object like player and finishbox
function component(x, y,width, height, color) {
    this._x = x;
    this._y = y; 
    this._width = width;
    this._height = height;
    this._speedX = 0; 
    this._speedY = 0;    
       
    this.drawComponent = function() {
        canvas.ctx.fillStyle = color;
        canvas.ctx.fillRect(this._x, this._y, this._width, this._height);
    }
    this.updatePosition = function() {
        storeLastPosition(this._x,this._y);
        this._x += this._speedX;
        this._y += this._speedY;
        this.drawComponent();        
    }
    this.getX = function(){
        return this._x;
    }

    this.getY = function(){
        return this._y;
    }
    this.getHeight = function(){
        return this._height;
    }
    this.getWidth = function(){
        return this._width;
    }
}


let c = canvas.canvasElement;
//recieves and manages the user input for both easy and hard mode 
function updateGame() {
    //asynchronously calculates and outputs the pixel erased count
    document.getElementById('pixels').innerHTML = originalCount - pixelCount();
    //clears the player instance from the canvas, so it can be redrawn later
    canvas.ctx.clearRect(player.getX(), player.getY(), player.getWidth(), player.getHeight());
    player._speedX = 0;
    player._speedY = 0;  
    
    //starts the timer once a button is pressed by the user
    document.onkeydown = function (e) {
        if (!timerStart) {
            timerStart = true;
            if (e.keyCode == '38' || e.keyCode == '39' || e.keyCode == '40' || e.keyCode == '37') {
               timer();
            }
        }
    };

    //go up
    if (controller.keys && controller.keys[38]) {
        //determines if user is at the border or colliding with a wall
        if(player.getY() <= 3 || collisionDetection("top", player)){
            //stops user from moving forward
            player._speedY = speed; 
        //determines if user reached the end of the maze
        }else if(player.getX() >= finishBox.getX() && player.getY() >= finishBox.getY()){
            clearTimeout(t);

        //go in this direction
        }else{
            player._speedY = -speed; 
        }
    }
    //right 
    if (controller.keys && controller.keys[39]) {
        if(player.getX() >= (c.width-player.getWidth()-3) || collisionDetection("right", player)){
            player._speedX = -speed;
        }else if(player.getX() >= finishBox.getX() && player.getY() >= finishBox.getY()){
            clearTimeout(t);
        }else{

            player._speedX = speed; 
        }
    }
   
    //down 
    if (controller.keys && controller.keys[40]) {
        if(player.getY() >= (c.height-player.getHeight()-3)|| collisionDetection("down", player)){
            player._speedY = -speed; 
        }else if(player.getX() >= finishBox.getX() && player.getY() >= finishBox.getY()){
            clearTimeout(t);
        }else{
            player._speedY = speed;
        } 
    }

    //left
    if (controller.keys && controller.keys[37]) {
        if(player.getX() <= 3|| collisionDetection("left", player)){
            player._speedX = speed;
        }else if(player.getX() >= finishBox.getX() && player.getY() >= finishBox.getY()){
            clearTimeout(t);
        }
        else{
            player._speedX = -speed; 
        }
    }
    //draws path the user has taken
    drawTrail();
    //redraws player based on movement taken
    player.updatePosition();  
}

//manages user input for easy mode
//only difference is that this doesen;t check of collision with a wall only border
function updateGameMedium() {

    document.getElementById('pixels').innerHTML = originalCount - pixelCount();;
    canvas.ctx.clearRect(player.getX(), player.getY(), player.getWidth(), player.getHeight());
    player._speedX = 0;
    player._speedY = 0;  
    document.onkeydown = function (e) {
        if (!timerStart) {
            timerStart = true;
            if (e.keyCode == '38' || e.keyCode == '39' || e.keyCode == '40' || e.keyCode == '37') {
               timer();
            }
        }
    };

    //up
    if (controller.keys && controller.keys[38]) {
        if(player.getY() <= 3){
            player._speedY = speed; 
        }else if(player.getX() >= finishBox.getX() && player.getY() >= finishBox.getY()){
            clearTimeout(t);
        }else{
            player._speedY = -speed; 
        }
    }
    //right
    if (controller.keys && controller.keys[39]) {
        if(player.getX() >= (c.width-player.getWidth()-3)){
            player._speedX = -speed;
        }else if(player.getX() >= finishBox.getX() && player.getY() >= finishBox.getY()){
            clearTimeout(t);
        }else{

            player._speedX = speed; 
        }
    }
   
    //down
    if (controller.keys && controller.keys[40]) {
        console.log(player.getY() + "   " +  (c.height-player.height-3));
        if(player.getY() >= (c.height-player.getWidth()-3)){
            player._speedY = -speed; 
        }else if(player.getX() >= finishBox.getX() && player.getY() >= finishBox.getY()){
            clearTimeout(t);
        }else{
            player._speedY = speed;
        } 
    }

    //left
    if (controller.keys && controller.keys[37]) {
        if(player.getX() <= 3){
            player._speedX = speed;
        }else if(player.getX() >= finishBox.getX() && player.getY() >= finishBox.getY()){
            clearTimeout(t);
        }
        else{
            player._speedX = -speed; 
        }
    }
    drawTrail();
    player.updatePosition();  
}

//used to store the path the user has taken
function storeLastPosition(xPos,yPos){
    objectPositions.push({
        x: xPos,
        y: yPos
      });
}
//draw trails
function drawTrail(){
    for(let i = 0;i < objectPositions.length;i++){
        canvas.ctx.beginPath();
        canvas.ctx.fillRect(objectPositions[i].x+2.5, objectPositions[i].y+2.5,2,2);
        canvas.ctx.fillStyle = `red`;
        canvas.ctx.fill();
    }

}
//time
let h1 = document.getElementsByTagName('h1')[0];
let seconds = 0, minutes = 0, hours = 0;
let t;

//increases the time every second
function add() {
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
    }
    
    h1.textContent =(minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);

    timer();
}
function timer() {
    t = setTimeout(add, 1000);
}

//clears the timer for new game
let clearTimer = function() {
    h1.textContent = "00:00";
    seconds = 0; minutes = 0;
    clearTimeout(t);
    t = null;
    timerStart = false;
}

// let restart = document.getElementById('restart');
// restart.onclick =function(){
//     restartMaze();
// }
// function restartMaze(){
//     cellList = [];
//     clearTimer();
//     controller.clear();
//     finalCount = 0;

//     //affect the creation of the maze
//     drawBorders();
//     createCells();
//     recursiveBackTracker();
//     originalCount = pixelCount();
//     //player controlling the game
//     createController();
//     startGame();
//     updateGame();

// }

//detects the wall in the derection the player is heading
function collisionDetection(direction, player){
    //find the current cell the player is at
    let cellX = Math.floor(player.getX()/20);
    let cellY = Math.floor(player.getY()/20);
    let currentCell = cellList[cellX][cellY];

    //boundary is the threshold of the between the player and the wall
    let boundary = 2;
    switch(direction){
        case "top":
            let topWall = null;
            //determines if were at the edge of the maze or not
            if(cellY >0){
                //if not find get the top cell
                let topCell = cellList[cellX][cellY-1];
                //determien if it has a horizontal/bottom wall
                if(topCell.isHorizontalWall()){
                    topWall = topCell.horizontalWall;
                    //return true, to indicate collision between player and wall
                    if(player.getY() <= (topWall.pointY)+boundary){
                        //wall exist
                        return true;
                    }
                }
            }
            break;
        case "right":
            let rightWall = null;
            
            if(currentCell.isVerticalWall()){
                rightWall = currentCell.verticalWall;
                if((player.getX())+player.getWidth() >= rightWall.pointX-3){
                    //wall exist
                    return true;
                }
            }
            break;
        case "down":
            let bottomWall = null;
            if(currentCell.isHorizontalWall()){
                bottomWall = currentCell.horizontalWall;
                if((player.getY())+player.getHeight() >= bottomWall.pointY-3){
                    //wall exist
                    return true;
                }
            }
            break;
        case "left":
            let leftWall = null;
            if(cellX > 0){
                let leftCell = cellList[cellX-1][cellY];
                if(leftCell.isVerticalWall()){
                    leftWall = leftCell.verticalWall;
                    if(player.getX() <= leftWall.pointX + boundary){
                        //wall Exist
                        return true;
                    }
                }
            }
            break;
    }
    return false;
}


let started = false;
function easyDifficulty(){
    if(started){
        cellList = [];
        clearTimer();
        controller.clear();
    }
    started = true;
    //affect the creation of the maze
    drawBorders();
    createCells();
    recursiveBackTracker();

    originalCount = pixelCount();

    //player controlling the game
    createController();
    startGame("easy");
    updateGame();
}

function mediumDifficulty(){
    if(started){
        cellList = [];
        clearTimer();
        controller.clear();
    
        //canvas.ctx.clearRect(0,0,400,400);
    }
    started = true;
        //affect the creation of the maze
        drawBorders();
        createCells();
        recursiveBackTracker();
        originalCount = pixelCount();
        //player controlling the game
        createController();
        startGame("medium");
        updateGameMedium();
}

function hardDifficulty(){
    if(started){
        cellList = [];
        clearTimer();
        controller.clear();

    }
    started = true;
        //affect the creation of the maze
        drawBorders();
        createCells();
        recursiveBackTracker();
        canvas.ctx.clearRect(0,0,400,400);
        originalCount = pixelCount();
        //player controlling the game
        createController();
        startGame("hard");
        updateGame();
}


