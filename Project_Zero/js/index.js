console.log("helloworld");
function arise(){
	var doc = document;
	var s = doc.getElementById("he1");
	if(!NaN)
	{
		console.log(typeof arise);
	}
	else{
	}
	console.log(null == false);
	
}
arise();
var doc = document;
let anonHello = function(name){
	console.log(`Hello, ${name}!`);
}
anonHello('Thomas');

var globalScope = "GLOBAL SCOPE";

let x = 0;
function createLocalScope(){
	console.log("Local Scope Function");
	var localScope = "Local Scope";
	console.log(globalScope);
	console.log(localScope);
	let x = 1;
	console.log(x);
	if(!(NaN)){
		console.log("Block Scope Block");
		let blockScope = "block scope";
		console.log(globalScope);
		console.log(localScope);
		console.log(blockScope);
	}
}
createLocalScope();
console.log(x);

function multiplier(factor)
{
	return number=> number*factor;
}

let triple = multiplier(3);

console.log(`${triple(9)}`);

let Hero = (function(){
	let nameSymbol=Symbol('name');
	let levelSymbol=Symbol('level');
	
	function Hero(name='Unnamed Hero',level=1){
		this[nameSymbol] = name;
		this[levelSymbol] = level;
		
	}
	Hero.prototype.getName = function(){
		return this[nameSymbol];
	}
	Hero.prototype.setName = function(name){
		this[nameSymbol]=name;
	}
	Hero.prototype.getLevel = function(){
		return this[levelSymbol];
	}
	Hero.prototype.setLevel = function(level){
		this[levelSymbol] = level;
	}
	return Hero;
})();
let hero = new Hero();
console.log("hero.name:" +	hero.nameSymbol);