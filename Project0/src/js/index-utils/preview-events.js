import * as utils from "./utils";
import Player from "../player/Player";

export function addPreviewEvents(generator) {
    const previewBtn = document.getElementById("start-preview");
    const stopBtn = document.getElementById("stop-preview");
    const player = new Player();

    previewBtn.addEventListener('click', function startPreview(event) {
        playUserChosenMusic();
        previewBtn.disabled = true;
        stopBtn.disabled = false;

        function playUserChosenMusic() {
            // TODO : For each music playing,
            // Check if compilation errors occurred!
            // IF SO, DON'T PLAY THE MUSIC!!!
            // DISPLAY AN ERROR MESSAGE AND ASK THEM TO CONFIRM.
            // Or at least display an error message
            // before starting.
            if(utils.existsUserChosenFile()) {
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
                generator.generate(utils.getSelectedMusic());
                player.schedule(generator.getGeneratedMusic());
                player.play();
            }
        }
    });

    stopBtn.addEventListener('click', function stopPreview(event) {
        player.stop();
        previewBtn.disabled = false;
        stopBtn.disabled = true;
    });

}