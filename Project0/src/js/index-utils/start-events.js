
import { GamePlayer, Mode } from "../game-player/GamePlayer";
import * as utils from "./utils";

export function addStartEvents(generator) {
    const start = document.getElementById("start-game");
    const pause = document.getElementById("pause-game");
    const player = new GamePlayer();

    start.addEventListener('click', function startGame(event) {
        // TODO : Allow player to pause game and restart game!
        // Currently clicking start again after pausing will
        // play the game again from the start, which is VERY
        // problematic.
        // Perhaps the best thing to do would be to have a pause menu come up?
        // Or have a Resume button that activates only when the game is paused.

        playGame();
        console.log("play game!");

        start.disabled = true;
        pause.disabled = false;

        function playGame() {
            // TODO : For each music playing,
            // Check if compilation errors occurred!
            // IF SO, DON'T PLAY THE MUSIC!!!
            // DISPLAY AN ERROR MESSAGE AND ASK THEM TO CONFIRM.
            // Or at least display an error message
            // before starting.
            if(utils.existsUserChosenFile()) {
                console.log("A file is selected!");
                playGameWithChosenFile();
            } else {
                console.log("no file was selected");
                playGameWithSelectionMusic();
            }

            function playGameWithChosenFile() {
                const reader = new FileReader();
                reader.onload = function(event) {
                    const music = event.target.result;
                    generator.generate(music);
                    console.log(generator.getGeneratedMusic());
                    doPlay(generator.getGeneratedMusic());
                }
                reader.readAsText(document.getElementById("user-music").files[0]);
            }

            function playGameWithSelectionMusic() {
                const music = generator.generate(utils.getSelectedMusic());
                console.log(generator.getGeneratedMusic());
                doPlay(music);
            }

            function doPlay(music) {
                const setting = document.querySelector('input[name = "difficulty"]:checked').value;
                console.log(setting);
                if(setting === "easy" ) {
                    player.setMode(Mode.EASY);
                } else if (setting === "medium") {
                    player.setMode(Mode.MEDIUM);
                } else if (setting === "hard") {
                    player.setMode(Mode.HARD);
                } else {
                    throw new Error("Invalid mode selected for DDR");
                }
                // Music is an array generated by the generator.
                // DOES NOT CHECK that music is in correct form!
                player.schedule(music);
                player.play();

            }
        }
    });

    pause.addEventListener('click', function pause(event) {
        // TODO: Pause the game. But don't RESET it!!!!
        pauseGame();
        start.disabled = false;
        pause.disabled = true;

        function pauseGame() {
            console.log("pause game!");
            player.pause();
        }
    });
}