//this is how you create an object in JavaScript with good encapsulation
let Hero = (function(){
	let nameSymbol = Symbol("name");
	let levelSymbol = Symbol("level");
	
	//constructor logic
	function Hero(name='Unnamed Hero', level=1){
		this[nameSymbol] = name;
		this[levelSymbol] = level;
	}
	
	//getters and setters
	Hero.prototype.getName = function() {
		return this[nameSymbol];
	}
	
	Hero.prototype.setName = function(name){
		this[nameSymbol] = name;
	}
	
	Hero.prototype.getLevel = function() {
		return this[levelSymbol];
	}
	
	Hero.prototype.setLevel = function(level){
		this[levelSymbol] = level;
	}
	
	return Hero;
})();

let hero = new Hero();
console.log(`hero.name = ${hero.name}`);
console.log(`hero.getName = ${hero.getName()}`);