/* StatManager - Creates and manages combatants for use in the simulator. 
 * Manages stats and creation of rpgFighters. */
let StatsEnum = Object.freeze({"str":1, "dex":2, "con":3, "wis":4, "int":5, "cha":6})
console.log(StatsEnum);
console.log(`Str is returned as: ${StatsEnum.str}`);


function StatManager() {
    //Combat Stats
    let hp = new Symbol('hp');
    let armor = new Symbol('armor');
    let baseDmg = new Symbol('baseDmg');

    //Attributes
    let statPoints = new Symbol('statPoints');
    let str = new Symbol('str');
    let dex = new Symbol('dex');
    let con = new Symbol('con');
    let wis = new Symbol('wis');
    let int = new Symbol('int');
    let cha = new Symbol('cha');

    //Custom Name/Race (Text)
    let name = new Symbol('name');
    let race = new Symbol('race');

    //Constructor
    StatManager = function(sPoints, baseHP, baseArmor) {
        //Names/Text
        this[name] = "";
        this[race] = "";
        //Attributes
        this[str] = 10;
        this[dex] = 10;
        this[con] = 10;
        this[wis] = 10;
        this[int] = 10;
        this[cha] = 10;
        // Stats
        this[statPoints] = sPoints;
        this[hp] = baseHP;
        this[armor] = baseArmor;
        this[baseDmg] = 10;
    }

    // Getters
    StatManager.prototype.getStat = new function(statType){ //Accepts a statsEnum.<type> and returns the associated number.
        if (typeof(statType) != 'object') {
            throw new Error();
        }
        switch(statType) {
            case StatsEnum.str: 
                return this[str];
                break;
            case StatsEnum.dex:
                return this[dex];
                break;
            case StatsEnum.con: 
                return this[con];
                break;
            case StatsEnum.wis:
                return this[wis];
                break;
            case StatsEnum.int:
                return this[int];
                break;
            case StatsEnum.cha:
                return this[cha];
                break;
            default: 
                console.log("StatManager.getStat() - Default reached. Inappropriate statType.");
                return -1;
                break;
        }
    }
    
    return StatManager;
}