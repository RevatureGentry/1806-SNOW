// Base Object

// Default function parameters, which get used if no parameters are supplied to the constructor
function Hero(name='Unnamed Hero', level=1) {
    // Constructor logic
    this.name = name;
    this.level = level;
}

// In order to add state or behavior to every Object of type Hero, we must add it to the prototype
Hero.prototype.sayHello = function() {
    console.log(`The Hero '${this.name}', level ${this.level}, says hello!`);
}

// Instantiate a new Hero object
let hero = new Hero('William', 100);
let someOtherHero = new Hero('Auron', 35);

// Demonstrate that both instances can access the method defined on the Hero's prototype
hero.sayHello();
someOtherHero.sayHello();

// As stated in the associated HTML document, JavaScript looks on the Object first whenever we call a property
// If the object does not have that property, JavaScript looks on the Object's prototype. If the prototype doesn't have that property,
// JavaScript goes to the next prototype, and so on and so forth

hero.onlyOnTheInstanceDefinedOnLine16 = function() {
    console.log(`Only the hero instance defined on line 16 can call this function`);
}

hero.onlyOnTheInstanceDefinedOnLine16();

// When we attempt to call the method 'onlyOnTheInstanceDefinedOnLine16' on the someOtherHero instance, we get an error
// Uncomment the following line

// someOtherHero.onlyOnTheInstanceDefinedOnLine16();

// So that's great and all, but how do we extend this Hero object?
// Create another constructor, providing the same parameters as the other object's constructor, as well as any additional parameters you wish to add

function AttackingHero(name, level, health= 50, weapon='wooden stick') {
    // Use this method to simulate a call to 'super' in other class based programming languages
    Hero.call(this, name, level);
    // Set the additional parameters to this object
    this.health = health;
    this.weapon = weapon;
}

// Before we can achieve Inheritance, we use the following line to link the AttackingHero and the Hero together in the prototypal chain
AttackingHero.prototype = Object.create(Hero.prototype);

// Now that we have added AttackingHero to Hero's prototype chain, we can add another method to the AttackingHero type
AttackingHero.prototype.attack = function(hero) {
    if (hero instanceof AttackingHero) {
        const damage = Math.floor(Math.random() * 100);
        console.log(`${this.name} attacks ${hero.name} with a ${this.weapon} for ${damage} ${damage > 80 ? 'damage - a critical hit!' : 'damage!'}`);
        hero.health -= damage;
        console.log(`${this.name}'s health: ${this.health}`);
        console.log(`${hero.name}'s health: ${hero.health}`);
        return;
    }
    console.log(`${this.name} shouldn't attack a defenseless bystander!?`);
}

AttackingHero.prototype.battles = function(hero) {
    while(this.health > 0 && hero.health > 0) {
        if (this.health > 0) {
            this.attack(hero);
        }
        if (hero.health > 0) {
            hero.attack(this);
        }
    }
    let winner = this.health > hero.health ? this : hero;
    console.log(`${winner.name} is the winner!`);
}

// Demonstrate polymorphism
let attackingHero = new AttackingHero('William - AttackingHero', 200, 1000);
attackingHero.attack(hero);

// Demonstrate that AttackingHero inherited the sayHello method defined on Hero
attackingHero.sayHello();


// We can follow this same logic to create any number of further links in the prototypal chain
function Warrior(name, level, health, weapon='broadsword') {
    AttackingHero.call(this, name, level, health, weapon);
}

// Link the Warrior type to the AttackingHero's prototype
Warrior.prototype = Object.create(AttackingHero.prototype);
let warrior = new Warrior('Auron', 300, 2000);
warrior.sayHello();
warrior.attack(attackingHero);


// And another child to the AttackingHero prototype
function Wizard(name, level, health, weapon='fireball') {
    AttackingHero.call(this, name, level, health, weapon);
}

// Link the Wizard type to the AttackingHero's prototype
Wizard.prototype = Object.create(AttackingHero.prototype);

let wizard = new Wizard('LuLu', 300, 2000, 'Ultima');
wizard.sayHello();
wizard.attack(attackingHero);



/* Run this last */

// wizard.battles(warrior);