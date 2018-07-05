let prior = "priorImg";

window.onload = function () {
    initializeGame();
}

function changeImage(imageID) {
    //places an X or O in the empty cell. Called by onclick
    let turn = ''
    if (document.getElementById(imageID).src.includes("openSpace.png")){
        if (document.getElementById(prior).src.includes("openSpace.png") || 
        document.getElementById(prior).src.includes("redO.png")){
            document.getElementById(imageID).src = "greenX.png"
            document.getElementById(prior).src = "greenX.png";
            document.getElementById(imageID).setAttribute("alt",
            `${document.getElementById(imageID).getAttribute("alt")} X`)
            turn = 'X'
        } else{
            document.getElementById(imageID).src = "redO.png";
            document.getElementById(prior).src = "redO.png";
            document.getElementById(imageID).setAttribute("alt",
            `${document.getElementById(imageID).getAttribute("alt")} O`)
            turn = 'O'
        }
    }
    checkForNoWin();
    checkForGameEnd(turn);
}

function initializeGame(shift = 0) {
    document.getElementById("WL_btn").setAttribute("onclick", `WLMessage("")`);
    let boards = document.getElementsByTagName("canvas");
    let myBoard = new board(boards[0], shift);
    let cells = document.getElementsByTagName("img");
    let k = 0;
    for(let i = 1; i <= 3; i++){
        for(let j = 1; j <= 3; j++){ 
            let myCell = new cell(cells[k], i, j, shift);
            k = k + 1;
        }
    }
}

function checkForGameEnd(turn){
    if(checkDiagonal()){
        endGame(turn);
    }
    for(let i = 1; i <= 3; i++){
        if(checkRow(i)||checkColumn(i)){
            endGame(turn);
            break
        }
    }
}

function endGame(winner){
    let cells = document.getElementsByTagName("img");
    for(let k = 1; k <= 9; k++){
        cells[k].setAttribute("onclick", "");
    }
    //document.getElementById("WL_btn").removeAttribute("hidden");
    document.getElementById("WL_btn").setAttribute("onclick", `WLMessage("${winner}")`)
}


function checkRow(i){
    if(document.getElementById(`img${i}1`).getAttribute("alt").substr(6) ===
        document.getElementById(`img${i}2`).getAttribute("alt").substr(6) &&
        document.getElementById(`img${i}1`).getAttribute("alt").substr(6) ===
        document.getElementById(`img${i}3`).getAttribute("alt").substr(6) &&
        document.getElementById(`img${i}1`).getAttribute("alt").substr(6) !== ""
        ){
            return true;
        } else{return false}
}

function checkColumn(i){
    if(document.getElementById(`img1${i}`).getAttribute("alt").substr(6) ===
        document.getElementById(`img2${i}`).getAttribute("alt").substr(6) &&
        document.getElementById(`img1${i}`).getAttribute("alt").substr(6) ===
        document.getElementById(`img3${i}`).getAttribute("alt").substr(6) &&
        document.getElementById(`img1${i}`).getAttribute("alt").substr(6) !== ""){
            return true;
        } else{return false;}
}
function checkDiagonal(){
   if((document.getElementById(`img11`).getAttribute("alt").substr(6) ===
    document.getElementById(`img22`).getAttribute("alt").substr(6) &&
    document.getElementById(`img11`).getAttribute("alt").substr(6) ===
    document.getElementById(`img33`).getAttribute("alt").substr(6) &&
    document.getElementById(`img22`).getAttribute("alt").substr(6) !== "")||
    (document.getElementById(`img31`).getAttribute("alt").substr(6) ===
    document.getElementById(`img22`).getAttribute("alt").substr(6) &&
    document.getElementById(`img13`).getAttribute("alt").substr(6) ===
    document.getElementById(`img22`).getAttribute("alt").substr(6) &&
    document.getElementById(`img22`).getAttribute("alt").substr(6) !== "")){
        return true;
    } else{return false;}
}

function checkForNoWin(){
    cells = document.getElementsByTagName("img")
    for(let k = 0; k < 9; k++){
        if(cells[k].getAttribute("alt").substr(6) === ""){
            return;
        }
    } 
    endGame('');
}

function WLMessage(winner) {
    if(winner !==""){alert(`${winner} WINS!`)}
    document.getElementById(prior).src = "openSpace.png";
    initializeGame();
}