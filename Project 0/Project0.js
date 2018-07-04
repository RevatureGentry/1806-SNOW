// var pchipcountsave = localStorage.getItem("chipcount");
// var c1chipcountsave = localStorage.getItem("c1chipcount");
// var c2chipcountsave = localStorage.getItem("c2chipcount");
// var c3chipcountsave = localStorage.getItem("c3chipcount");
// var c4chipcountsave = localStorage.getItem("c4chipcount");
var score = JSON.parse(localStorage.getItem("score"));
if (typeof(Storage) !== "undefined") {
    var storedscore = localStorage.getItem('score');
    if (score === null) {
      score = 100;
    }}

var c1score = JSON.parse(localStorage.getItem("c1score"));
if (typeof(Storage) !== "undefined") {
    var c1storedscore = localStorage.getItem('c1score');
    if (c1score === null) {
      c1score = 100;
    }}

var c2score = JSON.parse(localStorage.getItem("c2score"));
if (typeof(Storage) !== "undefined") {
    var c2storedscore = localStorage.getItem('c2score');
    if (c2score === null) {
        c2score = 100;
    }}

var c3score = JSON.parse(localStorage.getItem("c3score"));
if (typeof(Storage) !== "undefined") {
    var c3storedscore = localStorage.getItem('c3score');
    if (c3score === null) {
        c3score = 100;
    }}

var c4score = JSON.parse(localStorage.getItem("c4score"));
if (typeof(Storage) !== "undefined") {
    var c4storedscore = localStorage.getItem('c4score');
    if (c4score === null) {
        c4score = 100;
    }}

    var pot = 0;



//string array of card images
var Deck = ["2_of_clubs.png", "2_of_hearts.png", "2_of_diamonds.png", "2_of_spades.png", "3_of_clubs.png", "3_of_hearts.png", 
            "3_of_diamonds.png", "3_of_spades.png", "4_of_clubs.png", "4_of_hearts.png", "4_of_diamonds.png", "4_of_spades.png", 
            "5_of_clubs.png", "5_of_hearts.png", "5_of_diamonds.png", "5_of_spades.png", "6_of_clubs.png", "6_of_hearts.png", 
            "6_of_diamonds.png", "6_of_spades.png", "7_of_clubs.png", "7_of_hearts.png", "7_of_diamonds.png", "7_of_spades.png", 
            "8_of_clubs.png", "8_of_hearts.png", "8_of_diamonds.png", "8_of_spades.png", "9_of_clubs.png", "9_of_hearts.png", 
            "9_of_diamonds.png", "9_of_spades.png", "10_of_clubs.png", "10_of_hearts.png", "10_of_diamonds.png", "10_of_spades.png",
            "ace_of_clubs.png", "ace_of_hearts.png", "ace_of_diamonds.png", "ace_of_spades.png", "jack_of_clubs.png", "jack_of_hearts.png",
             "jack_of_diamonds.png", "jack_of_spades.png", "queen_of_clubs.png", "queen_of_hearts.png", "queen_of_diamonds.png", "queen_of_spades.png",
             "king_of_clubs.png", "king_of_hearts.png", "king_of_diamonds.png", "king_of_spades.png" ]




//////Variables for card index and card string to attach to dynamically created img elements//////

var card1index = Math.floor(Math.random() * Deck.length)
var card1string = Deck [card1index];
Deck.splice(card1index, 1);

var card2index = Math.floor(Math.random() * Deck.length)
var card2string = Deck [card2index]
Deck.splice(card2index, 1);

var card3index = Math.floor(Math.random() * Deck.length)
var card3string = Deck [card3index]
Deck.splice(card3index, 1);

var card4index = Math.floor(Math.random() * Deck.length)
var card4string = Deck [card4index]
Deck.splice(card4index, 1);

var card5index = Math.floor(Math.random() * Deck.length)
var card5string = Deck [card5index]
Deck.splice(card5index, 1);

var playercard1index = Math.floor(Math.random() * Deck.length)
var playercard1string = Deck [playercard1index]
Deck.splice(playercard1index, 1);

var playercard2index = Math.floor(Math.random() * Deck.length)
var playercard2string = Deck [playercard2index]
Deck.splice(playercard2index, 1);

var comp1card1index = Math.floor(Math.random() * Deck.length)
var comp1card1string = Deck [comp1card1index];
var comp1card1flippedcardstring = "Playing Cards/Playing Cards/cards/" + comp1card1string;
Deck.splice(comp1card1index, 1);

var comp1card2index = Math.floor(Math.random() * Deck.length)
var comp1card2string = Deck [comp1card2index];
var comp1card2flippedcardstring = "Playing Cards/Playing Cards/cards/" + comp1card2string;
Deck.splice(comp1card2index, 1);

var comp2card1index = Math.floor(Math.random() * Deck.length)
var comp2card1string = Deck [comp2card1index];
var comp2card1flippedcardstring = "Playing Cards/Playing Cards/cards/" + comp2card1string;
Deck.splice(comp2card1index, 1);

var comp2card2index = Math.floor(Math.random() * Deck.length)
var comp2card2string = Deck [comp2card2index];
var comp2card2flippedcardstring = "Playing Cards/Playing Cards/cards/" + comp2card2string;
Deck.splice(comp2card2index, 1);

var comp3card1index = Math.floor(Math.random() * Deck.length)
var comp3card1string = Deck [comp3card1index];
var comp3card1flippedcardstring = "Playing Cards/Playing Cards/cards/" + comp3card1string;
Deck.splice(comp3card1index, 1);

var comp3card2index = Math.floor(Math.random() * Deck.length)
var comp3card2string = Deck [comp3card2index];
var comp3card2flippedcardstring = "Playing Cards/Playing Cards/cards/" + comp3card2string;
Deck.splice(comp3card2index, 1);

var comp4card1index = Math.floor(Math.random() * Deck.length)
var comp4card1string = Deck [comp4card1index];
var comp4card1flippedcardstring = "Playing Cards/Playing Cards/cards/" + comp4card1string;
Deck.splice(comp4card1index, 1);

var comp4card2index = Math.floor(Math.random() * Deck.length)
var comp4card2string = Deck [comp4card2index];
var comp4card2flippedcardstring = "Playing Cards/Playing Cards/cards/" + comp4card2string;
Deck.splice(comp4card2index, 1);


/////Disable buttons until they should be clicked//////

document.getElementById("card3btn").disabled = true; 
document.getElementById("card4btn").disabled = true; 
document.getElementById("card5btn").disabled = true;
document.getElementById("showHandsbtn").disabled = true; 
document.getElementById("nextHandbtn").disabled = true; 






//Create images within Javascript and append it to html elements

//code to create the first flop card when btn is clicked
document.getElementById("card3btn").addEventListener("click", function() {
    
    

    var card1 = document.createElement("img"); 
    card1.src = "Playing Cards/Playing Cards/cards/" + card1string;
    card1.height = 240;
    card1.width = 180;
    var src1 = document.getElementById("card1div");
    src1.appendChild(card1);

    

}, {once : true});

//code to create the 2nd flop card when btn is clicked
document.getElementById("card3btn").addEventListener("click", function() {
    

    var card2 = document.createElement("img"); 
    card2.src = "Playing Cards/Playing Cards/cards/" + card2string;
    card2.height = 240;
    card2.width = 180;
    var src2 = document.getElementById("card2div");
    src2.appendChild(card2);

    
    

}, {once : true});

//code to create the 3rd flop card when btn is clicked
document.getElementById("card3btn").addEventListener("click", function() {
    

    var card3 = document.createElement("img"); 
    card3.src = "Playing Cards/Playing Cards/cards/" + card3string;
    card3.height = 240;
    card3.width = 180;
    var src3 = document.getElementById("card3div");
    src3.appendChild(card3);

    
    document.getElementById("card4btn").disabled = false;


}, {once : true});


//Code to create the turn card when btn is clicked
document.getElementById("card4btn").addEventListener("click", function(){
    

    var card4 = document.createElement("img"); 
    card4.src = "Playing Cards/Playing Cards/cards/" + card4string;
    card4.height = 240;
    card4.width = 180;
    var src4 = document.getElementById("card4div");
    src4.appendChild(card4);

  
   
   document.getElementById("card5btn").disabled = false;

}, {once : true});


//Code to create the River card when btn is clicked
document.getElementById("card5btn").addEventListener("click", function(){
    

    var card5 = document.createElement("img"); 
    card5.src = "Playing Cards/Playing Cards/cards/" + card5string;
    card5.height = 240;
    card5.width = 180;
    var src5 = document.getElementById("card5div");
    src5.appendChild(card5);

    
    
    document.getElementById("showHandsbtn").disabled = false;

}, {once : true});




//Player Cards
//Code to create hole cards when btn is clicked
document.getElementById("playercardsbtn").addEventListener("click", function(){
    

    var playercard1 = document.createElement("img"); 
    playercard1.src = "Playing Cards/Playing Cards/cards/" + playercard1string;
    playercard1.height = 240;
    playercard1.width = 180;
    var srcpc1 = document.getElementById("playercard1div");
    srcpc1.appendChild(playercard1);

   
   
   document.getElementById("card3btn").disabled = false; 
   

}, {once : true});



document.getElementById("playercardsbtn").addEventListener("click", function(){
    

    var playercard2 = document.createElement("img");    
    playercard2.src = "Playing Cards/Playing Cards/cards/" + playercard2string;
    playercard2.height = 240;
    playercard2.width = 180;
    var srcpc2 = document.getElementById("playercard2div");
    srcpc2.appendChild(playercard2);

    
    
}, {once : true});





//Code to display hand text for each players hand at end of round when button is clicked
document.getElementById("showHandsbtn").addEventListener("click", function(){
    
    var para = document.createElement("p");
    var node = document.createTextNode(cardHand(playercard1num, playercard1suit, playercard2num, playercard2suit));
    para.appendChild(node);

    var element = document.getElementById("plhandtext");
    element.appendChild(para);

    
    

}, {once : true});

document.getElementById("showHandsbtn").addEventListener("click", function(){
    
    var para = document.createElement("p");
    var node = document.createTextNode(cardHand(comp1card1num, comp1card1suit, comp1card2num, comp1card2suit));
    para.appendChild(node);

    var element = document.getElementById("c1handtext");
    element.appendChild(para);
    

}, {once : true});

document.getElementById("showHandsbtn").addEventListener("click", function(){
    
    var para = document.createElement("p");
    var node = document.createTextNode(cardHand(comp2card1num, comp2card1suit, comp2card2num, comp2card2suit));
    para.appendChild(node);

    var element = document.getElementById("c2handtext");
    element.appendChild(para);
    

}, {once : true});

document.getElementById("showHandsbtn").addEventListener("click", function(){
    
    var para = document.createElement("p");
    var node = document.createTextNode(cardHand(comp3card1num, comp3card1suit, comp3card2num, comp3card2suit));
    para.appendChild(node);

    var element = document.getElementById("c3handtext");
    element.appendChild(para);
    

}, {once : true});

document.getElementById("showHandsbtn").addEventListener("click", function(){
    
    var para = document.createElement("p");
    var node = document.createTextNode(cardHand(comp4card1num, comp4card1suit, comp4card2num, comp4card2suit));
    para.appendChild(node);

    var element = document.getElementById("c4handtext");
    element.appendChild(para);
    

}, {once : true});







//Code to hide hole cards button after clicked
var PlayerCardBtnHide = document.getElementById("playercardsbtn")
    PlayerCardBtnHide.addEventListener('click',hideshowholecard,false);

    function hideshowholecard() {
        document.getElementById('playercardsbtn').style.display = 'block'; 
        this.style.display = 'none'
    }   

//Code to hide flop btn after click
var flopBtnHide = document.getElementById("card3btn")
    flopBtnHide.addEventListener('click',hideshowflop,false);

    function hideshowflop() {
        document.getElementById('card3btn').style.display = 'block'; 
        this.style.display = 'none'
    }   

//Code to hide turn btn after click
var turnBtnHide = document.getElementById("card4btn")
    turnBtnHide.addEventListener('click',hideshowturn,false);

    function hideshowturn() {
        document.getElementById('card4btn').style.display = 'block'; 
        this.style.display = 'none'
    }   

//Code to hide river btn after click
var riverBtnHide = document.getElementById("card5btn")
    riverBtnHide.addEventListener('click',hideshowriver,false);

    function hideshowriver() {
        document.getElementById('card5btn').style.display = 'block'; 
        this.style.display = 'none'
    }   


//Code to hide showhands btn after click
var riverBtnHide = document.getElementById("showHandsbtn")
    riverBtnHide.addEventListener('click',hideshowHands,false);

    function hideshowHands() {
        document.getElementById('showHandsbtn').style.display = 'block'; 
        this.style.display = 'none'
    }
    



//code to create computer1 cards
document.getElementById("playercardsbtn").addEventListener("click", function(){

var comp1card1 = document.createElement("img"); 
comp1card1.src = "Playing Cards/Playing Cards/cards/cardbackblack.png";
comp1card1.height = 80;
comp1card1.width = 40;
var srcc1c1 = document.getElementById("comp1card1div");
srcc1c1.appendChild(comp1card1);

var comp1card2 = document.createElement("img"); 
comp1card2.src = "Playing Cards/Playing Cards/cards/cardbackblack.png"
comp1card2.height = 80;
comp1card2.width = 40;
var srcc1c2 = document.getElementById("comp1card2div");
srcc1c2.appendChild(comp1card2);



//code to create computer2 cards


var comp2card1 = document.createElement("img"); 
comp2card1.src = "Playing Cards/Playing Cards/cards/cardbackblack.png";
comp2card1.height = 80;
comp2card1.width = 40;
var srcc2c1 = document.getElementById("comp2card1div");
srcc2c1.appendChild(comp2card1);

var comp2card2 = document.createElement("img"); 
comp2card2.src = "Playing Cards/Playing Cards/cards/cardbackblack.png"
comp2card2.height = 80;
comp2card2.width = 40;
var srcc2c2 = document.getElementById("comp2card2div");
srcc2c2.appendChild(comp2card2);



//code to create computer3 cards


var comp3card1 = document.createElement("img"); 
comp3card1.src = "Playing Cards/Playing Cards/cards/cardbackblack.png";
comp3card1.height = 80;
comp3card1.width = 40;
var srcc3c1 = document.getElementById("comp3card1div");
srcc3c1.appendChild(comp3card1);


var comp3card2 = document.createElement("img"); 
comp3card2.src = "Playing Cards/Playing Cards/cards/cardbackblack.png"
comp3card2.height = 80;
comp3card2.width = 40;
var srcc3c2 = document.getElementById("comp3card2div");
srcc3c2.appendChild(comp3card2);





//code to create computer4 cards


var comp4card1 = document.createElement("img"); 
comp4card1.src = "Playing Cards/Playing Cards/cards/cardbackblack.png";
comp4card1.height = 80;
comp4card1.width = 40;
var srcc4c1 = document.getElementById("comp4card1div");
srcc4c1.appendChild(comp4card1);

var comp4card2 = document.createElement("img"); 
comp4card2.src = "Playing Cards/Playing Cards/cards/cardbackblack.png"
comp4card2.height = 80;
comp4card2.width = 40;
var srcc4c2 = document.getElementById("comp4card2div");
srcc4c2.appendChild(comp4card2);





//Code to Show all cards in each player's hands at the end of a round, when btn is clicked
document.getElementById("showHandsbtn").addEventListener("click", function(){
    comp1card1.src =  comp1card1flippedcardstring;
    srcc1c1.appendChild(comp1card1);

    comp1card2.src =  comp1card2flippedcardstring;
    srcc1c2.appendChild(comp1card2);
    
    comp2card1.src =  comp2card1flippedcardstring;
    srcc2c1.appendChild(comp2card1);
    
    comp2card2.src =  comp2card2flippedcardstring;
    srcc2c2.appendChild(comp2card2);
    
    comp3card1.src =  comp3card1flippedcardstring;
    srcc3c1.appendChild(comp3card1);
    
    comp3card2.src =  comp3card2flippedcardstring;
    srcc3c2.appendChild(comp3card2);
    
    comp4card1.src =  comp4card1flippedcardstring;
    srcc4c1.appendChild(comp4card1);
    
    comp4card2.src =  comp4card2flippedcardstring;
    srcc4c2.appendChild(comp4card2);

    document.getElementById("nextHandbtn").disabled = false; 
}, {once : true});





}, {once : true});



////Function to determine unique elements in array//////
// ////filter will loop through array and leave only entries that pass callback function unique.
// checks if given value is the first occurring. If not, it will not be copied.///
Array.prototype.unique = function() {
    return this.filter(function (value, index, self) { 
      return self.indexOf(value) === index;
    });
  }






//////Card logic//////



//////Number and Suit Card Declarations/////
var card1num = card1string.substring(0,1);
var card1suit = card1string.substring((card1string.length-8),card1string.length-4);

var card2num = card2string.substring(0,1);
var card2suit = card2string.substring((card2string.length-8),card2string.length-4);

var card3num = card3string.substring(0,1);
var card3suit = card3string.substring((card3string.length-8),card3string.length-4);

var card4num = card4string.substring(0,1);
var card4suit = card4string.substring((card4string.length-8),card4string.length-4);

var card5num = card5string.substring(0,1);
var card5suit = card5string.substring((card5string.length-8),card5string.length-4);

var playercard1num = playercard1string.substring(0,1);
var playercard1suit = playercard1string.substring((playercard1string.length-8),playercard1string.length-4);

var playercard2num = playercard2string.substring(0,1);
var playercard2suit = playercard2string.substring((playercard2string.length-8),playercard2string.length-4);

var comp1card1num = comp1card1string.substring(0,1);
var comp1card1suit = comp1card1string.substring((comp1card1string.length-8),comp1card1string.length-4);

var comp1card2num = comp1card2string.substring(0,1);
var comp1card2suit = comp1card2string.substring((comp1card2string.length-8),comp1card2string.length-4);

var comp2card1num = comp2card1string.substring(0,1);
var comp2card1suit = comp2card1string.substring((comp2card1string.length-8),comp2card1string.length-4);

var comp2card2num = comp2card2string.substring(0,1);
var comp2card2suit = comp2card2string.substring((comp2card2string.length-8),comp2card2string.length-4);

var comp3card1num = comp3card1string.substring(0,1);
var comp3card1suit = comp3card1string.substring((comp3card1string.length-8),comp3card1string.length-4);

var comp3card2num = comp3card2string.substring(0,1);
var comp3card2suit = comp3card2string.substring((comp3card2string.length-8),comp3card2string.length-4);

var comp4card1num = comp4card1string.substring(0,1);
var comp4card1suit = comp4card1string.substring((comp4card1string.length-8),comp4card1string.length-4);

var comp4card2num = comp4card2string.substring(0,1);
var comp4card2suit = comp4card2string.substring((comp4card2string.length-8),comp4card2string.length-4);


var hearts = "arts";
var diamonds = "onds";
var clubs = "lubs";
var spades = "ades";





//////Shared Cards//////
var sharedcards = [card1num +card1suit, card2num +card2suit, card3num +card3suit, card4num +card4suit, card5num +card5suit]


//////Hand Logic/////


////function to determine card hand for each player//////

function cardHand(playercard1num, playercard1suit, playercard2num, playercard2suit) {



////Player Hand////
var playerhand = [card1num +card1suit, card2num +card2suit, card3num +card3suit, card4num +card4suit, card5num +card5suit, playercard1num + playercard1suit, playercard2num +playercard2suit];

///Numbers in Player Hand
var plhandnums = [card1num, card2num, card3num, card4num, card5num, playercard1num, playercard2num];
// var plhandnums = ["7", "7", "7", "2", "k", "k","q"];


////number of suits in players hand/////
var plhandclub = playerhand.filter(x => x.toLowerCase() .includes(clubs));
var plhandhearts = playerhand.filter(x => x.toLowerCase().includes(hearts));
var plhanddiamonds = playerhand.filter(x => x.toLowerCase().includes(diamonds));
var plhandspades = playerhand.filter(x => x.toLowerCase().includes(spades));



/////Royal Flush/////
if(plhandclub.length >= 5 || plhanddiamonds.length >= 5 || plhandhearts.length >= 5 || plhandspades.length >= 5){
    if (plhandclub.length >=5){
        var tempc1 = plhandclub.slice(0,1);
        var tempc2 = plhandclub.slice(1,2);
        var tempc3 = plhandclub.slice(2,3);
        var tempc4 = plhandclub.slice(3,4);
        var tempc5 = plhandclub.slice(4,5);
        if (tempc1 == "a" + clubs || tempc2 == "a" + clubs || tempc3 == "a" + clubs || tempc4 == "a" + clubs || tempc5 == "a" + clubs){
            if(tempc1 == "k" + clubs || tempc2 == "k" + clubs || tempc3 == "k" + clubs || tempc4 == "k" + clubs || tempc5 == "k" + clubs){
                if(tempc1 == "q" + clubs || tempc2 == "q" + clubs || tempc3 == "q" + clubs || tempc4 == "q" + clubs || tempc5 == "q" + clubs){
                    if(tempc1 == "j" + clubs || tempc2 == "j" + clubs || tempc3 == "j" + clubs || tempc4 == "j" + clubs || tempc5 == "j" + clubs){
                        if(tempc1 == "1" + clubs || tempc2 == "1" + clubs || tempc3 == "1" + clubs || tempc4 == "1" + clubs || tempc5 == "1" + clubs){
                            return ("Royal Flush");

                            }}}}}}}

    if (plhanddiamonds.length >=5){
        var tempc1 = plhanddiamonds.slice(0,1);
        var tempc2 = plhanddiamonds.slice(1,2);
        var tempc3 = plhanddiamonds.slice(2,3);
        var tempc4 = plhanddiamonds.slice(3,4);
        var tempc5 = plhanddiamonds.slice(4,5);
        if (tempc1 == "a" + diamonds || tempc2 == "a" + diamonds || tempc3 == "a" + diamonds || tempc4 == "a" + diamonds || tempc5 == "a" + diamonds){
            if(tempc1 == "k" + diamonds || tempc2 == "k" + diamonds || tempc3 == "k" + diamonds || tempc4 == "k" + diamonds || tempc5 == "k" + diamonds){
                if(tempc1 == "q" + diamonds || tempc2 == "q" + diamonds || tempc3 == "q" + diamonds || tempc4 == "q" + diamonds || tempc5 == "q" + diamonds){
                    if(tempc1 == "j" + diamonds || tempc2 == "j" + diamonds || tempc3 == "j" + diamonds || tempc4 == "j" + diamonds || tempc5 == "j" + diamonds){
                        if(tempc1 == "1" + diamonds || tempc2 == "1" + diamonds || tempc3 == "1" + diamonds || tempc4 == "1" + diamonds || tempc5 == "1" + diamonds){
                            return ("Royal Flush");
                    
                            }}}}}}

    if (plhandhearts.length >=5){
        var tempc1 = plhandhearts.slice(0,1);
        var tempc2 = plhandhearts.slice(1,2);
        var tempc3 = plhandhearts.slice(2,3);
        var tempc4 = plhandhearts.slice(3,4);
        var tempc5 = plhandhearts.slice(4,5);
        if (tempc1 == "a" + hearts || tempc2 == "a" + hearts || tempc3 == "a" + hearts || tempc4 == "a" + hearts || tempc5 == "a" + hearts){
            if(tempc1 == "k" + hearts || tempc2 == "k" + hearts || tempc3 == "k" + hearts || tempc4 == "k" + hearts || tempc5 == "k" + hearts){
                if(tempc1 == "q" + hearts || tempc2 == "q" + hearts || tempc3 == "q" + hearts || tempc4 == "q" + hearts || tempc5 == "q" + hearts){
                    if(tempc1 == "j" + hearts || tempc2 == "j" + hearts || tempc3 == "j" + hearts || tempc4 == "j" + hearts || tempc5 == "j" + hearts){
                        if(tempc1 == "1" + hearts || tempc2 == "1" + hearts || tempc3 == "1" + hearts || tempc4 == "1" + hearts || tempc5 == "1" + hearts){
                            return ("Royal Flush");
                    
                            }}}}}}

    if (plhandspades.length >=5){
        var tempc1 = plhandspades.slice(0,1);
        var tempc2 = plhandspades.slice(1,2);
        var tempc3 = plhandspades.slice(2,3);
        var tempc4 = plhandspades.slice(3,4);
        var tempc5 = plhandspades.slice(4,5);
        if (tempc1 == "a" + spades || tempc2 == "a" + spades || tempc3 == "a" + spades || tempc4 == "a" + spades || tempc5 == "a" + spades){
            if(tempc1 == "k" + spades || tempc2 == "k" + spades || tempc3 == "k" + spades || tempc4 == "k" + spades || tempc5 == "k" + spades){
                if(tempc1 == "q" + spades || tempc2 == "q" + spades || tempc3 == "q" + spades || tempc4 == "q" + spades || tempc5 == "q" + spades){
                    if(tempc1 == "j" + spades || tempc2 == "j" + spades || tempc3 == "j" + spades || tempc4 == "j" + spades || tempc5 == "j" + spades){
                        if(tempc1 == "1" + spades || tempc2 == "1" + spades || tempc3 == "1" + spades || tempc4 == "1" + spades || tempc5 == "1" + spades){
                            return ("Royal Flush");
                        
                            }}}}}}

/////Straight Flush///////

if(plhandclub.length >= 5 || plhanddiamonds.length >= 5 || plhandhearts.length >= 5 || plhandspades.length >= 5){
    if (plhandclub.length >=5){
        plhandclub.sort();
        
        var tempc1 = plhandclub.slice(0,1);
        
        var tempc2 = plhandclub.slice(1,2);
        
        var tempc3 = plhandclub.slice(2,3);
        
        var tempc4 = plhandclub.slice(3,4);
       
        var tempc5 = plhandclub.slice(4,5);
        
        var c1num = tempc1.toString().substring(0,1);
        var c2num = tempc2.toString().substring(0,1);
        var c3num = tempc3.toString().substring(0,1);
        var c4num = tempc4.toString().substring(0,1);
        var c5num = tempc5.toString().substring(0,1);
        if(c5num <=8){
            if(c4num == c5num - 1 && c3num == c4num - 1 && c2num == c3num - 1 && c1num == c2num -1){
                return ("Straight Flush");
            }
            
        }
        if(c5num == 9){
            if(c4num == c5num-1 && c3num == c4num-1 && c2num == c3num-1 && c1num == 1){
                return ("Straight Flush");
            }
        }
        if(c5num == "q" && c4num == "k" && c3num == "j" && c2num == 9 && c1num == 1){
            return ("Straight Flush");
        }
        if(c5num == "q" && c4num == "j" && c3num == 9 && c2num == 8 && c1num == 1)
            return ("Straight Flush");
        }
        if(c5num == "j" && c4num == 9 && c3num == 8 && c2num == 7 && c1num == 1){
            return ("Straight Flush");
        }
        if(c5num == "a" && c4num == 5 && c3num == 4 && c2num == 3 && c1num == 2){
            return ("Straight Flush");
        }
    
    }

    if (plhanddiamonds.length >=5){
        plhanddiamonds.sort();
        
        var tempc1 = plhanddiamonds.slice(0,1);
        
        var tempc2 = plhanddiamonds.slice(1,2);
      
        var tempc3 = plhanddiamonds.slice(2,3);
       
        var tempc4 = plhanddiamonds.slice(3,4);
       
        var tempc5 = plhanddiamonds.slice(4,5);
      
        var c1num = tempc1.toString().substring(0,1);
        var c2num = tempc2.toString().substring(0,1);
        var c3num = tempc3.toString().substring(0,1);
        var c4num = tempc4.toString().substring(0,1);
        var c5num = tempc5.toString().substring(0,1);
        if(c5num <=8){
            if(c4num == c5num - 1 && c3num == c4num - 1 && c2num == c3num - 1 && c1num == c2num -1){
                return ("Straight Flush");
            }
            
        }
        if(c5num == 9){
            if(c4num == c5num-1 && c3num == c4num-1 && c2num == c3num-1 && c1num == 1){
                return ("Straight Flush");
            }
        }
        if(c5num == "q" && c4num == "k" && c3num == "j" && c2num == 9 && c1num == 1){
            return ("Straight Flush");
        }
        if(c5num == "q" && c4num == "j" && c3num == 9 && c2num == 8 && c1num == 1){
            return ("Straight Flush");
        }
        if(c5num == "j" && c4num == 9 && c3num == 8 && c2num == 7 && c1num == 1){
            return ("Straight Flush");
        }
        if(c5num == "a" && c4num == 5 && c3num == 4 && c2num == 3 && c1num == 2){
            return ("Straight Flush");
        }
    }

    if (plhandhearts.length >=5){
        plhandhearts.sort();
       
        var tempc1 = plhandhearts.slice(0,1);
        
        var tempc2 = plhandhearts.slice(1,2);
        
        var tempc3 = plhandhearts.slice(2,3);
        
        var tempc4 = plhandhearts.slice(3,4);
        
        var tempc5 = plhandhearts.slice(4,5);
       
        var c1num = tempc1.toString().substring(0,1);
        var c2num = tempc2.toString().substring(0,1);
        var c3num = tempc3.toString().substring(0,1);
        var c4num = tempc4.toString().substring(0,1);
        var c5num = tempc5.toString().substring(0,1);
        if(c5num <=8){
            if(c4num == c5num - 1 && c3num == c4num - 1 && c2num == c3num - 1 && c1num == c2num -1){
                return ("Straight Flush");
            }
            
        }
        if(c5num == 9){
            if(c4num == c5num-1 && c3num == c4num-1 && c2num == c3num-1 && c1num == 1){
                return ("Straight Flush");
            }
        }
        if(c5num == "q" && c4num == "k" && c3num == "j" && c2num == 9 && c1num == 1){
            return ("Straight Flush");
        }
        if(c5num == "q" && c4num == "j" && c3num == 9 && c2num == 8 && c1num == 1){
            return ("Straight Flush");
        }
        if(c5num == "j" && c4num == 9 && c3num == 8 && c2num == 7 && c1num == 1){
            return ("Straight Flush");
        }
        if(c5num == "a" && c4num == 5 && c3num == 4 && c2num == 3 && c1num == 2){
            return ("Straight Flush");
        }
    }

    if (plhandspades.length >=5){
        plhandspades.sort();
       
        var tempc1 = plhandspades.slice(0,1);
        
        var tempc2 = plhandspades.slice(1,2);
        
        var tempc3 = plhandspades.slice(2,3);
        
        var tempc4 = plhandspades.slice(3,4);
      
        var tempc5 = plhandspades.slice(4,5);
        
        var c1num = tempc1.toString().substring(0,1);
        var c2num = tempc2.toString().substring(0,1);
        var c3num = tempc3.toString().substring(0,1);
        var c4num = tempc4.toString().substring(0,1);
        var c5num = tempc5.toString().substring(0,1);
        if(c5num <=8){
            if(c4num == c5num - 1 && c3num == c4num - 1 && c2num == c3num - 1 && c1num == c2num -1){
                return ("Straight Flush");
            }
            
        }
        if(c5num == 9){
            if(c4num == c5num-1 && c3num == c4num-1 && c2num == c3num-1 && c1num == 1){
                return ("Straight Flush");
            }
        }
        if(c5num == "q" && c4num == "k" && c3num == "j" && c2num == 9 && c1num == 1){
            return ("Straight Flush");
        }
        if(c5num == "q" && c4num == "j" && c3num == 9 && c2num == 8 && c1num == 1){
            return ("Straight Flush");
        }
        if(c5num == "j" && c4num == 9 && c3num == 8 && c2num == 7 && c1num == 1){
            return ("Straight Flush");
        }
        if(c5num == "a" && c4num == 5 && c3num == 4 && c2num == 3 && c1num == 2){
            return ("Straight Flush");
        }
    }


///////Quads//////

var quadcomp = plhandnums.sort();


if(quadcomp.slice(3,4).toString() == quadcomp.slice(2,3).toString() && quadcomp.slice(2,3).toString() == quadcomp.slice(1,2).toString() && quadcomp.slice(1,2).toString() == quadcomp.slice(0,1).toString()){
    return ("Quads");
}
if(quadcomp.slice(3,4).toString() == quadcomp.slice(4,5).toString() && quadcomp.slice(4,5).toString() == quadcomp.slice(5,6).toString() && quadcomp.slice(5,6).toString() == quadcomp.slice(6,7).toString()){
    return ("Quads");
}
if(quadcomp.slice(2,3).toString() == quadcomp.slice(3,4).toString() && quadcomp.slice(3,4).toString() == quadcomp.slice(4,5).toString() && quadcomp.slice(4,5).toString() == quadcomp.slice(5,6).toString()){
    return ("Quads");
}
if(quadcomp.slice(4,5).toString() == quadcomp.slice(3,4).toString() && quadcomp.slice(3,4).toString() == quadcomp.slice(2,3).toString() && quadcomp.slice(2,3).toString() == quadcomp.slice(1,2).toString()){
    return ("Quads");
}



///////Full House//////

if(plhandnums.unique().length <= 4 ){
    var sortarray = plhandnums.sort();
    var checkarray = plhandnums.unique();
    var check1value = checkarray.slice(0,1).toString();
    var check2value = checkarray.slice(1,2).toString();
    var check3value = checkarray.slice(2,3).toString();
    var check4value = checkarray.slice(3,4).toString();
    var check1index = sortarray.indexOf(check1value);
    var check2index = sortarray.indexOf(check2value);
    var check3index = sortarray.indexOf(check3value);
    var check4index = sortarray.indexOf(check4value);
   
    if(sortarray[check1index] == sortarray[check1index + 1] && sortarray[check1index +1] == sortarray[check1index +2]){
        if(sortarray[check2index] == sortarray[check2index + 1] || sortarray[check3index] == sortarray[check3index + 1] || sortarray[check4index] == sortarray[check4index] + 1){
            return ("Full House")
        }
    }
    if(sortarray[check2index] == sortarray[check2index + 1] && sortarray[check2index +1] == sortarray[check2index +2]){
        if(sortarray[check1index] == sortarray[check1index + 1] || sortarray[check3index] == sortarray[check3index + 1] || sortarray[check4index] == sortarray[check4index] + 1){
            return ("Full House")
        }
    }
    if(sortarray[check3index] == sortarray[check3index + 1] && sortarray[check3index +1] == sortarray[check3index +2]){
        if(sortarray[check2index] == sortarray[check2index + 1] || sortarray[check1index] == sortarray[check1index + 1 || sortarray[check4index] == sortarray[check4index] + 1]){
            return ("Full House")
        }
    }
    if(sortarray[check4index] == sortarray[check4index + 1] && sortarray[check4index +1] == sortarray[check4index +2]){
        if(sortarray[check2index] == sortarray[check2index + 1] || sortarray[check1index] == sortarray[check1index + 1 || sortarray[check3index] == sortarray[check3index] + 1]){
            return ("Full House")
        }
    }

    
}


////flush/////
if(plhandclub.length >= 5 || plhanddiamonds.length >= 5 || plhandhearts.length >= 5 || plhandspades.length >= 5){
    return ("Flush");
}


/////straight///////

if(plhandnums.unique().length >= 5){
    var sortednums = plhandnums.unique().sort();
    
    if(sortednums.includes("1")){
        if(sortednums.includes("j") && sortednums.includes("q") && sortednums.includes("k") && sortednums.includes("a")){
            return ("Straight")
        }
        if(sortednums.includes("9") && sortednums.includes("j") && sortednums.includes("q") && sortednums.includes("k")){
            return ("Straight")
        }
        if(sortednums.includes("8") && sortednums.includes("9") && sortednums.includes("j") && sortednums.includes("q")){
            return ("Straight")
        }
        if(sortednums.includes("7") && sortednums.includes("8") && sortednums.includes("9") && sortednums.includes("j")){
            return ("Straight")
        }
        if(sortednums.includes("6") && sortednums.includes("7") && sortednums.includes("8") && sortednums.includes("9")){
            return ("Straight")
        }
    }
    if(sortednums.includes("5")){
        if(sortednums.includes("9") && sortednums.includes("8") && sortednums.includes("7") && sortednums.includes("6")){
            return ("Straight")
        }
        if(sortednums.includes("8") && sortednums.includes("7") && sortednums.includes("6") && sortednums.includes("4")){
            return ("Straight")
        }
        if(sortednums.includes("7") && sortednums.includes("6") && sortednums.includes("4") && sortednums.includes("3")){
            return ("Straight")
        }
        if(sortednums.includes("6") && sortednums.includes("4") && sortednums.includes("3") && sortednums.includes("2")){
            return ("Straight")
        }
        if(sortednums.includes("4") && sortednums.includes("3") && sortednums.includes("2") && sortednums.includes("a")){
            return ("Straight")
        }   
    }
    if(sortednums.includes("5") && sortednums.includes("1")){
        if(sortednums.includes("9") && sortednums.includes("8") && sortednums.includes("7") && sortednums.includes("6")){
            return ("Straight")
        }
    }
    
}

///////3 of a kind//////
if(plhandnums.unique().sort().length <=5)
{
    var sortednums = plhandnums.sort();
    var num1 = sortednums.slice(0,1).toString();
    var num2 = sortednums.slice(1,2).toString();
    var num3 = sortednums.slice(2,3).toString();
    var num4 = sortednums.slice(3,4).toString();
    var num5 = sortednums.slice(4,5).toString();
    var num6 = sortednums.slice(5,6).toString();
    var num7 = sortednums.slice(6,7).toString();
    if(num1 == num2 && num2 == num3){
        return ("Three of a Kind")
    }
    if(num2 == num3 && num3 == num4){
        return ("Three of a Kind")
    }
    if(num3 == num4 && num4 == num5){
        return ("Three of a Kind")
    }
    if(num4 == num5 && num5 == num6){
        return ("Three of a Kind")
    }
    if(num5 == num6 && num6 == num7){
        return ("Three of a Kind")
    }
}


////////2 pairs//////
if(plhandnums.unique().length <= 5){
    return ("Two Pairs")
}

/////Pair//////
if (plhandnums.unique().length == 6){
    return ("Pair")
}


/////////Highcard//////
if(plhandnums.unique().length > 6){
    var sortednums = plhandnums.sort();
    var num1 = sortednums.slice(0,1).toString();
    var num2 = sortednums.slice(1,2).toString();
    var num3 = sortednums.slice(2,3).toString();
    var num4 = sortednums.slice(3,4).toString();
    var num5 = sortednums.slice(4,5).toString();
    var num6 = sortednums.slice(5,6).toString();
    var num7 = sortednums.slice(6,7).toString();
    if(num7 <=9){
        if(num1 = 1){
            return ("High Card: 10");
        }
        if(num1 != 1){
            return ("High Card: " + num7);
        }
    }
    if(num7 == "a"){
        return ("High Card: Ace")
    }
    if(num7 == "k" && sortednums.includes("a") == false){
        return ("High Card: King");
    }
    if(num7 == "k" && sortednums.includes("a") == true){
        return ("High Card: Ace")
    }
    if(num7 == "q" && sortednums.includes("a") == false){
        if(sortednums.includes("k") == false){
            return ("High Card: Queen")
        }
        if(sortednums.includes("k") == true){
            return ("High Card: King")
        }
    }
    if(num7 == "q" && sortednums.includes("a") == true){
        return ("High Card: Ace")
    }
    if(num7 == "j" && sortednums.includes("a") == false){
        return ("High Card: Jack");
    }
    if(num7 == "j" && sortednums.includes("a") == true){
        return ("High Card: Ace")
    }
    
}}

//////Next round btn and reload//////

document.getElementById("nextHandbtn").addEventListener('click', function(){
    
    
    window.location.reload();
});



///////display winner///////


var handarray = ["Royal Flush", "Straight Flush", "Quads", "Full House", "Flush", "Straight", "Three of a Kind", "Two Pairs", "Pair", "High Card: Ace",
"High Card: King", "High Card: Queen", "High Card: Jack", "High Card: 10", "High Card: 9", "High Card: 8", "High Card: 7", "High Card: 6", "High Card: 5",
"High Card: 4", "High Card: 3", "High Card: 2"];
var plhand = handarray.indexOf(cardHand(playercard1num, playercard1suit, playercard2num, playercard2suit));
var comp1hand = handarray.indexOf(cardHand(comp1card1num, comp1card1suit, comp1card2num, comp1card2suit));
var comp2hand = handarray.indexOf(cardHand(comp2card1num, comp2card1suit, comp2card2num, comp2card2suit));
var comp3hand = handarray.indexOf(cardHand(comp3card1num, comp3card1suit, comp3card2num, comp3card2suit));
var comp4hand = handarray.indexOf(cardHand(comp4card1num, comp4card1suit, comp4card2num, comp4card2suit));

var comparray = [plhand, comp1hand, comp2hand, comp3hand, comp4hand]
var sca = comparray.sort();


console.log(comparray);
console.log(sca);


document.getElementById("showHandsbtn").addEventListener('click',function winner(){
    
    if(plhand < comp1hand && plhand < comp2hand && plhand < comp3hand && plhand < comp4hand && plhand != -1 ){

        var para = document.createElement("p");
        var node = document.createTextNode("You Win the Hand!");
        para.appendChild(node);

        var element = document.getElementById("winner");
        return element.appendChild(para);

        
    }
    if(comp1hand < plhand && comp1hand < comp2hand && comp1hand < comp3hand && comp1hand < comp4hand && comp1hand != -1){
        var para1 = document.createElement("p");
        var node = document.createTextNode("Comp 1 Wins the Hand!");
        para1.appendChild(node);

        var element = document.getElementById("winner");
        return element.appendChild(para1);
    }
    if(comp2hand < plhand && comp2hand < comp1hand && comp2hand < comp3hand && comp2hand < comp4hand && comp2hand != -1){
        var para2 = document.createElement("p");
        var node = document.createTextNode("Comp 2 Wins the Hand!");
        para2.appendChild(node);

        var element = document.getElementById("winner");
        return element.appendChild(para2);
    }
    if(comp3hand < plhand && comp3hand < comp2hand && comp3hand < comp1hand && comp3hand < comp4hand && comp3hand != -1){
        var para3 = document.createElement("p");
        var node = document.createTextNode("Comp 3 Wins the Hand!");
        para3.appendChild(node);

        var element = document.getElementById("winner");
        return element.appendChild(para3);
    }
    if(comp4hand < plhand && comp4hand < comp2hand && comp4hand < comp3hand && comp4hand < comp1hand && comp4hand != -1){
        var para4 = document.createElement("p");
        var node = document.createTextNode("Comp 4 Wins the Hand!");
        para4.appendChild(node);

        var element = document.getElementById("winner");
        return element.appendChild(para4);
    }
    

    if(sca[0] == sca[1] && sca[1]<=9){


        var parat = document.createElement("p");
        var node = document.createTextNode("Tie!");
        parat.appendChild(node);

        var element = document.getElementById("winner");
        return element.appendChild(parat);
    }
    if(sca[0]>9 && sca[1] == sca[2]){
        var parat = document.createElement("p");
        var node = document.createTextNode("Tie!");
        parat.appendChild(node);

        var element = document.getElementById("winner");
        return element.appendChild(parat);
    }
    if(sca[0]>9 && sca[1] >9 && sca[2]== sca[3]){
        var parat = document.createElement("p");
        var node = document.createTextNode("Tie!");
        parat.appendChild(node);

        var element = document.getElementById("winner");
        return element.appendChild(parat);
    }
    

})




///// Player Scores///////

var playerscore = document.createElement("p"); 
    var node = document.createTextNode("Chips: " + score);
    playerscore.appendChild(node);

    var element = document.getElementById("playerscore");
    element.appendChild(playerscore);

document.getElementById("card3btn").addEventListener('click', function(){
            
    playerscore.removeChild(node);
        
    score = Math.ceil(score -2);
    window.localStorage.setItem('score', JSON.stringify(score));

    
    var playerscore1 = document.createElement("p"); 
    var node1 = document.createTextNode("Chips: " + score);
    playerscore1.appendChild(node1);
    
    var element1 = document.getElementById("playerscore");
    element1.appendChild(playerscore1);

    document.getElementById("card5btn").addEventListener('click', function(){
        playerscore1.remove();
    })
    
        
        
        
})

document.getElementById("card5btn").addEventListener('click', function(){
            
    document.getElementById("playerscore")
        
    score = Math.ceil(score -4);
    window.localStorage.setItem('score', JSON.stringify(score));

    
    var playerscore1 = document.createElement("p"); 
    var node1 = document.createTextNode("Chips: " + score);
    playerscore1.appendChild(node1);
    
    var element1 = document.getElementById("playerscore");
    element1.appendChild(playerscore1);
    
        
        
        
})

document.getElementById("showHandsbtn").addEventListener('click', function(){
    
    var text = document.getElementById("winner").innerHTML
    console.log(text);
    
    if(text == "<p>Tie!</p>"){
        if(plhand <= comp1hand && plhand <= comp2hand && plhand <= comp3hand && plhand <= comp4hand){
            var count = 0;
            for(var i = 0; i < comparray.length; ++i){
                if(comparray[i] == (plhand))
                    count++;
                    
            }
            score = Math.ceil(score + (30/count));
                    window.localStorage.setItem('score', JSON.stringify(score));
                    console.log(count);
        }
    }
    
    if(text == "<p>You Win the Hand!</p>"){
    score = Math.ceil(score +30);
    window.localStorage.setItem('score', JSON.stringify(score));

    var playerscore1 = document.createElement("p"); 
    var node1 = document.createTextNode("Chips: " + score);
    playerscore1.appendChild(node1);

    var element1 = document.getElementById("playerscore");
    element1.appendChild(playerscore1);
}})



///// Comp1 Scores///////

var comp1score = document.createElement("p"); 
    var c1node = document.createTextNode("Chips: " + c1score);
    comp1score.appendChild(c1node);

    var c1element = document.getElementById("comp1score");
    c1element.appendChild(comp1score);

document.getElementById("card3btn").addEventListener('click', function(){
            
    comp1score.removeChild(c1node);
        
    c1score = Math.ceil(c1score -2);
    window.localStorage.setItem('c1score', JSON.stringify(c1score));

    
    var playerscore1 = document.createElement("p"); 
    var node1 = document.createTextNode("Chips: " + c1score);
    playerscore1.appendChild(node1);
    
    var element1 = document.getElementById("comp1score");
    element1.appendChild(playerscore1);

    document.getElementById("card5btn").addEventListener('click', function(){
        playerscore1.remove();
    })
    
        
        
        
})

document.getElementById("card5btn").addEventListener('click', function(){
            
    document.getElementById("comp1score")
        
    c1score = Math.ceil(c1score -4);
    window.localStorage.setItem('c1score', JSON.stringify(c1score));

    
    var playerscore1 = document.createElement("p"); 
    var node1 = document.createTextNode("Chips: " + c1score);
    playerscore1.appendChild(node1);
    
    var element1 = document.getElementById("comp1score");
    element1.appendChild(playerscore1);
    
        
        
        
})

document.getElementById("showHandsbtn").addEventListener('click', function(){
    
    var text = document.getElementById("winner").innerHTML
    console.log(text);
    
    if(text == "<p>Tie!</p>"){
        if(comp1hand <= plhand && comp1hand <= comp2hand && comp1hand <= comp3hand && comp1hand <= comp4hand){
            var count = 0;
            for(var i = 0; i < comparray.length; ++i){
                if(comparray[i] == (comp1hand))
                    count++;
                   
            }
            c1score = Math.ceil(c1score + (30/count));
            window.localStorage.setItem('c1score', JSON.stringify(c1score));
            console.log(count);
        }
    }
    
    if(text == "<p>Comp 1 Wins the Hand!</p>"){
    c1score = Math.ceil(c1score +30);
    window.localStorage.setItem('c1score', JSON.stringify(c1score));

    var playerscore1 = document.createElement("p"); 
    var node1 = document.createTextNode("Chips: " + c1score);
    playerscore1.appendChild(node1);

    var element1 = document.getElementById("comp1score");
    element1.appendChild(playerscore1);

    
    
    
}})



///// Comp2 Scores///////




var comp2score = document.createElement("p"); 
    var c2node = document.createTextNode("Chips: " + c2score);
    comp2score.appendChild(c2node);

    var c2element = document.getElementById("comp2score");
    c2element.appendChild(comp2score);

document.getElementById("card3btn").addEventListener('click', function(){
            
    comp2score.removeChild(c2node);
        
    c2score = Math.ceil(c2score -2);
    window.localStorage.setItem('c2score', JSON.stringify(c2score));

    
    var playerscore1 = document.createElement("p"); 
    var node1 = document.createTextNode("Chips: " + c2score);
    playerscore1.appendChild(node1);
    
    var element1 = document.getElementById("comp2score");
    element1.appendChild(playerscore1);

    document.getElementById("card5btn").addEventListener('click', function(){
        playerscore1.remove();
    })
    
        
        
        
})

document.getElementById("card5btn").addEventListener('click', function(){
            
    document.getElementById("comp2score")
        
    c2score = Math.ceil(c2score -4);
    window.localStorage.setItem('c2score', JSON.stringify(c2score));

    
    
    var playerscore1 = document.createElement("p"); 
    var node1 = document.createTextNode("Chips: " + c2score);
    playerscore1.appendChild(node1);
    
    var element1 = document.getElementById("comp2score");
    element1.appendChild(playerscore1);
    
        
        
        
})

document.getElementById("showHandsbtn").addEventListener('click', function(){
    
    var text = document.getElementById("winner").innerHTML
    console.log(text);
    
    if(text == "<p>Tie!</p>"){
        if(comp2hand <= comp1hand && comp2hand <= plhand && comp2hand <= comp3hand && comp2hand <= comp4hand){
            var count = 0;
            for(var i = 0; i < comparray.length; ++i){
                if(comparray[i] == (comp2hand))
                    count++;
                    
            }
            c2score = Math.ceil(c2score + (30/count));
                    window.localStorage.setItem('c2score', JSON.stringify(c2score));
                    console.log(count);
        }
    }
    
    if(text == "<p>Comp 2 Wins the Hand!</p>"){
    c2score = Math.ceil(c2score +30);
    window.localStorage.setItem('c2score', JSON.stringify(c2score));

    var playerscore1 = document.createElement("p"); 
    var node1 = document.createTextNode("Chips: " + c2score);
    playerscore1.appendChild(node1);

    var element1 = document.getElementById("comp2score");
    element1.appendChild(playerscore1);

    
    
    
}})




///// Comp3 Scores///////

var comp3score = document.createElement("p"); 
    var c3node = document.createTextNode("Chips: " + c3score);
    comp3score.appendChild(c3node);

    var c3element = document.getElementById("comp3score");
    c3element.appendChild(comp3score);

document.getElementById("card3btn").addEventListener('click', function(){
            
    comp3score.removeChild(c3node);
        
    c3score = Math.ceil(c3score -2);
    window.localStorage.setItem('c3score', JSON.stringify(c3score));

    
    var playerscore1 = document.createElement("p"); 
    var node1 = document.createTextNode("Chips: " + c3score);
    playerscore1.appendChild(node1);
    
    var element1 = document.getElementById("comp3score");
    element1.appendChild(playerscore1);

    document.getElementById("card5btn").addEventListener('click', function(){
        playerscore1.remove();
    })
    
        
        
        
})

document.getElementById("card5btn").addEventListener('click', function(){
            
    document.getElementById("comp3score")
        
    c3score = Math.ceil(c3score -4);
    window.localStorage.setItem('c3score', JSON.stringify(c3score));

    
    
    var playerscore1 = document.createElement("p"); 
    var node1 = document.createTextNode("Chips: " + c3score);
    playerscore1.appendChild(node1);
    
    var element1 = document.getElementById("comp3score");
    element1.appendChild(playerscore1);
    
        
        
        
})

document.getElementById("showHandsbtn").addEventListener('click', function(){
    
    var text = document.getElementById("winner").innerHTML
    console.log(text);
    
    if(text == "<p>Tie!</p>"){
        if(comp3hand <= comp1hand && comp3hand <= comp2hand && comp3hand <= plhand && comp3hand <= comp4hand){
            var count = 0;
            for(var i = 0; i < comparray.length; ++i){
                if(comparray[i] == (comp3hand))
                    count++;
                    
            }
            c3score = Math.ceil(c3score + (30/count));
                    window.localStorage.setItem('c3score', JSON.stringify(c3score));
                    console.log(count);
        }
    }
    
    
    if(text == "<p>Comp 3 Wins the Hand!</p>"){
    c3score = Math.ceil(c3score +30);
    window.localStorage.setItem('c3score', JSON.stringify(c3score));

    var playerscore1 = document.createElement("p"); 
    var node1 = document.createTextNode("Chips: " + c3score);
    playerscore1.appendChild(node1);

    var element1 = document.getElementById("comp3score");
    element1.appendChild(playerscore1);

    
    
    
}})


///// Comp4 Scores///////

var comp4score = document.createElement("p"); 
    var c4node = document.createTextNode("Chips: " + c4score);
    comp4score.appendChild(c4node);

    var c4element = document.getElementById("comp4score");
    c4element.appendChild(comp4score);

document.getElementById("card3btn").addEventListener('click', function(){
            
    comp4score.removeChild(c4node);
        
    c4score = Math.ceil(c4score -2);
    window.localStorage.setItem('c4score', JSON.stringify(c4score));

    
    
    var playerscore1 = document.createElement("p"); 
    var node1 = document.createTextNode("Chips: " + c4score);
    playerscore1.appendChild(node1);
    
    var element1 = document.getElementById("comp4score");
    element1.appendChild(playerscore1);

    document.getElementById("card5btn").addEventListener('click', function(){
        playerscore1.remove();
    })
    
        
        
        
})

document.getElementById("card5btn").addEventListener('click', function(){
            
    document.getElementById("comp4score")
        
    c4score = Math.ceil(c4score -4);
    window.localStorage.setItem('c4score', JSON.stringify(c4score));

    
    
    var playerscore1 = document.createElement("p"); 
    var node1 = document.createTextNode("Chips: " + c4score);
    playerscore1.appendChild(node1);
    
    var element1 = document.getElementById("comp4score");
    element1.appendChild(playerscore1);
    
        
        
        
})

document.getElementById("showHandsbtn").addEventListener('click', function(){
    
    var text = document.getElementById("winner").innerHTML
    console.log(text);
    
    if(text == "<p>Tie!</p>"){
        if(comp4hand <= comp1hand && comp4hand <= comp2hand && comp4hand <= comp3hand && comp4hand <= plhand){
            var count = 0;
            for(var i = 0; i < comparray.length; ++i){
                if(comparray[i] == (comp4hand))
                    count++;
                    
                    console.log(count);
            }
            console.log(30/count);
                    c4score = Math.ceil(c4score + (30/count));
                    window.localStorage.setItem('c4score', JSON.stringify(c4score));
        }
    }
    
    if(text == "<p>Comp 4 Wins the Hand!</p>"){
    c4score = Math.ceil(c4score +30);
    window.localStorage.setItem('c4score', JSON.stringify(c4score));

    var playerscore1 = document.createElement("p"); 
    var node1 = document.createTextNode("Chips: " + c4score);
    playerscore1.appendChild(node1);

    var element1 = document.getElementById("comp4score");
    element1.appendChild(playerscore1);

    
    
    
}})

//////Chip Dispersal when player folds///////

document.getElementById("foldbtn").addEventListener('click', function(){

    var random = Math.floor(Math.random()*12);

    if(random == 0){
    c1score = Math.ceil(c1score + (26/4));
    window.localStorage.setItem('c1score', JSON.stringify(c1score));

    c2score = Math.ceil(c2score + (26/4));
    window.localStorage.setItem('c2score', JSON.stringify(c2score));

    c3score = Math.ceil(c3score + (26/4));
    window.localStorage.setItem('c3score', JSON.stringify(c3score));

    c4score = Math.ceil(c4score + (26/4));
    window.localStorage.setItem('c4score', JSON.stringify(c4score));
    }

    if(random == 1){
        c1score = Math.ceil(c1score + 26);
    window.localStorage.setItem('c1score', JSON.stringify(c1score));
    }

    if(random == 2){
        c2score = Math.ceil(c2score + 26);
    window.localStorage.setItem('c2score', JSON.stringify(c2score));
    }

    if(random == 3){
        c3score = Math.ceil(c3score + 26);
    window.localStorage.setItem('c3score', JSON.stringify(c3score));
    }

    if(random == 4){
        c4score = Math.ceil(c4score + 26);
    window.localStorage.setItem('c4score', JSON.stringify(c4score));
    }

    if (random ==5){
        c1score = Math.ceil(c1score + (26/2));
        window.localStorage.setItem('c1score', JSON.stringify(c1score));

        c2score = Math.ceil(c2score + (26/2));
        window.localStorage.setItem('c2score', JSON.stringify(c2score));
    }

    if(random == 6){
        c1score = Math.ceil(c1score + (26/2));
        window.localStorage.setItem('c1score', JSON.stringify(c1score));
        c3score = Math.ceil(c3score + (26/2));
        window.localStorage.setItem('c3score', JSON.stringify(c3score));
    }

    if(random == 7){
        c1score = Math.ceil(c1score + (26/2));
        window.localStorage.setItem('c1score', JSON.stringify(c1score));
        c4score = Math.ceil(c4score + (26/2));
        window.localStorage.setItem('c4score', JSON.stringify(c4score));
    }

    if(random == 8){
        c2score = Math.ceil(c2score + (26/2));
        window.localStorage.setItem('c2score', JSON.stringify(c2score));
        c3score = Math.ceil(c3score + (26/2));
        window.localStorage.setItem('c3score', JSON.stringify(c3score));
    }

    if(random == 9){
        c2score = Math.ceil(c2score + (26/2));
        window.localStorage.setItem('c2score', JSON.stringify(c2score));
        c4score = Math.ceil(c4score + (26/2));
        window.localStorage.setItem('c4score', JSON.stringify(c4score));
    }

    if(random == 10){
        c3score = Math.ceil(c3score + (26/2));
        window.localStorage.setItem('c3score', JSON.stringify(c3score));
        c4score = Math.ceil(c4score + (26/2));
        window.localStorage.setItem('c4score', JSON.stringify(c4score));
    }

    if(random == 11){
        c1score = Math.ceil(c1score + (26/2));
        window.localStorage.setItem('c1score', JSON.stringify(c1score));
        c2score = Math.ceil(c2score + (26/2));
        window.localStorage.setItem('c2score', JSON.stringify(c2score));
        c3score = Math.ceil(c3score + (26/2));
        window.localStorage.setItem('c3score', JSON.stringify(c3score));
    }

    if(random == 12){
        c2score = Math.ceil(c2score + (26/2));
        window.localStorage.setItem('c2score', JSON.stringify(c2score));
        c3score = Math.ceil(c3score + (26/2));
        window.localStorage.setItem('c3score', JSON.stringify(c3score));
        c4score = Math.ceil(c4score + (26/2));
        window.localStorage.setItem('c4score', JSON.stringify(c4score));
    }

    if(random == 12){
        c1score = Math.ceil(c1score + (26/2));
        window.localStorage.setItem('c1score', JSON.stringify(c1score));
        c3score = Math.ceil(c3score + (26/2));
        window.localStorage.setItem('c3score', JSON.stringify(c3score));
        c4score = Math.ceil(c4score + (26/2));
        window.localStorage.setItem('c4score', JSON.stringify(c4score));
    }
})









    
    





