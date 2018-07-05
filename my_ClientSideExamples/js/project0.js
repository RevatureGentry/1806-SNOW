//denotes which player it is true:player1 false:player2
let player = true;
//denotes if placing stage
let placing = true;
//denotes ship orientation
let position = "h";
//denotes which ship in players fleet they're on
let playerindex = 0;
//holds all the ship locations
let shiplocations = [];
//holds all shot locations
let shotlocations = [];
//creates player1 and player2
let player1 = new players(1);
let player2 = new players(2);
//added events and start of program once webpage loads
window.onload =  function(){
    document.getElementById('rotate').addEventListener('click', rotate); 
    document.getElementById('reset').addEventListener('click', reset);    
    grid();    
}
//reset() is a function that sets the webpage back to its initial state
function reset(){
    player = true;
    placing = true;
    position = "h";
    playerindex = 0;
    shiplocations = [];
    shotlocations = [];
    player2.fleet[0].hp = player1.fleet[0].hp = 5;
    player2.fleet[0].sank = player1.fleet[0].sank = false;
    player2.fleet[1].hp = player1.fleet[1].hp = 4;
    player2.fleet[1].sank = player1.fleet[1].sank = false;
    player2.fleet[2].hp = player1.fleet[2].hp = 3;
    player2.fleet[2].sank = player1.fleet[2].sank = false;
    player2.fleet[3].hp = player1.fleet[3].hp = 3;
    player2.fleet[3].sank = player1.fleet[3].sank = false;
    player2.fleet[4].hp = player1.fleet[4].hp = 2;
    player2.fleet[4].sank = player1.fleet[4].sank = false;
    var elem = document.getElementsByClassName('table-bordered');
    while(elem.length > 0){//if board is there
        elem[0].parentNode.removeChild(elem[0]);
    }
    let p = document.getElementById('p');
    p.textContent = "Player 1 place Ships";  
    p = document.getElementById('rotate');
    p.style.visibility = "visible";
    let lastmove = document.getElementById('lastmove');        
    lastmove.textContent = ""   
    grid();      
}
//player object
function players(id){
    this.id= id,
    this.fleet= [C1 = new ship("Carrier", 4, 5), B1 = new ship("Battleship", 3, 4), Cr1 = new ship("Cruiser", 2, 3),S1 = new ship("Submarine", 2, 3),D1 = new ship("Destroyer",1,2)]
}
//ship object
function ship(name, size, hp){
    this.name = name,
    this.size= size,
    this.sank= false,
    this.hp= hp,
    this.location= []
}
//grid is a function that builds the playing area
//called by windows.onload and reset()
function grid(){  
    //builds player1's board
    let topNumberRow = topRow();  
    document.getElementById('topBoard').appendChild(topNumberRow);
    let topBoard = board(1);
    document.getElementById('topBoard').appendChild(topBoard);
    //builds player2's board
    let botNumberRow = topRow();
    document.getElementById('botBoard').appendChild(botNumberRow);
    let botBoard = board(2);
    document.getElementById('botBoard').appendChild(botBoard);
    
}
//called by grid(), lables the columns of playing area
function topRow(){
    let topRow = document.createElement('tr'); 
    topRow.classList.add('table-bordered');   
    
    for(var i = 0; i < 11; i++){
        var col = document.createElement('th');
        if(i !== 0){
            col.textContent = i-1;
        }
        col.style.textAlign = "center";
        col.classList.add('bg-secondary');  
    
        topRow.appendChild(col);
    }
    return topRow;
}
//called by grid(), lables the rows and assigns placeable area
//with specific ids denoting their location and adds specific
//characteristics(classes and attributes)
//takes in a number which denotes which board is is being built
function board(number){
    let body = document.createElement('tbody'); 
    body.classList.add('table-bordered');
    
    for(let i = 0; i < 10; i++){
        var row = document.createElement('tr');
        let letter = 65 + i;        
        for(let j = 0; j < 11; j++){
            var col = document.createElement('td');
            if(j === 0){ //makes the left most column to be a letter from (A-J)
                col.textContent = String.fromCharCode(letter); 
                col.classList.add('bg-secondary');  
            }
            if(j !== 0){//makes the rest of the row is playarea
                col.classList.add("playableArea");
                col.setAttribute("onmouseenter", "inMouseLocation(this)");     
                col.setAttribute("onmouseleave", "outMouseLocation(this)"); 
                col.setAttribute("onclick", "place(this)");                 
                col.classList.toggle('td:hover');
            }
            col.id = number+""+(i)+""+(j-1);
            col.style.textAlign = "center";
            row.appendChild(col);
        }
        body.appendChild(row);
    }
    return body;
}
//in/outMouseLocation() takes in the mouse location noted as loc
//to control where the ship is being shown 
function outMouseLocation(loc){
    if(player){
        stopdisplayship(loc, player1.fleet[playerindex].size);
    }
    else{
        stopdisplayship(loc, player2.fleet[playerindex].size);        
    }
}
function inMouseLocation(loc){
    if(player){
       displayship(loc, player1.fleet[playerindex].size);
    }
    else{
        displayship(loc, player2.fleet[playerindex].size)
    }
}
//place() takes in mouse location checks if its in the appropriate area,
//keeps track of which ship you are on and swiches players once that player
//put down all its ships
//calls placeShip(loc, ship) and when its finished calls removeAttributes()
function place(loc){   
    if(player){//player1
        //checks that mouse is in Player1's area
        if(loc.id > 199){
            return;
        }
        let k = placeShip(loc, player1.fleet[playerindex]);
        //if return (k) is true it means it is a valid ship placement
        if(k){
            playerindex++;
        }
        //switches players turn and hides placed ships
        if(playerindex >= 5){
            for(let i = 0; i < shiplocations.length; i++){
                let hidden = document.getElementById(parseInt(shiplocations[i]));                        
                hidden.classList.remove('ship');              
            }
            player = false;
            playerindex = 0;
            let p = document.getElementById('p');
            p.textContent = "Player 2 place Ships"            
        }
     }
     else{//player2
        //checks that mouse is in Player2's area
        if(loc.id < 200){
            return;
        }
        let k = placeShip(loc, player2.fleet[playerindex]);
        //if return (k) is true it means it is a valid ship placement
        if(k){
            playerindex++;
        }
        //hides placed ships
        if(playerindex >= 5){
            for(let i = 0; i < shiplocations.length; i++){
                let hidden = document.getElementById(parseInt(shiplocations[i]));                        
                hidden.classList.remove('ship');               
            }
            player = "";
            removeAttributes();
            player = true;
        }
     }
}
//removeAttribues() clears all attributes/elements that are no longer needed 
//adds attribute for shooting
function removeAttributes(){
    let p = document.getElementById('p');
    p.textContent = "Player 1 shoot";
    p = document.getElementById('rotate');
    p.style.visibility = "hidden";
    for(let i = 100; i < 300; i++){
        let col = document.getElementById(i);
        col.removeAttribute("onmouseenter");
        col.removeAttribute("onmouseleave");
        col.removeAttribute("onclick");
        col.setAttribute("onclick", 'fire(this)');
    }  
}
//fire() takes in mouse location and checks if the shot location was already tagged,
//if not checks if shot is in a valid player shooting field.
//if valid shot, checks if its a hit or miss
//if hit calls hit(loc)
//switches players when finished 
function fire(loc){
    let p = document.getElementById('p');
    let lastmove = document.getElementById('lastmove');    
    let x = document.getElementById(loc.id);
    for(let i = 0; i < shotlocations.length; i++){//checks if shot location has been shot at already
        if(shotlocations[i] == loc.id){
            return;
        }
    }
    if(player){//player1
        //checks if mouse location is in player2's area
        if(loc.id < 200){
            return;
        }
        shotlocations.push(loc.id);                        
        for(let i = 0; i < shiplocations.length; i++){
            if(loc.id == shiplocations[i]){//checks if shot has hit a ship
                x.classList.add('hit');
                lastmove.textContent = "Last Move: Player 1 Hit"
                p.textContent = "Player 2 fire" 
                hit(loc);                           
                player = false;
                return;
            }
        }
        x.classList.add('miss');
        player = false;
        lastmove.textContent = "Last Move: Player 1 Miss"        
        p.textContent = "Player 2 fire"                            
        
    }
    else{//player2
        //checks if mouse location is in player1's area
        if(loc.id > 199){
            return;
        }
        shotlocations.push(loc.id);                        
        for(let i = 0; i < shiplocations.length; i++){
            if(loc.id == shiplocations[i]){//checks if shot has hit a ship
                x.classList.add('hit');
                lastmove.textContent = "Last Move: Player 2 Hit"                
                p.textContent = "Player 1 fire"      
                hit(loc);                         
                player = true;
                return;
            }
        }            
        x.classList.add('miss');
        player = true;
        lastmove.textContent = "Last Move: Player 2 Miss"        
        p.textContent = "Player 1 fire"                                    
    }
}
//placeShip() takes in mouse location and one of the ships in the players fleet
//checks if its a valid location for ship, if it is places ship in playing field
function placeShip(loc, ship){
    let x = loc.id;
    let shiploc = [];
    let tableCol = document.getElementById('topBoard').rows[0].cells.length;
    //checks if mouse location + ship size in either horizontal or vertical still fits in players area
    if(x%100 > 100 - (ship.size*10) && position === 'v'){
        return false;
    }
    if(x%10 >= tableCol - ship.size -1 && position ==='h'){
        return false;
    }
    //gets all 2d locations for entire ship size
    for(var i = 0; i <= ship.size; i++){    
        shiploc.push(parseInt(x));
        if(position === 'v'){       
           x = parseInt(x, 10) + 10;
        }
        else{
            x = parseInt(x, 10) + 1; 
            if(x < 10){
               x = '0' + x;
           }             
        } 
   }
   //checks if current ship is on an already placed ship
   for(let i = 0; i < shiplocations.length; i++){
       for(let j = 0; j < shiploc.length; j++){
            if(shiplocations[i] === shiploc[j]){
                let lastmove = document.getElementById('lastmove');    
                lastmove.textContent = 'conflict';                
                console.log('conflict');
                return false;
            }
        
       }
   }  
   for(let i = 0; i < shiploc.length; i++){
    let mouselocation = document.getElementById(shiploc[i]);     
        mouselocation.classList.add('ship');      
        mouselocation.classList.remove('hov');
        
   }
   shiplocations.push.apply(shiplocations, shiploc);
   ship.location = shiploc;
   return true;
}
//rotate() gets triggered by clicking 'rotate' button
//changes position of ship into horizontal or virtical
function rotate(){
    if(position === 'v'){
        position = "h";
    }
    else{
        position = 'v';
    }
}
//hit() takes in a mouse location. updates which ship was hit and if it was sank
//calls isGameOver()
function hit(loc){
    let lastmove = document.getElementById('lastmove');    
    if(!player){//player2
        for(ship of player1.fleet){
            for(let i = 0; i < ship.location.length; i++){
                if(ship.location[i] == loc.id){
                    ship.hp--;
                    if(ship.hp === 0){//checks if ship sank
                        ship.sank = true;
                        lastmove.textContent = `Player 2 sank Player 1's ${ship.name}`;
                    }
                }
            }
        }
    }
    else{//player1
        for(ship of player2.fleet){
            for(let i = 0; i < ship.location.length; i++){
                if(ship.location[i] == loc.id){//checks if hit
                    ship.hp--;
                    if(ship.hp === 0){//checks if ship sank
                        ship.sank = true;
                        lastmove.textContent = `Player 1 sank Player 2's ${ship.name}`;                    
                    }
                }
            }
        }
    }
    isGameOver();
}
//isGameOver() tells if game is finished by checking if all of a players ships are sank
function isGameOver(){
    if(!player){//player2
        //goes through opponents fleet to see if all ships have sank
        for(ship of player1.fleet){
            if(ship.sank === false){
                return false;
            }
        }
        var elem = document.getElementsByClassName('table-bordered');
        while(elem.length > 0){
            elem[0].parentNode.removeChild(elem[0]);
        }
        let p = document.getElementById('p');
        p.textContent = "PLAYER 2 WINS!!!";
        let lastmove = document.getElementById('lastmove');        
        lastmove.textContent = "";
    }
    else{//player1
        //goes through opponents fleet to see if all ships have sank
        for(ship of player2.fleet){
            if(ship.sank === false){
                return false;
            }
        }        
        var elem = document.getElementsByClassName('table-bordered');
        while(elem.length > 0){
            elem[0].parentNode.removeChild(elem[0]);
        }
        let p = document.getElementById('p');
        p.textContent = "PLAYER 1 WINS!!!";  
        let lastmove = document.getElementById('lastmove');        
        lastmove.textContent = ""         
    }
}
//(stop)displayship() takes in mouse location and ship from players fleet
//checks if location is a valid spot on the playing field
//controls if element has class to displayship
function stopdisplayship(loc,ship){
    let x = loc.id;
    let tableCol = document.getElementById('topBoard').rows[0].cells.length;
    //checks if mouse location + ship size in either horizontal or vertical still fits in players area
    if(x%100 > 100 - (ship*10) && position === 'v'){
        return;
    }
    if(x%10 >= tableCol - ship -1 && position ==='h'){
        return;
    }
    //removes the display on cells of table where ship was
    for(var i = 0; i <= ship; i++){    
         let mouselocation = document.getElementById(x); 
         mouselocation.classList.toggle("hov", false);      
         if(position === 'v'){       
            x = parseInt(x, 10) + 10;
         }
         else{
             x = parseInt(x, 10) + 1; 
             if(x < 10){
                x = '0' + x;
            }             
         } 
    }  
}
function displayship(loc, ship){
    let x = loc.id;
    let tableCol = document.getElementById('topBoard').rows[0].cells.length;
    //checks if mouse location + ship size in either horizontal or vertical still fits in players area
    if(x%100 > 100 - (ship*10) && position === 'v'){
        return;
    }    
    if(x%10 >= tableCol - ship -1 && position ==='h'){
        return;
    }
    //adds the display on cells of table where ship is
    for(var i = 0; i <= ship; i++){    
        let mouselocation = document.getElementById(x);  
        mouselocation.classList.toggle("hov", true); 
        if(position === 'v'){       
           x = parseInt(x, 10) + 10;
        }
        else{
            x = parseInt(x, 10) + 1;
            if(x < 10){
                x = '0' + x;
            }            
        } 
   }
   
}
