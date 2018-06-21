let Hero = (function() { //like a class...kinda
    let nameSymbol = Symbol('name');
    let levelSymbol = Symbol('level');
    //constructor
    function Hero(name = 'Unnamed Hero', level = 1){
        this[nameSymbol] = name;
        this[levelSymbol] = level;
    }

    Hero.prototype.getName = function(){
        return this[nameSymbol];
    }

    Hero.prototype.setName = function(name){
        this[nameSymbol] = name;
    }

    Hero.prototype.getLevel = function(){
        return this[LevelSymbol];
    }

    Hero.prototype.setLevel = function(level){
        this[levelSymbol] = level;
    }

    return Hero; //refers to hero inside over function and Hero.prototypes
})();

let hero = new Hero();
console.log(`hero.name = ${hero.name}`); //undefined because there is no property name
console.log(`hero.getName() = ${hero.getName()}`);
hero.name = 'Changed directly';
console.log(`hero.name = ${hero.name}`);
let heroDylan = new Hero("Dylan", 12);
console.log(`heroDylan.name = ${heroDylan.name}`);
console.log(`heroDylan.getName() = ${heroDylan.getName()}`);

