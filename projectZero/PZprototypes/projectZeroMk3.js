let prior = "priorImg";

window.onload = function (){
    let cells = document.getElementsByTagName("img");
    let k = 0;
    for(let i = 1; i <= 3; i++){
        for(let j = 1; j <= 3; j++){ 
            let myCell = new cell(cells[k], i, j);
            k = k + 1;
        }
    }
}

function changeImage(imageID) {
    if (document.getElementById(imageID).src.includes("openSpace.png")){
        if (document.getElementById(prior).src.includes("openSpace.png") || 
        document.getElementById(prior).src.includes("redO.png")){
            document.getElementById(imageID).src = "greenX.png"
            document.getElementById(prior).src = "greenX.png";
        } else{
            document.getElementById(imageID).src = "redO.png";
            document.getElementById(prior).src = "redO.png";
        }
    }
}

