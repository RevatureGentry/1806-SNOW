class Hero {
    constructor(name = "Not Defined", level = 100, health) {
        this._name = name;
        this._level = level;
        this._health = health;
    }

    set name(name) {
        this._name = name;
    }

    get name() {
        return this._name;
    }

    set level(level) {
        this._level = level;
    }

    get level() {
        return this._level;
    }

    set health(health) {
        this._health = health;
    }

    get health() {
        return this._health;
    }

    sayHello() {
        console.log(`${this.name}, a level ${this.level} hero, says hello!`);
    }

    attack(hero) {
        if (hero instanceof Hero) {
            console.log(`${this.name} hasn't joins the ranks of the offensive yet. Cannot attack ${hero.name}!`);
            return;
        }
    }

    battles(hero) {
        if (hero instanceof Hero){
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

}

class Warrior extends Hero {
    constructor(name, level, health,  weapon = 'wooden stick') {
        super(name, level, health);
        this._weapon = weapon;
    }

    get weapon() {
        return this._weapon;
    }

    set weapon(weapon) {
        this._weapon = weapon;
    } 

    attack(hero) {
        if (hero instanceof Hero) {
            const damage = Math.floor(Math.random() * 100);
            console.log(`${this.name} attacks ${hero.name} with a ${this.weapon} for ${damage} ${damage > 75 ? 'damage - a critical hit!' : 'damage'}`);
            hero.health -= damage;
            console.log(`${this.name}'s health: ${this.health}`);
            console.log(`${hero.name}'s health: ${hero.health}`);
            return;
        }
        console.log(`${this.name} shouldn't attack innocent bystanders!?`);
    }
}

class Wizard extends Hero {
    constructor(name, level, health, spell = 'fireball') {
        super(name, level, health);
        this._spell = spell;
    }

    get spell() {
        return this._spell;
    }

    set spell(spell) {
        this._spell = spell;
    }

    attack(hero) {
        if (hero instanceof Hero) {
            const damage = Math.floor(Math.random() * 100);
            console.log(`${this.name} attacks ${hero.name} with a ${this.spell} for ${damage} ${damage > 75 ? 'damage - a critical hit!' : 'damage'}`);
            hero.health -= damage;
            console.log(`${this.name}'s health: ${this.health}`);
            console.log(`${hero.name}'s health: ${hero.health}`);
            return;
        }
        console.log(`${this.name} shouldn't attack innocent bystanders!?`);
    }
}
