//Enum Declarations - for easy to use/read value passing.
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
        this.turnCounter = 1;
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
    cycle(playerDmgType) {
        if (typeof(dmgType) != 'number') {
            throw new Error();
        }

        console.log("In combatCycle");
        if (this.turnCounter >= this.maxTurns) {
            appendLog("---END OF COMBAT---\nTo fight again, press the 'Reset' Button Below.");
        }
        else {
            appendLog(`\n\n---Start of Round ${this.turnCounter}---`);
            //Char1 (Player) makes their move.
            let c1Damage = this.char1.dealDamage(playerDmgType);
            this.char2.takeDamage(c1Damage, playerDmgType);
            appendLog(`${this.char1.getName()} sends a mighty blow into the face of ${this.char2.getName()}! They deal ${c1Damage - this.char2.getResitance(DmgTypeEnum.physical)} damage!`);


            //Char2 (Computer) makes their move.
            //TODO: Add a check here that sees which attacking stat is higher, Str or Int, and by what percentage. Then, roll the dice to see which attack the enemy deals. 
            //TODO: Add boolean logic after the above statement has been implemented so that the result is different every time. 
            let c2Damage = this.char2.dealDamage(DmgTypeEnum.physical);
            this.char1.takeDamage(c2Damage, DmgTypeEnum.physical);
            appendLog(`${this.char2.getName()} sends a mighty blow into the face of ${this.char1.getName()}! They deal ${c2Damage - this.char2.getResitance(DmgTypeEnum.physical)} damage!`);
            
            //Calculate Damage.
            appendLog(`Status of Combatants:` 
                +`\n    ${this.char1.getName()}: HP: ${this.char1.getHp()}/${this.char1.getMaxHp()}`
                +`\n    ${this.char2.getName()}: HP: ${this.char2.getHp()}/${this.char2.getMaxHp()}`);

            //Check For Winner. 
            if (this.char1.getHp(), this.char2.getHp() <= 0) {
                appendLog(`Both ${this.char1.getName()} and ${this.char2.getName()} have collapsed!` +
                `\n It's a TKO on both sides!`);
                appendLog("---END OF COMBAT---\nTo fight again, press the 'Reset' Button Below.");
                this.turnCounter = this.maxTurns;
            }
            else if (this.char1.getHp() <= 0) {
                appendLog(`${this.char1.getName()} has collapsed!` + 
                `\n ${this.char2.getName()} is the winner of this combat!`);
                appendLog("---END OF COMBAT---\nTo fight again, press the 'Reset' Button Below.");
                this.turnCounter = this.maxTurns;
            }
            else if (this.char2.getHp() <= 0) {
                appendLog(`${this.char2.getName()} has collapsed!` +
                `\n ${this.char1.getName()} is the winner of this combat!`);
                appendLog("---END OF COMBAT---\nTo fight again, press the 'Reset' Button Below.");
                this.turnCounter = this.maxTurns;
            }
            else {
                appendLog(`---End of Round ${this.turnCounter}/${this.maxTurns}---`);
                this.turnCounter++;
            }
        }
    }
}

//Character Class.
class Character {
    constructor(sPoints=30, baseHp='50', baseArmor=25) {
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
    setAttribute(statType, statValue){ //Accepts a statsEnum.<type> and returns the associated number.
        if (typeof(statType) != 'number') {
            console.log("Error (setStat): Wrong stattype was passed into the function.");
            throw new Error();
        }
        switch(statType) {
            case StatsEnum.str: 
                this.str = statValue;
                break;
            case StatsEnum.dex:
                this.dex = statValue;
                break;
            case StatsEnum.con: 
                this.con = statValue;
                break;
            case StatsEnum.wis:
                this.wis = statValue;
                break;
            case StatsEnum.int:
                this.int = statValue;
                break;
            case StatsEnum.cha:
                this.cha = statValue;
                break;
            default: 
                console.log("StatManager.setStat() - Default reached. statType is Out of Bounds.");
                break;
        }
        updateAttributes();
    }
    resetHp() {
        this.hp = this.maxHp;
    }
    //TODO: Add Text Entry -> New Value Functionality.

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
                    this.hp = 50 + Math.round(10*(this.con/2));
                    this.maxHp = this.hp;
                    break;
                case StatsEnum.wis:
                    (isPositive) ? this.wis++ : this.wis--;
                    break;
                case StatsEnum.int:
                    (isPositive) ? this.int++ : this.int--;
                    break;
                case StatsEnum.cha:
                    (isPositive) ? this.cha++ : this.cha--;
                    this.armor = Math.round(7.5*(this.cha/3));
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
    takeDamage(dmg, dmgType) {
        if (typeof(dmg) !== 'number' || typeof(dmgType) !== 'number') {
            console.log(`Error (takeDamage): dmg or dmgType is not the correct type of variable.
                typeof(dmg): ${typeof(dmg)}
                typeof(dmgType): ${typeof(dmgType)}`);
            throw new Error();
        }
        let finalDmg = dmg;
        console.log(`Initial Damage: ${finalDmg}`);
        switch (dmgType) {
            case DmgTypeEnum.physical:
                finalDmg -= this.dex/4 + this.armor/2; //Physical Damage Resistance
                break;
            case DmgTypeEnum.magic:
                finalDmg -= this.wis/4 + this.armor/2; //Magical Damage Resistance
                break;
            default:
                break;
        }
        if (finalDmg < 0) finalDmg = 0;
        console.log(`finalDamage: ${finalDmg}`);
        this.hp -= finalDmg;
    }

    dealDamage(dmgType) {
        if (typeof(dmgType) !== 'number') {
            console.log(`Error (dealDamage): dmgType is not the correct type of variable (number).
                typeof(dmgType): ${typeof(dmgType)}`);
            throw new Error();
        }
        return this.getDMG(dmgType);
    } //Redundant. TODO: Delete this and/or refactor/rename getDMG.
    
    getDMG(dmgType) {
        let damage = 0;
        let damageMin = this.baseDmg;
        let damageMax = this.baseDmg;
        switch (dmgType) {
            case DmgTypeEnum.physical: 
                damageMax = this.baseDmg + this.str*3;
                damage = Math.round(Math.random() * (damageMax-damageMin+1)+damageMin);
                break;
            case DmgTypeEnum.magic: 
                damageMax = this.baseDmg + this.int*3;
                damage = this.baseDmg + Math.round(Math.random() * (damageMax-damageMin+1)+damageMin);
                appendLog(`${this.name} conjures a mighty spell, sending it crashing into his opponent's knees! They deal ${damage} damage!`);
                break;
            default: 
                console.log("ERROR (getDMG): dmgType is out of bounds. Defaulting to DmgTypeEnum.physical.");
                damage = this.baseDmg + Math.round(this.str*3);
                break;
        }
        return damage;
    }

    getResitance(dmgType) {
        if (typeof(dmgType) !== 'number') {
            console.log(`Error (getResistance): dmgType is not the correct type of variable (number).
                typeof(dmgType): ${typeof(dmgType)}`);
            throw new Error();
        }
        switch (dmgType) {
            case DmgTypeEnum.physical:
                return this.dex/4 + this.armor/2;
            case DmgTypeEnum.magic: 
                return this.wis/4 + this.armor/2;
            default: 
                console.log('Error: (dmgType) was out of bounds. Defaulting to Physical Damage.');
                return this.dex/4 + this.armor/2;
        }
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
let atkPhysicalBtn;
let atkMagicBtn;
let actionLog;
let firstLog = true;
let resetButton;

//Initialize and Set up Character Object.
let mainCharacter = new Character(30, 100, 25);
let enemyCharacter = new Character(30, 100, 25);

let combat; //Undeclared so far, unused.
window.onload = function() {
    domBuilder();
    updateAttributes();

    //Setup enemyCharacter. 
    enemyCharacter.setName('Slimer the slimey');
    enemyCharacter.setRace('Slime');
    enemyCharacter.setAttribute(StatsEnum.str, 18);
    enemyCharacter.setAttribute(StatsEnum.dex, 22);
    enemyCharacter.setAttribute(StatsEnum.con, 5);
    enemyCharacter.setAttribute(StatsEnum.wis, 5);
    enemyCharacter.setAttribute(StatsEnum.int, 12);
    enemyCharacter.setAttribute(StatsEnum.cha, 28);
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
    // combatArea = document.getElementById('combatArea');
    atkPhysicalBtn = document.getElementById('atkPhysical');
        atkPhysicalBtn.addEventListener('click', attackPhysical);
        atkPhysicalBtn.setAttribute('style', 'display: none');
    atkMagicBtn = document.getElementById('atkMagic');
        atkMagicBtn.addEventListener('click', attackMagic);
        atkMagicBtn.setAttribute('style', 'display: none');
        //TODO: Add actual combat interaction.

    //TODO: Add Skill Selection.
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
    console.log(`mainCharacter.name is being changed to: ${nameVal.value}`);
    mainCharacter.setName(name);
}
let submitRace = function(race) {
    console.log(`mainCharacter.name is being changed to: ${raceVal.value}`);
    mainCharacter.setRace(race);
}

//Updates Player Character's Name/Race Fields. Hides the Character Builder. Starts Combat.
let submitCharacter = function() {
    //Change mainCharacter Race and Name to the filled fields.
    submitName(nameVal.value);
    submitRace(raceVal.value);

    //(Visually) Remove the Character Builder from the DOM Display. 
    for (element of document.getElementById('characterBuilderContainer').children) {
        element.setAttribute('style', 'display: none;')
    }

    //Display the Attack Buttons. 
    atkPhysicalBtn.removeAttribute('style'); //Removes the style="display: none;" attribute previously added. 
    atkMagicBtn.removeAttribute('style'); //Removes the style="display: none;" attribute previously added. 

    //Start Fight.
    combat = new Combat(10, mainCharacter, enemyCharacter);
    appendLog(`${mainCharacter.getName()} steps into the ring. Their fellow members of the ${mainCharacter.getRace()} clan roar with approval!`);
    appendLog(`Their opponent today is the fearsome, the ferocious, the fabulous...\n\n${enemyCharacter.getName()}!!`);
    // combatArea.addEventListener('click', cycleCombat); //User Input to progress combat. 
        //TODO: Add a prompt for the user. Either a tooltip onHover or a basic text GUI.
}

//Adds a new entry into the Combat Log. 
let appendLog = function(newLog) {
    if (firstLog) {
         actionLog.textContent = newLog; 
         firstLog = false;
    }
    else {
         actionLog.textContent += ('\n' + newLog);
    }  
}

//Event Listeners - Combat Area Buttons
let attackPhysical = function() {
    combat.cycle(DmgTypeEnum.physical);
}

let attackMagic = function() {
    combat.cycle(DmgTypeEnum.magic);
}

let resetCombat = function() {
    //Reset Action Log.
    firstLog = true;
    actionLog.textContent = '(Empty Action Log)';

    //Reset Combat.
    combat.setTurnCount(1);
    combat.setWhoseTurn(TurnsEnum.c1);

    //Reset Character HP. 
    mainCharacter.resetHp();
    enemyCharacter.resetHp();

    //Reopen Character Builder, Reset Page back to default.
    for (element of document.getElementById('characterBuilderContainer').children) {
        element.removeAttribute('style');
    }
    updateAttributes();
    // combatArea.removeEventListener('click', cycleCombat);
    atkPhysicalBtn.removeEventListener('click', attackPhysical);
    atkPhysicalBtn.setAttribute('style', 'display: none');
    atkMagicBtn.removeEventListener('click', attackMagic);
    atkPhysicalBtn.setAttribute('style', 'display: none');

}
/* 
let cycleCombat = function() {
    combat.cycle();
} */