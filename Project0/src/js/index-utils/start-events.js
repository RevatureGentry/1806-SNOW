
import { GamePlayer, Mode } from "../game-player/GamePlayer";
import * as utils from "./utils";

// TODO : For each music playing,
// Check if compilation errors occurred!
// IF SO, DON'T PLAY THE MUSIC!!!
// DISPLAY AN ERROR MESSAGE AND ASK THEM TO CONFIRM.
// Or at least display an error message
// before starting.

// This function adds events to UI buttons so that
// the player can start, stop, pause, and reset the game.
export function addStartEvents(generator) {
    const start = document.getElementById("start-game");
    const pause = document.getElementById("pause-game");
    const reset = document.getElementById("reset-game");
    const resume = document.getElementById("resume-game");
    const player = new GamePlayer();

    start.addEventListener('click', function doStart(event) {
        event.preventDefault();
        playGame();
        setEnabledButtons();

        function playGame() {
            console.log("play game!");
            if(utils.existsUserChosenFile()) {
                playGameWithChosenFile();
            } else {
                playGameWithProvidedMusic();
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

            function playGameWithProvidedMusic() {
                const music = generator.generate(utils.getSelectedMusic());
                console.log(generator.getGeneratedMusic());
                doPlay(music);
            }

            function doPlay(music) {
                const setting = getDifficulty();
                console.log(setting);
                setGameDifficulty(setting);
                player.schedule(music);
                player.play();

                function getDifficulty() {
                    return document.querySelector('input[name = "difficulty"]:checked').value;
                }

                function setGameDifficulty(setting) {
                    if(setting === "easy" ) {
                        player.setMode(Mode.EASY);
                    } else if (setting === "medium") {
                        player.setMode(Mode.MEDIUM);
                    } else if (setting === "hard") {
                        player.setMode(Mode.HARD);
                    } else {
                        throw new Error("Invalid mode selected for DDR");
                    }
                }

            }
        }

        function setEnabledButtons() {
            start.disabled = true;
            pause.disabled = false;
            reset.disabled = false;
            resume.disabled = true;

            const previews = document.getElementsByClassName("previews");
            console.log(previews);
            for(let element of previews) {
                element.disabled = true;
            }
        }
    });

    pause.addEventListener('click', function doPause(event) {
        event.preventDefault();
        pauseGame();
        setEnabledButtons();

        function pauseGame() {
            pauseGameGeneration();
            pauseExistingArrows();
            console.log("pause game!");

            function pauseGameGeneration() {
                player.pause();
            }

            function pauseExistingArrows() {
                const current_arrows = document.querySelectorAll(".moving-arrow");
                for(let arrow of current_arrows) {
                    arrow.classList.toggle("paused");
                }
            }
        }

        function setEnabledButtons() {
            start.disabled = true;
            pause.disabled = true;
            reset.disabled = false;
            resume.disabled = false;
        }
    });

    reset.addEventListener('click', function doReset(event) {
        event.preventDefault();
        resetGame();
        setEnabledButtons();

        function resetGame() {
            player.stop();

            const current_arrows = document.querySelectorAll(".moving-arrow");
            for(let arrow of current_arrows) {
                arrow.remove();
            }
            console.log("reset the game");

        }

        function setEnabledButtons() {
            start.disabled = false;
            pause.disabled = true;
            reset.disabled = true;
            resume.disabled = true;
            document.getElementById("start-preview").disabled = false;
        }
    });

    resume.addEventListener('click', function doResume(event) {
        event.preventDefault();
        resumeGame();
        setEnabledButtons();

        function resumeGame() {
            const current_arrows = document.querySelectorAll(".moving-arrow");
            for(let arrow of current_arrows) {
                arrow.classList.toggle("paused");
            }

            player.play();

            console.log("resume game!");
        }

        function setEnabledButtons() {
            start.disabled = true;
            pause.disabled = false;
            reset.disabled = false;
            resume.disabled = true;
        }
    });




}