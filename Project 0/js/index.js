var cards = [];

window.onload = function() {
    //console.log(card12C.getValue());
    dragCard();
}

function dragCard() {
    var dragged;
    var card;
    var droppable = [];
    /* events fired on the draggable target */
    document.addEventListener("drag", function( event ) {
  
    }, false);
  
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
            if (extractValue(card) - item.getValue() == 1 &&
            extractSuit(card) == item.getSuit() &&
            item.getElement().parentNode.getAttribute("class").includes("victory")) {
                droppable.push(item.getElement().parentNode);
            }
            if(extractValue(card) - item.getValue() == -1 &&
            item.getElement().parentNode.parentNode.getAttribute("id") == "stacks") {
                droppable.push(item.getElement().parentNode);
            }
            //Next-- test dragging multiple
        }
        //console.log(sameSuit);
        droppable.push(dragged.parentNode);
        for (element of droppable) {
            element.classList.add("dropzone");
        }
        console.log(droppable);
    }, false);
  
    document.addEventListener("dragend", function( event ) {
        // reset the transparency
        event.target.style.opacity = "";
        let elements = document.querySelectorAll("*")
        for (element of elements){
            element.classList.remove("dropzone");
        }
        droppable = [];
    }, false);
  
    /* events fired on the drop targets */
    document.addEventListener("dragover", function( event ) {
        // prevent default to allow drop
        event.preventDefault();
    }, false);
  
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
  
    }, false);
  
    document.addEventListener("dragleave", function( event ) {
        // reset background of potential drop target when the draggable element leaves it
        if ( event.target.className.includes("dropzone") ) {
            event.target.style.opacity = 1;
        }
        if (event.target.tagName == "IMG" &&
        event.target.parentNode.className.includes("dropzone") ) {
            event.target.style.opacity = 1;
        }
  
    }, false);
  
    document.addEventListener("drop", function( event ) {
        // prevent default action (open as link for some elements)
        event.preventDefault();
        // move dragged elem to the selected drop target
        if ( event.target.className.includes("dropzone") ) {
            event.target.style.background = "";
            dragged.parentNode.removeChild( dragged );
            event.target.appendChild( dragged );
            event.target.style.opacity = 1;
        }
        if (event.target.tagName == "IMG" &&
        event.target.parentNode.className.includes("dropzone") ) {
            let dragTarget = event.target.parentNode;
            dragTarget.style.background = "";
            //console.log("moved2");
            dragged.parentNode.removeChild( dragged );
            // Without variable, this causes problems when dragging an image to itself
            dragTarget.appendChild( dragged );
            event.target.style.opacity = 1;
        }
      
    }, false);
}

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

let Card = (function() {
    let valueSymbol = Symbol();
    let suitSymbol = Symbol();
    let faceSymbol = Symbol();
    let elementSymbol = Symbol();

    function Card(element, face) {
        this[elementSymbol] = element;
        this[valueSymbol] = extractValue(element.getAttribute("src"));
        this[suitSymbol] = extractSuit(element.getAttribute("src"));
        this[faceSymbol] = face;
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

    Card.prototype.getFace = function() {
        return this[faceSymbol];
    }

    Card.prototype.setFace = function(face) {
        this[faceSymbol] = face;
    }

    return Card;
})();

let cardPics = document.getElementsByTagName("img");
for (image of cardPics) {
    let cardName = extractValue(image.getAttribute("src")) + extractSuit(image.getAttribute("src"));
    this["card"+cardName] = new Card(image, true);
    cards.push(this["card"+cardName]);
}