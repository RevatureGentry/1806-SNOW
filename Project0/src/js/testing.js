import Player from "./player/Player";

import MusicGenerator from "./generator/MusicGenerator";
import MusicLexer from "./lexer/MusicLexer";
import MusicTranslator from "./translator/MusicTranslator";

window.onload = function(event) {

    console.log("I am running");
    
    let generator = new MusicGenerator(new MusicLexer(), new MusicTranslator());
    generator.generate("Twinkle Twinkle Little Star\nUnknown\nunit 4 upm 80 beat 4\n" + 
                         "\n-ScoreStart- " +
                         "C C G G A A G ~ F F E E D D C ~ NEW \n" +
                         "C5 C5 G5 G5 A5 A5 G5 ~ F5 F5 E5 E5 D5 D5 C5 ~ NEW\n" +
                         "E E B B C5 C5 B ~ A A G G F F E ~"
    );
    console.log(generator.getGeneratedMusic());
    if(generator.hasErrors()) {
        console.log("UNEXPECTED ERROR");
        return;
    }

    let player = new Player();
    player.schedule(
        generator.getGeneratedMusic()
        /*[[
            ["C4", "D4", "E4", "F4", "G4", "A4", "B4", "C5"],
            [0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5],
        ]],*/
        /*[[]
            ["E4", "F4", "G4", "A4", "B4", "C5", "D5", "E5"],
            [0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5],
        ]]*/
    );
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