


const lane_1 = document.getElementById("lane-1");
const lane_2 = document.getElementById("lane-2");
const lane_3 = document.getElementById("lane-3");
const lane_4 = document.getElementById("lane-4");

let arrow = createLeftArrow();

lane_1.appendChild(addSlowMoving(createLeftArrow()));
lane_2.appendChild(addMediumMoving(createUpArrow()));
lane_3.appendChild(addFastMoving(createDownArrow()));
lane_4.appendChild(addSlowMoving(createRightArrow()));


function addRemoveOnAnimationEnd(arrow) {
    arrow.addEventListener("animationend", function removeOnEnd(event) {
        arrow.remove();
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
    arrow_right.classList.add("fa", "fa-arrow-right", "arrow");
    return arrow_right;
}

function createLeftArrow() {
    const arrow_left = document.createElement("i");
    arrow_left.classList.add("fa", "fa-arrow-left", "arrow");
    return arrow_left;
}

function createUpArrow() {
    const arrow_up = document.createElement("i");
    arrow_up.classList.add("fa", "fa-arrow-up", "arrow");
    return arrow_up;
}

function createDownArrow() {
    const arrow_down = document.createElement("i");
    arrow_down.classList.add("fa", "fa-arrow-down", "arrow");
    return arrow_down;
}


console.log("animations are running!");