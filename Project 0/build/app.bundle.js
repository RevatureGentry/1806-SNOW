/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./MazeGrid.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Cell.js":
/*!*****************!*\
  !*** ./Cell.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Wall = __webpack_require__(/*! ./Wall.js */ "./Wall.js");

var _Wall2 = _interopRequireDefault(_Wall);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

"use strict";

/*
    manages each individual cell and the walls corresponding to the cell
*/

var Cell = function () {
    function Cell(x, y, canvas) {
        _classCallCheck(this, Cell);

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

    _createClass(Cell, [{
        key: "isVerticalWall",
        value: function isVerticalWall() {
            return this._isVerticalWall;
        }
    }, {
        key: "isHorizontalWall",
        value: function isHorizontalWall() {
            return this._isHorizontalWall;
        }
    }, {
        key: "addAdjacentCell",
        value: function addAdjacentCell(adjCell) {
            this._adjacentCells.push(adjCell);
        }
    }, {
        key: "visitCell",
        value: function visitCell() {
            this._isVisited = true;
        }
    }, {
        key: "isVisited",
        value: function isVisited() {
            return this._isVisited;
        }
    }, {
        key: "drawHorizontalWall",
        value: function drawHorizontalWall(color) {
            this._isHorizontalWall = false;
            this._canvas.drawLine(this._x * this._cellSize, (this._y + 1) * this._cellSize, (this._x + 1) * this._cellSize, (this._y + 1) * this._cellSize, color);
        }
    }, {
        key: "drawVerticalWall",
        value: function drawVerticalWall(color) {
            this._isVerticalWall = false;
            this._canvas.drawLine((this._x + 1) * this._cellSize, this._y * this._cellSize, (this._x + 1) * this._cellSize, (this._y + 1) * this._cellSize, color);
        }
    }, {
        key: "drawLine",
        value: function drawLine() {
            this._verticalWall = new _Wall2.default(this._x, this._y, 'v');
            this._verticalWall.wallPointLocation((this._x + 1) * this._cellSize, this._y * this._cellSize, (this._x + 1) * this._cellSize, (this._y + 1) * this._cellSize);
            this._canvas.drawLine((this._x + 1) * this._cellSize, this._y * this._cellSize, (this._x + 1) * this._cellSize, (this._y + 1) * this._cellSize, 'black');

            this._horizontalWall = new _Wall2.default(this._x, this._y, 'h');
            this._horizontalWall.wallPointLocation(this._x * this._cellSize, (this._y + 1) * this._cellSize, (this._x + 1) * this._cellSize, (this._y + 1) * this._cellSize);
            this._canvas.drawLine(this._x * this._cellSize, (this._y + 1) * this._cellSize, (this._x + 1) * this._cellSize, (this._y + 1) * this._cellSize, 'black');
        }
    }, {
        key: "getRandomNeighbor",
        value: function getRandomNeighbor() {
            if (this._adjacentCells.length >= 1) {
                var randomIndex = Math.floor(Math.random() * this._adjacentCells.length);
                return this._adjacentCells[randomIndex];
            }
            return null;
        }
    }, {
        key: "getAdjacentCells",
        value: function getAdjacentCells() {
            return this._adjacentCells;
        }
    }, {
        key: "clearAdjacentCells",
        value: function clearAdjacentCells() {
            this._adjacentCells = [];
        }
    }, {
        key: "removeWall",
        value: function removeWall(wallToRemove) {
            if (wallToRemove === 'v') {
                this.drawVerticalWall('white');
            } else if (wallToRemove === 'h') {
                this.drawHorizontalWall('white');
            }
        }
    }, {
        key: "x",
        get: function get() {
            return this._x;
        }
    }, {
        key: "y",
        get: function get() {
            return this._y;
        }
    }, {
        key: "verticalWall",
        get: function get() {
            return this._verticalWall;
        }
    }, {
        key: "horizontalWall",
        get: function get() {
            return this._horizontalWall;
        }
    }]);

    return Cell;
}();

exports.default = Cell;

/***/ }),

/***/ "./MazeGrid.js":
/*!*********************!*\
  !*** ./MazeGrid.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Cell = __webpack_require__(/*! ./Cell.js */ "./Cell.js");

var _Cell2 = _interopRequireDefault(_Cell);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

"use strict";

var radEasy = void 0,
    radMed = void 0,
    radHard = void 0;
window.onload = function () {

    //event listners for difficulty radio buttons
    radEasy = document.getElementById("easy");
    radMed = document.getElementById("medium");
    radHard = document.getElementById("hard");

    radEasy.onchange = function () {
        if (this.checked) {
            easyDifficulty();
        }
    };
    radMed.onchange = function () {
        if (this.checked) {
            mediumDifficulty();
        }
    };
    radHard.onchange = function () {
        if (this.checked) {
            hardDifficulty();
        }
    };
};

/*manages the overall canvas
  ctx- represents the context canvas that controls the actual drawing on the canvas
  
*/
var canvas = {
    ctx: null,
    canvasElement: null,
    //creates the canvas based on the specified height and width
    createCanvas: function createCanvas(height, width) {
        this.canvasElement = document.getElementById("myCanvas");
        this.ctx = this.canvasElement.getContext("2d");
        this.canvasElement.height = height;
        this.canvasElement.width = width;
        this.ctx.fillStyle = "white";
        this.ctx.fillRect(0, 0, height, width);
    },
    //draws a line between the point (x,y) and point(x1,y1)
    drawLine: function drawLine(x, y, x1, y1, color) {
        this.ctx.beginPath();
        this.ctx.moveTo(x, y);
        this.ctx.lineTo(x1, y1);
        this.ctx.lineWidth = 2;
        this.ctx.strokeStyle = color;
        this.ctx.stroke();
    }
};
canvas.createCanvas(400, 400);

var dimension = canvas.canvasElement.height;
//draws the outer 4 borders of the maze
function drawBorders() {
    canvas.drawLine(0, 0, dimension, 0, 'black');
    canvas.drawLine(dimension, 0, dimension, dimension, 'black');
    canvas.drawLine(dimension, dimension, 0, dimension, 'black');
    canvas.drawLine(0, dimension, 0, 0, 'black');
}

//cellList: 2d array of all cells 
var cellList = [];
//unvisitedCells: list of all cells that haven't been visited
var unvisitedCells = [];

//size: number of cells in a row and column
var size = 20;
function createCells() {
    for (var x = 0; x < size; x++) {
        cellList[x] = new Array(size);
        for (var y = 0; y < size; y++) {
            cellList[x][y] = new _Cell2.default(x, y, canvas);
            cellList[x][y].drawLine();
            unvisitedCells.push(cellList[x][y]);
        }
    }
}

//finds all cells that are adjacent to the current cell(currCell)
//if cell hasn't been visited then mark that as an adjacent cell
function findAdjacentCells(currCell) {
    //check top
    if (currCell.y - 1 >= 0) {
        var topCell = cellList[currCell.x][currCell.y - 1];
        if (!topCell.isVisited()) currCell.addAdjacentCell(topCell);
    }
    //check right
    if (currCell.x + 1 <= cellList[0].length - 1) {
        var rightCell = cellList[currCell.x + 1][currCell.y];
        if (!rightCell.isVisited()) currCell.addAdjacentCell(rightCell);
    }
    //check bottom
    if (currCell.y + 1 <= cellList[0].length - 1) {
        var bottomCell = cellList[currCell.x][currCell.y + 1];
        if (!bottomCell.isVisited()) currCell.addAdjacentCell(bottomCell);
    }
    //check left
    if (currCell.x - 1 >= 0) {
        var leftCell = cellList[currCell.x - 1][currCell.y];
        if (!leftCell.isVisited()) currCell.addAdjacentCell(leftCell);
    }
}

//removes a wall between the current cell and the adjacent cell
function removeWall(currCell, adjCell) {
    if (currCell.y === adjCell.y) {
        //check left or right for wall
        if (currCell.x < adjCell.x) {
            //check right
            currCell.removeWall('v');
        } else {
            //check left
            adjCell.removeWall('v');
        }
    } else {
        //check up or down
        if (currCell.y < adjCell.y) {
            //check down
            currCell.removeWall('h');
        } else {
            //check up
            adjCell.removeWall('h');
        }
    }
}

//remove the specified element from the unvisitedCells list
function remove(element) {
    return unvisitedCells.filter(function (e) {
        return e !== element;
    });
}

/*
    Recursive back tracking algroithm that randomly generates a maze
    Algorithm can be found on the "Maze Generation algorithm" page in wikipedia
*/
function recursiveBackTracker() {
    //initialize a cell as the currentcell
    var currentCell = cellList[0][0];
    var stack = [];
    //mark it as visited
    currentCell.visitCell();
    unvisitedCells = remove(currentCell);
    while (unvisitedCells.length > 0) {
        findAdjacentCells(currentCell);
        //pick a random neighbor from list of adjacent cells to visit
        var neighborCell = currentCell.getRandomNeighbor();
        currentCell.clearAdjacentCells();
        if (neighborCell !== null) {
            stack.push(currentCell);
            removeWall(currentCell, neighborCell);
            currentCell = neighborCell;
            currentCell.visitCell();
            unvisitedCells = remove(currentCell);
        } else if (stack.length > 0) {
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
var originalCount = 0;
function pixelCount() {
    var imgData = canvas.ctx.getImageData(0, 0, canvas.canvasElement.width, canvas.canvasElement.height);
    var count = 0;
    for (var i = 0; i < imgData.data.length; i += 4) {
        if (imgData.data[i + 0] === 0 && imgData.data[i + 1] === 0 && imgData.data[i + 2] === 0 && imgData.data[i + 3] === 255) {
            count++;
        }
    }
    return count;
}

var objectPositions = [];
var timerStart = false;
var speed = 2;

var controller = void 0;
var player = void 0;
var finishBox = void 0; //represent the end of the maze
//startGame: determines the games difficulty and creates both the player and finish box on the canvas
function startGame(difficulty) {
    switch (difficulty) {
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
    player = new component(5, 5, 8, 8, "red");
    finishBox = new component(385, 385, 10, 10, 'green');
    finishBox.updatePosition();
}

//event handler function for moving the player
var createController = function createController() {
    function keydown(e) {
        controller.keys = controller.keys || [];
        controller.keys[e.keyCode] = e.type == "keydown";
    };
    function keyup(e) {
        controller.keys[e.keyCode] = e.type == "keydown";
    }
    controller = {
        startEasy: function startEasy() {
            this.interval = setInterval(updateGame, 20);
            document.addEventListener('keyup', keyup);
            document.addEventListener('keydown', keydown);
        },
        startMedium: function startMedium() {
            this.interval = setInterval(updateGameMedium, 20);
            document.addEventListener('keyup', keyup);
            document.addEventListener('keydown', keydown);
        },
        startHard: function startHard() {
            this.interval = setInterval(updateGame, 20);
            document.addEventListener('keyup', keyup);
            document.addEventListener('keydown', keydown);
        },
        clear: function clear() {
            //trail
            objectPositions = [];
            canvas.ctx.clearRect(0, 0, canvas.canvasElement.width, canvas.canvasElement.height);
            this.removeEvents();
        },
        removeEvents: function removeEvents() {
            document.removeEventListener('keydown', keydown, false);
            document.removeEventListener('keyup', keyup, false);
            clearInterval(this.interval);
        }

    };
};

//function that creates the object like player and finishbox
function component(x, y, width, height, color) {
    this._x = x;
    this._y = y;
    this._width = width;
    this._height = height;
    this._speedX = 0;
    this._speedY = 0;

    this.drawComponent = function () {
        canvas.ctx.fillStyle = color;
        canvas.ctx.fillRect(this._x, this._y, this._width, this._height);
    };
    this.updatePosition = function () {
        storeLastPosition(this._x, this._y);
        this._x += this._speedX;
        this._y += this._speedY;
        this.drawComponent();
    };
    this.getX = function () {
        return this._x;
    };

    this.getY = function () {
        return this._y;
    };
    this.getHeight = function () {
        return this._height;
    };
    this.getWidth = function () {
        return this._width;
    };
}

var c = canvas.canvasElement;
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
        if (player.getY() <= 3 || collisionDetection("top", player)) {
            //stops user from moving forward
            player._speedY = speed;
            //determines if user reached the end of the maze
        } else if (player.getX() >= finishBox.getX() && player.getY() >= finishBox.getY()) {
            clearTimeout(t);

            //go in this direction
        } else {
            player._speedY = -speed;
        }
    }
    //right 
    if (controller.keys && controller.keys[39]) {
        if (player.getX() >= c.width - player.getWidth() - 3 || collisionDetection("right", player)) {
            player._speedX = -speed;
        } else if (player.getX() >= finishBox.getX() && player.getY() >= finishBox.getY()) {
            clearTimeout(t);
        } else {

            player._speedX = speed;
        }
    }

    //down 
    if (controller.keys && controller.keys[40]) {
        if (player.getY() >= c.height - player.getHeight() - 3 || collisionDetection("down", player)) {
            player._speedY = -speed;
        } else if (player.getX() >= finishBox.getX() && player.getY() >= finishBox.getY()) {
            clearTimeout(t);
        } else {
            player._speedY = speed;
        }
    }

    //left
    if (controller.keys && controller.keys[37]) {
        if (player.getX() <= 3 || collisionDetection("left", player)) {
            player._speedX = speed;
        } else if (player.getX() >= finishBox.getX() && player.getY() >= finishBox.getY()) {
            clearTimeout(t);
        } else {
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
        if (player.getY() <= 3) {
            player._speedY = speed;
        } else if (player.getX() >= finishBox.getX() && player.getY() >= finishBox.getY()) {
            clearTimeout(t);
        } else {
            player._speedY = -speed;
        }
    }
    //right
    if (controller.keys && controller.keys[39]) {
        if (player.getX() >= c.width - player.getWidth() - 3) {
            player._speedX = -speed;
        } else if (player.getX() >= finishBox.getX() && player.getY() >= finishBox.getY()) {
            clearTimeout(t);
        } else {

            player._speedX = speed;
        }
    }

    //down
    if (controller.keys && controller.keys[40]) {
        console.log(player.getY() + "   " + (c.height - player.height - 3));
        if (player.getY() >= c.height - player.getWidth() - 3) {
            player._speedY = -speed;
        } else if (player.getX() >= finishBox.getX() && player.getY() >= finishBox.getY()) {
            clearTimeout(t);
        } else {
            player._speedY = speed;
        }
    }

    //left
    if (controller.keys && controller.keys[37]) {
        if (player.getX() <= 3) {
            player._speedX = speed;
        } else if (player.getX() >= finishBox.getX() && player.getY() >= finishBox.getY()) {
            clearTimeout(t);
        } else {
            player._speedX = -speed;
        }
    }
    drawTrail();
    player.updatePosition();
}

//used to store the path the user has taken
function storeLastPosition(xPos, yPos) {
    objectPositions.push({
        x: xPos,
        y: yPos
    });
}
//draw trails
function drawTrail() {
    for (var i = 0; i < objectPositions.length; i++) {
        canvas.ctx.beginPath();
        canvas.ctx.fillRect(objectPositions[i].x + 2.5, objectPositions[i].y + 2.5, 2, 2);
        canvas.ctx.fillStyle = "red";
        canvas.ctx.fill();
    }
}
//time
var h1 = document.getElementsByTagName('h1')[0];
var seconds = 0,
    minutes = 0,
    hours = 0;
var t = void 0;

//increases the time every second
function add() {
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
    }

    h1.textContent = (minutes ? minutes > 9 ? minutes : "0" + minutes : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);

    timer();
}
function timer() {
    t = setTimeout(add, 1000);
}

//clears the timer for new game
var clearTimer = function clearTimer() {
    h1.textContent = "00:00";
    seconds = 0;minutes = 0;
    clearTimeout(t);
    t = null;
    timerStart = false;
};

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
function collisionDetection(direction, player) {
    //find the current cell the player is at
    var cellX = Math.floor(player.getX() / 20);
    var cellY = Math.floor(player.getY() / 20);
    var currentCell = cellList[cellX][cellY];

    //boundary is the threshold of the between the player and the wall
    var boundary = 2;
    switch (direction) {
        case "top":
            var topWall = null;
            //determines if were at the edge of the maze or not
            if (cellY > 0) {
                //if not find get the top cell
                var topCell = cellList[cellX][cellY - 1];
                //determien if it has a horizontal/bottom wall
                if (topCell.isHorizontalWall()) {
                    topWall = topCell.horizontalWall;
                    //return true, to indicate collision between player and wall
                    if (player.getY() <= topWall.pointY + boundary) {
                        //wall exist
                        return true;
                    }
                }
            }
            break;
        case "right":
            var rightWall = null;

            if (currentCell.isVerticalWall()) {
                rightWall = currentCell.verticalWall;
                if (player.getX() + player.getWidth() >= rightWall.pointX - 3) {
                    //wall exist
                    return true;
                }
            }
            break;
        case "down":
            var bottomWall = null;
            if (currentCell.isHorizontalWall()) {
                bottomWall = currentCell.horizontalWall;
                if (player.getY() + player.getHeight() >= bottomWall.pointY - 3) {
                    //wall exist
                    return true;
                }
            }
            break;
        case "left":
            var leftWall = null;
            if (cellX > 0) {
                var leftCell = cellList[cellX - 1][cellY];
                if (leftCell.isVerticalWall()) {
                    leftWall = leftCell.verticalWall;
                    if (player.getX() <= leftWall.pointX + boundary) {
                        //wall Exist
                        return true;
                    }
                }
            }
            break;
    }
    return false;
}

var started = false;
function easyDifficulty() {
    if (started) {
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

function mediumDifficulty() {
    if (started) {
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

function hardDifficulty() {
    if (started) {
        cellList = [];
        clearTimer();
        controller.clear();
    }
    started = true;
    //affect the creation of the maze
    drawBorders();
    createCells();
    recursiveBackTracker();
    canvas.ctx.clearRect(0, 0, 400, 400);
    originalCount = pixelCount();
    //player controlling the game
    createController();
    startGame("hard");
    updateGame();
}

/***/ }),

/***/ "./Wall.js":
/*!*****************!*\
  !*** ./Wall.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
    This class manages the walls for each cell that ware created
    It stores the identification of the wall to each cell and
    the actually x an y values in the canvas for easy removal and modification
*/
var Wall = function () {
    function Wall(x, y, orientation) {
        _classCallCheck(this, Wall);

        this._x = x;
        this._y = y;
        this._orientation = orientation;
        this._pointX;
        this._pointY;
        this._pointX1;
        this._pointY1;
    }

    _createClass(Wall, [{
        key: "wallPointLocation",
        value: function wallPointLocation(pointX, pointY, pointX1, pointY1) {
            this._pointX = pointX;
            this._pointY = pointY;
            this._pointX1 = pointX1;
            this._pointY1 = pointY1;
        }
    }, {
        key: "x",
        get: function get() {
            return this._x;
        }
    }, {
        key: "y",
        get: function get() {
            return this._y;
        }
    }, {
        key: "pointX",
        get: function get() {
            return this._pointX;
        }
    }, {
        key: "pointY",
        get: function get() {
            return this._pointY;
        }
    }, {
        key: "orientation",
        get: function get() {
            return this._orientation;
        }
    }]);

    return Wall;
}();

exports.default = Wall;

/***/ })

/******/ });
//# sourceMappingURL=app.bundle.js.map