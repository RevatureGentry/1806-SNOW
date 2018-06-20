window.onload = function() {
    var dragged;

    /* events fired on the draggable target */
    document.addEventListener("drag", function( event ) {
  
    }, false);
  
    document.addEventListener("dragstart", function( event ) {
        // store a ref. on the dragged elem
        dragged = event.target;
        // make it half transparent
        event.target.style.opacity = .5;
    }, false);
  
    document.addEventListener("dragend", function( event ) {
        // reset the transparency
        event.target.style.opacity = "";
    }, false);
  
    /* events fired on the drop targets */
    document.addEventListener("dragover", function( event ) {
        // prevent default to allow drop
        event.preventDefault();
    }, false);
  
    document.addEventListener("dragenter", function( event ) {
        // highlight potential drop target when the draggable element enters it
        console.log("test");
        if ( event.target.className == "dropzone" ) {
            event.target.style.opacity = .5;
            console.log("droppable");
        }
  
    }, false);
  
    document.addEventListener("dragleave", function( event ) {
        // reset background of potential drop target when the draggable element leaves it
        if ( event.target.className == "dropzone" ) {
            event.target.style.opacity = 1;
        }
  
    }, false);
  
    document.addEventListener("drop", function( event ) {
        // prevent default action (open as link for some elements)
        event.preventDefault();
        // move dragged elem to the selected drop target
        if ( event.target.className == "dropzone" ) {
            event.target.style.background = "";
            dragged.parentNode.removeChild( dragged );
            event.target.appendChild( dragged );
        }
      
    }, false);
}

let Card = (function() {
    let valueSymbol = Symbol();
    let suitSymbol = Symbol();
    let faceSymbol = Symbol();

    function Card(value, suit, face) {
        this[valueSymbol] = value;
        this[suitSymbol] = suit;
        this[faceSymbol] = face;
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