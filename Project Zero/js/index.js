//Enum Declarations
let DmgTypeEnum = Object.freeze({"magic":1, "physical":2});
let StatsEnum = Object.freeze({"str":1, "dex":2, "con":3, "wis":4, "int":5, "cha":6})
let TurnsEnum = Object.freeze({"c1":1, "c2":2})

//Class Declarations
// Combat Manager Class
class Combat {
    constructor(turns=10, fighter1, fighter2) {
        if (typeof(fighter1), typeof(fighter2) !== 'object') {
            console.log(`ERROR (Combat class): fighter1 or fighter2 are not objects!
            fighter1: ${fighter1}
            fighter2: ${fighter2}`);
            throw new Error();
        }
        //Turn Management Values
        this.turnCounter = 0;
        this.maxTurns = turns;
        this.whoseTurn = TurnsEnum.c1;

        //Combatants
        this.char1 = fighter1;
        this.char2 = fighter2;

        console.log(`turnCounter: ${this.turnCounter}
                    char1: ${this.char1}`);
        return this;
    }

    //Getters 
    getTurnCount() {
        return this.turnCounter;
    }
    getMaxTurns() {
        return this.maxTurns;
    }
    getWhoseTurn() {
        return this.whoseTurn;
    }
    getChar1() {
        return this.char1;
    }
    getChar2() {
        return this.char2;
    }

    //Setters
    setTurnCount(newCount) {
        this.turnCounter = newCount;
    }
    setMaxTurns(newMax) {
        this.maxTurns = newMax;
    }
    setWhoseTurn(newTurn) {
        if (typeof(newTurn) != 'number' || newTurn > 2 || newTurn < 1) {
            throw new Error();
        }
        this.whoseTurn = newTurn;
    }

    //Methods
    combatCycle() {
        console.log("In combatCycle");
        let winner = null;
        appendLog(`---Start of Round ${this.turnCounter}---`);

        //Char1 (Player) makes their move.

        //Char2 (Computer) makes their move.

        //Calculate Damage.


        //Check For Winner. 
        if (this.char1.getHp(), this.char2.getHp() <= 0) {
            appendLog(`Both ${this.char1.getName()} and ${this.char2.getName()} have collapsed!
            It's a TKO on both sides!`);
        }
        else if (this.char1.getHp() <= 0) {
            appendLog(`${this.char1.getName()} has collapsed! 
            ${this.char2.getName()} is the winner of this combat!`);
            winner = this.char2;
        }
        else if (this.char2.getHp() <= 0) {
            appendLog(`${this.char2.getName()} has collapsed! 
            ${this.char1.getName()} is the winner of this combat!`);
            winner = char1;
        }
        else {
            appendLog(`---End of Round ${this.turnCounter}/${this.maxTurns}---`);
            this.turnCounter++;
            if (this.turnCounter >= this.maxTurns) {
                appendLog("---END OF COMBAT---\nTo fight again, press the 'Reset' Button Below.");
            }
        }
    }
}

//Character Class.
class Character {
    constructor(sPoints=30, baseHp='4', baseArmor=10) {
        //Combat Stats
        this.hp = baseHp;
        this.maxHp = baseHp;
        this.armor = baseArmor;
        this.baseDmg = 10;

        //Attributes
        this.statPoints = sPoints;
        this.str = 10; //Determines Physical Damage.
        this.dex = 10; //Determines Physical Resistance.
        this.con = 10; //Determines Bonus HP.
        this.wis = 10; //Determines Magical Resistance.
        this.int = 10; //Determines Magical Damage.
        this.cha = 10; //Determines Bonus Armor (Due to physical appeal - the sexier you are, the harder it is to hurt you).

        //Custom Text Fields
        this.name = " ";
        this.race = " ";

        //Custom Combat Fields
            //TODO: Add skills and other combat bits to make it more interesting. 
        return this;
    }
    // Getters
    getStat(statType){ //Accepts a statsEnum.<type> and returns the associated number.
        if (typeof(statType) != 'number') {
            throw new Error();
        }
        switch(statType) {
            case StatsEnum.str: 
                return this.str;
                break;
            case StatsEnum.dex:
                return this.dex;
                break;
            case StatsEnum.con: 
                return this.con;
                break;
            case StatsEnum.wis:
                return this.wis;
                break;
            case StatsEnum.int:
                return this.int;
                break;
            case StatsEnum.cha:
                return this.cha;
                break;
            default: 
                console.log("StatManager.getStat() - Default reached. Inappropriate statType.");
                return -1;
                break;
        }
    }
    getName() {
        return this.name;
    }
    getRace() {
        return this.race;
    }
    getStatPoints() {
        return this.statPoints;
    }
    getHp() {
        return this.hp;
    }
    getMaxHp() {
        return this.maxHp;
    }
    getArmor() {
        return this.armor;
    }
    getBaseDMG() {
        return this.baseDmg;
    }

    //Setters
    /* setStat(statType, statValue){ //Accepts a statsEnum.<type> and returns the associated number.
        if (typeof(statType) != 'number') {
            throw new Error();
        }
        switch(statType) {
            case StatsEnum.str: 
                this[str] = statValue;
                break;
            case StatsEnum.dex:
                this[dex] = statValue;
                break;
            case StatsEnum.con: 
                this[con] = statValue;
                break;
            case StatsEnum.wis:
                this[wis] = statValue;
                break;
            case StatsEnum.int:
                this[int] = statValue;
                break;
            case StatsEnum.cha:
                this[cha] = statValue;
                break;
            default: 
                console.log("StatManager.setStat() - Default reached. Inappropriate statType.");
                break;
        }
        updateAttributes();
    } Removed due to a lack of implementation. 
    TODO: Add Text Entry -> New Value Functionality. */

    incrementStat(statType, isPositive) { //Increments one of the stats by 1. 
        if (typeof(statType) != 'number' || typeof(isPositive) != 'boolean') {
            console.log('Error in incrementStat, improper values passed.');
            throw new Error();
        }
        if (this.statPoints <= 0 && isPositive) console.log("ERROR: Out of Stat Points.");
        else {
            switch(statType) {
                case StatsEnum.str: 
                    (isPositive) ? this.str++ : this.str--;
                    break;
                case StatsEnum.dex:
                    (isPositive) ? this.dex++ : this.dex--;
                    break;
                case StatsEnum.con: 
                    (isPositive) ? this.con++ : this.con--;
                    //TODO: Add an 'Update HP' functionality here.
                    break;
                case StatsEnum.wis:
                    (isPositive) ? this.wis++ : this.wis--;
                    break;
                case StatsEnum.int:
                    (isPositive) ? this.int++ : this.int--;
                    break;
                case StatsEnum.cha:
                    (isPositive) ? this.cha++ : this.cha--;
                    //TODO: Add an 'Update Armor' functionality here.
                    break;
                default: 
                    console.log("StatManager.incrementStat() - Default reached. Inappropriate statType.");
                    break;
            }
            (isPositive) ? this.statPoints-- : this.statPoints++;
        }
        updateAttributes();
    }
    setName(newName) {
        let oldName = this.name;
        this.name = newName;
        console.log(`name '${oldName}' became '${this.name}'.`);
    }
    setRace(newRace) {
        let oldRace = this.race;
        this.race = newRace;
        console.log(`name '${oldRace}' became '${this.race}'.`);
    }

    //Methods
    calculateCharacter() {
        //TODO: Fill in damage calculations, selection and calculation of armor, health, resistances, etc. 
        this.hp = this.maxHp + ((this.con-10) /2); //TODO: Add a constant update of this alongside the incremental increase of Con. 
        this.maxHp = this.hp;
    }

    takeDamage(dmg, dmgType) {
        if (typeof(dmg) !== 'number' || typeof(dmgType) !== 'number') {
            console.log(`Error (takeDamage): dmg or dmgType is not the correct type of variable.
                typeof(dmg): ${typeof(dmg)}
                typeof(dmgType): ${typeof(dmgType)}`);
            throw new Error();
        }
        let finalDmg = dmg;
        switch (dmgType) {
            case DmgTypeEnum.physical:
                finalDmg = dmg - this.dex;
                break;
            case DmgTypeEnum.magic:

                break;
            default:
                break;
        }
        hp -= finalDmg;
    }

    dealDamage(dmgType) {
        if (typeof(dmgType) !== 'number') {
            console.log(`Error (dealDamage): dmgType is not the correct type of variable.
                typeof(dmgType): ${typeof(dmgType)}`);
            throw new Error();
        }
        return this.getDMG(dmgType);
    } //Redundant. TODO: Delete this and/or refactor/rename getDMG.
    
    getDMG(dmgType) {
        let damage = 0;
        let damageMin = this.baseDmg;
        switch (dmgType) {
            case DmgTypeEnum.physical: 
                damageMax = this.baseDmg + this.str*3;
                damage = Math.round(Math.random() * (damageMax-damageMin+1)+min);
                break;
            case DmgTypeEnum.magic: 
                damageMax = this.baseDmg + this.int*3;
                damage = this.baseDmg + Math.round(Math.random() * (damageMax-damageMin+1)+min);
                break;
            default: 
                damage = this.baseDmg + Math.round(this.str*2);
                break;
        }
        return damage;
    }
}

//Runtime Code

//DOM Objects Needed in Global Scope (used by other functions):
let hpVal;
let statPoints;
let armorVal;  

let strVal;
let dexVal;
let conVal;
let wisVal;
let intVal;
let chaVal;  

let nameVal;
let raceVal;

let combatArea;
let actionLog;
let firstLog = true;
let resetButton;

//Initialize and Set up Character Object.
let mainCharacter = new Character(30, 4, 10);
let combat; //Undeclared so far, unused.
window.onload = function() {
    domBuilder();
    mainCharacter.getName();
    updateAttributes();
}

function domBuilder() {
    //Character Builder: Top Row
    hpVal = document.getElementById('hpVal');
    statPoints = document.getElementById('statPoints');
    armorVal = document.getElementById('armorVal');

    //Character Builder Form: Incremental Buttons
    let strUp = document.getElementById('strUp');
        strUp.addEventListener('click', () => {mainCharacter.incrementStat(StatsEnum.str, true);});
    let strDown = document.getElementById('strDown');
        strDown.addEventListener('click', () => {mainCharacter.incrementStat(StatsEnum.str, false);});  
    let dexUp = document.getElementById('dexUp')
        dexUp.addEventListener('click', () => {mainCharacter.incrementStat(StatsEnum.dex, true);})
    let dexDown = document.getElementById('dexDown');
        dexDown.addEventListener('click', () => {mainCharacter.incrementStat(StatsEnum.dex, false);});
    let conUp = document.getElementById('conUp');
        conUp.addEventListener('click', () => {mainCharacter.incrementStat(StatsEnum.con, true);});
    let conDown = document.getElementById('conDown');
        conDown.addEventListener('click', () => {mainCharacter.incrementStat(StatsEnum.con, false);});
    let wisUp = document.getElementById('wisUp');
        wisUp.addEventListener('click', () => {mainCharacter.incrementStat(StatsEnum.wis, true);});
    let wisDown = document.getElementById('wisDown');
        wisDown.addEventListener('click', () => {mainCharacter.incrementStat(StatsEnum.wis, false);});
    let intUp = document.getElementById('intUp');
        intUp.addEventListener('click', () => {mainCharacter.incrementStat(StatsEnum.int, true);});
    let intDown = document.getElementById('intDown');
        intDown.addEventListener('click', () => {mainCharacter.incrementStat(StatsEnum.int, false);});
    let chaUp = document.getElementById('chaUp');
        chaUp.addEventListener('click', () => {mainCharacter.incrementStat(StatsEnum.cha, true);});
    let chaDown = document.getElementById('chaDown');
        chaDown.addEventListener('click', () => {mainCharacter.incrementStat(StatsEnum.cha, false);});

    //Character Builder Form: Attribute Values
    strVal = document.getElementById('strVal'); 
    dexVal = document.getElementById('dexVal');
    conVal = document.getElementById('conVal');
    wisVal = document.getElementById('wisVal');
    intVal = document.getElementById('intVal');
    chaVal = document.getElementById('chaVal');

    //Character Building Form: Attribute Blocks (onHover tooltips):
        //TODO: Add tooltips.

    //Character Builder Form: Name/Race Values
    nameVal = document.getElementById('nameVal');
    raceVal = document.getElementById('raceVal');

    //Character Builder Form: Name/Race Blocks (onHover tooltips):
        //TODO: Add tooltips. 

    //Character Builder Form: Submit Button
    let submitButton = document.getElementById('submitButton');
        submitButton.addEventListener('click', submitCharacter);
        //TODO: Add an onHover tooltip.

    //Combat Area: Action Log
    actionLog = document.getElementById('actionLog');
    resetButton = document.getElementById('resetButton');
        resetButton.addEventListener('click', resetCombat);
        //TODO: Add tooltip.
    
    //Combat Area: Combat Screen
    combatArea = document.getElementById('combatArea');
        //TODO: Add combat interaction.
}

let updateAttributes = function() {
    strVal.textContent = mainCharacter.getStat(StatsEnum.str);
    dexVal.textContent = mainCharacter.getStat(StatsEnum.dex);
    conVal.textContent = mainCharacter.getStat(StatsEnum.con);
    wisVal.textContent = mainCharacter.getStat(StatsEnum.wis);
    intVal.textContent = mainCharacter.getStat(StatsEnum.int);
    chaVal.textContent = mainCharacter.getStat(StatsEnum.cha);

    statPoints.textContent = mainCharacter.getStatPoints();
    hpVal.textContent = mainCharacter.getHp();
    armorVal.textContent = mainCharacter.getArmor();
}

let submitName = function(name) {
    console.log(`mainCharacter.name is being changed to: ${nameVal}`);
    mainCharacter.setName(name);
}
let submitRace = function(race) {
    console.log(`mainCharacter.name is being changed to: ${raceVal}`);
    mainCharacter.setRace(race);
}

let submitCharacter = function() {
    //Change mainCharacter Race and Name to the filled fields.
    submitName(nameVal.value);
    submitRace(raceVal.value);

    //Remove the Character Builder. 
    for (element of document.getElementById('characterBuilderContainer').children) {
        element.setAttribute('style', 'display: none;')
    }

    //Start Fight.
    combat = new Combat(10, mainCharacter, mainCharacter);
    appendLog(`${mainCharacter.getName()} steps into the ring. Their fellow members of the ${mainCharacter.getRace()} clan roar with approval!`);
    combatArea.addEventListener('click', cycleCombat); //Add listener to combat area for user input.
        //TODO: Add a prompt for the user. Either a tooltip onHover or a basic text GUI.
}

let appendLog = function(newLog) {
    (firstLog) 
        ? actionLog.textContent = newLog
        : actionLog.textContent += ('\n' + newLog);
}
let resetCombat = function() {
    //Reset Action Log.
    firstLog = true;
    actionLog.textContent = '(Empty Action Log)';

    //Reset Combat.
    combat.setTurnCount(0);
    combat.setWhoseTurn(TurnsEnum.c1);

    //TODO: Reopen Character Builder?
}

let cycleCombat = function() {
    combat.combatCycle();
}