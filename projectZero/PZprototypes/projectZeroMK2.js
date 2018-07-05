let prior = "priorImg";

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

