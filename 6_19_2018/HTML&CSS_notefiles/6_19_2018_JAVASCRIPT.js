
function rgb(r, g, b) {
    return "rgb(" + r + "," + g + "," + b + ")";
}

function changeDatColor(){
    var c1 = Math.floor((Math.random() * 255) + 1);
    var c2 = Math.floor((Math.random() * 255) + 1);
    var c3 = Math.floor((Math.random() * 255) + 1);
    document.getElementById("body").style.backgroundColor = rgb(c1,c2,c3);
}
