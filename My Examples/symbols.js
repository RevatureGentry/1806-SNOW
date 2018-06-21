let Hero = (function() {
    'use strict';
    let nameSymbol = Symbol('name');
    let levelSymbol = Symbol('level');
    let healthSymbol = Symbol('level');

    function Hero(name='Unnamed Hero', level=1, health=100) {
        this[nameSymbol] = name;
        this[levelSymbol] = level;
        this[healthSymbol] = health;
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

    Hero.prototype.getHealth = function() {
        return this[healthSymbol];
    }

    Hero.prototype.setHealth = function(health) {
        this[healthSymbol] = health;
    }
    return Hero;
})();

let hero = new Hero("William", 100, 9999);
console.log(hero.getName());
console.log(hero.getLevel());
console.log(hero.getHealth());
hero.setName('Changed via Setter');
console.log(hero.getName());
hero.name = 'changed directly, due to JavaScript we can add properties to objects at runtime';
for (let prop of Object.getOwnPropertyNames(hero)) {
    console.log(`Property name: ${prop}`);
}
console.log(Object.getOwnPropertySymbols(hero));