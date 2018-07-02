

import * as types from "../utils/typecheck";



export var Direction = {
    LEFT: 1,
    UP: 2,
    DOWN: 3,
    RIGHT: 4
}
/* // Brief test of the exported functions.
const lane_1 = document.getElementById("lane-1");
const lane_2 = document.getElementById("lane-2");
const lane_3 = document.getElementById("lane-3");
const lane_4 = document.getElementById("lane-4");

lane_1.appendChild(createFastArrow(Direction.LEFT));
lane_2.appendChild(createFastArrow(Direction.UP));
lane_3.appendChild(createSlowArrow(Direction.DOWN));
lane_4.appendChild(createMediumArrow(Direction.RIGHT));
*/

export function createFastArrow(direction) {
    return (createArrowFn(addFastMoving))(direction);
}

export function createMediumArrow(direction) {
    return (createArrowFn(addMediumMoving))(direction);
}

export function createSlowArrow(direction) {
    return (createArrowFn(addSlowMoving))(direction);
}

function createArrowFn(speedFn) {
    return function(direction) {
        types.typecheckNumber(direction);
        if(!isADirection(direction)) {
            throw new Error(direction.toString() + " is not a valid direction");
        }

        if(direction === Direction.LEFT) {
            return speedFn(createLeftArrow());
        } else if (direction === Direction.UP) {
            return speedFn(createUpArrow());
        } else if (direction === Direction.DOWN) {
            return speedFn(createDownArrow());
        } else {
            return speedFn(createRightArrow());
        }

        function isADirection(direction) {
            types.typecheckNumber(direction);
            if(direction !== Direction.LEFT && direction != Direction.RIGHT &&
                direction !== Direction.UP && direction !== Direction.DOWN) {
                return false;
            }
            return true;
        }  
    }
}


function addRemoveOnAnimationEnd(arrow) {
    arrow.addEventListener("animationend", function removeOnEnd(event) {
        if(event.animationName === "slidedown") {
            arrow.remove();
        }
    }, false);
    return arrow;
}

function addSlowMoving(arrow) {
    arrow.classList.add("moving-arrow-slow");
    addRemoveOnAnimationEnd(arrow);
    
    return arrow;
}

function addMediumMoving(arrow) {
    arrow.classList.add("moving-arrow-medium");
    addRemoveOnAnimationEnd(arrow);

    return arrow;
}

function addFastMoving(arrow) {
    arrow.classList.add("moving-arrow-fast");
    addRemoveOnAnimationEnd(arrow);

    return arrow;
}

function createRightArrow() {
    const arrow_right = document.createElement("i");
    arrow_right.classList.add("fa", "fa-arrow-right", "moving-arrow");
    return arrow_right;
}

function createLeftArrow() {
    const arrow_left = document.createElement("i");
    arrow_left.classList.add("fa", "fa-arrow-left", "moving-arrow");
    return arrow_left;
}

function createUpArrow() {
    const arrow_up = document.createElement("i");
    arrow_up.classList.add("fa", "fa-arrow-up", "moving-arrow");
    return arrow_up;
}

function createDownArrow() {
    const arrow_down = document.createElement("i");
    arrow_down.classList.add("fa", "fa-arrow-down", "moving-arrow");
    return arrow_down;
}


console.log("animations are running!");