import Player from "./Player";
import MusicGenerator from "./MusicGenerator";
import MusicLexer from "./MusicLexer";
import MusicTranslator from "./MusicTranslator";
import * as types from "./typecheck";
import { GamePlayer, Mode } from "./GamePlayer";

(function main() {
    const generator = new MusicGenerator(new MusicLexer(), new MusicTranslator());

    window.onload = function initUserInteractions(event) {
        console.log("Script running at load");

        addArrowEvents();
        addPreviewEvents();
        addStartEvents();
    };

    function addPreviewEvents() {
        const preview = document.getElementById("start-preview");
        const stop = document.getElementById("stop-preview");
        const player = new Player();

        preview.addEventListener('click', function startPreview(event) {
            playUserChosenMusic();
            preview.disabled = true;
            stop.disabled = false;
        });

        stop.addEventListener('click', function stopPreview(event) {
            player.stop();
            preview.disabled = false;
            stop.disabled = true;
        });

        function playUserChosenMusic() {
            // TODO : For each music playing,
            // Check if compilation errors occurred!
            // IF SO, DON'T PLAY THE MUSIC!!!
            // DISPLAY AN ERROR MESSAGE AND ASK THEM TO CONFIRM.
            // Or at least display an error message
            // before starting.
            if(existsUserChosenFile()) {
                playUserChosenFile();
            } else {
                playUserSelectedMusic();
            }
    
            function playUserChosenFile() {
                let reader = new FileReader();
                reader.onload = function returnFileAsString(event) {
                    // When the file has been read, start playing it.
                    console.log(event.target.result);
                    generator.generate(event.target.result);
                    player.schedule(generator.getGeneratedMusic());
                    player.play();
                };
                reader.readAsText(document.getElementById("user-music").files[0]);
            }
    
            function playUserSelectedMusic() {
                generator.generate(getSelectedMusic());
                player.schedule(generator.getGeneratedMusic());
                player.play();
            }
        }
    }

    function addStartEvents() {
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
        });

        pause.addEventListener('click', function pause(event) {
            // TODO: Pause the game. But don't RESET it!!!!
            pauseGame();
            start.disabled = false;
            pause.disabled = true;
        });

        function playGame() {
            // TODO : For each music playing,
            // Check if compilation errors occurred!
            // IF SO, DON'T PLAY THE MUSIC!!!
            // DISPLAY AN ERROR MESSAGE AND ASK THEM TO CONFIRM.
            // Or at least display an error message
            // before starting.
            if(existsUserChosenFile()) {
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
                    doPlay(generator.getGeneratedMusic());
                }
                reader.readAsText(document.getElementById("user-music").files[0]);
            }
    
            function playGameWithSelectionMusic() {
                const music = generator.generate(getSelectedMusic());
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

        function pauseGame() {
            console.log("pause game!");
            player.pause();
        }
    }

    function addArrowEvents() {
        const ids = [1, 2, 3, 4];
        for(let id of ids) {
            const arrow_id = "arrow-" + id.toString();
            const arrow = document.getElementById(arrow_id);
            arrow.addEventListener("animationend", function(event) {
                arrow.classList.remove("explode");
            });
        }
    }

    function existsUserChosenFile() {
        return document.getElementById("user-music").files.length > 0;
    }

    function getSelectedMusic() {
        const selected = document.getElementById("provided-music").value;
        if(selected === "layla") {
            return LAYLA;
        } else if (selected === "duck") {
            return LAYLA;
        } else if (selected === "user") {
            return LAYLA;
        } else {
            throw new Error("An invalid selection was made!");
        }
    }


    var LAYLA = 
        "Layla \n" +
        "Eric Clapton \n" +
        "unit 16 upm 60 beat 4 \n " +
        "-ScoreStart- \n" +
        "A5 C6 D6 E6 D6 A5 C6 ~ ~ ~ E5 E5 E5 ~ D5 D5 C5 D5 E5";
})();