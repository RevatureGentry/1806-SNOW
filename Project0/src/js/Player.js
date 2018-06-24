
import * as types from "./typecheck";

// This class is reponsible for taking a lexed and translated
// *.music file and playing it in the browser. Therefore it will utilize Tone.js

class Player {
    constructor() {
        this._instruments = [];
        //this._instrument = new Tone.Synth().toMaster();
        //this._instrument_2 = new Tone.Synth().toMaster();
    }

    /*
        example notes:
        [  // array of voices.
            [   // each voice is an array of notes and durations to play them.
                ["A4", "B4"],
                [1, 2], // The intention is to play notes in sequence.
            ],
            [
                ["C4", "D4"],
                [3, 5],

                // Note that voices do not play at identical times. "D4" will start
                // when "B4" ends. That is how the scheduling works.
            ]
        ]
    */
    schedule(notes) {
        this._clearOldMusic();

        for(let i = 0; i < notes.length; i++) {
            if(notes[i][0].length !== notes[i][1].length) {
                throw new Error("number of notes does not equal number of durations");
            }
            // add an instrument for each voice.
            this._instruments.push(new Tone.Synth({
                "oscillator" : {
                    "type" : "amtriangle",
                    "harmonicity" : 0.5,
                    "modulationType" : "sine"
                },
                "envelope" : {
                    "attackCurve" : 'exponential',
                    "attack" : 0.05,
                    "decay" : 0.2,
                    "sustain" : 0.2,
                    "release" : 1.5,
                },
                "portamento" : 0.05
            }).toMaster());

            //for each note-duration pair, schedule the note with correct duration.
            let overall_time = 0;
            let notes_array = notes[i][0];
            let dur_array = notes[i][1];
            for(let noteIndex = 0; noteIndex < notes_array.length; noteIndex++) {
                Tone.Transport.schedule(
                    this._scheduleNote(notes_array[noteIndex], dur_array[noteIndex]),
                    overall_time
                );

                // Increment the overall_time for the scheduling of the next note.
                overall_time += dur_array[noteIndex];
            }
        }
    }

    _clearOldMusic() {
        Tone.Transport.cancel();
    }

    _scheduleNote(note, duration) {
        types.typecheckString(note);
        types.typecheckNumber(duration);

        let instrument = this._instruments[this._instruments.length - 1];
        return function playNote(time) {
            instrument.triggerAttackRelease(note, duration, time);
        }
    }

    play() {
        Tone.Transport.start('+0.1');

        /*
        let instrument = this._instrument;
        let instrument_2 = this._instrument_2;
        return function doPlay(time) {
            instrument_2.triggerAttackRelease("G4", "3", time);
            instrument.triggerAttackRelease("C4", "3", time);
        }*/
    }

    pause() {
        Tone.Transport.pause();
    }

    stop() {
        Tone.Transport.stop();
    }
}

export default Player;
