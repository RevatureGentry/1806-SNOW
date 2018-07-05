let cell = (function() {

    let elementSymbol = Symbol('element');
    let xSymbol = Symbol('x');
    let ySymbol = Symbol('y');
    let shiftSymbol = Symbol('shift');

    function cell(element, x = 1, y = 1, shift = 0) {
        //calculate img tag element attributes from x & y
        element.classList.add("cell")
        element.setAttribute("id", `img${x}${y}`);
        element.setAttribute("onclick", "changeImage(this.id)");
        element.setAttribute("src", "openSpace.png");
        element.setAttribute("alt",`(${x},${y})`);
        element.setAttribute("style",`position:absolute; top:${110*y-90 + shift}px; left:${110*x-90 + shift}px`);
        //encapsulate data
        this[elementSymbol] = element;
        this[xSymbol] = x;
        this[ySymbol] = y;
        this[shiftSymbol] = shift;
    }

    //get and set values
    cell.prototype.getElement = function(){return this[elementSymbol];}
    cell.prototype.setElement = function(element){this[elementSymbol] = element;}
    cell.prototype.getX = function(){return this[xSymbol];}
    cell.prototype.setX = function(x){this[xSymbol] = x;}
    cell.prototype.getY = function(){return this[ySymbol];}
    cell.prototype.setY = function(y){this[ySymbol] = y;}
    

    return cell
}());