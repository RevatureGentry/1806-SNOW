let Hero = (function() {
    let nameSymbol = Symbol('name');
    let levelSymbol = Symbol('level');

    //Constructor Logic
    function Hero(name='Unnamed Hero',level=1){
        this[nameSymbol] = name;
        this[levelSymbol] = level;
    }

    Hero.prototype.getName = function(){
        return this[nameSymbol];
    }

    Hero.prototype.setname = function(name){
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

let hero = new Hero('William', 100);
console.log(`hero.name = ${hero.name}`)
console.log(`hero.getName() = ${hero.getName()}`)