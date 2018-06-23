// Constructs that you might be more used to
class Hero {
    constructor(name='Unnamed Hero', level=1) {
        this._name = name;
        this._level = level;
    }

    // Getters and Setters
    get name() {
        return this._name;
    }

    set name(name) {
        this._name = name;
    }

    get level() {
        return this._level;
    }

    set level(level) {
        this._level = level;
    }

    sayHello() {
        console.log(`The Hero '${this.name}', level ${this.level}, says hello!`);
    }

}

let hero = new Hero("Titus");
hero.sayHello();

class AttackingHero extends Hero {
    constructor(name, level, weapon='wooden stick', health=1000) {
        super(name, level);
        this._weapon = weapon;
        this._health = health;
    }

    get weapon() {
        return this._weapon;
    }

    set weapon(weapon) {
        this._weapon = weapon;
    }

    get health() {
        return this._health;
    }

    set health(health) {
        this._health = health;
    }

    // Overriding
    sayHello() {
        console.log(`The AttackingHero '${this.name}, donning a ${this.weapon}, has ${this.health} health`);
    }

    attack(hero) {
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

    battles(hero) {
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
}

let attackingHero = new AttackingHero("Wakka", 1000000, 'Blitzball', 650);
attackingHero.sayHello();

class Warrior extends AttackingHero {
    constructor(name, level, weapon='broadsword', health) {
        super(name, level, weapon, health);
    }

    // Overriding
    sayHello() {
        console.log(`The Warrior '${this.name}', has ${this.health} health, and uses a ${this.weapon} as it\'s warrior weapon, says hello!`);
    }
}


let warrior = new Warrior('Auron', 100, 'huge sword', 1000);
warrior.sayHello();




class Wizard extends AttackingHero {
    constructor(name, level, weapon='fireball', health) {
        super(name, level, weapon, health);
    }

    // Overriding
    sayHello() {
        console.log(`The Wizard '${this.name}', has ${this.health} health, and is capable of casting a ${this.weapon} spell, says hello!`);
    }
}


let wizard = new Wizard('LuLu', 150, 'Thunder', 1000);
wizard.sayHello();



/* Run this last */

// warrior.battles(wizard);