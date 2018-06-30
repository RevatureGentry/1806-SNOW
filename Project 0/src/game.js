var c = document.getElementById("game");
var ctx = c.getContext("2d");

var FPS = 30;
var posX = 50;
var posY = 50;
var playerBullets = [];
var enemyBullet = [];
var enemies = [];
var keyState = {};
var bombs = 3;
var lives = 3;
var score = 0;
var player = {
    color: "#0BA",
    bombs: 3,
    lives: 3,
    x: 220,
    y: 270,
    width: 20,
    height: 20,
    draw: function(){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
};
var orb = {
    color: "#4EA",
    x: player.x + 40,
    y: player.y,
    width: 10,
    height:10,
    draw: function(){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}
var orbtwo = {
    color: "#4EA",
    x: player.x - 30,
    y: player.y,
    width: 10,
    height:10,
    draw: function(){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}
player.damage = function(){
    this.lives -= 1;
    //console.log(this.lives);
}
player.bomb = function(){
    if(player.bombs > 0){
        enemyBullet = [];
        enemies = [];
        player.bombs--;
    }
}
player.die = function(){
    
}
player.shoot = function(){
    var bulletPosition = this.midpoint();
    playerBullets.push(bullet({speed:20, x: bulletPosition.x, y: bulletPosition.y}));
    //console.log(playerBullets.length);
};
orb.shoot = function(){
    var bulletPosition = this.midpoint();
    playerBullets.push(bullet({speed:20, x: bulletPosition.x, y: bulletPosition.y, angle: 90}));
}
orbtwo.shoot = function(){
    var bulletPosition = this.midpoint();
    playerBullets.push(bullet({speed:20, x: bulletPosition.x, y: bulletPosition.y, angle: 90}));
}
//to change
var addEnemy = function(){
    if(Math.random() < 0.1){
        enemies.push(Enemy());
        
    }
}
player.midpoint = function(){
    return {
        x: this.x + this.width/2,
        y: this.y + this.height/2
    };
};
orb.midpoint = function(){
    return {
        x: this.x + this.width/2,
        y: this.y + this.height/2
    };
};
orbtwo.midpoint = function(){
    return {
        x: this.x + this.width/2,
        y: this.y + this.height/2
    };
};
function Enemy(I) {
    I = I || {};
    I.active = true;
    I.age = Math.floor(Math.random() * 128);
    I.color = "#123";
    I.x = c.width / 4 + Math.random() * c.width / 2;
    I.y = 0;
    I.fireRate = 15;
    I.health = 5;
    I.xVelocity = 0;
    I.yVelocity = 2;
    I.width = 32;
    I.height = 32;
    I.inBounds = function(){
        return I.x >= 0 && I.x <= c.width && I.y >= 0 && I.y <= c.height;
    };
    I.draw = function(){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    };
    I.update = function(){
        I.x += I.xVelocity;
        I.y += I.yVelocity;

        I.xVelocity = 3 * Math.sin(I.age * Math.PI / 64);
        I.age++;
        I.active = I.active && I.inBounds();
    };
    I.damage = function(){
        this.health--;
    }
    I.die = function(){
        this.active = false;
    }
    I.midpoint = function(){
        return {
            x: this.x + this.width/2,
            y: this.y + this.height/2
        };
    }
    I.shoot = function(){
        var enemyBulletPosition = this.midpoint();
        enemyBullet.push(bullet({speed:-4, x: enemyBulletPosition.x, y: enemyBulletPosition.y, angle: 90}));
    }
    return I;
}
function collisionDetection(a, b){
 return a.x < b.x + b.width &&
    a.x + a.width > b.x &&
    a.y < b.y + b.height &&
    a.y + a.height > b.y;
}
function collisionHandler(){
    playerBullets.forEach(function(bullet){
        enemies.forEach(function(enemy){
            if(collisionDetection(bullet, enemy)){
                enemy.damage();
                score = score + 50;
                //console.log(enemy.health)
                if(enemy.health == 0){
                    enemy.die();
                    score = score + 500;
                }
                
                bullet.active = false;
            }
        });
    });
    enemies.forEach(function(enemy){
        if(collisionDetection(enemy, player)){
            enemy.die();
            
            player.damage();
        }
    })
}
function bullet(I){
    I.active = true;
    I.xVelocity = 0;
    I.yVelocity = -I.speed;
    I.height = 3;
    I.width = 3;
    I.color = "#0A2";
    I.angle = 0;
    I.inBounds = function(){
        return I.x >= 0 && I.x <= c.width && I.y >= 0 && I.y <= c.height;
    };
    I.update = function(){
        I.x += I.xVelocity;
        I.y += I.yVelocity;
        this.angle = this.angle + 20;
        //console.log(this.angle);
        I.active = I.active && I.inBounds();
    };
    I.draw = function(){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    return I;
}
var shootingSpeedCounter = 0;
var bombCoolDown = 0;
setInterval(function(){
    if(bombCoolDown>0){
        bombCoolDown--;
    }
    console.log(bombCoolDown);
    var playerspeed = 8;
    shootingSpeedCounter++;
    update();
    draw();
    enemies.forEach(function(enemy){
        enemy.fireRate--;
        
        if(enemy.fireRate <= 0){
            enemy.shoot();
            //console.log(enemyBullet);
            enemy.fireRate = 15;
        }
    })
    if(keyState[16]){
        //console.log("shooting");
        playerspeed = 3;
    }
    if(keyState[90]){
        //console.log(shootingSpeedCounter);
        player.shoot();
        if(shootingSpeedCounter >= 5){
            orb.shoot();
            orbtwo.shoot();
            shootingSpeedCounter = 0;
        }
        
    }
    if(keyState[38]){
        //console.log("confirmed");
        player.y -= playerspeed;
        orb.y -= playerspeed;
        orbtwo.y -= playerspeed;
    }
    if(keyState[37]){
        //console.log("confirmed");
        player.x -= playerspeed;
        orb.x -= playerspeed;
        orbtwo.x -= playerspeed;
    }
    if(keyState[39]){
        //console.log("confirmed");
        player.x += playerspeed;
        orb.x += playerspeed;
        orbtwo.x += playerspeed;
    }
    if(keyState[40]){
        //console.log("confirmed");
        player.y += playerspeed;
        orb.y += playerspeed;
        orbtwo.y += playerspeed;
    }
    if(keyState[88] && bombCoolDown == 0){
        player.bomb();
        bombCoolDown = 50;
    }
    //player.x = player.x.clamp(0, c.width - player.width);
    //player.y = player.y.clamp(0, c.height - player.height);
}, 1000/FPS);

function update(){
   posX += 1;
   posY += 1;
   enemyBullet.forEach(function(bullet){
       bullet.update();
   })
   playerBullets.forEach(function(bullet){
       bullet.update();
   });
   playerBullets = playerBullets.filter(function(bullet){
       return bullet.active;
   })
   enemies.forEach(function(enemy){
       enemy.update();
   });
   enemies = enemies.filter(function(enemy){
       return enemy.active;
   });
   addEnemy();
   collisionHandler();
   //console.log(ctx.width);
}
function draw(){
    //console.log("Mouse over");
    //ctx.fillStyle = "#020";
    ctx.clearRect(0,0, c.width, c.height);
    ctx.fillText(`Score: ${score}`, 50, 30);
    ctx.fillText(`Lives: ${player.lives}`, 50, 50);
    ctx.fillText(`Bombs: ${player.bombs}`, 50, 70);
    player.draw();
    orb.draw();
    orbtwo.draw();
    playerBullets.forEach(function(bullet){
        bullet.draw();
    });
    enemyBullet.forEach(function(bullet){
        bullet.draw();
    });
    enemies.forEach(function(enemy){
        enemy.draw();
    });
}
document.addEventListener('keydown', function(e){
    keyState[e.keyCode || e.which] = true;
    
})
document.addEventListener('keyup', function(e){
    keyState[e.keyCode || e.which] = false;
}, true);
//document.getElementById("game").addEventListener("mouseover", draw);