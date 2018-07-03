//Enum Declarations - for easy to use/read value passing.
let DmgTypeEnum = Object.freeze({"magic":1, "physical":2});
let StatsEnum = Object.freeze({"str":1, "dex":2, "con":3, "wis":4, "int":5, "cha":6})
let tipIndex = Object.freeze({'str':0, 'dex':1, 'con':2, 'wis':3, 'int':4, 'cha':5, 'name':6, 'race':7, 'statPoints':8, 'hp':9, 'armor':10,
    'magRes':11, 'physRes':12, 'startFight':13}); //Used in lieu of regular index numbers, for ease of code readability/reference.

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
        if (typeof(playerDmgType) != 'number') {
            console.log("Error (combat.cycle() ): playerDmgType was incorrect!");
            throw new Error();
        }

        console.log("--In combat.cycle():--");
        if (this.turnCounter >= this.maxTurns) {
            appendLog("---END OF COMBAT---\nTo fight again, press the 'Reset' Button Below.");
        }
        else {
            appendLog(`\n\n---Start of Round ${this.turnCounter}---`);
            //Char1 (Player) deals damage.
            let c1Damage = this.char1.dealDamage(playerDmgType);
            this.char2.takeDamage(c1Damage, playerDmgType);
            if (playerDmgType = DmgTypeEnum.physical) {
                appendLog(`${this.char1.getName()} sends a mighty blow into the face of ${this.char2.getName()}! They deal ${c1Damage - this.char2.getResitance(DmgTypeEnum.physical)} damage!`);
            }
            else if (playerDmgType = DmgTypeEnum.magic) {
                appendLog(`${this.char1.getName()} conjures a mighty spell, sending it crashing into the knees of ${this.char2.getName()}! They deal ${c1Damage} damage!`);
            }
            else {
                console.log("Error (combat.cycle() ): playerDmgType is out of bounds.");
            }

            //Char2 (Computer) makes their move.
            //TODO: Add a check here that sees which attacking stat is higher, Str or Int, and by what percentage. Then, roll the dice to see which attack the enemy deals. 
            //TODO: Add boolean logic after the above statement has been implemented so that the result is different every time. 
            let c2Damage = this.char2.dealDamage(DmgTypeEnum.physical);
            this.char1.takeDamage(c2Damage, DmgTypeEnum.physical);
            appendLog(`${this.char2.getName()} sends a mighty blow into the face of ${this.char1.getName()}! They deal ${c2Damage - this.char1.getResitance(DmgTypeEnum.physical)} damage!`);
            
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
                this.hp = 50 + Math.round(10*(this.con/2));
                this.maxHp = this.hp;
                break;
            case StatsEnum.wis:
                this.wis = statValue;
                break;
            case StatsEnum.int:
                this.int = statValue;
                break;
            case StatsEnum.cha:
                this.cha = statValue;
                this.armor = Math.round(7.5*(this.cha/3));
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
                    console.log("StatManager.incrementStat() - Default reached. statType is out of bounds.");
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
        console.log(`(${this.name}) Initial Damage Taken: ${finalDmg}`);

        finalDmg -= this.getResitance(dmgType);
        if (finalDmg < 0) finalDmg = 0;
        console.log(`(${this.name}) Final Damage Taken: ${finalDmg}`);

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
                break;
            default: 
                console.log("ERROR (getDMG): dmgType is out of bounds. Defaulting to Physical Damage.");
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
                console.log(`(${this.name}) Total Physical Resistance: ${this.dex/3 + this.armor/4}`);
                return this.dex/4 + this.armor/2;
            case DmgTypeEnum.magic: 
                console.log(`(${this.name}) Total Magic Resistance: ${this.wis/3 + this.armor/4}`);
                return this.wis/4 + this.armor/2;
            default: 
                console.log('Error: (dmgType) was out of bounds. Defaulting to Physical Damage.');
                return this.dex/4 + this.armor/2;
        }
    }
}


//Runtime Code

//DOM Objects Needed in Global Scope (used by other functions):
//Character Builder
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

let exTooltipArea;
let charBuilder;
let strBlock;
let dexBlock; 
let conBlock;
let wisBlock;
let intBlock;
let chaBlock;

//Combat Area
let combatArea;
let atkPhysicalBtn;
let atkMagicBtn;
let actionLog;
let firstLog = true;
let resetButton;

//Initialize and Set up Character Objects.
let mainCharacter = new Character(30, 100, 25);
let enemyCharacter = new Character(30, 100, 25);

let combat; //Undeclared so far, unused. 
//combat is declared in submitCharacter(), due to not all fields of mainCharacter/enemyCharacter being appropraitely filled. 

//Set up extended tooltips. 
let exTooltipHTML = [
    //0
    "<b>Strength:</b><br>"
    + "I'd ask if you lift, but this number kinda speaks for itself."
    + "<br><br>"
    + "Your Strength measures how much force you can foster behind those beautiful blows you bash your opponent with."
    + "<br><br>"
    + "However, not every target is a wooden dummy. Some things just don't know how to STOP. DODGING.",
    
    //1
    "<b>Dexterity:</b><br>"
    + "DODGE!"
    + "<br><br>"
    + "No, really, that's what you get from Dexterity. The ability to DODGE those incoming"
    + "arrows, the little toothpicks coming your way. It's all about the style."
    + "<br><br>"
    + "However, a fireball from, say, a wizard is a bit too big to just DODGE on reflex alone. That takes some hindsight.",
    
    //2
    "<b>Constitution:</b><br>"
    + "A measure of how stubborn you are."
    + "<br><br>"
    + "The higher your Constitution, the closer you become to a brick wall. It's a good life goal."
    + "<br><br>"
    + "However, every wall breaks eventually. Sometimes, you gotta mitigate that damage.",
    
    //3
    "<b>Wisdom:</b><br>"
    + "The higher your Wisdom, the more perceptive you are, making you less likely to get caught in that gloating wizard's magical trap." 
    + "<br><br>" 
    + "However, despite many philosophers' best efforts, enlightenment doesn't stop steel. Sorry."
    + "<br><br>",
    
    //4
    "<b>Intelligence:</b><br>"
    + "Your undeniable, 1st-percentile IQ."
    + "<br><br>"
    + "The higher your Intelligence, the bigger your magic missiles, the more magnificent your metaphysical might!"
    + "<br><br>"
    + "Be warned, however... not all opponents stand still for you to chuck lava at them. ",
    
    //5
    "<b>Charisma:</b><br>"
    + "How good-looking you are!"
    + "<br><br>"
    + "The higher your Charisma, the less damage you take from any attack, due to sheer sexiness."
    + "<br><br>"
    + "Your complexion doesn't protect you as well as it arguably should, though. It's a cruel world out there.",

    //6
    "<b>Name:</b><br>"
    + "<i>What's in a name, really?</i> - Some random dude"
    + "<br><br>Well, your name ain't nothin' special, but it's your name, dangit. "
    + "<br><br>How else are we supposed to pick you out in the crowd of corpses and zombies? That arena's packed!",

    //7
    "<b>Race:</b><br>"
    + "Are you a half-pirate, half-dragon, half-halfling that likes to take halfsies?<br><br>"
    + "No?<br><br>"
    + "Well, you'd better make sure the crowd knows that. And your parents, too, come to think of it.",

    //8
    "<b>Stat Points:</b><br>"
    + "A measure of potential, of greater possibilities, of infinite combinations!"
    + "<br><br>Or, as many as you can make with the points you've got. Don't spend them all in one place!"
    + "<br><br><br>No really, that's a really bad tactical decision.",

    //9
    "<b>HP:</b><br>"
    + "I'm not sure how we got to representing someone's physical well being with a couple of points, but here we are."
    + "<br><br>It's health. You run out of it, ya die. Simple as stewed entrails. Mmm...",

    //10
    "<b>Armor:</b><br>"
    + "What's better than taking care of one's health? Taking care of one's face, of course!"
    + "<br><br>Normally armor is composed of metal plates and the like, to prevent sharp things from touching your beautiful complexion," 
    + "but in this scenario, we figured it'd be more fair to just let your face do the blocking."
    + "<br><br>Just think of it like this: the more beautiful that face is, the harder it is for your opponent to bring themselves to break it into a thousand pieces!",

    //11
    "<b>Magic Resistance:</b><br>"
    + "There's a certain skill to dodging magic, and that skill is represented by one's ability to see magic coming."
    + "<br><br>Are there spells that realistically would move faster than you can dodge? Yes. Does that mean we're changing our stance on this? Nope."
    + "<br><br>Do you still want a different system? Well, if you want a different system, why don't <em>you</em> break open this code and put it in yourself? <br>HUMPH.",

    //12
    "<b>Physical Resistance:</b><br>"
    + "If you can dodge a mace, you can dodge a ball."
    + "<br><br>Quite simply: by DODGING. The faster you are, the more dextrous you are, the better you are at moving out of the way!"
    + "<br><br>Is this rather simplistic and not exactly realistic? Why yes, yes it is. Thank you for noticing, now DODGE.",

    //13
    "<b>Start Fight!:</b><br>"
    + "This button will submit your character, as is, and start the combat. <br><br>"
    + "Make sure you have all of your desired stats/changes entered before you click this! "
    + "Once you start the combat, you can't make any more changes to your character. "
    +"<br><br>But don't worry, if you want to restart the combat and respec your character, you'll be able to by clicking the 'Reset Combat' button.",
];

//Runtime Methods
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

    //Character Building Form: Expanded Tooltip Area
    exTooltipArea = document.getElementById('exTooltips');

    //Character Building Form: Container
    charBuilder = document.getElementById('attributesBlock');
        charBuilder.addEventListener('mouseleave', () => resetTooltip());

    //Character Building Form: Attribute 'Blocks'
    strBlock = document.getElementById('strBlock');
        strBlock.addEventListener('mouseover', () => displayTooltip(tipIndex.str));
    dexBlock = document.getElementById('dexBlock');
        dexBlock.addEventListener('mouseover', () => displayTooltip(tipIndex.dex));
    conBlock = document.getElementById('conBlock');
        conBlock.addEventListener('mouseover', () => displayTooltip(tipIndex.con));
    wisBlock = document.getElementById('wisBlock');
        wisBlock.addEventListener('mouseover', () => displayTooltip(tipIndex.wis));
    intBlock = document.getElementById('intBlock');
        intBlock.addEventListener('mouseover', () => displayTooltip(tipIndex.int));
    chaBlock = document.getElementById('chaBlock');
        chaBlock.addEventListener('mouseover', () => displayTooltip(tipIndex.cha));

    //Character Builder Form: Name/Race Values
    nameVal = document.getElementById('nameVal');
        nameVal.addEventListener('mouseover', () => displayTooltip(tipIndex.name));
    raceVal = document.getElementById('raceVal');
        raceVal.addEventListener('mouseover', () => displayTooltip(tipIndex.race));

    //Character Builder: Stats
    statPoints = document.getElementById('statPoints');
        statPoints.addEventListener('mouseover', () => displayTooltip(tipIndex.statPoints));
    hpVal = document.getElementById('hpVal');
        hpVal.addEventListener('mouseover', () => displayTooltip(tipIndex.hp));
    armorVal = document.getElementById('armorVal');
        armorVal.addEventListener('mouseover', () => displayTooltip(tipIndex.armor));

    //Character Builder Form: Submit/'Start Fight!' Button
    let submitButton = document.getElementById('submitButton');
        submitButton.addEventListener('click', submitCharacter);
        submitButton.addEventListener('mouseover', () => displayTooltip(tipIndex.startFight));

    //Combat Area: Action Log
    actionLog = document.getElementById('actionLog');
    resetButton = document.getElementById('resetButton');
        resetButton.addEventListener('click', resetCombat);
    
    //Combat Area: Combat Screen
    atkPhysicalBtn = document.getElementById('atkPhysical');
        atkPhysicalBtn.setAttribute('style', 'display: none');
    atkMagicBtn = document.getElementById('atkMagic');
        atkMagicBtn.setAttribute('style', 'display: none');

    //TODO: Add Skills for Combat, and add listeners to each skill available.
}

//General Use Methods
//Updates the text contents of the different stat values in the Character Builder with the current values.
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

//Adds a new entry into the Action Log. 
    /*If firstLog is set to true, it replaces the current log with a new one. 
        else, it adds a new line and then appends the new log. */
let appendLog = function(newLog) {
    if (firstLog) {
         actionLog.textContent = newLog; 
         firstLog = false;
    }
    else {
         actionLog.textContent += ('\n' + newLog);
    }  
}

//Event Listeners - Character Building Form
//submitCharacter() - Updates Player Character's Name/Race Fields. Hides the Character Builder. Starts Combat.
let submitCharacter = function() {
    //Change mainCharacter Race and Name to the filled fields.
    mainCharacter.setName(nameVal.value);
    // submitName(nameVal.value);
    mainCharacter.setRace(raceVal.value);
    // submitRace(raceVal.value);

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

    //Add eventListeners to allow for user input. The User advances the fight.
    atkPhysicalBtn.addEventListener('click', attackPhysical);
    atkMagicBtn.addEventListener('click', attackMagic);
}

//
let displayTooltip = function(tipNumber) {
    console.log("In displayTooltip");
    if (typeof(tipNumber) != 'number') {
        console.log("Error (displayTooltip() ): tipNumber is not a number.");
        throw new Error();
    }
    (tipNumber >= exTooltipHTML.length) 
        ? console.log("Error: tipNumber is out of range.") //If out of range, log an error. 
        : exTooltipArea.innerHTML = exTooltipHTML[tipNumber]; 
}

let resetTooltip = function() {
    exTooltipArea.innerHTML = "Confused what something is/does? Mouse over it and read some more details here!";
}

//Event Listeners - Combat Area
let attackPhysical = function() {
    combat.cycle(DmgTypeEnum.physical);
}

let attackMagic = function() {
    combat.cycle(DmgTypeEnum.magic);
}

// resetCombat() - Resets all pieces of the combat area, character health, etc. and reopens the Character Builder. 
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
    atkPhysicalBtn.removeEventListener('click', attackPhysical);
    atkPhysicalBtn.setAttribute('style', 'display: none');
    atkMagicBtn.removeEventListener('click', attackMagic);
    atkPhysicalBtn.setAttribute('style', 'display: none');

}


// Master Features TODO/Wish List: 
/*      1. Add a list of skills, dependent upon the mainCharacter's attributes, that updates inside of updateAttributes() to 
        display based on the player meeting certain parameters. If a skill's prerequisites aren't met, setAttribute('style', 'display: none').
        Else, removeAttribute('style'). Make sure to set all members of said list with setAttribute('style', 'display: none') initially. 
        Use a foreach loop to get each child of a div or other container. 

        2. Add enemy customization, using the same character builder as the mainCharacter. Requires a bit of a rework of the DOM integration, 
        but it shouldn't be too bad to integrate. Basically, the character builder should be flexible. 
            a. With this feature, you could expand the entire program to be an entirely user-controlled rpg fighter that changes the page's
            styles and buttons depending on whose turn it is. You could turn it multiplayer, as expandable as you would like. 

        3. Find some way to include visual animations or other spritework in the canvas or an iFrame, perhaps. This is a really long shot 
        that's going to require a lot of research/visual skills, but it'd be a really awesome touch haha. 
*/