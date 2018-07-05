let board = (function() {

    let elementSymbol = Symbol('element');
    let xSymbol = Symbol('x');
    let ySymbol = Symbol('y');
    let shiftSymbol = Symbol('shift');

    function board(element, x = 0, y = 0, shift = 0) {
        //encapsulate data
        element.classList.add("board")
        element.setAttribute("width", `${350}`);
        element.setAttribute("height", `${350}`);
        element.setAttribute("style",`position:absolute; top:${350*shift}px; left:${350*shift}px`);
        element.getContext("2d").fillStyle = "blue";
        element.getContext("2d").fillRect(0, 0, 350, 350);
        this[elementSymbol] = element;
        this[xSymbol] = x;
        this[ySymbol] = y;
        this[shiftSymbol] = shift;
    }

    //get and set values
    board.prototype.getElement = function(){return this[elementSymbol];}
    board.prototype.setElement = function(element){this[elementSymbol] = element;}
    board.prototype.getX = function(){return this[xSymbol];}
    board.prototype.setX = function(x){this[xSymbol] = x;}
    board.prototype.getY = function(){return this[ySymbol];}
    board.prototype.setY = function(y){this[ySymbol] = y;}

    return board
}());