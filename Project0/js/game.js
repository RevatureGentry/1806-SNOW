//On change (triggered by click on difficulty)
window.onchange = function(event){
    //Runs game initialization
    game(b);

    //Clears time if difficulty reset
    clearInterval(timeVar);
    timeVar = setInterval(makeTime,1000);

    //Selects all img objects (Minesweeper game squares)
    var element = document.querySelectorAll('img');
    for(let e of element){
        //Provides each square with an onclick listener
        e.addEventListener('click', function a(event){
            event.preventDefault();
            
            //Shift key == right click, place flag
            if(event.shiftKey){
                flag(e);
            }
            else{
                //Otherwise, click on square
                click(e);
                
                //If clicked on bomb, game is over in loss state
                if(e.textContent=='b'){
                    gameOver(element);

                    //Clear time counter
                    clearInterval(timeVar);
                    document.getElementById('win').textContent = "You lost! Play again?";
                    clearDiff();
                }
                else{
                    //If win conditions met, game is over in win state
                    if(checkWin()){
                        gameOver(element);
                        clearInterval(timeVar);
                        document.getElementById('win').textContent = "You won! Play again?";
                        clearDiff();
                    }
                }
            }
            
        });
    }
}

//Clear selection on diff radio buttons
function clearDiff(){
    let diff = document.getElementsByName('difficulty');
    for(let d of diff){
        if(d.checked==true){
            d.checked=false;
        }
    }
}

//Checks for win condition by checking if all unclicked game squares are bombs 
function checkWin(){
    var element = document.querySelectorAll('img');
    for(let e of element){
        if(e.textContent==''){
            //Parses id of square into coordinates
            var c = e.id.indexOf(',');
            var x = parseInt(e.id.substr(0,c));
            var y = parseInt(e.id.substr(c+1,e.id.length-1));
            if(b.board[y][x]!='b'){
                return false;
            }
        }
    }
    return true;
}

function click(e){
    //If clicked on flag, increment bombs counter
    if(e.textContent=='f'){
        b.bombs++;
        var bomb = document.getElementById('bombs');
        bomb.textContent = (`Bombs: ${b.bombs}`);
    }
    
    var c = e.id.indexOf(',');
    var x = parseInt(e.id.substr(0,c));
    var y = parseInt(e.id.substr(c+1,e.id.length-1));

    //Make square equal to value at corresponding board coordinate
    e.textContent = b.board[y][x];
    
    //Apply style based on its value
    if(e.textContent==0){
        e.src = "././0.png"
        e.style.opacity = "0.5";

        //if value == 0, spread from clicked square
        spread(x,y,e);
    }
    else if(e.textContent==1){
        e.src = "././1.png";
        e.style.color = "Blue";
    }
    else if(e.textContent==2){
        e.src = "././2.png";
        e.style.color = "Green";
    }
    else if(e.textContent==3){
        e.src = "././3.png";
        e.style.color = "Red";
    }
    else if(e.textContent==4){
        e.src = "././4.png";
    }
    else if(e.textContent==5){
        e.src = "././5.png";
    }
    else if(e.textContent==6){
        e.src ="././6.png";
    }
    else if(e.textContent==7){
        e.src="././7.png";
    }
    else if(e.textContent==8){
        e.src="././8.png";
    }
}

function flag(e){
    //If square isn't a flag, make it a flag and decrement bomb counter
    if(e.textContent!='f'){
        e.src = "././flag.png"
        e.textContent = 'f';
        b.bombs--;
        var bomb = document.getElementById('bombs');
        bomb.textContent = (`Bombs: ${b.bombs}`);
    }
    //If flag move is applied on square with flag, make it a blank square and increment bomb counter
    else{
        e.textContent = '';
        e.src = "././blank.png"
        e.style.color = "Black";
        b.bombs++;
        var bomb = document.getElementById('bombs');
        bomb.textContent = (`Bombs: ${b.bombs}`);
    }
}

//Checks valid neighbors of 0 square
function spread(x,y,e){
    if(x>0){
        x--;
        //Searching for id that matches neighbor square to be checked
        var row = x.toString();
        var column = y.toString();
        var n = document.getElementById(`${row},${column}`);
        //If square is unchecked, apply click function to it (provides spread recursion)
        if(n.textContent==''){
            click(n);
        }
        x++;
    }
    if(x<b.board[0].length-1){
        x++;
        var row = x.toString();
        var column = y.toString();
        var n = document.getElementById(`${row},${column}`);
        if(n.textContent==''){
            click(n);
        }
        x--;
    }
    if(y>0){
        y--;
        var row = x.toString();
        var column = y.toString();
        var n = document.getElementById(`${row},${column}`);
        if(n.textContent==''){
            click(n);
        }
        y++;
    }
    if(y<b.board.length-1){
        y++;
        var row = x.toString();
        var column = y.toString();
        var n = document.getElementById(`${row},${column}`);
        if(n.textContent==''){
            click(n);
        }
    }
}

function gameOver(element){
    for(let e of element){
        //Parsing id to coordinates
        var c = e.id.indexOf(',');
        var x = parseInt(e.id.substr(0,c));
        var y = parseInt(e.id.substr(c+1,e.id.length-1));
        
        //If player flagged a non-bomb, apply appropriate label to it
        if(e.textContent=='f'){
            if(b.board[y][x]!='b'){
                e.src = "././nobomb.png";
            }
        }
        //If coordinate is a bomb, display it
        if(b.board[y][x]=='b'){
            e.src = "././bomb.png"
        }
    }
}

//Board class to hold game creation functions
class board{
    constructor(board=[],bombs=0){
        //Internal board for game logic
        this.board = board;
        this.bombs = bombs;
    }

    //Makes games board of row x column sizre
    make(row,column){
        this.board = [];
        for(let i=0;i<column;i++){
            var row1 = [];
            for(let j = 0; j<row; j++){
                row1.push('-')
            }
            this.board.push(row1);
        }
        return;
    }

    //Prints the board requested
    printBoard(){
        for(let i = 0;i<this.board.length;i++){
            console.log(this.board[i]);
        }
    }

    //adds specified number of bombs
    addmines(z){
        var count = 0;
        while(count<z){
            var y = Math.floor(Math.random()*this.board.length);
            var x = Math.floor(Math.random()*this.board[0].length);
            if(this.board[y][x]!='b'){
                this.board[y][x]='b';
                count++;
            }
        }
        this.bombs = z;
    }

    //Makes number values of number of bombs surrounding for all cells
    scores(){
        for(let i=0;i<this.board.length;i++){
            for(let j=0;j<this.board[0].length;j++){
                if(this.board[i][j]!='b'){
                    var c;
                    if(i==0){
                        if(j==0){
                            //Score does the actual counting of values
                            c=score(j,j+2,i,i+2,i,j);
                            this.board[i][j]=c;
                        }
                        else if(j==this.board[0].length-1){
                            c=score(j-1,j+1,i,i+2,i,j);
                            this.board[i][j]=c;
                        }
                       else{
                            c=score(j-1,j+2,i,i+2,i,j);
                            this.board[i][j]=c;
                        }
                    }
                    else if(i==this.board.length-1){
                        if(j==0){
                            c=score(j,j+2,i-1,i+1,i,j);
                            this.board[i][j]=c;
                        }
                        else if(j==this.board[0].length-1){
                            c=score(j-1,j+1,i-1,i+1,i,j);
                            this.board[i][j]=c;
                        }
                        else{
                            c=score(j-1,j+2,i-1,i+1,i,j);
                            this.board[i][j]=c;
                        }
                    }
                    else{
                        if(j==0){
                            c=score(j,j+2,i-1,i+2,i,j);
                            this.board[i][j]=c;
                        }
                        else if(j==this.board[0].length-1){
                            c=score(j-1,j+1,i-1,i+2,i,j);
                            this.board[i][j]=c;
                        }
                        else{
                            c=score(j-1,j+2,i-1,i+2,i,j);
                            this.board[i][j]=c;
                        }
                    }
                }
            }
        }
    }
    
};


function score(left,right,top,bottom,x,y){
    var c = 0;
    for(let i=top;i<bottom;i++){
        for(let j=left;j<right;j++){
            if(b.board[i][j]=='b'){
                c++;
            }
            
        }
    }
    return c;
}

//Remove all created children of minesweeper board, for resetting game
function clear(){
    var element = document.getElementById('minesweeper');
    while(element.firstChild){
        element.removeChild(element.firstChild);
    }
}

//Make visible board
function makeGame(b,val){
    //Clears old board and end text, if they exist
    clear();
    document.getElementById('win').textContent = '';
    var element = document.getElementById('minesweeper');
    let bombs = document.getElementById('bombs');
    bombs.textContent = `Bombs: ${b.bombs}`;
    for(let i=0;i<b.board.length;i++){
        //Create a table row for each game row
        let row = document.createElement('tr');
        for(let j=0;j<b.board[0].length;j++){
            //Create a row of blank squares, style is determined by difficulty
            let bu = document.createElement('img');
            bu.src = "././blank.png";
            if(val==1){
                bu.className = "easy";
            }
            else if(val==2){
                bu.className = "medium";
            }
            else{
                bu.className = "hard";
            }
            let td = document.createElement('td');
            let x = j.toString();
            let y = i.toString();
            bu.id = `${x},${y}`;
            bu.style.src = '././blank.png';
            console.log(bu);
            td.appendChild(bu);
            row.appendChild(td);
        }
        element.appendChild(row);
    }
}

//Create game parameters based on difficulty
function makeDifficulty(val){
    if(val==1){
        seconds = 0;
        b.make(8,8);
        b.addmines(10);
        b.scores();
        makeGame(b,val);
    }
    else if(val==2){
        seconds=0;
        b.make(16,16);
        b.addmines(40);
        b.scores();
        makeGame(b,val);
    }
    else if(val==3){
        seconds=0;
        b.make(30,16);
        b.addmines(99);
        b.scores();
        makeGame(b,val);
    }
}

var timeVar;
var seconds = 0;

//Increment by one second
function makeTime(){
    ++seconds;
    document.getElementById("timer").innerHTML = `Time: ${seconds}`;
}

var b = new board;

function game(b){
    makeDifficulty(b);
    
}