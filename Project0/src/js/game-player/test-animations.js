

console.log("test animations are running!");


let test_div = document.getElementById("test-div");
console.log(test_div);

let arrow = document.createElement("i");
arrow.classList.add("fa", "fa-arrow-left", "moving-arrow", "moving-arrow-slow", "moving-explode");

test_div.appendChild(arrow);
console.log(test_div);


