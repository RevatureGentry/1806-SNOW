
window.onload = function(){
    let cboard = document.getElementById('checkerboard');
    let from;
    let currentcolor = 'white';

    //get clickable element for every cell
    Array.from(cboard.children).forEach(function (cell) {
        cell.addEventListener('click',function(selected){
            if(currentcolor ==='white'){
            if( selected.target.innerHTML === 'wp'){
                from = selected.target;
            }
            else if(from && currentcolor ==='white'){
                if(isLegalMoveW(from,selected.target)===-1){
                selected.target.innerHTML = '<div class="wht wpiece">wp</div>';
                from.parentElement.innerHTML = '';
                from = null;
                currentcolor = 'red';
                }
                else if (isLegalMoveW(from,selected.target)===3){
                    jumpWR(from,selected.target);
                }
                else if(isLegalMoveW(from,selected.target)===2){
                    jumpWL(from,selected.target);

                }
                else{
                    console.log('not okay move');
                }
            }
            else{
                console.log('End turn');
            }
        }
            //White logic ends
            if(currentcolor ==='red'){
            if( selected.target.innerHTML === 'rp'){
                from = selected.target;
            }
            else if(from && currentcolor === 'red'){
                //check if legal move
                if(isLegalMoveR(from,selected.target)===1){
                selected.target.innerHTML = '<div class="red rpiece">rp</div>';
                from.parentElement.innerHTML = '';
                from = null;
                currentcolor = 'white';
                }
                else if (isLegalMoveW(from,selected.target)===3){
                    jumpRR(from,selected.target);
                }
                else if(isLegalMoveW(from,selected.target)===2){
                    jumpRL(from,selected.target);

                }
                else{
                    console.log('not okay move');
                }
                
            }
            else{
                console.log(selected.target.innerHTML +'nothin clicked');
            }
        }


        });
                    function isLegalMoveW(from, to) {
                let fromid = from.parentElement.parentElement.id;
                let toid = to.parentElement.id;
                let left = parseInt(to.id) + 7;
                let right = parseInt(to.id) + 9;
                let leftsq;
                let rightsq;
                if(0<=left <64){leftsq = document.getElementById(left)}
                else {result = 4};
                if(0<=right<64){rightsq = document.getElementById(right)}
                else {result = 4};
                
                let result;
                result = fromid.charCodeAt(0) - toid.charCodeAt(0);

                if(to.innerHTML === '<div class="red rpiece">rp</div>' && leftsq.innerHTML ===''){
                    result = 2;
                    //return result;
                }
                else if(to.innerHTML === '<div class="red rpiece">rp</div>' && rightsq.innerHTML ===''){
                    result = 3;
                }
                return result;
              }

              function isLegalMoveR(from, to) {
                let fromid = from.parentElement.parentElement.id;
                let toid = to.parentElement.id;
                let left = parseInt(to.id) - 9;
                let right = parseInt(to.id)- 7;
                let leftsq;
                let rightsq;
                if(0<=left <64){leftsq = document.getElementById(left)}
                else {result = 4};
                if(0<=right<64){rightsq = document.getElementById(right)}
                else {result = 4};
                console.log("left " + left);
                console.log('right' + right);
                console.log("yo " + leftsq.innerHTML);
                console.log("rightsq inner html" + rightsq.innerHTML);
                
                let result = fromid.charCodeAt(0) - toid.charCodeAt(0);
                if(to.innerHTML === '<div class="wht wpiece">wp</div>' && leftsq.innerHTML ===''){
                    result = 2;
                    //return result;
                }
                else if(to.innerHTML === '<div class="wht wpiece">wp</div>' && rightsq.innerHTML ===''){
                    result = 3;
                }
                return result;
              }
              //white left Jump
              function jumpWL(from, to){
                var left = parseInt(to.id) + 7;
                var leftsq = document.getElementById(left);
                
                    from.parentElement.innerHTML = '';
                    leftsq.innerHTML = '<div class="wht wpiece">wp</div>'
                    to.innerHTML = '';
              }
              //white right jump
              function jumpWR(from, to){
                var right = parseInt(to.id) + 9;
                var rightsq = document.getElementById(right);

                    from.parentElement.innerHTML = '';
                    rightsq.innerHTML = '<div class="wht wpiece">wp</div>'
                    to.innerHTML = '';
              }
              //red left jump
              function jumpRL(from, to){
                let left = parseInt(to.id);
                let leftsq = document.getElementById(left);
                let deletenum = left + 7;
                let deletesq = document.getElementById(deletenum);

                    from.parentElement.innerHTML = '';
                    leftsq.innerHTML = '<div class="red rpiece">rp</div>'
                    deletesq.innerHTML = '';

              }
              //red right jump
              function jumpRR(from, to){
                let right = parseInt(to.id) - 7;
                console.log("help " + parseInt(to.id));
                let rightsq = document.getElementById(right);

                    from.parentElement.innerHTML = '';
                    rightsq.innerHTML = '<div class="red rpiece">red</div>'
                    to.innerHTML = '';
              }
    });




    //default gameboard

    init = function(){
        currentcolor = "white";
        var gameBoard = [
            [1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 2, 0, 2, 0, 2, 0, 2],
            [2, 0, 2, 0, 2, 0, 2, 0],
            [0, 2, 0, 2, 0, 2, 0, 2]
        ];
        //loops through and puts pieces on the board
        let displayBoard = function(gameBoard) {
            for (var row = 0; row < gameBoard.length; row++) {
                for (var col = 0; col < gameBoard[row].length; col++) {
                    if (gameBoard[row][col] === 1) {
                        $('.row')[row].children[col].innerHTML = '<div class="wht wpiece">wp</div>';
                        
                    } else if (gameBoard[row][col] === 2) {
                        $('.row')[row].children[col].innerHTML = '<div class="red rpiece">rp</div>';
                    } else {
                        $('.row')[row].children[col].innerHTML = '';
                    }
                }
               
            }
        };
    displayBoard(gameBoard);  
    }
    init();

    var myResetButton = document.getElementById('resetbtn');
    myResetButton.addEventListener('click',function(){
        init()
    });
    
}
//lets me query like jquery :)
window.$ = document.querySelectorAll.bind(document)
