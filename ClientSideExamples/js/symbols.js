let Hero = (function() {
    let nameSymbol = Symbol('name');
    let levelSymbol = Symbol('level');

    function Hero(name='Unnamed Hero', level=1) {
        this[nameSymbol] = name;
        this[levelSymbol] = level;
    }

    Hero.prototype.getName = function() {
        return this[nameSymbol];
    }

    Hero.prototype.setName = function(name) {
        this[nameSymbol] = name;
    }

    Hero.prototype.getLevel = function() {
        return this[levelSymbol];
    }

    Hero.prototype.setLevel = function(level) {
        this[levelSymbol] = level;
    }

    return Hero;
})();

let hero = new Hero();