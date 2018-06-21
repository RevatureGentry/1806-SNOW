
let Hero = ( // oh my she's a big class
    function() {
        let nameSymbol = Symbol('name');
        let levelSymbol = Symbol('level');

        function Hero(name = 'Unnamed Hero', level = 1) {
            this[nameSymbol] = name;
            this[levelSymbol] = level;
        };

        Hero.prototype.getName = function(){
            return this[nameSymbol]; // getter!!
        };

        Hero.prototype.setName = function(name){
            this[nameSymbol] = name;
        };

        Hero.prototype.getLevel = function() {
            return this[levelSymbol]; // getter!!
        };

        Hero.prototype.setLevel = function(level) {
            this[levelSymbol] = level;
        };

        return Hero;
    }
)();

let h1 = new Hero("John", 100);
console.log(h1.getName());