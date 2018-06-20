let Hero = (function(){
    let nameSymbol = Symbol('name');
    let levelSymbol = Symbol('level');

    function Hero(name='unnamed hero', level=1){
        this[nameSymbol] = name;
        this[levelSymbol] = level;
    }
    //getter
    Hero.prototype.getName = function(){
        return this[nameSymbol];
    }
    //setter
    Hero.prototype.setName = function(name){
        this[nameSymbol] = name;
    }

    Hero.prototype.getLevel = function(){
        return this[levelSymbol];
    }

    Hero.prototype.setLevel = function(level){
        this[levelSymbol] = level;
    }
    return Hero;
})();
let hero = new Hero('asdf', 100);
console.log(`hero.name = ${hero.getName()}`);