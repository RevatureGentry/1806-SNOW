let Hero = (function() 
{
    let nameSymbol = Symbol('name');
    let levelSymbol = Symbol('level');

    //Constructor Logic
    function Hero(name='unnamed hero', level = 1)
    {
        this[nameSymbol] = name;
        this[levelSymbol] = level;

        Hero.prototype.getName = function()
        {
            return this[nameSymbol];
        }

        Hero.prototype.setName = function()
        {
            this[nameSymbol] = name;
        }
    
        Hero.prototype.getLevel = function()
        {
            return this[levelSymbol];
        }

        Hero.prototype.setLevel = function()
        {
            this[levelSymbol] = level;
        }
        
        return Hero;
    }
})();

let hero = new Hero('dev', 100);
console.log(`hero.name = ${Hero.name}`);
console.log(`hero.getName = ${Hero.getName()}`);
