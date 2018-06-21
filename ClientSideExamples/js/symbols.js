let Hero = (function() { //Declaration of a Javascript 'class'
//Global Scope
    let nameSymbol = Symbol('name'); //Symbols are globally unique. 
    let levelSymbol = Symbol('level'); //When an instance of this object is declared, it uses a unique identifier that is protected by the Symbol data type. 
    /* Every time you use Symbol, it creates something akin to a unique hash. 
    The strings we pass through are more used for our own benefit. */

    //Constructor
    function Hero(name='Unloved', level=0) {
        this[nameSymbol] = name; //Syntax for identifying a variable by a symbol's identifier. 
        this[levelSymbol] = level;
    }

    /*Setting an object.prototype.function basically sets that functionality to be applied 
    to the base template of this object.
    */
    Hero.prototype.getName = function() {
        return this[nameSymbol]; //Symbols cannot use Dot notation (this.nameSymbol is illegal)
    } //every Javascript object has a default value called a 'prototype'. 
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

let hero = new Hero('Belmont', 100);
console.log(hero.getName());