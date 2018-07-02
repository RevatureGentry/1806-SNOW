var cards = [];
var normalDifficulty;
var normalDraw;
var beginnerDraw;

for (element of document.querySelectorAll("*")) {
    if (element.tagName != "IMG") element.setAttribute("draggable", "false");
}

window.onload = function() {
    chooseDifficulty();
    dragCard();
    document.getElementById("playagain").addEventListener("click", function(event) {
        document.getElementById("text").textContent = "Select Difficulty";
        let difficultyButtons = document.getElementsByClassName("difficulty");
        document.querySelector(".reset").style.display = "none";
        for (button of difficultyButtons) {
            button.style.display = "block";
        }
        let victoryCards = document.querySelectorAll(".victory > img");
        for (card of victoryCards) {
            card.parentNode.removeChild(card);
        }
        document.querySelector("#deck > img").removeEventListener("click", beginnerDraw);
        document.querySelector("#deck > img").removeEventListener("click", normalDraw);
    });
}

function drawCardBeginner() {
    document.querySelector("#deck > img").addEventListener("click", beginnerDraw = function(event) {
        let discardPile = document.getElementById("discard");
        let deckPile = document.getElementById("deck");
        if (deckPile.childNodes.length < 4) {
            let discarded = document.querySelectorAll("#discard > img");
            for (card of discarded) {
                discardPile.removeChild(card);
                card.style.display = "none";
                deckPile.appendChild(card);
            }
            if (deckPile.childNodes.length > 3) document.querySelector("#deck > img").style.opacity = 1;
            //console.log("refill");
        }
        else {
            let cardElement = deckPile.childNodes[3];
            deckPile.removeChild(cardElement);
            //console.log(document.querySelectorAll("#discard > img"));
            if (document.querySelectorAll("#discard > img").length > 0) {
                for (card of document.querySelectorAll("#discard > img")) {
                    card.style.display = "none";
                }
            }
            discardPile.appendChild(cardElement);
            discardPile.lastElementChild.style.display = "block";
            if (deckPile.childNodes.length < 4) {
                document.querySelector("#deck > img").style.opacity = 0;
                //console.log("empty");
            }
        }
        console.log(deckPile.childNodes);
    });
}

function drawCardNormal() {
    document.querySelector("#deck > img").addEventListener("click", normalDraw = function(event) {
        let discardPile = document.getElementById("discard");
        let deckPile = document.getElementById("deck");
        if (deckPile.childNodes.length < 4) {
            let discarded = document.querySelectorAll("#discard > img");
            for (card of discarded) {
                discardPile.removeChild(card);
                card.style.display = "none";
                deckPile.appendChild(card);
            }
            if (deckPile.childNodes.length > 3) document.querySelector("#deck > img").style.opacity = 1;
            //console.log("refill");
        }
        else if (deckPile.childNodes < 6) {
            let cardElements = Array.from(deckPile.childNodes).slice(3);
            for (let element of cardElements) {
                deckPile.removeChild(element);
                //console.log(document.querySelectorAll("#discard > img"));
                if (document.querySelectorAll("#discard > img").length > 0) {
                    for (card of document.querySelectorAll("#discard > img")) {
                        card.style.display = "none";
                    }
                }
                discardPile.appendChild(element);
            }
            discardPile.lastElementChild.style.display = "block";
            if (deckPile.childNodes.length < 4) {
                document.querySelector("#deck > img").style.opacity = 0;
                //console.log("empty");
            }
        }
        else {
            let cardElements = Array.from(deckPile.childNodes).slice(3,6);
            for (let element of cardElements) {
                deckPile.removeChild(element);
                //console.log(document.querySelectorAll("#discard > img"));
                if (document.querySelectorAll("#discard > img").length > 0) {
                    for (card of document.querySelectorAll("#discard > img")) {
                        card.style.display = "none";
                    }
                }
                discardPile.appendChild(element);
            }
            discardPile.lastElementChild.style.display = "block";
            if (deckPile.childNodes.length < 4) {
                document.querySelector("#deck > img").style.opacity = 0;
                //console.log("empty");
            }
        }
        console.log(deckPile.childNodes);
    });
}

function dragCard() {
    var dragged;
    var card;
    var droppable = [];
    /* events fired on the draggable target */
    document.addEventListener("drag", function( event ) {
  
    });
  
    document.addEventListener("dragstart", function( event ) {
        // store a ref. on the dragged elem
        dragged = event.target;
        //console.log(dragged);
        // make it half transparent
        event.target.style.opacity = .5;
        // Use card for extract methods
        card = dragged.getAttribute("src");
        //console.log(extractValue(card));
        for (item of cards) {
            //console.log(!(item.parentNode == null));
            if(!(item.getElement().parentNode == null)) {
                if (extractValue(card) - item.getValue() == 1 &&
                extractSuit(card) == item.getSuit() &&
                item.getElement().parentNode.getAttribute("class").includes("victory") &&
                dragged.parentNode.lastElementChild == dragged) {
                    droppable.push(item.getElement().parentNode);
                }
                if(extractValue(card) - item.getValue() == -1 &&
                item.getElement().parentNode.parentNode.getAttribute("id") == "stacks" &&
                item.getElement().parentNode.lastElementChild == item.getElement()) {
                    if((extractSuit(card) == 'C' || extractSuit(card) == 'S') &&
                    (item.getSuit() == 'H' || item.getSuit() == 'D'))
                    droppable.push(item.getElement().parentNode);
                    if((extractSuit(card) == 'H' || extractSuit(card) == 'D') &&
                    (item.getSuit() == 'C' || item.getSuit() == 'S'))
                    droppable.push(item.getElement().parentNode);
                }
            }
        }
        let vic = document.getElementsByClassName("victory");
        for (element of vic) {
            if (element.childNodes.length < 2 && extractValue(card) == 1 &&
            element.getAttribute("id") == extractSuit(card)) {
                droppable.push(element);
            }
        }
        let stacks = document.querySelectorAll('[id^="stack"]');
        for (element of stacks) {
            if (element.childNodes.length < 2 && extractValue(card) == 13) {
                droppable.push(element);
            }
        }
        //console.log(sameSuit);
        droppable.push(dragged.parentNode);
        for (element of droppable) {
            element.classList.add("dropzone");
        }
        //console.log(droppable);
    });
  
    document.addEventListener("dragend", function( event ) {
        // reset the transparency
        event.target.style.opacity = "";
        let elements = document.querySelectorAll("*")
        for (element of elements){
            element.classList.remove("dropzone");
        }
        droppable = [];
    });
  
    /* events fired on the drop targets */
    document.addEventListener("dragover", function( event ) {
        // prevent default to allow drop
        event.preventDefault();
    });
  
    document.addEventListener("dragenter", function( event ) {
        // highlight potential drop target when the draggable element enters it
        //console.log(event.target.className);
        //console.log(event.target);
        if ( event.target.className.includes("dropzone")) {
            event.target.style.opacity = .5;
            //console.log(event.target);
        }
        if (event.target.tagName == "IMG" &&
        event.target.parentNode.className.includes("dropzone") ) {
            event.target.style.opacity = .5;
            //console.log(event.target);
        }
  
    });
  
    document.addEventListener("dragleave", function( event ) {
        // reset background of potential drop target when the draggable element leaves it
        if ( event.target.className.includes("dropzone") ) {
            event.target.style.opacity = 1;
        }
        if (event.target.tagName == "IMG" &&
        event.target.parentNode.className.includes("dropzone") ) {
            event.target.style.opacity = 1;
        }
  
    });
  
    document.addEventListener("drop", function( event ) {
        // prevent default action (open as link for some elements)
        event.preventDefault();
        //console.log(event.target);
        // move dragged elem to the selected drop target
        let div = dragged.parentNode;
        let followingCards = document.querySelectorAll(`[src="${dragged.getAttribute('src')}"] ~ img`);
        if (div == document.getElementById("discard") &&
        event.target.parentNode != document.getElementById("discard") &&
        event.target != document.getElementById("discard")) {
            if (event.target.className.includes("dropzone")) {
                event.target.style.background = "";
                div.removeChild(dragged);
                event.target.appendChild(dragged);
                if (div.lastElementChild != null) div.lastElementChild.style.display = "block";
                event.target.style.opacity = 1;
            }
            if (event.target.parentNode.className.includes("dropzone")) {
                let dragTarget = event.target.parentNode;
                dragTarget.style.background = "";
                div.removeChild( dragged );
                dragTarget.appendChild( dragged );
                if (div.lastElementChild != null) div.lastElementChild.style.display = "block";
                event.target.style.opacity = 1;
            }
            refreshVictory();
        }
        if ( event.target.className.includes("dropzone") &&
        div != document.getElementById("discard") ) {
            event.target.style.background = "";
            //console.log(followingCards);
            for (card of followingCards) {
                card.parentNode.removeChild(card);
            }
            div.removeChild( dragged );
            event.target.appendChild( dragged );
            for (card of followingCards) {
                event.target.appendChild(card);
            }
            for (card of cards) {
                if (card.getElement() == div.lastElementChild) card.flip(true);
            }
            event.target.style.opacity = 1;
            //console.log("direct");
            refreshVictory();
        }
        if (event.target.tagName == "IMG" &&
        event.target.parentNode.className.includes("dropzone") &&
        div != document.getElementById("discard") ) {
            let dragTarget = event.target.parentNode;
            dragTarget.style.background = "";
            //console.log(followingCards);
            for (card of followingCards) {
                card.parentNode.removeChild(card);
            }
            div.removeChild( dragged );
            // Without variable, this causes problems when dragging an image to itself
            dragTarget.appendChild( dragged );
            for (card of followingCards) {
                dragTarget.appendChild(card);
            }
            for (card of cards) {
                if (card.getElement() == div.lastElementChild) card.flip(true);
            }
            event.target.style.opacity = 1;
            //console.log("image");
            refreshVictory();
        }
        event.target.style.opacity = 1;
        winGame();
    });
}

// Quick functions to parse filenames for relevant data
function extractValue(source) {
    var val;
    if (source.length == 12) val = source.charAt(6);
    if (source.length == 13) val = source.substr(6,2);
    if (!isNaN(val)) val = Number(val);
    if (val == 'A') val = 1;
    if (val == 'J') val = 11;
    if (val == 'Q') val = 12;
    if (val == 'K') val = 13;
    return val;
}

function extractSuit(source) {
    if (source.length == 12) return source.charAt(7);
    if (source.length == 13) return source.charAt(8);
}

// Victory pile refresher
function refreshVictory() {
    for (let card of document.querySelectorAll(".victory > img")) {
        //console.log(card);
        card.style.display = "none";
    }
    for (let card of document.querySelectorAll(".victory > img")) {
        if (card.parentNode.lastElementChild == card) {
            card.style.display = "block";
        }
    }
}

// Definition of card objects to store data including corresponding elements
let Card = (function() {
    let valueSymbol = Symbol();
    let suitSymbol = Symbol();
    let elementSymbol = Symbol();
    let imageSymbol = Symbol();

    function Card(element) {
        this[elementSymbol] = element;
        this[valueSymbol] = extractValue(element.getAttribute("src"));
        this[suitSymbol] = extractSuit(element.getAttribute("src"));
        this[imageSymbol] = element.getAttribute("src");
    }

    Card.prototype.getElement = function() {
        return this[elementSymbol];
    }

    Card.prototype.getValue = function() {
        return this[valueSymbol];
    }

    Card.prototype.setValue = function(value) {
        this[valueSymbol] = value;
    }

    Card.prototype.getSuit = function() {
        return this[suitSymbol];
    }

    Card.prototype.setSuit = function(suit) {
        this[suitSymbol] = suit;
    }

    Card.prototype.getImage = function() {
        return this[imageSymbol];
    }

    Card.prototype.flip = function(face) {
        if (face == true) {
            this[elementSymbol].setAttribute("src", this[imageSymbol]);
            this[elementSymbol].setAttribute("draggable", true);
        }
        else {
            this[elementSymbol].setAttribute("src", "./img/red_back.png");
            this[elementSymbol].setAttribute("draggable", false);
        }
    }

    return Card;
})();

function chooseDifficulty () {
    var beginnerButton = document.getElementById("beginner");
    var normalButton = document.getElementById("normal");
    beginnerButton.addEventListener("click", function(event) {
        normalDifficulty = false;
        drawCardBeginner();
        startGame();
    });
    normalButton.addEventListener("click", function(event) {
        normalDifficulty = true;
        drawCardNormal();
        startGame();
    });
}

function startGame() {
    // Instantiate card objects, populate master array
    document.getElementById("message").style.display = "none";
    document.getElementById("buttons").style.display = "none";
    document.getElementById("top").style.visibility = "visible";
    document.querySelector("#deck > img").style.opacity = 1;
    cards = [];
    var deck = [];
    for (i = 1; i < 14; i++) {
        let val = String(i);
        if(i == 1) val = 'A'
        if(i == 11) val = 'J';
        if(i == 12) val = 'Q';
        if(i == 13) val = 'K';
        for (j = 0; j < 4; j++) {
            let suit;
            if(j == 0) suit = 'H';
            if(j == 1) suit = 'D';
            if(j == 2) suit = 'S';
            if(j == 3) suit = 'C';
            let cardName = val + suit;
            let image = document.createElement("img");
            image.setAttribute("src", `./img/${val + suit}.png`);
            image.setAttribute("class", "img-fluid");
            this["card"+cardName] = new Card(image);
            cards.push(this["card"+cardName]);
            deck.push(this["card"+cardName]);
        }
    }

    // Shuffle deck, populate stacks
    deck.sort(function(a, b){return 0.5 - Math.random()});
    for (i = 1; i < 8; i++) {
        id = "stack" + i;
        for (j = 0; j < i; j++) {
            document.getElementById(id).appendChild(deck[0].getElement());
            if (i - j > 1) deck[0].flip(false);
            deck.shift();
        }
    }
    while (deck.length > 0) {
        document.getElementById("deck").appendChild(deck[0].getElement());
        deck[0].getElement().style.display = "none";
        deck.shift();
    }
}

function winGame() {
    let kingCount = 0;
    for (card of cards) {
        if (card.getElement().parentNode.className.includes("victory")
        && card.getValue() == 13) {
            kingCount++;
        }
    }
    if (kingCount >= 4) {
        document.getElementById("top").style.visibility = "hidden";
        document.getElementById("text").textContent = "You Win!";
        let difficultyButtons = document.getElementsByClassName("difficulty");
        for (button of difficultyButtons) {
            button.style.display = "none";
        }
        document.querySelector(".reset").style.display = "block";
        document.getElementById("message").style.display = "block";
        document.getElementById("buttons").style.display = "block";
    }
}

// Known bugs:
// Draggable: false not working for some reason
// On restart, difficulty buttons positioned incorrectly