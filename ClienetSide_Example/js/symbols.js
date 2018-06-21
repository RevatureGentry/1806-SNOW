let Hero = (function(){
    let nameSymbol = Symbol('name');
    let levelSymbol = Symbol('level');

    //Constructors
    function Hero(name = "unnamed hero", level = 1){
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
        return this[levelSymbol];
    }

    Hero.prototype.setLevel = function(){
        this[levelSymbol] = level;
    }

    return Hero;

})();

let hero = new Hero('Johnson', 100);
console.log(`hero name = ${hero.name}`);
console.log(`hero.getName = ${hero.getName()}`);
hero.setName("Changed via the setter");
console.log(`hero.getName = ${hero.getName()}`);
hero.name = 'Changed directly';
console.log(`hero name = ${hero.name}`);