

import * as types from "./typecheck";
import { Direction, createFastArrow, createMediumArrow, createSlowArrow } from "./animations";
import Player from "./Player";
import * as utils from "./GamePlayer.utils";
import { Mode } from "./GamePlayer.utils";


var Lane = {
    LEFT: 1,
    UP: 2,
    DOWN: 3,
    RIGHT: 4,
}

class GamePlayer extends Player {
    constructor() {
        super();
        this._mode = Mode.EASY;
    }

    getMode() {
        return this._mode;
    }

    setMode(mode) {
        if(mode !== Mode.EASY && mode !== Mode.MEDIUM && mode !== Mode.HARD) {
            throw new Error("Valid modes: '0', '1', '2'");
        }

        this._mode = mode;
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
        this._clearOldArrows();
        super.schedule(notes);

        for(let i = 0; i < notes.length; i++) {
            const durations = notes[i][1];
            const arrow_start_times = utils.convertDurationsToArrowStartTimes(durations, this._mode);
            this._scheduleArrows(arrow_start_times);
        }   
    }

    _clearOldArrows() {
        Tone.Draw.cancel();
    }

    /*  arrow_start_times is an arrow of valid times that an arrow could start.
        Times are in seconds. Times cannot be negative.
    */
    _scheduleArrows(arrow_start_times) {
        console.log("Scheduling the game in mode " + this._mode.toString());
        const createArrowFn = this._createArrow;
        const _this = this;
        for(let i = 0; i < arrow_start_times.length; i++) {
            Tone.Transport.schedule(function(time) {
                Tone.Draw.schedule(function drawArrow() {
                    const num_lanes = 4;
                    const lane_number = 1 + Math.floor(Math.random() * num_lanes);
                    const arrow = createArrowFn.call(_this, lane_number);
                    const lane_id = "lane-" + lane_number.toString();
                    document.getElementById(lane_id).appendChild(arrow);
                });
            }, arrow_start_times[i]);
        }
    }

    _createArrow(lane_number) {
        types.typecheckNumber(lane_number);
        const direction = this._getArrowDirection(lane_number);
        const arrowCreationFn = this._getArrowCreationFn();

        return arrowCreationFn(direction);
    }

    // TODO : move this to utils and TEST IT.
    _getArrowDirection(lane_number) {
        types.typecheckNumber(lane_number);
        if(lane_number === Lane.LEFT) {
            return Direction.LEFT;
        } else if (lane_number === Lane.UP) {
            return Direction.UP;
        } else if (lane_number === Lane.DOWN) {
            return Direction.DOWN;
        } else if (lane_number === Lane.RIGHT) {
            return Direction.RIGHT;
        } else {
            throw new Error(lane_number.toString() + " is not a valid lane number. Valid numbers are 1, 2, 3, and 4");
        }
    }

    _getArrowCreationFn() {
        let bound_1;
        let bound_2;
        if(this._mode === Mode.EASY) {
            bound_1 = 70;
            bound_2 = 90;
        } else if (this._mode === Mode.MEDIUM) {
            bound_1 = 40;
            bound_2 = 70;
        } else if (this._mode === Mode.HARD) {
            bound_1 = 20;
            bound_2 = 50;
        } else {
            throw new Error("Not a valid mode");
        }


        const max = 100;
        const fn_selector = Math.floor(Math.random() * max);

         // TODO : Maybe split this lower part of the function out into
         // A testable utils function? Encapsulate the functionality
         // away from the randomness!!

        if(fn_selector >= 0 && fn_selector < bound_1) {
            return createSlowArrow;
        } else if (fn_selector >= bound_1 && fn_selector < bound_2) {
            return createMediumArrow;
        } else if (fn_selector >= bound_2 && fn_selector < max) {
            return createFastArrow;
        } else {
            throw new Error(fn_selector.toString() + " is out of range");
        }
    }    
}

export { GamePlayer, Mode };