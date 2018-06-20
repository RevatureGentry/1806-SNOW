window.onload = function(){
    playerCharacter = new player(20, 20, "red", 10, 120);
    playerCharacter.gravity = 0;
    gameCanvas.start();
    var gameCanvas = {
        canvas : document.createElement("canvas"),
        start : function(){
            this.canvas.width = 720;
            this.canvas.height = 1280;
            this.context = this.canvas.getContext("2d");
            document.body.insertBefore(this.canvas, document.body.childNodes[0]);
            this.frameNo = 0;
        },
        clear : function(){
            this.context.clearRect(0,0, this.canvas.width, this.canvas.height);
        }
    }
    function player(width, height, color, x, y, type) {
        this.type = type;
        this.color = color;
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
    };
    //set health (3hp)
    //set bombs (2)
    //set position of main player
    //set event listeneres for directions
    
}

//game start

//create logic for enemy characters
    //one of 3 types:
        //shoots pellets at the player directly
        //shoots pellets in a burst
        //fires a laser toward the player
    //enemy type is randomized and updated every frame
    //maximum of 2 enemies + 1 every 60 frames.
    //if enemycount = 0, spawn a new enemy immediately
    //otherwise, spawn 1-2 new enemy every 20 frames
    //position is random on the canvas


//create logic for player character
    //can move in 4 directions
    //can use Shift to slow movement
    //can press z to shoot
    //can press x to bomb
    //represented by a small white circle
    //optional: Have a sprite over the hurtbox