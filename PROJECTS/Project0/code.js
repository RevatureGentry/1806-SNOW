var userCharacter = document.getElementById("user").addEventListener("click", getuser)

var Compu = Math.random();
if (Compu < 0.34) {
    Compu = "Warrior";
} else if (Compu <= 0.67) {
    Compu = "Wizard";
} else {
    Compu = "Ranger";
}

var getuser = function() {
    document.getElementById("bttn")
}
var battle = function(choice1, choice2) {
    if (choice1===choice2) {
        return "A stalemate!";
    }
    if (choice1=="Warrior") {
        if (choice2==="Ranger") {
            console.log("The Warrior Claims Victory");
        } else {
            console.log("The Wizard Claims Victory");
        }
    }
    if (choice1==="Wizard") {
        if (choice2==="Warrior") {
            console.log("The Wizard Claims Victory");
        } else {
            console.log("The Ranger Claims Victory");
        }
    }
    if (choice1==="Ranger") {
        if (choice2==="Wizard") {
            console.log("The Ranger Claims Victory");
        } else {
            console.log("The Warrior Claims Victory");
        }
    }
}
battle(userCharacter, Compu);