let hero = (function() {
    let nameSymbol = symbol('name');
    let levelSymbol = symbol('level');

    function Hero(name = 'Nameless', level = 1) {
        this[nameSymbol] = name;
        this[levelSymbol] = level;
    }

    hero.prototype.getName = function(){return this[nameSymbol];}
    hero.prototype.setName = function(name){this[nameSymbol] = name;}
    hero.prototype.getLevel = function(){return this[levelSymbol];}
    hero.prototype.setLevel = function(level){this[levelSymbol] = level;}

    return hero
});

let myhero = new hero('Bob',10);
console.log(`hero.name = ${hero.name}`);
console.log(`hero.level = ${hero.level}`)