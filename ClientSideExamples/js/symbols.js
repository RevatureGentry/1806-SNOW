let Hero = (function() {
<<<<<<< HEAD
    let nameSymbol = Symbol('name');
    let levelSymbol = Symbol('level');

    //Constructor Logic
    function Hero(name='Unnamed Hero',level=1){
=======
    let nameSymbol = Symbol();
    let otherSymbol = Symbol();
    console.log(nameSymbol === otherSymbol);
    let levelSymbol = Symbol('level');

    // Constructor Logic
    function Hero(name='Unnamed Hero', level=1) {
>>>>>>> 2ae0fda061ce3c6b68cdaeef54a0001f07e660ea
        this[nameSymbol] = name;
        this[levelSymbol] = level;
    }

<<<<<<< HEAD
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
=======
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
>>>>>>> 2ae0fda061ce3c6b68cdaeef54a0001f07e660ea
        this[levelSymbol] = level;
    }

    return Hero;
})();

let hero = new Hero('William', 100);
<<<<<<< HEAD
console.log(`hero.name = ${hero.name}`)
console.log(`hero.getName() = ${hero.getName()}`)
=======
console.log(`hero.name = ${hero.name}`);
console.log(`hero.getName() = ${hero.getName()}`);
hero.setName("Changed via the setter");
console.log(`hero.getName() = ${hero.getName()}`);
hero.name = 'Changed directly';
console.log(`hero.name = ${hero.name}`);
>>>>>>> 2ae0fda061ce3c6b68cdaeef54a0001f07e660ea
