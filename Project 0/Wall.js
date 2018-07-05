/*
    This class manages the walls for each cell that ware created
    It stores the identification of the wall to each cell and
    the actually x an y values in the canvas for easy removal and modification
*/
class Wall{
    constructor(x,y,orientation){
        this._x = x;
        this._y = y;
        this._orientation = orientation;
        this._pointX;
        this._pointY;
        this._pointX1;
        this._pointY1;
    }

    get x(){
        return this._x;
    }

    get y(){
        return this._y;
    }

    get pointX(){
        return this._pointX;
    }
    get pointY(){
        return this._pointY;
    }
    get orientation(){
        return this._orientation;
    }

    wallPointLocation(pointX, pointY, pointX1,pointY1){
        this._pointX = pointX;
        this._pointY = pointY;
        this._pointX1 = pointX1;
        this._pointY1 = pointY1;
    }


}

export default Wall;