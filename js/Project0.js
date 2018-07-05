window.onload = function(){
    // adds event listeners to all of the buttons
    document.getElementById('startButton').addEventListener('click',startGame);
    document.getElementById('fold').addEventListener('click', fold);
    document.getElementById('check').addEventListener('click', check);
    document.getElementById('raise').addEventListener('click', raise);
    document.getElementById('call').addEventListener('click', call);
    document.getElementById('callfold').addEventListener('click', fold);
    document.getElementById('callraise').addEventListener('click', raise);
    
    
}
let flop = [];
let players = [];
let playerHands =[];
let rowbreak = document.createElement('br');
let FirstCounter = 0;
let roundCounter = 1;
let roundTotalMax = 0;
let foldCount = 0;
let numberOfPlayers = 0;
let playerTurn = 1;
let imgCounter = 5;
let player1fold = false;
let player2fold = false;
let player3fold = false;
let player4fold = false;
let numberofFolds = 0;
let raiseAmount = 0;
let playerMoney = [0, 100, 100, 100, 100]
let pot = 0;
let raisestate = false;
let raiseTurnsElapsed = 0;
let totalRaise = 0;


function startGame(){
    //checks if this is the first time the functions been run
    if(FirstCounter == 0){
        //gets player numbers from form on webpage
        numberOfPlayers = document.getElementById('numPlayers').value;
        //modifies the value so that it can only be between 2 and 4
        if(numberOfPlayers > 4){
            numberOfPlayers = 4;
        }
        if(numberOfPlayers < 2){
            numberOfPlayers = 2;
        }
        //sets max amount of rounds based on player numbers
        roundTotalMax = numberOfPlayers * 4;
        // gets rid of the jumbotron
        removeElement("jumbotron");
        //creates headers for house cards table and appends it to the houseCards table
        let thead = document.createElement('thead');
        thead.classList.add('thead-dark');
        let headrow = document.createElement('tr');
        let th1 = document.createElement('th');
        let th2 = document.createElement('th');
        let th3 = document.createElement('th');
        th1.textContent = "FLOP";
        th2.textContent = "TURN";
        th3.textContent = "RIVER";
        headrow.appendChild(th1);
        headrow.appendChild(th2);
        headrow.appendChild(th3);
        thead.appendChild(headrow);
        document.getElementById('houseCards').appendChild(thead);
        //creates the player cards table at the bottom of the screen
        let playerRowHead = document.createElement('thead');
        playerRowHead.classList.add('thead-dark')
        
        let playerRow = document.createElement('tr');
        for(let i = 0;i < numberOfPlayers; i++){
            players[i] = document.createElement('th');
        }
        for(let j = 0; j < players.length; j++){
            // sets the initial money value for each player
            players[j].textContent = `Player ${j+1}: 100`;
            playerRow.appendChild(players[j]);
            
        }
        players[numberOfPlayers] = document.createElement('th');
        //sets the pot display
        players[numberOfPlayers].textContent = `Current pot: 00`;
        playerRow.appendChild(players[numberOfPlayers]);
        playerRowHead.appendChild(playerRow);
        document.getElementById('playerCards').appendChild(playerRowHead);

    }
    document.getElementById('raiseAmount').style.display = 'inline';
    //hides the call buttons while displaying the normal 3 buttons
    hideCallButtons();
    displayNormalButtons();


    pot = 0;
    //creates the hands based on player number
    dealCards(numberOfPlayers);
    //if it is not the first turn it deletes the previous hand
    if(FirstCounter > 0){
        removeElement("floprow");
        removeElement("playerrow");
    }
    //creates the flop and player hands
    createFlop();
    createPlayerHands(numberOfPlayers);
    //sets mouse over/out listeners for the player cards
    mouseOver();



    imgCounter = 5;
    //makes sure the flop/turn/river are hidden until the correct round
    document.getElementById('turn').style.visibility = 'hidden';
    document.getElementById('river').style.visibility = 'hidden';
    document.getElementById('flop').style.visibility = 'hidden';
    FirstCounter++;

}



//creates the array of suits
let suits = ['spade', 'heart', 'diamond', 'club'];
//creates the array of values
let values = ['1','2','3','4','5','6','7','8','9','10','11','12','13'];
let deck = [];


//creates the PlayingCard object
let PlayingCard = (function() {
    let suitSymbol = Symbol('suit');
    let valueSymbol = Symbol('value');
    let pictureSymbol = Symbol('use')

    function PlayingCard(suit = 'Spades', value = 'two', picture = 'example.jpg'){
        this[suitSymbol] = suit;
        this[valueSymbol] = value;
        this[pictureSymbol] = picture;
    }

    PlayingCard.prototype.getSuit = function(){
        return this[suitSymbol];
    }

    PlayingCard.prototype.setSuit = function(suit){
        this[suitSymbol] = suitname;
    }

    PlayingCard.prototype.getValue = function(){
        return this[valueSymbol];
    }

    PlayingCard.prototype.setValue = function(value){
        this[valueSymbol] = value;
    }
    PlayingCard.prototype.getPicture = function(){
        return this[pictureSymbol];
    }
    PlayingCard.prototype.setPicture = function(picture){
        this[pictureSymbol] = picture;
    }

    return PlayingCard;
})();
//creates the deck
for(let i = 0; i < suits.length; i++){
    for(let x = 0; x < values.length; x++){
        let n =  new PlayingCard(suits[i], values[x], `cards_jpeg_zip/JPEG/${suits[i]}${x + 1}.jpg`)
        deck.push(n);
    }
}



//function to remove elements as needed
function removeElement(element1){
    let element = document.getElementById(element1);
    element.parentNode.removeChild(element);
}
//function to display the normal buttons
function displayNormalButtons(){
    
    document.getElementById('check').style.display = 'inline';
    document.getElementById('raise').style.display = 'inline';
    document.getElementById('fold').style.display = 'inline';
}
//displays the raise buttons (swaps check for call)
function displayRaiseButtons(){
    document.getElementById('call').style.display = 'inline';
    document.getElementById('callraise').style.display = 'inline';
    document.getElementById('callfold').style.display = 'inline';
}
//hides normal buttons
function hideNormalButtons(){
    document.getElementById('check').style.display = 'none';
    document.getElementById('raise').style.display = 'none';
    document.getElementById('fold').style.display = 'none';
}
//hides the call buttons
function hideCallButtons(){
    document.getElementById('call').style.display = 'none';
    document.getElementById('callraise').style.display = 'none';
    document.getElementById('callfold').style.display = 'none';
}

//sets the buttons back to normal after a round of calling and updates house cards as necessary
function callStateFinished(){
    raisestate = false;
    displayNormalButtons();
    hideCallButtons();
    roundCounter++;
    if(player1fold == false){
        playerTurn = 1;
        checkButtonModifier(1);
    }
    else if(player2fold == false){
        playerTurn = 2;
        checkButtonModifier(2);
    }
    else if(numberOfPlayers == 3 && player3fold == false){
        playerTurn = 3;
        checkButtonModifier(3);
    }
    else if(numberOfPlayers == 4 && player4fold == false){
        playerTurn = 4;
        checkButtonModifier(4);
    }

    if(roundCounter == '2'){
        document.getElementById('flop').style.visibility = 'visible';
        
    }
    if(roundCounter == '3'){
        document.getElementById('turn').style.visibility = 'visible';
    }
    if(roundCounter =='4'){ 
        document.getElementById('river').style.visibility = 'visible';
    }
    if(roundCounter =='5')
    {
        let winnerArray = checkHands();
        if((winnerArray[3].key == 'Player 1') && player1fold == false){
            playerMoney[1] = playerMoney[1] + pot;
            players[0].textContent = `Player 1: ${playerMoney[1]}`;
            pot = 0;
            players[numberOfPlayers].textContent = `Current pot: ${pot}`;
        }
        if((winnerArray[3].key == 'Player 2') && player2fold == false){
            playerMoney[2] = playerMoney[2] + pot;
            players[1].textContent = `Player 2: ${playerMoney[2]}`;
            pot = 0;
            players[numberOfPlayers].textContent = `Current pot: ${pot}`;
        }
        if((winnerArray[3].key == 'Player 3') && player3fold == false){
            playerMoney[3] = playerMoney[3] + pot;
            players[2].textContent = `Player 1: ${playerMoney[3]}`;
            pot = 0;
            players[numberOfPlayers].textContent = `Current pot: ${pot}`;
        }
        if((winnerArray[3].key == 'Player 4') && player4fold == false){
            playerMoney[4] = playerMoney[4] + pot;
            players[3].textContent = `Player 1: ${playerMoney[4]}`;
            pot = 0;
            players[numberOfPlayers].textContent = `Current pot: ${pot}`;
        }
        playerTurn = 1;
        roundCounter = 1;
        player1fold = false;
        player2fold = false;
        player3fold = false;
        player4fold = false;
        numberofFolds = 0;
        checkButtonModifier(1);
        startGame();
    }
}
function call(){
    //subtracts the call amount from the players money and adds it to the pot
    // and then updates the players display
    // if the call would put the players money below 0 it adjusts it to prevent that
    if(playerMoney[playerTurn] - Number(raiseAmount) < 0){
        pot = pot + Number(playerMoney[playerTurn])
        playerMoney[playerTurn] = 0;
        players[numberOfPlayers].textContent = `Current pot: ${pot}`;
        
    }
    else{
        playerMoney[playerTurn] = playerMoney[playerTurn] - Number(raiseAmount);
        pot = pot + Number(raiseAmount);
        players[numberOfPlayers].textContent = `Current pot: ${pot}`;

    }

 
    players[(playerTurn - 1)].textContent = `Player ${playerTurn}: ${playerMoney[playerTurn]}`
    raiseTurnsElapsed++;
    //checks if everyones called or folded and then either calls callStateFinished
    //or calls modifyTurnDuringRaise
    if(((numberOfPlayers) - (raiseTurnsElapsed + numberofFolds)) == '1'){
        callStateFinished();
    }
    else{
        modifyTurnDuringRaise(playerTurn);
        
    }
}
function raise(){

    raisestate = true;
    raiseTurnsElapsed = 0;
    //gets the amount of the raise from the form
    raiseAmount = document.getElementById('raiseAmount').value;
    

    if(playerMoney[playerTurn] - Number(raiseAmount) < 0){
        pot = pot + Number(playerMoney[playerTurn])
        totalRaise = totalRaise + Number(playerMoney[playerTurn]);
        playerMoney[playerTurn] = 0;
        players[numberOfPlayers].textContent = `Current pot: ${pot}`;
        
    }
    else{
        playerMoney[playerTurn] = playerMoney[playerTurn] - Number(raiseAmount);
        pot = pot + Number(raiseAmount);
        totalRaise = totalRaise + Number(raiseAmount);
        players[numberOfPlayers].textContent = `Current pot: ${pot}`;
    }
    players[(playerTurn - 1)].textContent = `Player ${playerTurn}: ${playerMoney[playerTurn]}`;


    document.getElementById('raiseAmount').value = "";
    //hides all the normal buttons and adds the raise buttons
    hideNormalButtons();
    displayRaiseButtons();
    modifyTurnDuringRaise(playerTurn);
   


}

//updates whose turn it appears to be based on input 
function modifyTurnDuringRaise(plturn){    
    switch (plturn){
    case 1:
        if(player2fold ==false){
            playerTurn = 2;
            checkButtonModifierRaise(2);
        }
        else if(player3fold == false){
            playerTurn =3;
            checkButtonModifierRaise(3);
        }
        else if(player4fold == false){
            playerTurn =4;
            checkButtonModifierRaise(4);
        }
        else {
            playerTurn = 1;
            roundCounter = 1;
            checkButtonModifierRaise(1);
            startGame();
        }
        break;
    case 2:
        if(numberOfPlayers == '2' || (player3fold == true && player4fold == true)){
            playerTurn = 1;
            checkButtonModifierRaise(1);
        }
        else if(player3fold == false){
            playerTurn = 3;
            checkButtonModifierRaise(3);
        }
        else if(player4fold == false)
        {
            playerTurn = 4;
            checkButtonModifierRaise(4);
        }
        break;
    case 3:
        if(numberOfPlayers == '3' && player1fold == false){
            playerTurn = 1;

            checkButtonModifierRaise(1);

        }
        else if (numberOfPlayers == '3' && player1fold == true){
            playerTurn = 2;

            checkButtonModifierRaise(2);

        }
        else if(numberOfPlayers == '4' && player4fold == false){
            playerTurn = 4;
            checkButtonModifierRaise(4);
        }
        else if(numberOfPlayers == '4' && (player4fold == true && player1fold == true)){
            playerTurn = 2;
            checkButtonModifierRaise(2);
        }
        else if(numberOfPlayers == '4' && (player4fold == true && player1fold == false)){
            playerTurn = 1;
            checkButtonModifierRaise(1);
        }
        break;
    case 4:
        if(player1fold == false){
            playerTurn = 1;

            checkButtonModifierRaise(1);
        }
        else if(player1fold == true && player2fold == true){
            playerTurn = 3;

            checkButtonModifierRaise(3);
        }
        else if(player1fold == true && player2fold == false){
            playerTurn = 2;

            checkButtonModifierRaise(2);
        }
        break;
}

}
//updates the words on the buttons when called
function checkButtonModifierRaise(cbmr){
    document.getElementById('call').textContent = `Player ${cbmr} Call`;
    document.getElementById('callfold').textContent = `Player ${cbmr} Fold`;
    document.getElementById('callraise').textContent = `Player ${cbmr} Raise`;
}
function checkButtonModifier(cbm){
    document.getElementById('check').textContent = `Player ${cbm} Check`;
    document.getElementById('fold').textContent = `Player ${cbm} Fold`;
    document.getElementById('raise').textContent = `Player ${cbm} Raise`;
}
function check(){
    let switchCounter = playerTurn;
    switch (switchCounter){
        case 1:
            if(player2fold ==false){
                playerTurn = 2;
                checkButtonModifier(2);
            }
            else if(player3fold == false){
                playerTurn =3;
                checkButtonModifier(3);
            }
            else if(player4fold == false){
                playerTurn =4;
                checkButtonModifier(4);
            }
            else {
                playerTurn = 1;
                roundCounter = 1;
                checkButtonModifier(1);
                startGame();
            }
            break;
        case 2:
            if(numberOfPlayers == '2' || (numberOfPlayers == '4' && player3fold == true && player4fold == true) || numberOfPlayers =='3' && player3fold == true){
                playerTurn = 1;
                roundCounter++;
                checkButtonModifier(1);
            }
            else if(player3fold == false && numberOfPlayers > 2){
                playerTurn = 3;
                checkButtonModifier(3);
            }
            else if(player4fold == false && numberOfPlayers == '4')
            {
                playerTurn = 4;
                checkButtonModifier(4);
            }
            
            break;
        case 3:
            if(numberOfPlayers == '3' && player1fold == false){
                playerTurn = 1;
                roundCounter++;
                checkButtonModifier(1);

            }
            else if (numberOfPlayers == '3' && player1fold == true){
                playerTurn = 2;
                roundCounter++;
                checkButtonModifier(2);

            }
            else if(numberOfPlayers == '4' && player4fold == false){
                playerTurn = 4;
                checkButtonModifier(4);
            }
            else if(numberOfPlayers == '4' && (player4fold == true && player1fold == true)){
                playerTurn = 2;
                roundCounter++;
                checkButtonModifier(2);
            }
            else if(numberOfPlayers == '4' && (player4fold == true && player1fold == false)){
                playerTurn = 1;
                roundCounter++;
                checkButtonModifier(1);
            }
            break;
        case 4:
            if(player1fold == false){
                playerTurn = 1;
                roundCounter++;
                checkButtonModifier(1);
            }
            else if(player1fold == true && player2fold == true){
                playerTurn = 3;
                roundCounter++;
                checkButtonModifier(3);
            }
            else if(player1fold == true && player2fold == false){
                playerTurn = 2;
                roundCounter++;
                checkButtonModifier(2);
            }
            
            break;
    }

    if(roundCounter == '2'){
        document.getElementById('flop').style.visibility = 'visible';
        
    }
    if(roundCounter == '3'){
        document.getElementById('turn').style.visibility = 'visible';
    }
    if(roundCounter =='4'){ 
        document.getElementById('river').style.visibility = 'visible';
    }
    if(roundCounter =='5')
    {
        let winnerArray = checkHands();
        if((winnerArray[3].key == 'Player 1') && player1fold == false){
            playerMoney[1] = playerMoney[1] + pot;
            players[0].textContent = `Player 1: ${playerMoney[1]}`;
            pot = 0;
            players[numberOfPlayers].textContent = `Current pot: ${pot}`;
        }
        if((winnerArray[3].key == 'Player 2') && player2fold == false){
            playerMoney[2] = playerMoney[2] + pot;
            players[1].textContent = `Player 2: ${playerMoney[2]}`;
            pot = 0;
            players[numberOfPlayers].textContent = `Current pot: ${pot}`;
        }
        if((winnerArray[3].key == 'Player 3') && player3fold == false){
            playerMoney[3] = playerMoney[3] + pot;
            players[2].textContent = `Player 1: ${playerMoney[3]}`;
            pot = 0;
            players[numberOfPlayers].textContent = `Current pot: ${pot}`;
        }
        if((winnerArray[3].key == 'Player 4') && player4fold == false){
            playerMoney[4] = playerMoney[4] + pot;
            players[3].textContent = `Player 1: ${playerMoney[4]}`;
            pot = 0;
            players[numberOfPlayers].textContent = `Current pot: ${pot}`;
        }
        playerTurn = 1;
        roundCounter = 1;
        player1fold = false;
        player2fold = false;
        player3fold = false;
        player4fold = false;
        numberofFolds = 0;
        checkButtonModifier(1);

        startGame();
    }
}
function fold(){
    //if someone folds during the round where someone raised this code is run
    if(raisestate == true){
        switch(playerTurn){
            case 1:
            player1fold = true;
            numberofFolds++;
            if(((numberOfPlayers) - (raiseTurnsElapsed + numberofFolds)) == '1'){
                callStateFinished();
            }
            else{  
                modifyTurnDuringRaise(playerTurn);
            }
            break;
            case 2:
            player2fold = true;
            numberofFolds++;
            if(((numberOfPlayers) - (raiseTurnsElapsed + numberofFolds)) == '1'){
                callStateFinished();
            }
            else{  
                modifyTurnDuringRaise(playerTurn);
            }
            break;
            case 3:
            player3fold = true;
            numberofFolds++;
            if(((numberOfPlayers) - (raiseTurnsElapsed + numberofFolds)) == '1'){
                callStateFinished();
            }
            else{  
                modifyTurnDuringRaise(playerTurn);
            }
            break;
            case 4: 
            player4fold = true;
            numberofFolds++;
            if(((numberOfPlayers) - (raiseTurnsElapsed + numberofFolds)) == '1'){
                callStateFinished();
            }
            else{  
                modifyTurnDuringRaise(playerTurn);
            }
            break;
        }

    }
    else {
        
        switch(playerTurn){
            case 1:
            player1fold = true;
            numberofFolds++;
            check();
            break;
            case 2:
            player2fold = true;
            numberofFolds++;
            check();
            break;
            case 3:
            player3fold = true;
            numberofFolds++;
            check();
            break;
            case 4: 
            player4fold = true;
            numberofFolds++;
            check();
            break;
        }
    }
    //if all but one person have folded then the round ends and the
    //only remaining person gets the pot
    if (numberofFolds == (numberOfPlayers-1)){
        playerTurn = 1;
        roundCounter = 1;
        if(player1fold == false){
            playerMoney[1] = playerMoney[1] + pot;
            players[0].textContent = `Player 1: ${playerMoney[1]}`;
            pot = 0;
            players[numberOfPlayers].textContent = `Current pot: ${pot}`;
        }
        if(player2fold == false){
            playerMoney[2] = playerMoney[2] + pot;
            players[1].textContent = `Player 2: ${playerMoney[2]}`;
            pot = 0;
            players[numberOfPlayers].textContent = `Current pot: ${pot}`;
        }
        if(player3fold == false && numberOfPlayers >= 3){
            playerMoney[3] = playerMoney[3] + pot;
            players[2].textContent = `Player 3: ${playerMoney[3]}`;
            pot = 0;
            players[numberOfPlayers].textContent = `Current pot: ${pot}`;
        }
        if(player4fold == false && numberOfPlayers >= 4){
            playerMoney[4] = playerMoney[4] + pot;
            players[3].textContent = `Player 4: ${playerMoney[4]}`;
            pot = 0;
            players[numberOfPlayers].textContent = `Current pot: ${pot}`;
        }
        player1fold = false;
        player2fold = false;
        player3fold = false;
        player4fold = false;
        numberofFolds = 0;
        raisestate = false;
        checkButtonModifier(1);
        startGame();

    }
}


function dealCards(n){
    flop = [];
    while(flop.length < 5 + (2*n)){
        var rand = Math.floor((Math.random() * 52));
        flop.push(rand)
        flop =[...new Set(flop)];
        
    }
}

function createPlayerHands(n){
    let body = document.createElement('tbody');
    let row = document.createElement('tr');
    var img = document.createElement('img');
    
    for(let i = 0; i < n; i++){
        playerHands[i] = document.createElement('td');
    }
    for(let k = 0; k < playerHands.length; k++){
        var img = document.createElement('img');
        img.src = 'cards_jpeg_zip/JPEG/Red_back.jpg';
        playerHands[k].appendChild(img);
        img.setAttribute("id", `player${k + 1}card1`);
        
        var img = document.createElement('img');
        img.src = 'cards_jpeg_zip/JPEG/Red_back.jpg';
        img.setAttribute("id", `player${k + 1}card2`)
        playerHands[k].appendChild(img);
        row.appendChild(playerHands[k]);
        
        
    }

    row.setAttribute("id", "playerrow");
    body.appendChild(row);
    document.getElementById('playerCards').appendChild(body);




}
function createFlop(){
    let body = document.createElement('tbody');
    let row = document.createElement('tr');
    let idTd2 = document.createElement('td');
    let idTd3 = document.createElement('td');
    let idTd4 = document.createElement('td');


    var img = document.createElement('img');
    img.src = deck[flop[0]].getPicture();
    var img2 = document.createElement('img');
    img2.src = deck[flop[1]].getPicture();
    var img3 = document.createElement('img');
    img3.src = deck[flop[2]].getPicture();
    
    var img4 = document.createElement('img');
    img4.src = deck[flop[3]].getPicture();
    img4.setAttribute("id", "turn")
    var img5 = document.createElement('img');
    img5.src = deck[flop[4]].getPicture();
    img5.setAttribute("id", "river")
 

    
    
    idTd2.appendChild(img);
    idTd2.appendChild(img2);
    idTd2.appendChild(img3);
    idTd3.appendChild(img4);
    idTd4.appendChild(img5)
    idTd2.setAttribute("id", "flop");
   


    row.appendChild(idTd2);
    row.appendChild(idTd3);
    row.appendChild(idTd4);
    row.setAttribute("id", "floprow");

    body.appendChild(row);
    document.getElementById('houseCards').appendChild(body);
}


function mouseOver(){
    document.getElementById(`player1card1`).addEventListener('mouseover', () => document.getElementById(`player1card1`).src = deck[flop[imgCounter]].getPicture());
    document.getElementById(`player1card1`).addEventListener('mouseout', () => document.getElementById(`player1card1`).src = 'cards_jpeg_zip/JPEG/Red_back.jpg');
 
    document.getElementById(`player1card2`).addEventListener('mouseover', () => document.getElementById(`player1card2`).src = deck[flop[imgCounter + 1]].getPicture());
    document.getElementById(`player1card2`).addEventListener('mouseout', () => document.getElementById(`player1card2`).src = 'cards_jpeg_zip/JPEG/Red_back.jpg');

    document.getElementById(`player2card1`).addEventListener('mouseover', () => document.getElementById(`player2card1`).src = deck[flop[imgCounter + 2]].getPicture());
    document.getElementById(`player2card1`).addEventListener('mouseout', () => document.getElementById(`player2card1`).src = 'cards_jpeg_zip/JPEG/Red_back.jpg');
 
    document.getElementById(`player2card2`).addEventListener('mouseover', () => document.getElementById(`player2card2`).src = deck[flop[imgCounter + 3]].getPicture());
    document.getElementById(`player2card2`).addEventListener('mouseout', () => document.getElementById(`player2card2`).src = 'cards_jpeg_zip/JPEG/Red_back.jpg');
    if(numberOfPlayers > 2){
        document.getElementById(`player3card1`).addEventListener('mouseover', () => document.getElementById(`player3card1`).src = deck[flop[imgCounter + 4]].getPicture());
        document.getElementById(`player3card1`).addEventListener('mouseout', () => document.getElementById(`player3card1`).src = 'cards_jpeg_zip/JPEG/Red_back.jpg');
     
        document.getElementById(`player3card2`).addEventListener('mouseover', () => document.getElementById(`player3card2`).src = deck[flop[imgCounter + 5]].getPicture());
        document.getElementById(`player3card2`).addEventListener('mouseout', () => document.getElementById(`player3card2`).src = 'cards_jpeg_zip/JPEG/Red_back.jpg');
    
    }
    if(numberOfPlayers > 3){
        document.getElementById(`player4card1`).addEventListener('mouseover', () => document.getElementById(`player4card1`).src = deck[flop[imgCounter + 6]].getPicture());
        document.getElementById(`player4card1`).addEventListener('mouseout', () => document.getElementById(`player4card1`).src = 'cards_jpeg_zip/JPEG/Red_back.jpg');
       
        document.getElementById(`player4card2`).addEventListener('mouseover', () => document.getElementById(`player4card2`).src = deck[flop[imgCounter + 7]].getPicture());
        document.getElementById(`player4card2`).addEventListener('mouseout', () => document.getElementById(`player4card2`).src = 'cards_jpeg_zip/JPEG/Red_back.jpg');
    }


}


function compareNumbers(a, b) {
    return a - b;
  }
function checkHands(){
    //pair, two pair, 3 of a kind, straight, flush, full house, four of a kind, Straight Flush, Royal Flush
    let player1HandRank = [false, false, false, false, false, false, false, false, false];
    let player1Pair = [false, false, false, false, false, false, false, false,false, false, false, false, false];
    let player1ThreeOfAKind = [false, false, false, false, false, false, false, false,false, false, false, false, false];
    let player1FourOfAKind = [false, false, false, false, false, false, false, false,false, false, false, false, false];
    let currentPlayer1StraightHighCard = 0;
    let currentPlayer1HighCard = 0;
    let currentplayer1FullHouseHighCard = 0;
    let player1FlushCounter = 0;
    let player1PairCount = 0;
    let player1Hand = [];
    let player1Suits = [];
    let player1Values = [];

    let player2HandRank = [false, false, false, false, false, false, false, false, false];
    let player2Pair = [false, false, false, false, false, false, false, false,false, false, false, false, false];
    let player2ThreeOfAKind = [false, false, false, false, false, false, false, false,false, false, false, false, false];
    let player2FourOfAKind = [false, false, false, false, false, false, false, false,false, false, false, false, false];
    let currentPlayer2StraightHighCard = 0;
    let currentPlayer2HighCard = 0;
    let currentplayer2FullHouseHighCard = 0;
    let player2FlushCounter = 0;
    let player2PairCount = 0;
    let player2Hand = [];
    let player2Suits = [];
    let player2Values = [];

    let player3HandRank = [false, false, false, false, false, false, false, false, false];
    let player3Pair = [false, false, false, false, false, false, false, false,false, false, false, false, false];
    let player3ThreeOfAKind = [false, false, false, false, false, false, false, false,false, false, false, false, false];
    let player3FourOfAKind = [false, false, false, false, false, false, false, false,false, false, false, false, false];
    let currentPlayer3StraightHighCard = 0;
    let currentPlayer3HighCard = 0;
    let currentplayer3FullHouseHighCard = 0;
    let player3FlushCounter = 0;
    let player3PairCount = 0;
    let player3Hand = [];
    let player3Suits = [];
    let player3Values = [];

    let player4HandRank = [false, false, false, false, false, false, false, false, false];
    let player4Pair = [false, false, false, false, false, false, false, false,false, false, false, false, false];
    let player4ThreeOfAKind = [false, false, false, false, false, false, false, false,false, false, false, false, false];
    let player4FourOfAKind = [false, false, false, false, false, false, false, false,false, false, false, false, false];
    let currentPlayer4StraightHighCard = 0;
    let currentPlayer4HighCard = 0;
    let currentplayer4FullHouseHighCard = 0;
    let player4FlushCounter = 0;
    let player4PairCount = 0;
    let player4Hand = [];
    let player4Suits = [];
    let player4Values = [];



    let flopForChecking = [deck[flop[0]], deck[flop[1]], deck[flop[2]], deck[flop[3]], deck[flop[4]]];
    player1Hand.push(...flopForChecking);
    player2Hand.push(...flopForChecking);
    player3Hand.push(...flopForChecking);
    player4Hand.push(...flopForChecking);
    player1Hand.push(deck[flop[5]]);
    player1Hand.push(deck[flop[6]]);
    player2Hand.push(deck[flop[7]]);
    player2Hand.push(deck[flop[8]]);
    if(numberOfPlayers > 2){
        player3Hand.push(deck[flop[9]]);
        player3Hand.push(deck[flop[10]]);
    }
    if(numberOfPlayers > 3){
        player4Hand.push(deck[flop[11]]);
        player4Hand.push(deck[flop[12]]);
    }
    for(let x = 0; x < player1Hand.length; x++){
        player1Suits.push(player1Hand[x].getSuit());
        player1Values.push(player1Hand[x].getValue());
    }
    player1Values.sort(compareNumbers);
    currentPlayer1HighCard = player1Values[6];
    let player1counter = 0;


    //check for straight, pair, two pair, three of a kind, full house, four of a kind
    for(let y = 0; y < player1Values.length; y++){
        if(player1Values[y] == (player1Values[(y + 1)] - 1)){
            player1counter++;
            if(player1counter >=4){
                currentPlayer1StraightHighCard = player1Values[y + 1];
                //sets straight marker to true in array
                player1HandRank[3] = true;
            }
        }
        else{
            if(player1Values[y] == (player1Values[(y + 1)])){
                //sets the pair marker to true 
                player1HandRank[0] = true;
                //sets a market in player1Pair to keep track of which numbers the player has pairs of
                player1Pair[(player1Values[y] - 1)] = true;
                if(player1Values[y] == (player1Values[(y + 2)])){
                    //sets the three of a kind marker true
                    player1HandRank[2] = true;
                    player1ThreeOfAKind[(player1Values[y] - 1)] = true;
                    if (player1Values[y] == (player1Values[(y + 3)])){
                        //sets four of a kind marker to true and sets the value in the other array
                        player1HandRank[6] = true;
                        player1FourOfAKind[(player1Values[y] - 1)] = true;
                    }
                }
            }
            else{
                player1counter = 0;
            }
          
        }
    }
    //gets high card of pairs and checks for two pair/full house
    //if there is a full house it sets the high card to that value
    for (let z = 0; z < player1Pair.length; z++){
        if(player1Pair[z] == true){
            player1PairCount++;
            currentPlayer1HighCard = z + 1;
        }
        if(player1PairCount > 1){
            player1HandRank[1] = true;
            if(player1HandRank[2] == true){
               player1HandRank[5] == true; 
               for(let q = 0; q < player1ThreeOfAKind.length; q++){
                   if(player1ThreeOfAKind[q]== true){
                       currentplayer1FullHouseHighCard = (q + 1);
                   }
               }
            }
        }

    }
    //checks for flush
    player1Suits.sort();
    for (let f = 0; f < player1Suits.length; f++){
        if(player1Suits[f] == player1Suits[(f+1)]){
            player1FlushCounter++;
            if(player1FlushCounter >= 4){
                player1HandRank[4] = true;
            }
        }
    }


//player2
    for(let x = 0; x < player2Hand.length; x++){
        player2Suits.push(player2Hand[x].getSuit());
        player2Values.push(player2Hand[x].getValue());
    }
    player2Values.sort(compareNumbers);
    currentPlayer2HighCard = player2Values[6];
    let player2counter = 0;
    //check for straight, pair, two pair, three of a kind, full house, four of a kind
    for(let y = 0; y < player2Values.length; y++){
        if(player2Values[y] == (player2Values[(y + 1)] - 1)){
            player2counter++;
            if(player2counter >=4){
                currentPlayer2StraightHighCard = player2Values[y + 1];
                //sets straight marker to true in array
                player2HandRank[3] = true;
            }
        }
        else{
            if(player2Values[y] == (player2Values[(y + 1)])){
                //sets the pair marker to true 
                player2HandRank[0] = true;
                //sets a market in player1Pair to keep track of which numbers the player has pairs of
                player2Pair[(player2Values[y] - 1)] = true;
                if(player2Values[y] == (player2Values[(y + 2)])){
                    //sets the three of a kind marker true
                    player2HandRank[2] = true;
                    player2ThreeOfAKind[(player2Values[y] - 1)] = true;
                    if (player2Values[y] == (player2Values[(y + 3)])){
                        //sets four of a kind marker to true and sets the value in the other array
                        player2HandRank[6] = true;
                        player2FourOfAKind[(player2Values[y] - 1)] = true;
                    }
                }
            }
            else{
                player2counter = 0;
            }
          
        }
    }
    //gets high card of pairs and checks for two pair/full house
    //if there is a full house it sets the high card to that value
    for (let z = 0; z < player2Pair.length; z++){
        if(player2Pair[z] == true){
            player2PairCount++;
            currentPlayer2HighCard = z + 1;
        }
        if(player2PairCount > 1){
            player2HandRank[1] = true;
            if(player2HandRank[2] == true){
               player2HandRank[5] == true; 
               for(let q = 0; q < player2ThreeOfAKind.length; q++){
                   if(player2ThreeOfAKind[q]== true){
                       currentplayer2FullHouseHighCard = (q + 1);
                   }
               }
            }
        }

    }
    //checks for flush
    player2Suits.sort();
    for (let f = 0; f < player2Suits.length; f++){
        if(player2Suits[f] == player2Suits[(f+1)]){
            player2FlushCounter++;
            if(player2FlushCounter >= 4){
                player2HandRank[4] = true;
            }
        }
    }

    //player 3
    if(numberOfPlayers > 2){
        for(let x = 0; x < player3Hand.length; x++){
            player3Suits.push(player3Hand[x].getSuit());
            player3Values.push(player3Hand[x].getValue());
        }
        player3Values.sort(compareNumbers);
        currentPlayer3HighCard = player3Values[6];
        let player3counter = 0;
        //check for straight, pair, two pair, three of a kind, full house, four of a kind
        for(let y = 0; y < player3Values.length; y++){
            if(player3Values[y] == (player3Values[(y + 1)] - 1)){
                player3counter++;
                if(player3counter >=4){
                    currentPlayer3StraightHighCard = player3Values[y + 1];
                    //sets straight marker to true in array
                    player3HandRank[3] = true;
                }
            }
            else{
                if(player3Values[y] == (player3Values[(y + 1)])){
                    //sets the pair marker to true 
                    player3HandRank[0] = true;
                    //sets a market in player1Pair to keep track of which numbers the player has pairs of
                    player3Pair[(player3Values[y] - 1)] = true;
                    if(player3Values[y] == (player3Values[(y + 2)])){
                        //sets the three of a kind marker true
                        player3HandRank[2] = true;
                        player3ThreeOfAKind[(player3Values[y] - 1)] = true;
                        if (player3Values[y] == (player3Values[(y + 3)])){
                            //sets four of a kind marker to true and sets the value in the other array
                            player3HandRank[6] = true;
                            player3FourOfAKind[(player3Values[y] - 1)] = true;
                        }
                    }
                }
                else{
                    player3counter = 0;
                }
          
            }
        }
        //gets high card of pairs and checks for two pair/full house
        //if there is a full house it sets the high card to that value
        for (let z = 0; z < player3Pair.length; z++){
            if(player3Pair[z] == true){
                player3PairCount++;
                currentPlayer3HighCard = z + 1;
            }
            if(player3PairCount > 1){
                player3HandRank[1] = true;
                if(player3HandRank[2] == true){
                player3HandRank[5] == true; 
                for(let q = 0; q < player3ThreeOfAKind.length; q++){
                    if(player3ThreeOfAKind[q]== true){
                       currentplayer3FullHouseHighCard = (q + 1);
                   }
               }
            }
        }

    }
    //checks for flush
    player3Suits.sort();
    for (let f = 0; f < player3Suits.length; f++){
        if(player3Suits[f] == player3Suits[(f+1)]){
            player3FlushCounter++;
            if(player3FlushCounter >= 4){
                player3HandRank[4] = true;
            }
        }
    }
    }

        //player 3
    if(numberOfPlayers > 2){
        for(let x = 0; x < player3Hand.length; x++){
            player3Suits.push(player3Hand[x].getSuit());
            player3Values.push(player3Hand[x].getValue());
        }
        player3Values.sort(compareNumbers);
        currentPlayer3HighCard = player3Values[6];
        let player3counter = 0;
        //check for straight, pair, two pair, three of a kind, full house, four of a kind
        for(let y = 0; y < player3Values.length; y++){
            if(player3Values[y] == (player3Values[(y + 1)] - 1)){
                player3counter++;
                if(player3counter >=4){
                    currentPlayer3StraightHighCard = player3Values[y + 1];
                    //sets straight marker to true in array
                    player3HandRank[3] = true;
                }
            }
            else{
                if(player3Values[y] == (player3Values[(y + 1)])){
                    //sets the pair marker to true 
                    player3HandRank[0] = true;
                    //sets a market in player1Pair to keep track of which numbers the player has pairs of
                    player3Pair[(player3Values[y] - 1)] = true;
                    if(player3Values[y] == (player3Values[(y + 2)])){
                        //sets the three of a kind marker true
                        player3HandRank[2] = true;
                        player3ThreeOfAKind[(player3Values[y] - 1)] = true;
                        if (player3Values[y] == (player3Values[(y + 3)])){
                            //sets four of a kind marker to true and sets the value in the other array
                            player3HandRank[6] = true;
                            player3FourOfAKind[(player3Values[y] - 1)] = true;
                        }
                    }
                }
                else{
                    player3counter = 0;
                }
          
            }
        }
        //gets high card of pairs and checks for two pair/full house
        //if there is a full house it sets the high card to that value
        for (let z = 0; z < player3Pair.length; z++){
            if(player3Pair[z] == true){
                player3PairCount++;
                currentPlayer3HighCard = z + 1;
            }
            if(player3PairCount > 1){
                player3HandRank[1] = true;
                if(player3HandRank[2] == true){
                player3HandRank[5] == true; 
                for(let q = 0; q < player3ThreeOfAKind.length; q++){
                    if(player3ThreeOfAKind[q]== true){
                       currentplayer3FullHouseHighCard = (q + 1);
                   }
               }
            }
        }

    }
    //checks for flush
    player3Suits.sort();
    for (let f = 0; f < player3Suits.length; f++){
        if(player3Suits[f] == player3Suits[(f+1)]){
            player3FlushCounter++;
            if(player3FlushCounter >= 4){
                player3HandRank[4] = true;
            }
        }
    }
    }

    //player 3
    if(numberOfPlayers > 3){
        for(let x = 0; x < player4Hand.length; x++){
            player4Suits.push(player4Hand[x].getSuit());
            player4Values.push(player4Hand[x].getValue());
        }
        player4Values.sort(compareNumbers);
        currentPlayer4HighCard = player4Values[6];
        let player4counter = 0;
        //check for straight, pair, two pair, three of a kind, full house, four of a kind
        for(let y = 0; y < player4Values.length; y++){
            if(player4Values[y] == (player4Values[(y + 1)] - 1)){
                player4counter++;
                if(player4counter >=4){
                    currentPlayer4StraightHighCard = player4Values[y + 1];
                    //sets straight marker to true in array
                    player4HandRank[3] = true;
                }
            }
            else{
                if(player4Values[y] == (player4Values[(y + 1)])){
                    //sets the pair marker to true 
                    player4HandRank[0] = true;
                    //sets a market in player1Pair to keep track of which numbers the player has pairs of
                    player4Pair[(player4Values[y] - 1)] = true;
                    if(player4Values[y] == (player4Values[(y + 2)])){
                        //sets the three of a kind marker true
                        player4HandRank[2] = true;
                        player4ThreeOfAKind[(player4Values[y] - 1)] = true;
                        if (player4Values[y] == (player4Values[(y + 3)])){
                            //sets four of a kind marker to true and sets the value in the other array
                            player4HandRank[6] = true;
                            player4FourOfAKind[(player4Values[y] - 1)] = true;
                        }
                    }
                }
                else{
                    player4counter = 0;
                }
          
            }
        }
        //gets high card of pairs and checks for two pair/full house
        //if there is a full house it sets the high card to that value
        for (let z = 0; z < player4Pair.length; z++){
            if(player4Pair[z] == true){
                player4PairCount++;
                currentPlayer4HighCard = z + 1;
            }
            if(player4PairCount > 1){
                player4HandRank[1] = true;
                if(player4HandRank[2] == true){
                player4HandRank[5] == true; 
                for(let q = 0; q < player4ThreeOfAKind.length; q++){
                    if(player4ThreeOfAKind[q]== true){
                       currentplayer4FullHouseHighCard = (q + 1);
                   }
               }
            }
        }

    }
    //checks for flush
    player4Suits.sort();
    for (let f = 0; f < player4Suits.length; f++){
        if(player4Suits[f] == player4Suits[(f+1)]){
            player4FlushCounter++;
            if(player4FlushCounter >= 4){
                player4HandRank[4] = true;
            }
        }
    }
    }
//decides who won
let winnerorder = [];
let player1Highest = 0;
let player2Highest = 0;
let player3Highest = 0;
let player4Highest = 0;

 for(let j = 0; j < player1HandRank.length; j++){
     if(player1HandRank[j] == true){
         player1Highest = j;
     }
     if(player2HandRank[j] == true){
        player2Highest = j;
    }
    if(player4HandRank[j] == true){
        player4Highest = j;
    }
    if(player4HandRank[j] == true){
        player4Highest = j;
    }

 }
 winnerorder = [{key: 'Player 1', value: player1Highest}, {key: 'Player 2', value: player2Highest}, {key: 'Player 3', value: player3Highest},{key: 'Player 4', value: player4Highest}];
 winnerorder.sort(function(p1, p2) {
    return p1.value - p2.value;
 });
 return winnerorder

}
