let player = true;
let placing = true;
let position = "h";
let player1index = 0;
let player2index = 0;
let Carrier = {
    name: "Carrier",
    size: 4,
    sank: false,
    hp: 5,
    location: []
};
let Battleship = {
    name: "Battleship",
    size: 3,
    hp: 4,
    sank: false ,
    location: []   
};
let Cruiser = {
    name: "Cruiser",
    size: 2,
    sank: false,
    hp: 3,
    location: []  
};
let Submarine = {
    name: "Submarine",
    size: 2,
    hp: 3,
    sank: false,
    location: []   
};
let Destroyer = {
    name: "Destroyer",
    size: 1,
    hp: 2,
    sank: false,
    location: []   
};
let player1 = {
    id: 1,
    fleet: [Carrier, Battleship, Cruiser, Submarine, Destroyer]
};
let player2 = {
    id: 2,
    fleet: [Carrier, Battleship, Cruiser, Submarine, Destroyer]
};
window.onload =  function(){
    document.getElementById('rotate').addEventListener('click', rotate);    
    
}

grid();
function grid(){  
     
    let topNumberRow = topRow();  
    document.getElementById('topBoard').appendChild(topNumberRow);
    let topBoard = board(1);
    document.getElementById('topBoard').appendChild(topBoard);
             
    let botNumberRow = topRow();
    document.getElementById('botBoard').appendChild(botNumberRow);
    let botBoard = board(2);
    document.getElementById('botBoard').appendChild(botBoard);
    
}
function topRow(){
    let topRow = document.createElement('tr'); 
    topRow.classList.add('table-bordered');   
    
    for(var i = 0; i < 11; i++){
        var col = document.createElement('th');
        if(i !== 0){
            col.textContent = i;
        }
        col.style.textAlign = "center";
        col.classList.add('bg-secondary');  
        
        topRow.appendChild(col);
    }
    return topRow;
}
function board(number){
    let body = document.createElement('tbody'); 
    body.classList.add('table-bordered');
    
    for(let i = 0; i < 10; i++){
        var row = document.createElement('tr');
        let letter = 65 + i;        
        for(let j = 0; j < 11; j++){
            var col = document.createElement('td');
            if(j === 0){
                col.textContent = String.fromCharCode(letter); 
                col.classList.add('bg-secondary');  
                
            }
            if(j !== 0){
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
function outMouseLocation(loc){
    if(player){
        stopdisplayship(loc, player1.fleet[player1index].size);
    }
    else{
        stopdisplayship(loc, player2.fleet[player2index].size);        
    }
}
function inMouseLocation(loc){
    if(player){
       displayship(loc, player1.fleet[player1index].size);
    }
    else{
        displayship(loc, player2.fleet[player2index].size)
    }
}
function place(loc){   
    if(player){
        if(loc.id > 199){
            return;
        }
        let k = placeShip(loc, player1.fleet[player1index]);
        if(k){
            player1index++;
        }
        if(player1index >= 5){
            player = false;
            let p = document.getElementById('p');
            p.textContent = "Player 2 place Ships"            
        }
     }
     else{
        if(loc.id < 200){
            return;
        }
        let k = placeShip(loc, player2.fleet[player2index]);
        if(k){
            player2index++;
        }
        if(player2index >= 5){
            player = "";
            removeAttributes();
        }
     }
}
function removeAttributes(){
    let p = document.getElementById('p');
    p.textContent = "Player 1 shoot";
    p = document.getElementById('rotate');
    p.style.display = "none";
    for(let i = 100; i < 300; i++){
        let col = document.getElementById(i);
        col.removeAttribute("onmouseenter");
        col.removeAttribute("onmouseleave");
        col.removeAttribute("onclick");
        col.setAttribute("onclick", 'fire(this)');
    }  
}
function fire(loc){
    console.log("hi");
}
function placeShip(loc, ship){
    let x = loc.id;
    let tableCol = document.getElementById('topBoard').rows[0].cells.length;
    
    if(x%100 > 100 - (ship.size*10) && position === 'v'){
        return false;
    }
    if(x%10 >= tableCol - ship.size -1 && position ==='h'){
        return false;
    }
    for(var i = 0; i <= ship.size; i++){    
        ship.location.push(parseInt(x));
        console.log(ship.location);
        let mouselocation = document.getElementById(x); 
        mouselocation.classList.add('ship');      
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
   return true;
}
function rotate(){
    if(position === 'v'){
        position = "h";
    }
    else{
        position = 'v';
    }
}
function isGameOver(){
    for(ship of player1.fleet){
        if(ship.sank === false){
            return false;
        }
    }
    for(ship of player2.fleet.ships){
        if(ship.sank === false){
            return false;
        }
    }
    return true;
}

function stopdisplayship(loc,ship){
    let x = loc.id;
    let tableCol = document.getElementById('topBoard').rows[0].cells.length;
    
    if(x%100 > 100 - (ship*10) && position === 'v'){
        return;
    }
    if(x%10 >= tableCol - ship -1 && position ==='h'){
        return;
    }
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
    if(x%100 > 100 - (ship*10) && position === 'v'){
        return;
    }    
    if(x%10 >= tableCol - ship -1 && position ==='h'){
        return;
    }
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
