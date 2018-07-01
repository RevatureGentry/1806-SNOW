//On load of board, goes through each piece calls the setPieceFunctionality() method on them
window.onload = function() {
    let pieces = document.getElementsByClassName("piece");
    for (let piece of pieces) {
        setPieceFunctionality(piece);
    }
}

//Add the showMoves() function to the onclick attribute for all pieces on the board
//@param piece: HTML object containing information of a piece on the board
function setPieceFunctionality(piece) {
    let pieceType = piece.classList[0];
    let pieceColor = piece.classList[2];
    let piecePosition = piece.parentElement.id;
    piece.setAttribute("onclick", `showMoves('${pieceType}', '${piecePosition}', '${pieceColor}', false)`);
}

//Global values. CurrentColor and enemyColor will be switched each move. Active cells and active piece will be updated ever move
let currentColor = "white";
let enemyColor = "black";
let xAxis = ["A", "B", "C", "D", "E", "F", "G", "H"];
let activeCells = [];
let activePiece = "";
let kingInCheck = false;
let selfCheck = false;

//Shows the possible moves for a selected piece using the generalMove() function or checks for check
//@param piecePosition The position of the current piece being selected, represented by cell Id
//@param pieceColor The color of the selected piece
//@param pieceType The type of the selected piece. Used to check specifically if the piece is a pawn
//@param checkingForCheck Switches certain parts of the function to not look for possible cells but rather if the king is in check 
function showMoves(pieceType, piecePosition, pieceColor, checkForCheck) {
    if(pieceColor !== currentColor && checkForCheck == false){return;}                    //If player clicks piece that isn't theirs, do nothing
    unsetCells();                                                                         //Unset movement possibilities from any cells
    if(piecePosition == activePiece && checkForCheck == false){activePiece = ""; return;} //Exit function if player clicks same piece twice

    let xPos = xAxis.indexOf(piecePosition.charAt(0));
    let yPos = parseInt(piecePosition.charAt(1));
    let maximumUpwardMovement = 8 - yPos;
    let maximumDownwardMovement = 7 - maximumUpwardMovement;
    let maximumRightMovement = 7 - xPos;
    let maximumLeftMovement = 7 - maximumRightMovement;

    //Rook Movements HashMap-------------------------
    rookMovements = {maxUp:maximumUpwardMovement, maxRight:maximumRightMovement, 
        maxDown:maximumDownwardMovement, maxLeft:maximumLeftMovement, diagnol:false, vertHor:true};
    //Bishop Movements HashMap-----------------------
    bishopMovements = {maxUp:maximumUpwardMovement, maxRight:maximumRightMovement, 
            maxDown:maximumDownwardMovement, maxLeft:maximumLeftMovement, diagnol:true, vertHor:false};
    //Queen Movements HashMap------------------------
    queenMovements = {maxUp:maximumUpwardMovement, maxRight:maximumRightMovement, 
            maxDown:maximumDownwardMovement, maxLeft:maximumLeftMovement, diagnol:true, vertHor:true};
    //King Movements HashMap (all one or zero depending on position)---
    kingMovements = {maxUp:Math.min(1, maximumUpwardMovement), maxRight:Math.min(1, maximumRightMovement), 
            maxDown:Math.min(1, maximumDownwardMovement), maxLeft:Math.min(1, maximumLeftMovement), diagnol:true, vertHor:true};

    //Pawn Movements------------------------------------------------
    let pawnMovements;
    if(pieceType == "pawn"){
        if (pieceColor == "white"){
            let movement = (function() {switch(yPos) {
                case 2: return 2;break;
                default: return 1;break;
            }})();
            pawnMovements = {maxUp:movement, maxRight:0, maxDown:0, maxLeft:0, diagnol:false, vertHor:true}
        }
        else {
            let movement = (function() {switch(yPos) {
                case 7: return 2; break;
                default: return 1; break;
            }})();
            pawnMovements = {maxUp:0, maxRight:0, maxDown:movement, maxLeft:0, diagnol:false, vertHor:true}
        }
    }
    
    switch (pieceType) {
        case "rook":generalMove(rookMovements, piecePosition, pieceColor, pieceType, true, checkForCheck); break;
        case "bishop":generalMove(bishopMovements, piecePosition, pieceColor, pieceType, true, checkForCheck); break;
        case "queen":generalMove(queenMovements, piecePosition, pieceColor, pieceType, true, checkForCheck);break;
        case "king":generalMove(kingMovements, piecePosition, pieceColor, pieceType, true, checkForCheck);break;
        case "pawn":generalMove(pawnMovements, piecePosition, pieceColor, pieceType, false, checkForCheck);break;
        case "knight":knightRules(piecePosition, pieceColor, true, checkForCheck);break;
    }
}

//Specialized rules for the knight movements since it is so different from the normal pieces
//@param piecePosition The position of the current piece being selected, represented by cell Id
//@param pieceColor The color of the selected piece
//@param takeEnemy determines whether or not a found enemy piece can be attacked
//@param checkingForCheck Switches certain parts of the function to not look for possible cells but rather if the king is in check 
function knightRules(piecePosition, pieceColor, takeEnemy, checkForCheck){
    let xPos = xAxis.indexOf(piecePosition.charAt(0));
    let yPos = parseInt(piecePosition.charAt(1));
    let possibleCells = [];
    let movesArray = [ [1, 2], [1, -2], [-1, 2], [-1, -2], [2, 1], [2, -1], [-2, 1], [-2, -1]];
    for (let i = 0; i < 8; i++) {
        let newXPos = xPos + movesArray[i][0];
        let newYPos = yPos + movesArray[i][1];
        if (newXPos <= 7 && newXPos >= 0 && newYPos <= 8 && newYPos >= 1){
            possibleCell = xAxis[newXPos] + newYPos;
            if(checkForEnemyPiece(possibleCell, piecePosition, pieceColor, takeEnemy, checkForCheck)) {continue;}
            else {possibleCells.push(possibleCell);}
        }
    }
    if (checkForCheck == false){
        for(cellID of possibleCells){setCell(cellID, piecePosition, "bg-success");}
    }
}
//Takes in multiple parameters to currectly show the possible moves of a selected piece, or used to test if a piece is putting a king in check
//@param maximumMovementsHash A hash containing the maximum possible squares a piece can move in the respective directions
//@param piecePosition The position of the current piece being selected, represented by cell Id
//@param pieceColor The color of the selected piece
//@param pieceType The type of the selected piece. Used to check specifically if the piece is a pawn
//@param takeEnemy Determines whether or not a found enemy piece can be attacked
//@param checkingForCheck Switches certain parts of the function to not look for possible cells but rather if the king is in check 
function generalMove(maximumMovementsHash, piecePosition, pieceColor, pieceType, takeEnemy, checkForCheck) {
    let xPos = xAxis.indexOf(piecePosition.charAt(0));
    let yPos = parseInt(piecePosition.charAt(1));
    let possibleCells = [];

    if(maximumMovementsHash.vertHor == true){
        checkPossibleCells(1, 0, maximumMovementsHash.maxRight, takeEnemy, checkForCheck); //Right movement
        checkPossibleCells(-1, 0, maximumMovementsHash.maxLeft, takeEnemy, checkForCheck); //Left movement
        checkPossibleCells(0, 1, maximumMovementsHash.maxUp, takeEnemy, checkForCheck); //Up movement
        checkPossibleCells(0, -1, maximumMovementsHash.maxDown, takeEnemy, checkForCheck); //Down movement
    }

    if(maximumMovementsHash.diagnol == true){
        checkPossibleCells(1, 1, Math.min(maximumMovementsHash.maxUp, maximumMovementsHash.maxRight), takeEnemy, checkForCheck); //Diagnol Up Right movement
        checkPossibleCells(1, -1, Math.min(maximumMovementsHash.maxDown, maximumMovementsHash.maxRight), takeEnemy, checkForCheck); //Diagnol Down Right movement
        checkPossibleCells(-1, -1, Math.min(maximumMovementsHash.maxDown, maximumMovementsHash.maxLeft), takeEnemy, checkForCheck); //Diagnol Down Left movement
        checkPossibleCells(-1, 1, Math.min(maximumMovementsHash.maxUp, maximumMovementsHash.maxLeft), takeEnemy, checkForCheck); //Diagnol Up Left movement
    }

    //Script to determine if the pawn is in attacking range
    if(pieceType == "pawn"){
        let originalPossibleMovesLength = possibleCells.length;
        switch(pieceColor == "white"){
            case true:
                try{checkPossibleCells(1, 1, 1, true, checkForCheck)}catch{}
                try{checkPossibleCells(-1, 1, 1, true, checkForCheck)}catch{}
            case false:
                try{checkPossibleCells(1, -1, 1, true, checkForCheck)}catch{}
                try{checkPossibleCells(-1, -1, 1, true, checkForCheck)}catch{}
            }
        let newPossibleMoveLength = possibleCells.length;
        for(let i = 0; i < (newPossibleMoveLength - originalPossibleMovesLength); i++)
            {possibleCells.pop();}
    }
        

    if (checkForCheck == false){
        for(cellID of possibleCells) {
            setCell(cellID, piecePosition, "bg-success");
        }
    }  

    //Look at each cell in a given direction and determine whether the player can move there or not
    //@param amountForX Amount that should be added to the x coordinate for horizontal movement
    //@param amountForY Amount that should be added to the y coordinate for vertical movement
    //@param maxMovement Amount of cells in the given direction that should be checked
    //@param pieceType The type the piece, mainly checking if the piece is a pawn
    function checkPossibleCells(amountForX, amountForY, maxMovement, takeEnemy, checkForCheck){
        let tempXPosition = xPos;
        let tempYPosition = yPos;
        for(let i = 0; i < maxMovement; i++){
            tempXPosition = tempXPosition + amountForX;
            tempYPosition = tempYPosition + amountForY;
            xLetter = xAxis[tempXPosition];
            let cellID = xLetter + tempYPosition;
            if(checkForEnemyPiece(cellID, piecePosition, pieceColor, takeEnemy, checkForCheck)){
                break;
            }
            (checkForCheck == false) ? possibleCells.push(cellID) : null;
        }
    }
}

//Simple function that takes cell and piece info and check if suspected cell contains the enemy
//@param cellToCheck The check in question that may contain either an enemy piece or a piece of current color
//@param piecePosition The position of the current piece being selected, represented by cell Id
//@param pieceColor THe color of the selected piece
//@param takeEnemy Determination whether or not the piece can actually attack (pawns can't attack forward)
//@param checkForCheck Switch boolean to check for checks instead of possible movements
//@return return true if there is a piece in the way of the current piece, false if empty
function checkForEnemyPiece(cellToCheck, piecePosition, pieceColor, takeEnemy, checkForCheck){
    let cellClasses = document.getElementById(cellToCheck).classList;
    if(cellClasses.contains("whiteOccupied") || cellClasses.contains("blackOccupied")){
        checkCellPieceColor(cellToCheck, piecePosition, pieceColor, takeEnemy, checkForCheck);
        return true;
    }
    return false;
}

//Check the color of the piece in the cell to see if it is an enemy piece. Show possible move or update king check status
//@param cellToCheck The cell ID in question that may contain either an enemy piece or a piece of current color
//@param currentPiecePosition The position of the current piece being selected, represented by cell Id
//@param pieceColor THe color of the selected piece
//@param takeEnemy Determination whether or not the piece can actually attack (pawns can't attack forward)
//@param checkForCheck Switch boolean to check for checks instead of possible movements
//@return return true if there is a piece in the way of the current piece, false if empty
function checkCellPieceColor(cellToCheck, currentPiecePosition, pieceColor, takeEnemy, checkForCheck){
    let cell = document.getElementById(cellToCheck);
    let piece = cell.children[0];
    if(pieceColor !== piece.classList[2] && takeEnemy == true){
        if(checkForCheck == true){
            if(piece.classList.contains("king") && pieceColor == currentColor){kingInCheck = true; console.log("king In check");}
            if(piece.classList.contains("king") && pieceColor !== currentColor){selfCheck = true; console.log("___self check___");}
            
            return;
        }
        setCell(cellToCheck, currentPiecePosition, "bg-danger");
    }
}

//Set the cell to a specific color and add onclick movePiece function, as well as add it to the list of cells that the piece can move to
//@param cellID The cell id that is having it's color and attribute changed
//@param originalPiecePosition The cell id for where the selected piece is located
//@param cellColor The color that the cell will be changed to, either green or red
function setCell(cellID, originalPiecePosition, cellColor){
    let cell = document.getElementById(cellID);
    let originalCellColor = "";
    cell.setAttribute('onclick', `movePiece('${cellID}', '${originalPiecePosition}')`);
    if(cell.classList.contains("bg-dark")){
        originalCellColor="bg-dark";
        cell.classList.remove("bg-dark");
    }
    else{
        originalCellColor="bg-light";
        cell.classList.remove("bg-light");
    }
    cell.classList.add(cellColor);
    activeCells.push([cellID, originalCellColor]);
    activePiece = originalPiecePosition;
}

//Move the piece to the deisgnated cell so long as it doesn't put player into check
//@param newCellID The designated cell id that the piece will be moved to
//@param originalPiecePosition The cell id that contains the selected piece
function movePiece(newCellID, originalPiecePosition){
    let originalCell = document.getElementById(originalPiecePosition);
    let originalPiece = originalCell.children[0].cloneNode(true);
    let newCell = document.getElementById(newCellID);
    let newPiece;
    try{newPiece = newCell.children[0].cloneNode(true);}catch{console.log("No piece there");}
    originalCell.classList.remove("whiteOccupied", "blackOccupied"); //Reset cell where piece moved from
    kingInCheck = false;
    
    let newCellOldOccupied = "";
    if(newCell.classList.contains("whiteOccupied")){newCellOldOccupied = "whiteOccupied";}
    else if(newCell.classList.contains("whiteOccupied")){newCellOldOccupied = "blackOccupied";}
    newCell.classList.remove("whiteOccupied", "blackOccupied");     //Reset cell where piece is moving to
    newCell.classList.add(`${currentColor}Occupied`);
    originalCell.innerHTML = "";
    newCell.innerHTML = "";
    newCell.appendChild(originalPiece);
    
    kingCheckFunction(enemyColor); //Identify if player just put themselves into check with move
    if(selfCheck == true){
        selfCheck = false;
        newCell.classList.remove("whiteOccupied", "blackOccupied")
        if(newCellOldOccupied !== ""){newCell.classList.add(newCellOldOccupied);}
        originalCell.classList.add(`${currentColor}Occupied`);
        newCell.innerHTML = "";
        try{newCell.appendChild(newPiece);}catch{console.log("No piece to add");}
        originalCell.appendChild(originalPiece);
        return
    }
    
    setPieceFunctionality(originalPiece);
    kingCheckFunction(currentColor); //Identify if player just put enemy into check with previous move
    currentColor = enemyColor;
    enemyColor = originalPiece.classList[2];
    unsetCells();
}

//Change cell colors back to original black and white colors
function unsetCells(){
    for (cell of activeCells) {
        currentCell = document.getElementById(cell[0]);
        currentCell.setAttribute('onclick', '');
        currentCell.classList.remove("bg-success");
        currentCell.classList.remove("bg-danger");
        currentCell.classList.add(cell[1]);
    }
    activeCells = [];
}

//Goes through all pieces of specified color to see if they have put opposing king in check
//@param pieceColor The color of the pieces that will be analyzed to see if they are putting enemy king in check
function kingCheckFunction(pieceColor){
    let pieces = document.getElementsByClassName("piece" + " " + pieceColor);
    for (let piece of pieces){
        showMoves(piece.classList[0], piece.parentElement.id, pieceColor, true);
    }
}