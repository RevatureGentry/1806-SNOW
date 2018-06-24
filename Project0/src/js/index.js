import Player from "./Player";
import MusicGenerator from "./MusicGenerator";
import MusicLexer from "./MusicLexer";
import MusicTranslator from "./MusicTranslator";
import * as types from "./typecheck";

(function main() {
    const generator = new MusicGenerator(new MusicLexer(), new MusicTranslator());

    window.onload = function initUserInteractions(event) {
        console.log("Script running at load");
        /*generator.generate(LAYLA);
        player.schedule(generator.getGeneratedMusic());
        player.play();*/

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
                const selected = document.getElementById("provided-music");
                let music;
                if(selected === "layla") {
                    music = LAYLA;
                } else if (selected === "duck") {
                    music = LAYLA;
                } else if (selected === "user") {
                    music = LAYLA;
                } else {
                    throw new Error("An invalid selection was made!");
                }
                generator.generate(music);
                player.schedule(generator.getGeneratedMusic());
                player.play();
            }
        }
    }

    function addStartEvents() {
        const start = document.getElementById("start-game");
        const pause = document.getElementById("pause-game");

        start.addEventListener('click', function startGame(event) {
            playGame();

            start.disabled = true;
            pause.disabled = false;
        });

        pause.addEventListener('click', function pauseGame(event) {
            // TODO: Pause the game. But don't RESET it!!!!
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
                playGameWithChosenFile();
            } else {
                playGameWithSelectionMusic();
            }
    
            function playGameWithChosenFile() {
                doPlay();
            }
    
            function playGameWithSelectionMusic() {
                doPlay();
            }

            function doPlay() {

            }
        }
    }


    function existsUserChosenFile() {
        console.log("A file is selected!");
        return document.getElementById("user-music").files.length > 0;
    }


    var LAYLA = 
        "Layla \n" +
        "Eric Clapton \n" +
        "unit 16 upm 240 beat 4 \n " +
        "-ScoreStart- \n" +
        "A5 C6 D6 E6 D6 A5 C6 ~ ~ ~ E5 E5 E5 ~ D5 D5 C5 D5 E5";
})();