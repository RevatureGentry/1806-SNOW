"use strict";

let c = document.getElementById("myCanvas");
let ctx = c.getContext("2d");
let cellList = [];
let unvisitedCells = [];
let timerStart = false;
let speed = 2;
let dim = 400;
let finalCount = 0;
c.width = dim;
c.height = dim;
ctx.fillStyle = "white";
ctx.fillRect(0, 0, c.width, c.height);
let dimElement = document.getElementById('dimension');
let objectPositions = [];

function storeLastPosition(xPos,yPos){
    objectPositions.push({
        x: xPos,
        y: yPos
      });
}




class Cell {
    constructor(x ,y){
        this._x = x;
        this._y = y;
        this.cellSize = 20;
        this.visited = false;
        this.adjacentCell = []
        if(this._x !==9 ){
           //right wall
           this.drawVerticalWall('black');
        }else{
            this.isVerticalWall = false;
        }

        if(this._y !== 9 ){
           //bottom wall
           this.drawHorizontalWall('black');
       }else{
        this.isHorizontalWall = false;
       }
    }

    get x(){
        return this._x;
    }
    get y(){
        return this._y;
    }

    isVisited(){
        return this.visited;
    }

    visit(){
        this.visited = true;
    }

    drawHorizontalWall(color){
        drawLine(this._x*this.cellSize, (this._y+1)*this.cellSize, (this._x+1)*this.cellSize, (this._y+1)*this.cellSize,  color);
    }

    drawVerticalWall(color){
        drawLine((this._x+1)*this.cellSize, this._y*this.cellSize,(this._x+1)*this.cellSize, (this._y+1)*this.cellSize,  color);
        
    }

    addAdjacentCell(adjCell){
        this.adjacentCell.push(adjCell);
    }
    
    clearAdjacentCells(){
        this.adjacentCell = [];
    }
    getRandomNeighbor(){
        if(this.adjacentCell.length >= 1){
            let randomIndex = Math.floor(Math.random() * (this.adjacentCell.length));
            return this.adjacentCell[randomIndex];
        }
        return null;
    }
    getAdjacentCells(){
        return this.adjacentCell;
    }

    removeWall(wallToRemove){
        if(wallToRemove === 'v'){       
            this.drawVerticalWall('white')
        }else if(wallToRemove === 'h'){
            this.drawHorizontalWall('white')
        }
    }

}

let size = 20;
function createCells(){
    for(let x = 0;x < size; x++){
        cellList[x] = new Array(size);
        for(let y = 0; y < size; y++){
            cellList[x][y] = new Cell(x,y);
            unvisitedCells.push(cellList[x][y]);
        }
    }
}

function findAdjacentCells(currCell){
    //top
    if(currCell.y-1 >=0 ){
        let topCell = cellList[currCell.x][currCell.y-1];
        if(!topCell.isVisited())
            currCell.addAdjacentCell(topCell);
    }
    //right
    if(currCell.x+1 <= cellList[0].length-1 ){
        let rightCell = cellList[currCell.x+1][currCell.y];
        if(!rightCell.isVisited())
            currCell.addAdjacentCell(rightCell);
    }
    //bottom
    if(currCell.y+1 <= cellList[0].length-1){
        let bottomCell = cellList[currCell.x][currCell.y+1];
        if(!bottomCell.isVisited())
            currCell.addAdjacentCell(bottomCell);
    }
    //left
    if(currCell.x-1 >= 0){
        let leftCell = cellList[currCell.x-1][currCell.y];
        if(!leftCell.isVisited())
            currCell.addAdjacentCell(leftCell);
    }
}

function drawBorders(){
    drawLine(0,0,dim,0,'black');
    drawLine(dim,0,dim,dim,'black');
    drawLine(dim,dim,0,dim,'black');
    drawLine(0,dim,0,0,'black');
}

function drawLine(x, y, x1, y1,color){
    ctx.beginPath();
    ctx.moveTo(x,y);
    ctx.lineTo(x1,y1);
    ctx.lineWidth = 2;
    ctx.strokeStyle = color;
    ctx.stroke();
}



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

function remove(element) {
    return unvisitedCells.filter(e => e !== element);
}

function recursiveBackTracker(){
    let currentCell = cellList[0][0];
    let stack = [];
    currentCell.visit();
    unvisitedCells = remove(currentCell);
    while(unvisitedCells.length > 0){
        findAdjacentCells(currentCell);
        let neighborCell = currentCell.getRandomNeighbor();
        currentCell.clearAdjacentCells();
        if(neighborCell !== null){
            stack.push(currentCell);
            removeWall(currentCell, neighborCell);
            currentCell = neighborCell;
            currentCell.visit();
            unvisitedCells =  remove(currentCell);
        }else if(stack.length > 0){
            currentCell = stack.pop();
        }else{
            break;
        }
    }
 } 
 let previousCount = 0;
 let originalCount = 0;
function pixelCount(){
    let imgData=ctx.getImageData(0,0,c.width,c.height);
    //console.log(imgData.data);
    let count = 0;
    for (let i=0;i<imgData.data.length;i+=4)
    {
       if(imgData.data[i+0]===0 && imgData.data[i+1]===0 && imgData.data[i+2]===0 && imgData.data[i+3]===255 ){
            count++;
            //console.log(count);
        }
    }
    return count;
}


drawBorders();
createCells();
recursiveBackTracker();
originalCount = pixelCount();
 



let controller;
let player;
let finishBox;
function startGame() {
    controller.start();
    player = new component(5, 5, 10, 10 , "red");
    finishBox = new component(385,385,10,10,'green');
    finishBox.updatePosition();   
}

let createController = function(){
    function keydown(e) {
        controller.keys = (controller.keys || []);
        controller.keys[e.keyCode] = (e.type == "keydown");
    };
    function keyup(e) {
        controller.keys[e.keyCode] = (e.type == "keydown");
    }
    controller = {
        start : function() {
            this.interval = setInterval(updateGame, 20);
            document.addEventListener('keyup', keyup)
            document.addEventListener('keydown', keydown)
            
        }, 
        clear : function(){
            //trail
             objectPositions = [];
            ctx.clearRect(0, 0, c.width, c.height);
            this.removeEvents();
        },
        removeEvents : function(){
            document.removeEventListener('keydown',keydown,false);
            document.removeEventListener('keyup', keyup,false);
            clearInterval(this.interval);
        }

        
    }
}


function component(x, y,width, height, color) {
    this.x = x;
    this.y = y; 
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;    
       
    this.drawComponent = function() {
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    this.updatePosition = function() {
        storeLastPosition(this.x,this.y);
        this.x += this.speedX;
        this.y += this.speedY;
        this.drawComponent();        
    } 
}

function updateGame() {
    console.log(originalCount + "   " + pixelCount());
    finalCount = originalCount - pixelCount();
    document.getElementById('pixels').innerHTML = finalCount;
    ctx.clearRect(player.x, player.y, player.width, player.height);
    player.speedX = 0;
    player.speedY = 0;  
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
        if(player.y <= 3){
            player.speedY = speed; 
        }else if(player.x >= finishBox.x && player.y >= finishBox.y){
            clearTimeout(t);
        }else{
            player.speedY = -speed; 
        }
    }
    //right
    if (controller.keys && controller.keys[39]) {
        if(player.x >= (c.width-player.width-3)){
            player.speedX = -speed;
        }else if(player.x >= finishBox.x && player.y >= finishBox.y){
            clearTimeout(t);
        }else{

            player.speedX = speed; 
        }
    }
   
    //down
    if (controller.keys && controller.keys[40]) {
        if(player.y >= (c.height-player.height-3)){
            player.speedY = -speed; 
        }else if(player.x >= finishBox.x && player.y >= finishBox.y){
            clearTimeout(t);
        }else{
            player.speedY = speed;
        } 
    }

    //left
    if (controller.keys && controller.keys[37]) {
        if(player.x <= 3){
            player.speedX = speed;
        }else if(player.x >= finishBox.x && player.y >= finishBox.y){
            clearTimeout(t);
        }
        else{
            player.speedX = -speed; 
        }
    }
    
    drawTrail();
    player.updatePosition();  
    

}
createController();
startGame();
updateGame();


//draw trails
function drawTrail(){

    
    for(let i = 0;i < objectPositions.length;i++){
        ctx.beginPath();
        ctx.fillRect(objectPositions[i].x+5, objectPositions[i].y+5,2,2);
        ctx.fillStyle = `rgba(204, 102, 153, ${(i+1)/5}`;
        ctx.fill();
    }

}
//time
let h1 = document.getElementsByTagName('h1')[0];
let start = document.getElementById('start');
let stop = document.getElementById('stop');
let clear = document.getElementById('clear');
let seconds = 0, minutes = 0, hours = 0;
let t;

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

let clearTimer = function() {
    h1.textContent = "00:00";
    seconds = 0; minutes = 0;
    console.log("tasd");
    clearTimeout(t);
    t = null;
    timerStart = false;
}

let restart = document.getElementById('restart');
restart.onclick =function(){
    restartMaze();
}
function restartMaze(){
    cellList = [];
    clearTimer();
    controller.clear();

    //affects the creation of the maze
    drawBorders();
    createCells();
    recursiveBackTracker();

    originalCount = pixelCount();
    createController();
    startGame();
    updateGame();

}
