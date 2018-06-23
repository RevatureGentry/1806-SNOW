import Player from "./Player";

window.onload = function(event) {

    console.log("I am running");

    const player = new Player();
    player.play([
        [
            ["A4", "B4", "C4", "D4", "E4", "F4", "G4"],
            ["0.25m", "0.25m", "0.25m", "0.25m", "0.25m", "0.25m", "0.25m"],
        ]
    ]);
}