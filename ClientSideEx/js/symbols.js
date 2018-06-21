let Hero = (function(){
    let nameSymbol = Symbol('name');
    let levelSymbol = Symbol('level');

    function Hero(name = 'Unnamed Hero', level=1){
        this[nameSymbol] = name;
        this[levelSymbol] = level;
    }

    Hero.prototype.getName = function(){
        return this[nameSymbol];
    }

    Hero.prototype.setName = function(){
        this[nameSymbol] = name;
    }

    Hero.prototype.getLevel = function(){
        this[levelSymbol] = level;
    }

    Hero.prototype.setLevel = function(){
        this[levelSymbol] = level;
    }

    return Hero;
})();

let hero = new Hero();

console.log(`hero.name ${hero.name}`); 
console.log(`hero.name ${hero.getName()}`);