window.onload = function(){
    // Get a reference to the ajaxButton
   // document.getElementById('ajaxButton').addEventListener('click',fireRequest);
    
    
}

let suits = ['spade', 'heart', 'diamond', 'club'];
let values = ['1','2','3','4','5','6','7','8','9','10','11','12','13'];
let deck = [];



let PlayingCard = (function() {
    let suitSymbol = Symbol('suit');
    let valueSymbol = Symbol('value');

    function PlayingCard(suit = 'Spades', value = 'two'){
        this[suitSymbol] = suit;
        this[valueSymbol] = value;
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

    return PlayingCard;
})();

for(let i = 0; i < suits.length; i++){
    for(let x = 0; x < values.length; x++){
        let n =  new PlayingCard(suits[i], values[x])
        deck.push(n);
    }
}
console.log(`Deck Suit:  ${deck[51].getSuit()}`);