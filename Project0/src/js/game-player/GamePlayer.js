

import * as types from "../utils/typecheck";
import { Direction, createFastArrow, createMediumArrow, createSlowArrow } from "./animations";
import Player from "../player/Player";
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
        this._count = 0;
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

            // TODO: Arrow start times need to come with DETERMINISTIC algorithm
            // that determines speed of given arrow. Also needs to contain
            // the END time for the arrow at which a key press is expected.
            // Use Tone.Transport.seconds to compare to this end time!
            const arrow_start_end_times = utils.convertDurationsToArrowStartAndEndTimes(durations, this._mode);
            console.log(arrow_start_end_times);
            this._scheduleArrows(arrow_start_end_times);
        }   
    }

    _clearOldArrows() {
        Tone.Draw.cancel();
        this._count = 0;
    }

    /*  arrow_start_times is an array of pairs, with each pair being
        the time an arrow starts and the time an arrow is expected
        to be completed (keyed).
        Times are in seconds. Times cannot be negative.
    */
    _scheduleArrows(arrow_start_end_times) {
        console.log("Scheduling the game in mode " + this._mode.toString());
        const createArrowFn = this._createArrow;
        const _this = this;
        for(let i = 0; i < arrow_start_end_times.length; i++) {
            const num_lanes = 4;
            const lane_number = 1 + Math.floor(Math.random() * num_lanes);
            const arrow_duration = arrow_start_end_times[i][1] - arrow_start_end_times[i][0];
            const arrow = createArrowFn.call(_this, lane_number, arrow_duration);
            const lane_id = "lane-" + lane_number.toString();
            const arrow_id = "arrow-" + lane_number.toString();
            //this._scheduleArrowCompletion(lane_id, arrow_start_end_times[i][1]);
            const scheduleArrowCompletion = this._scheduleArrowCompletion;
            Tone.Transport.schedule(function(time) {
                Tone.Draw.schedule(function drawArrow() {
                    
                    document.getElementById(lane_id).appendChild(arrow);
                    scheduleArrowCompletion.call(_this, arrow_id, arrow_start_end_times[i][1]);
                });
            }, arrow_start_end_times[i][0]);

            // TODO : Schedule Tone.Transport to eventually stop??? Or not??
        }
    }

    _createArrow(lane_number, arrow_duration) {
        types.typecheckNumber(lane_number);
        types.typecheckNumber(arrow_duration);
        const direction = this._getArrowDirection(lane_number);
        const arrowCreationFn = this._getArrowCreationFn(arrow_duration);

        return arrowCreationFn(direction);
    }

    // TODO : move this to utils and TEST IT.
    //      
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

    _getArrowCreationFn(arrow_duration) {
        types.typecheckNumber(arrow_duration);
        if(arrow_duration === 4) {
            return createFastArrow;
        } else if (arrow_duration === 7) {
            return createMediumArrow;
        } else if (arrow_duration === 10) {
            return createSlowArrow;
        } else {
            throw new Error("arrow duration does not match any arrow type's speed");
        }
    }    

    _scheduleArrowCompletion(arrow_id, completion_time) {
        console.log("Scheduling an arrow");
        types.typecheckNumber(completion_time);
        types.typecheckString(arrow_id);
        if(completion_time < 0) {
            throw new Error("completion time must be non-negative");
        }

        const _this = this;

        // TO DO : Add an event listener on the key down event
        // to check the Tone.Transport.seconds value to see if it
        // is close enough to when the keydown was pressed!
        document.addEventListener('keydown', function checkTime(event) {
            const code = convertToCode(arrow_id);
            if(isArrowKey(event.code) && event.code === code) {
                event.preventDefault();
                if(Math.abs(Tone.Transport.seconds - completion_time) < 0.5) {
                    console.log("Success!");
                    const arrow = document.getElementById(arrow_id);
                    arrow.classList.add("explode");
                    document.removeEventListener('keydown', checkTime);
                    
                    // TODO : Regular this doesn't work because value of 'this'
                    //      does not refer to the GamePlayer!
                    incCount.call(_this);
                    document.getElementById("counter").innerText = "Count: " + getCount.call(_this).toString();
                    
                    function incCount() {
                        this._count += 1;
                    }

                    function getCount() {
                        return this._count;
                    }
                }

                if(Tone.Transport.seconds > completion_time + 1) {
                    document.removeEventListener('keydown', checkTime);
                }
            }
            
            function isArrowKey(code) {
                types.typecheckString(code);
                if(code === "ArrowLeft" || code === "ArrowRight" ||
                        code === "ArrowUp" || code === "ArrowDown") {
                    return true;
                }
                return false;
            }

            function convertToCode(arrowId) {
                types.typecheckString(arrowId);
                if(arrowId === "arrow-1") {
                    return "ArrowLeft";
                }
                if(arrowId === "arrow-2") {
                    return "ArrowUp";
                }
                if(arrowId === "arrow-3") {
                    return "ArrowDown";
                }
                if(arrowId === "arrow-4") {
                    return "ArrowRight";
                }

                throw new Error("arrow not recognized. cannot convert to code");
            }
        });
    }


    play() {

        // TODO: Check that this works!
        document.getElementById("counter").innerText = "Count: " + this._count.toString();
        super.play();
    }
}

export { GamePlayer, Mode };