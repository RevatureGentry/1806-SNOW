import Wall from "./Wall.js"
"use strict";

/*
    manages each individual cell and the walls corresponding to the cell
*/
class Cell {
    constructor(x,y,canvas){
        this._x = x;
        this._y = y;
        this._cellSize = 20;
        this._isVisited = false;
        this._adjacentCells = [];
        //each cell will only have two walls the left and bottom walls
        //the left wall is the verticalWall and the bottom wall is the horizontalWall
        this._verticalWall;
        this._horizontalWall;
        this._isVerticalWall = true;
        this._isHorizontalWall = true;
        this._canvas = canvas;
    }
    get x(){
        return this._x;
    }

    get y(){
        return this._y;
    }

    get verticalWall(){
        return this._verticalWall;
    }

    get horizontalWall(){
        return this._horizontalWall;
    }
    isVerticalWall(){
        return this._isVerticalWall;
    }

    isHorizontalWall(){
        return this._isHorizontalWall;
    }

    addAdjacentCell(adjCell){
        this._adjacentCells.push(adjCell);
    }
    visitCell(){
        this._isVisited = true;
    }

    isVisited(){
        return this._isVisited;
    }

    drawHorizontalWall(color){
        this._isHorizontalWall = false;
        this._canvas.drawLine(this._x*this._cellSize, (this._y+1)*this._cellSize, (this._x+1)*this._cellSize, (this._y+1)*this._cellSize,  color);
    }

    drawVerticalWall(color){
        this._isVerticalWall = false;
        this._canvas.drawLine((this._x+1)*this._cellSize, this._y*this._cellSize,(this._x+1)*this._cellSize, (this._y+1)*this._cellSize,  color);
        
    }

    drawLine(){
        this._verticalWall = new Wall(this._x,this._y, 'v');
        this._verticalWall.wallPointLocation((this._x+1)*this._cellSize, this._y*this._cellSize,(this._x+1)*this._cellSize, (this._y+1)*this._cellSize);
        this._canvas.drawLine((this._x+1)*this._cellSize, this._y*this._cellSize,(this._x+1)*this._cellSize, (this._y+1)*this._cellSize,  'black');
        
        this._horizontalWall = new Wall(this._x,this._y,'h');
        this._horizontalWall.wallPointLocation(this._x*this._cellSize, (this._y+1)*this._cellSize, (this._x+1)*this._cellSize, (this._y+1)*this._cellSize);
        this._canvas.drawLine(this._x*this._cellSize, (this._y+1)*this._cellSize, (this._x+1)*this._cellSize, (this._y+1)*this._cellSize,  'black');
    }

    getRandomNeighbor(){
        if(this._adjacentCells.length >= 1){
            let randomIndex = Math.floor(Math.random() * (this._adjacentCells.length));
            return this._adjacentCells[randomIndex];
        }
        return null;
    }
    getAdjacentCells(){
        return this._adjacentCells;
    }
    clearAdjacentCells(){
        this._adjacentCells = [];
    }
    removeWall(wallToRemove){
        if(wallToRemove === 'v'){       
            this.drawVerticalWall('white');
        }else if(wallToRemove === 'h'){
            this.drawHorizontalWall('white');
        }
    }

    

}

export default Cell;

