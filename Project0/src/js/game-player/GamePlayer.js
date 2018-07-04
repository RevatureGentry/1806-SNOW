

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

const NUM_LANES = 4;

// TODO: Arrow start times need to come with DETERMINISTIC algorithm
// that determines speed of given arrow. Also needs to contain
// the END time for the arrow at which a key press is expected.
// Use Tone.Transport.seconds to compare to this end time!

// This class delegates to the Player superclass to play the provided music.
// This class uses the provided music to schedule the game's arrow gameplay events.
class GamePlayer extends Player {
    constructor() {
        super();
        this._mode = Mode.EASY;
        this._count = 0;
        this._subscriptions = [];
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
        this._scheduleAllArrows(notes);
    }

    _clearOldArrows() {
        console.log("clearing old arrows");
        console.log(this._subscriptions);
        Tone.Draw.cancel();
        this._count = 0;
        for(let s of this._subscriptions) {
            console.log("Hi");
            console.log(s);
            document.removeEventListener('keydown', s);
        }
    }

    _scheduleAllArrows(notes) {
        for(let i = 0; i < notes.length; i++) {
            const durations = notes[i][1];

            const arrow_start_end_times = utils.convertDurationsToArrowStartAndEndTimes(durations, this._mode);
            console.log(arrow_start_end_times);
            this._scheduleArrows(arrow_start_end_times);
        }
    }

    /*  arrow_start_times is an array of pairs, with each pair being
        the time an arrow starts and the time an arrow is expected
        to be completed (keyed).
        Times are in seconds. Times cannot be negative.
    */
    _scheduleArrows(arrow_start_end_times) {
        console.log("Scheduling the game in mode " + this._mode.toString());
        const _this = this;
        for(let i = 0; i < arrow_start_end_times.length; i++) {
            const lane_number = getRandomLaneNumber(NUM_LANES);
            const arrow = this._createArrow(lane_number, getArrowDuration(arrow_start_end_times[i]));
            const scheduleArrowCompletion = this._scheduleArrowCompletion;
            Tone.Transport.schedule(function(time) {
                Tone.Draw.schedule(function drawArrow() {
                    
                    document.getElementById(utils.getLaneId(lane_number)).appendChild(arrow);
                    scheduleArrowCompletion.call(_this, utils.getArrowId(lane_number), arrow_start_end_times[i][1]);
                });
            }, arrow_start_end_times[i][0]);
        }

        function getRandomLaneNumber(num_lanes) {
            return 1 + Math.floor(Math.random() * num_lanes);
        }

        function getArrowDuration(pair) {
            return pair[1] - pair[0];
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
        const feedback = document.getElementById("quality");
        document.addEventListener('keydown', checkTime);
        _this._subscriptions.push(checkTime);

        function checkTime(event) {
            if(isArrowKey(event.code) && event.code === convertToCode(arrow_id)) {
                event.preventDefault();
                const time_diff = Math.abs(Tone.Transport.seconds - completion_time);
                if(time_diff < 0.25) {

                    feedback.innerText = getFeedback(time_diff);

                    console.log("Success!");
                    const arrow = document.getElementById(arrow_id);
                    arrow.classList.add("explode");
                    document.removeEventListener('keydown', checkTime);
                    
                    // TODO : Regular this doesn't work because value of 'this'
                    //      does not refer to the GamePlayer!
                    incCount.call(_this);
                    document.getElementById("counter").innerText = "Count: " + getCount.call(_this).toString();

                    _this._subscriptions.push(checkTime);
                    
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

            function getFeedback(time_diff) {
                types.typecheckNumber(time_diff);
                if(time_diff < 0.05) {
                    return "PERFECT";
                } else if(time_diff < 0.1) {
                    return "GREAT";
                } else if (time_diff < 0.15) {
                    return "Nice";
                } else if (time_diff < 0.2) {
                    return "OK";
                } else {
                    return "Bad";
                }
            }
        }
    }


    play() {

        // TODO: Check that this works!
        document.getElementById("counter").innerText = "Count: " + this._count.toString();
        super.play();
    }
}


export { GamePlayer, Mode };