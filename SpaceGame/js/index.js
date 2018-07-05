// Jorge Juarez - ./js/index.js
// Used in conjunction with ../views/index.html

let drawShip = function(){
    //my_pen.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    my_pen.drawImage(player1_ship.getShpImg(), player1_ship.getDx(),
        player1_ship.getDy(), player1_ship.getDWidth(), player1_ship.getDHeight());
} // draws the player ship on the canvas

let drawLaser = function (laser) {
    my_pen.drawImage(laser.getLsrImg(), laser.getDx(), laser.getDy(), laser.getDWidth(), laser.getDHeight());
    for(let i = 0; i< enemy_arr.length; i++){ // now, loop through the enemies if our laser is touching them
        if (areTheyTouching(enemy_arr[i], laser, 40) == true) {
            player1_lasers.splice(player1_lasers.indexOf(laser), 1);
            enemy_arr[i].setHP(enemy_arr[i].getHP() - 1);
            console.log("WE TOOK A HIT!", enemy_arr[i].getHP());
            if(enemy_arr[i].getHP() <= 0){
                if(laser.getDx() < CANVAS_WIDTH){
                    score_content = parseInt(score_content) + (enemy_arr[i].getBaseHP() * 100);
                }
                enemy_arr.splice(i, 1);
                document.getElementById("scoreboard").innerHTML = score_content;
                return false;
            }
        }
    }; // draws the current laser object on the canvas
    if(areTheyTouching(laser, boss, 100)){
        player1_lasers.splice(player1_lasers.indexOf(laser), 1);
        boss.setHP(boss.getHP() - 1);
        writePowerEvent(`CURRENT BOSS HP: ${boss.getHP()}`);
        if(boss.getHP() <= 0){
            writePowerEvent(`BOSS DEFEATED!`);
            is_boss_defeated = true;
            score_content = parseInt(score_content) + (boss.getBaseHP() * 100);
            document.getElementById("scoreboard").innerHTML = score_content;
        }
        
    }
    return true;
}

let drawEnemy = function (enemy) {
    my_pen.drawImage(enemy.getEnImg(), enemy.getDx(), enemy.getDy(), enemy.getDWidth(), enemy.getDHeight());
}; // draws the current enemy object on the canvas

let drawPup = function(pup, player){
    my_pen.drawImage(pup.getPUpImg(), pup.getDx(), pup.getDy(), pup.getDWidth(), pup.getDHeight());
   if(areTheyTouching(player1_ship, pup, 40) == true){
       writePowerEvent(pup.getMsg());
       console.log("TOUCH POWERUP", pup);
       setPowerUp(pup, player);
       pup_arr.splice(pup_arr.indexOf(pup), 1);
   }
   // not sure why, but powerups freeze the game when i touch them unless i define the setPowerUp function call
   // here, and not in the main drawthewholegame function
};

let moveLaser = function(laser){
    if(laser.getDx() >= CANVAS_WIDTH){
        return false;   // laser has reached the end of the screen, stop!!!
    }
    laser.setDx(laser.getDx() + laser.getVelocity());
    return true;
};

let moveEnemy = function(enemy){
    if(enemy.getDx() <= -100){
        return false;
    }
    else{
        let factor = 2; // TL;DR this following code just generates a random movement for the enemies
        let random_number = Math.floor(Math.random() * (2 * factor)) + 1;
        let plus_or_minus = Math.floor(Math.random() * 100) + 1;
        let do_i_move = Math.floor(Math.random() * 100) + 1;
        if(do_i_move % 2 == 0){
            if(plus_or_minus % 2 == 0){
                if(enemy.getDy() <= 5){
                    enemy.setDy(5);
                }
                else enemy.setDy(enemy.getDy() - random_number);
            }
            if(plus_or_minus % 2 == 1){
                if(enemy.getDy() >= CANVAS_HEIGHT - 40){
                    enemy.setDy(CANVAS_HEIGHT - 40);
                }
                else enemy.setDy(enemy.getDy() + random_number);
            }
            enemy.setDx(enemy.getDx() - (enemy.getVelocity() / 2));
        }
        else{
            // TODO: uhhh hmm...
        }
    }
    return true;
}

let movePup = function(pup){ // move the power-up, all power-ups move in a uniform fashion
    if(pup.getDx() <= -100){
        return false;
    }
    else{
        pup.setDx(pup.getDx() - pup.getVelocity());
    }
    return true;
};

let setPowerUp = function(pup, player){
    if(pup.getPUpId() == "ice"){ // since ice powerup slows you down, let's make sure it doesn't completely slow you down
        if(player.getVelocity() <= 2){
            player.setVelocity(2);
        }
        else {
            player.setVelocity(player.getVelocity() - 2);
        }
        return true;
    };
    if(pup.getPUpId() == "fire"){ // fire powerup speeds you up, let's make sure you're not going TOO fast
        if(player.getVelocity() >= 15){
            player.setVelocity(15);
        }
        else {
            player.setVelocity(player.getVelocity() + 2);
        }
        return true;
    };
    if(pup.getPUpId() == "grow"){
        if(player.getDWidth() >= 90){
            player.setDWidth(90);
            player.setDHeight(90);
        }
        else{
            player.setDWidth(player.getDWidth() + 10);
            player.setDHeight(player.getDHeight() + 10);
        }
        return true;
    };
    if(pup.getPUpId() == "shrink"){
        if(player.getDWidth() <= 10){
            player.setDWidth(10);
            player.setDHeight(10);
        }
        else{
            player.setDWidth(player.getDWidth() - 10);
            player.setDHeight(player.getDHeight() - 10);
        }
        return true;
    };
    if(pup.getPUpId() == "xtralife"){
        NUM_LIVES += 1;
        updateLiveShips(NUM_LIVES);
    };
    return false;
};

let checkCurrLevel = function(score){
    // make enemies spawn more when level goes up
    current_level = 0;
    //console.log(typeof score);
    let res = 1 + (score / 1000);
    current_level = Math.floor(res);
    document.getElementById("CURRENTSCORE").innerHTML = current_level;
};

let pickRandomEnemy = function(startDx, startDy, startVelocity){
    let newEnSpr = enemyspr_arr[Math.floor(Math.random() * enemyspr_arr.length)];
     //return new Enemy(newEnSpr, CANVAS_WIDTH + 5, rand2, ENEMY_WIDTH, ENEMY_HEIGHT, 5, ENEMY_HP);
    //return enemyspr_arr[Math.floor(Math.random() * enemyspr_arr.length)]; // pick a random sprite
    console.log(ENEMY_HP, "ENEMY HP");
    return new Enemy(newEnSpr, startDx, startDy, ENEMY_WIDTH, ENEMY_HEIGHT, startVelocity, ENEMY_HP, ENEMY_HP);
    
};

let generateRandomPup = function(rand2){ // this generates a random Power-Up Object, and returns it
    res = Math.floor(Math.random() * (pupspr_arr.length));
    if(res == 0) { // ice
        return new PowerUp(ice_pupspr, "ice", CANVAS_WIDTH + 5, rand2 - 40, 
            PUP_WIDTH, PUP_HEIGHT, "Ice Power! Slowing down...");
    }
    if(res == 1){ // fire
        return new PowerUp(fire_pupspr, "fire", CANVAS_WIDTH + 5, rand2 - 40, 
            PUP_WIDTH, PUP_HEIGHT, 5, "Fire Power! Speeding up!");
    }
    if(res == 2){
        return new PowerUp(grow_pupspr, "grow", CANVAS_WIDTH + 5, rand2 - 40, 
            PUP_WIDTH, PUP_HEIGHT, 5, "Grow Power! Ship is larger!");
    }
    if (res == 3){
        return new PowerUp(shrink_pupspr, "shrink", CANVAS_WIDTH + 5, rand2 - 40, 
            PUP_WIDTH, PUP_HEIGHT, 5, "Shrink Power! Ship is smaller!");
    }
    if (res == 4){
        return new PowerUp(xtralife_pupspr, "xtralife", CANVAS_WIDTH + 5, rand2 - 40, 
            PUP_WIDTH, PUP_HEIGHT, 5, "Extra Life!");
    }
    return new PowerUp(ice_pupspr, "ice", CANVAS_WIDTH + 5, rand2 - 40, 
        PUP_WIDTH, PUP_HEIGHT, 5, "Ice Power! Slowing down...");
    // idk im scares of unexpected boundary errors, so i just set a default value lol
}

let areTheyTouching = function(thing, otherthing, threshold){ // this compares the distances of two objects, returns true if below threshold
    let x_diff = Math.abs(thing.getDx() - otherthing.getDx());
    let y_diff = Math.abs(thing.getDy() - otherthing.getDy());
    //let  = 40;
    //let max_height = 40;
    //let threshold = 40;
    if(x_diff <= threshold && y_diff <= threshold) // HOW DARE THEY TOUCH
        return true;
    return false;
};

let moveBoss = function(b){
    console.log("position ", b.getDx());
    if(boss.getDx() >= (CANVAS_WIDTH * .65)){
        b.setDx(b.getDx() - b.getVelocity());
    }
    else{
       if(float_down == true) {
           b.setDy(b.getDy() + (b.getVelocity()));
           if(b.getDy() >= CANVAS_HEIGHT - 150){
               float_down = false;
           }
       }
       if(float_down == false){
           b.setDy(b.getDy() - (b.getVelocity()));
           if (b.getDy() <= 10) {
               float_down = true;
           }
       }
    }
};

let drawTheWholeGame = function (level) {
    my_pen.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT); // first, let's clear the canvas
    if (!did_we_lose_yet) {
        drawShip(); // now, let's draw the ship's current coordinates on canvas
    }
    for (let i = 0; i < player1_lasers.length; i++) { // for each laser that the player has shot, let's move it
        if (drawLaser(player1_lasers[i]) == false) { // should laser be out of view, take the laser out of the array
            player1_lasers.splice(player1_lasers[i], 1);
        };
    }
    if (parseInt(score_content) >= 5000 && has_lvl2_been_announced == false) {
        ENEMY_HP += 1;
        writePowerEvent(`Baddies now require ${ENEMY_HP} hits to be destroyed.`);
        has_lvl2_been_announced = true;
    }
    if (parseInt(score_content) >= 7000 && has_lvl3_been_announced == false){
        ENEMY_HP += 1;
        writePowerEvent(`Baddies now require ${ENEMY_HP} hits to be destroyed.`);
        has_lvl3_been_announced = true;
    }
    let rand = Math.random(); // let's generate a random number to see if an enemy should appear in this frame
    let rand2 = Math.floor(Math.random() * (CANVAS_HEIGHT - 5)) + 1; // this denotes which x height should it spawn at
    if(parseInt(score_content) < BOSS_INIT_SCORE || is_boss_defeated == true){
        if (rand < (.01 * level)) { // if the the rand variable is less than this, spawn the enemy!
            let temp_enemy = pickRandomEnemy(CANVAS_WIDTH + 5, rand2, 5 + current_level);
            enemy_arr.push(temp_enemy);
        }
        if (rand < (.004 - (.00001 * level) )){
            if (rand2 - 20 <= 40) { // it bugs me that i can see the sprite getting cut off at the top of the canvas
                rand2 = 80; // so let's set a static destination height if the predefined random height is too small
            }
            //let temp_pUp = new PowerUp(ice_pupspr, "ice", CANVAS_WIDTH + 5, rand2 - 40, PUP_WIDTH, PUP_HEIGHT, 5);

            let temp_pUp = generateRandomPup(rand2);
            console.log("PUP:", temp_pUp.getPUpId());
            pup_arr.push(temp_pUp);
        }
    }
    if(parseInt(score_content) > BOSS_INIT_SCORE){
        if(is_boss_defeated == false){
            my_pen.drawImage(boss.getEnImg(), boss.getDx(), boss.getDy(), boss.getDWidth(), boss.getDHeight());
            if(rand < .06){
                let temp_enemy = pickRandomEnemy(boss.getDx(), boss.getDy() + 5, 10);
                enemy_arr.push(temp_enemy);
            }
        }
    }
    for (let i = 0; i < pup_arr.length; i++) {
        drawPup(pup_arr[i], player1_ship);
    }
    for (let i = 0; i < enemy_arr.length; i++) {
        if (areTheyTouching(enemy_arr[i], player1_ship, 40) == true) {
            enemy_arr.splice(enemy_arr[i], 1);
            NUM_LIVES -= 1; // we lost a life!
            my_pen.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
            if(NUM_LIVES == 0){
                did_we_lose_yet = true;
            }
            is_it_a_loss = true;

        }
        drawEnemy(enemy_arr[i]);
    }
};

let animateNextFrame = function(){ // animate the next frame, aka move all Lasers, Enemies, and PowerUps
    for(let i = 0; i< player1_lasers.length; i++){
        moveLaser(player1_lasers[i]); 
    }
    for(let i = 0; i < enemy_arr.length; i++){
        moveEnemy(enemy_arr[i]);
    }
    for(let i = 0; i < pup_arr.length; i++){
        movePup(pup_arr[i]);
    }
    if(parseInt(score_content) > BOSS_INIT_SCORE){
        /*
        if(boss.getDy() <= 50)
            moveBoss(boss, "plus");
        if (boss.getDy() >= CANVAS_HEIGHT - 100)
            moveBoss(boss, "minus");
        */
       moveBoss(boss);
    }
}

// -------------- event handlers for key presses ------------------------------------------------
let leftArrowPressed = function(player){
    //console.log("LEFT");
    if(player.getDx() > 0){
        player.setDx(player.getDx() - player.getVelocity()); 
        //console.log("X",player.getDx());
    }
};

let rightArrowPressed = function(player){
    //console.log("RIGHT");
    if (player.getDx() < (CANVAS_WIDTH / 2) ) {
        player.setDx(player.getDx() + player.getVelocity());
        //console.log("X",player.getDx());
    }
};

let upArrowPressed = function(player){
    //console.log("UP");
    if(player.getDy() > 10){
        player.setDy(player.getDy() - player.getVelocity());
        //console.log("Y",player.getDy());
    }
};

let downArrowPressed = function(player){
    //console.log("DOWN");
    if(player.getDy() < (CANVAS_HEIGHT - 80)){
        player.setDy(player.getDy() + player.getVelocity());
        //console.log("Y",player.getDy());
    }
};

let kirbyShoot = function(player){
    let temp_laser = new Laser(laser_spr, player.getDx() + 55, player.getDy() + 20, 
        LASER_WIDTH, LASER_HEIGHT, INIT_LASER_VEL, 10);
    player1_lasers.push(temp_laser);
    drawLaser(temp_laser);
};

// -------------- end key press event handlers -----------------------------------------
let moveKirbyShip = function(evt){
    switch (evt.keyCode) {
        case 32: // she pressed the space bar
            kirbyShoot(player1_ship);
            break;
        case 37: // she pressed the left arrow key
            leftArrowPressed(player1_ship);
            break;
        case 39: // she pressed the right arrow key
            rightArrowPressed(player1_ship);
            break;
        case 38: // she pressed the up arrow key
            upArrowPressed(player1_ship);
            break;
        case 40: // she pressed the down arrow key
            downArrowPressed(player1_ship);
            break;
    }
};

let updateLiveShips = function(num_lives){
    document.getElementById("shipcount").innerHTML = "";
    for(let i = 0 ; i < num_lives; i++){
        cell = document.createElement("img");
        cell.src = "../img/kirbyss.png";
        cell.width = "20";
        cell.height = "20";
        document.getElementById("shipcount").appendChild(cell);
    }
}

let writePowerEvent = function(pow_text){
    document.getElementById("announce-pow").innerHTML = pow_text;
};

let changeBg = function(evt){
    if (isItBg4 == true){
        document.getElementById("mainbody").style.backgroundImage = "url('../img/bg/img.gif')";
        isItBg4 = false;    
    }
    else {
        document.getElementById("mainbody").style.backgroundImage = "url('../img/bg/img4.gif')";
        isItBg4 = true;
    }
}

let loopGame = function(){
    drawTheWholeGame(current_level); // first we draw the current frame of the game
    animateNextFrame(); // now we draw the next frame of the game and animate it
    //console.log('in progess, frame: ', ani_frame_idx);
    if(did_we_lose_yet == false){ // make sure we didn't lose yet
        if(is_it_a_loss == true){
            updateLiveShips(NUM_LIVES);
            player1_ship.setDx(30); // reset the ship, tbh coulda made it in a different function
            player1_ship.setDy(30);
            player1_ship.setDWidth(40);
            player1_ship.setDHeight(40);
            player1_ship.setVelocity(10);
            console.log("LOSS");
            writePowerEvent("Lost a life!");
            enemy_arr = [];
            pup_arr = [];
            is_it_a_loss = false;
        }
        checkCurrLevel(parseInt(score_content));
        window.requestAnimationFrame(loopGame);
        ani_frame_idx++; // add to the animation frame counter
    }
    else{
        console.log("We lost"); // she just lost her last life
        writePowerEvent("You lost!");
        document.getElementById("shipcount").innerHTML = "";
        my_pen.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        //window.requestAnimationFrame(loopGame);
        document.removeEventListener('keydown', moveKirbyShip);
        document.getElementById("gamestatus").innerHTML = "GAME OVER, FINAL LEVEL REACHED: "
             + current_level + "/ FINAL SCORE REACHED: " + score_content;
    }
}; 

window.onload = function(){
    //initiateGame();
    updateLiveShips(NUM_LIVES);
    document.addEventListener('keydown', moveKirbyShip);
    document.getElementById("bg-changer").addEventListener('click', changeBg);
    loopGame();
}
