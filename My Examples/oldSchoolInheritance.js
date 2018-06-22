function Hero(name = "'Unnamed Hero'", health=10) {
    this.name = name;
    this.health = health;
}

Hero.prototype.sayHello = function() {
    console.log(`The hero ${this.name} says hello!`);
}

Hero.prototype.attack = function() {
    console.log(`${this.name} is a non-attacking hero! Cannot attack!!`);
}


function AttackingHero(name, health, weapon='wooden stick') {
    Hero.call(this, name, health);
    this.weapon = weapon;
    this.damage = Math.floor(Math.random() * 250);
}

// Use this to add the next link in the prototype chain
AttackingHero.prototype = Object.create(Hero.prototype);

// Overriding
AttackingHero.prototype.sayHello = function() {
    console.log(`The hero ${this.name}, an attacking hero, says hello!`);
}

AttackingHero.prototype.attack = function(hero) {
    if (hero instanceof AttackingHero) {
        const attackDamage = Math.floor(Math.random() * 250);
        console.log(`${this.name} attacks ${hero.name} with a ${this.weapon} for ${attackDamage} damage${attackDamage > 200 ? ' - a critical hit!': '!'}`);
        hero.health -= attackDamage;
        console.log(`${this.name}'s health: ${this.health}`);
        console.log(`${hero.name}'s health: ${hero.health}`);
        return;
    }
    console.log(`${this.name} shouldn't attack innocent bystanders!?!`);
}

AttackingHero.prototype.battles = function(hero) {
    if (this instanceof AttackingHero && hero instanceof AttackingHero) {
        while (this.health > 0 && hero.health > 0) {
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
}

// let heroTest = new Hero("William");
// heroTest.sayHello();
// heroTest.attack();
// let test = new AttackingHero();
// test.sayHello();
// test.attack();

function Warrior(name, health, weapon='broadsword', shield='wooden shield') {
    AttackingHero.call(this,name, health, weapon);
    this.shield = shield;
}

Warrior.prototype = Object.create(AttackingHero.prototype);
Warrior.prototype.sayHello = function() {
    console.log(`The Warrior ${this.name}, donning a ${this.weapon} and ${this.shield}, says hello!`);
}

let warrior = new Warrior('William', 1000);
// warrior.sayHello();
// warrior.attack();


function Wizard(name, health, weapon='fireball', potion='magic buff') {
    AttackingHero.call(this, name, health, weapon);
    this.potion = potion;
}

Wizard.prototype = Object.create(AttackingHero.prototype);
Wizard.prototype.sayHello = function() {
    console.log(`The Wizard ${this.name}, can conjure a ${this.weapon} and use a ${this.potion} potion, says hello!`);
}
let wizard = new Wizard('Gandalf', 1000);
// wizard.sayHello();
// wizard.attack();

wizard.battles(warrior);