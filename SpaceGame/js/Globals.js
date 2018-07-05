// Jorge Juarez : ./js/Globals.js
// Used in conjunction with ../views/index.html

// let's start by defining a BUNCH of image objects for your pleasure
let kirbySS = new Image();
let laser_spr = new Image();
let enemy1_spr = new Image();
let enemy2_spr = new Image();
let enemy3_spr = new Image();
let ice_pupspr = new Image();
let fire_pupspr = new Image();
let grow_pupspr = new Image();
let shrink_pupspr = new Image();
let xtralife_pupspr = new Image();
let boss_spr = new Image();
// can't have an Image object with a source ofc
kirbySS.src = "../img/kirbyss.png";
laser_spr.src = "../img/player1_laser.png";
enemy1_spr.src = "../img/enemy/enemy1.png";
enemy2_spr.src = "../img/enemy/enemy2.png";
enemy3_spr.src = "../img/enemy/enemy3.png";
boss_spr.src = "../img/enemy/bossboi.png";
ice_pupspr.src = "../img/pup/ice-pow.png";
fire_pupspr.src = "../img/pup/fire-pow.png";
grow_pupspr.src = "../img/pup/grow-pow.png";
shrink_pupspr.src = "../img/pup/shrink-pow.png";
xtralife_pupspr.src = "../img/pup/xtralife-pow.png";
let enemyspr_arr = [enemy1_spr, enemy2_spr, enemy3_spr]; // and now compile these objects in an array
let pupspr_arr = [
    ice_pupspr, fire_pupspr, grow_pupspr, shrink_pupspr, xtralife_pupspr
    ]; // this is for the Power Up Image objects

let player1_ship = new Ship(kirbySS, 30, 20, 40, 40,10); // define your Player 1 ship
// Remember: Ship object has (Ship Image, destination x, destination y, width, height, velocity)
let test_laser = new Laser(laser_spr, 10, 10, 0,0); // define your testing laser

let my_pen = document.getElementById('main-canvas').getContext('2d'); // define the pen you will use for drawing a frame
const CANVAS_WIDTH = document.getElementById('main-canvas').width;
const CANVAS_HEIGHT = document.getElementById('main-canvas').height; // we want to define our main boundaries for H/W

let LASER_WIDTH = 15; 
let LASER_HEIGHT = 5;
let ENEMY_WIDTH = 40;
let ENEMY_HEIGHT = 40; 
let ENEMY_HP = 1;
let PUP_WIDTH = 20;
let PUP_HEIGHT = 20;
let boss = new Enemy(boss_spr, CANVAS_WIDTH + 5, CANVAS_HEIGHT / 3, ENEMY_WIDTH * 8, ENEMY_HEIGHT * 4, 5, 50, 50);
let BOSS_INIT_SCORE = 5000;
let is_boss_defeated = false;
let float_down = true;
let is_boss_active = false;
let INIT_SHIP_VEL = 10;
let INIT_LASER_VEL = 10;
let current_level = 1; // level counter
let is_it_a_loss = false;
let NUM_LIVES = 3;
let player1_lasers = []; // this will house all the Laser Objects that currently traveling in the canvas frame
let enemy_arr = []; // same with this, but with Enemy Objects
let pup_arr = []; // as with this, but with PowerUp Objects
let ani_frame_idx = 0; // define a counter for the current animation frame
let did_we_lose_yet = false; // has the player lost yet? Check it with a boolean!
//let pow_duration_idx = 20; // this denotes the length a powerup will last
let is_pow_in_effect = false; // is there a powerup in effect? Check it with a boolean too
let score_content = document.getElementById("scoreboard").innerHTML; // what's our current score
let level_content = document.getElementById("gamestatus").innerHTML; // what's our current level
//let enemy1 = new Enemy(enemy1_spr, CANVAS_WIDTH + 5, CANVAS_HEIGHT - 100, 5);
//cancelAnimationFrame(globalID);
let has_lvl2_been_announced = false;
let has_lvl3_been_announced = false;
let isItBg4 = false;

