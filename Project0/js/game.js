/*window.onclick = function(){
    var element= document.getElementById('one');
    element.addEventListener('click',clicked(element));
}

function clicked(e){
    console.log(e);
    e.style.color = "red";
    e.textContent = "1";
}*/

window.onload = function(){
    var element = document.querySelectorAll('button');
    //element.addEventListener('click',click(element));
    console.log(element);
    for(let e of element){
        e.addEventListener('click', (event) => {
            event.preventDefault();
            click(e);
            if(e.innerText=='b'){
                gameOver(element);
            }
        });
    }
}

function click(e){
    var x = e.id[0];
    var y = e.id[1];
    console.log(x);
    console.log(y);
    e.innerText = b.board1[y][x].toString();
    if(e.innerText==0){
        spread(x,y,e);
    }
    console.log(e.innerText);
}

function spread(x,y,e){
    if(x>0){
        x--;
        var z = x.toString() + y.toString();
        var n = document.getElementById(z);
        if(n.innerText==''){
            click(n);
        }
        x++;
    }
    if(x<b.board1[0].length-1){
        x++;
        var z = x.toString() + y.toString();
        var n = document.getElementById(z);
        if(n.innerText==''){
            click(n);
        }
        x--;
    }
    if(y>0){
        y--;
        var z = x.toString() + y.toString();
        var n = document.getElementById(z);
        if(n.innerText==''){
            click(n);
        }
        y++;
    }
    if(y<b.board1.length-1){
        y++;
        var z = x.toString() + y.toString();
        var n = document.getElementById(z);
        if(n.innerText==''){
            click(n);
        }
    }
}

function gameOver(element){
    console.log(element);
    for(let e of element){
        console.log(e.innerText);
        if(e.innerText == ''){
            var x = e.id[0];
            var y = e.id[1];
            e.innerText = b.board1[y][x];
        }
    }
}

class board{
    constructor(board1=[],board2=[],bombs=0){
        //Board visible after clicking
        this.board1=board1;
        //Board visible before clicking
        this.board2=board2;
        this.bombs = bombs;
    }

    //Makes games board with row number of rows and column number of columns
    make(row,column){
        
        for(let i=0;i<column;i++){
            var row1 = []
            var row2 = []
            for(let j = 0; j<row; j++){
                row1.push('-')
                row2.push(0);
            }
            this.board1.push(row1);
            this.board2.push(row2);
        }
        return;
    }

    //prints the specific board requested
    printBoard(m){
        if(m==1){
            for(let i = 0;i<this.board1.length;i++){
                console.log(this.board1[i]);
            }
        }
        if(m==2){
            for(let i = 0; i<this.board2.length;i++){
                console.log(this.board2[i]);
            }
        }
    }

    //adds specified number of bombs
    addmines(z){
        var count = 0;
        while(count<z){
            var y = Math.floor(Math.random()*this.board1.length);
            var x = Math.floor(Math.random()*this.board1[0].length);
            if(this.board1[y][x]!='b'){
                this.board1[y][x]='b';
                count++;
            }
        }
        this.bombs = z;
    }

    //makes number values for all cells surrounding bomb
    scores(){
        for(let i=0;i<this.board1.length;i++){
            for(let j=0;j<this.board1[0].length;j++){
                if(this.board1[i][j]!='b'){
                    var c;
                    if(i==0){
                        if(j==0){
                            c=score(j,j+2,i,i+2,i,j);
                            this.board1[i][j]=c;
                        }
                        else if(j==this.board1[0].length-1){
                            c=score(j-1,j+1,i,i+2,i,j);
                            this.board1[i][j]=c;
                        }
                       else{
                            c=score(j-1,j+2,i,i+2,i,j);
                            this.board1[i][j]=c;
                        }
                    }
                    else if(i==this.board1.length-1){
                        if(j==0){
                            c=score(j,j+2,i-1,i+1,i,j);
                            this.board1[i][j]=c;
                        }
                        else if(j==this.board1[0].length-1){
                            c=score(j-1,j+1,i-1,i+1,i,j);
                            this.board1[i][j]=c;
                        }
                        else{
                            c=score(j-1,j+2,i-1,i+1,i,j);
                            this.board1[i][j]=c;
                        }
                    }
                    else{
                        if(j==0){
                            c=score(j,j+2,i-1,i+2,i,j);
                            this.board1[i][j]=c;
                        }
                        else if(j==this.board1[0].length-1){
                            c=score(j-1,j+1,i-1,i+2,i,j);
                            this.board1[i][j]=c;
                        }
                        else{
                            c=score(j-1,j+2,i-1,i+2,i,j);
                            this.board1[i][j]=c;
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
            if(b.board1[i][j]=='b'){
                c++;
            }
            
        }
    }
    return c;
}

function getSquare(x,y){
    console.log(board1[x][y]);
    if(board1[x][y]=='0'){
        
    }
    return board1[x][y];
}

function makeButton(b){
    var element = document.getElementById('minesweeper');
    for(let i=0;i<b.board1.length;i++){
        let row = document.createElement('tr');
        for(let j=0;j<b.board1[0].length;j++){
            let bu = document.createElement('button');
            //bu.innerText = b.board1[i][j];
            bu.id = j.toString() + i.toString();
            row.appendChild(bu);
        }
        element.appendChild(row);
    }
}

var b = new board;
b.make(7,7);
b.printBoard(1);
b.printBoard(2);
b.addmines(3);
b.printBoard(1);
b.scores();
b.printBoard(1);
b.printBoard(2);
makeButton(b);