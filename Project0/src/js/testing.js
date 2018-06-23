import Player from "./Player";

window.onload = function(event) {

    console.log("I am running");
    let player = new Player();
    player.schedule([
        [
            ["C4", "D4", "E4", "F4", "G4", "A4", "B4", "C5"],
            [0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5],
        ],
        /*[
            ["E4", "F4", "G4", "A4", "B4", "C5", "D5", "E5"],
            [0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5],
        ]*/
    ]);
    const playBtn = document.getElementById("play");
    const stopBtn = document.getElementById("stop");
    playBtn.addEventListener("click", (event) => {
        player.play();
        playBtn.disabled = true;
        stopBtn.disabled = false;
    });
    stopBtn.addEventListener("click", (event) => {
        player.stop();
        playBtn.disabled = false;
        stopBtn.disabled = true;
    })
}