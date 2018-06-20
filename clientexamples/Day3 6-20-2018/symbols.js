let hero =(function() {
    let nameSymbol = Symbol('name');
    let levelSymbol = Symbol('level');
    // constructor logic
    function hero(name='unnamed hero', level=1) {
        this[nameSymbol] = name;
        this[levelSymbol] = level;
    }

    hero.prototype.getName = function() {
        return this[nameSymbol];
    }

    hero.prototype.setName = function(name) {
        this[nameSymbol] = name;
    }

    hero.prototype.getLevel = function() {
        return this[levelSymbol];
    }

    hero.prototype.setNevel = function(level) {
        this[levelSymbol] = level;
    }

    return hero;
})();

let Hero = new hero('jimmy', 50);
console.log(`get hero name = ${Hero.getName()}`);