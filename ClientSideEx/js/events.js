window.onload = function(){

    //get a reference to EVERY HTML element on the page 
    let elements = document.querySelectorAll("*");

    // for(let i = 0; i < elements.length; i++){
        // do stuff with elements
    //}    
    
    /* the for...of loop iterates through every element in an iterable object
    for (let element of elements){
        element.addEventListener('click', e => this.alert(`Capturing: ${element.tagName}`), true);
        element.addEventListener('click', () => alert(`Bubbling: ${element.tagName}`));
    } */

    let listItems = document.getElementsByTagName("li");
    for (let li of listItems){
        li.addEventListener('mouseover', () => li.style.color = 'red');
        li.addEventListener('mouseover', () => li.style.fontSize = '30px');
        li.addEventListener('mouseout', () => li.style.color = 'black');
        li.addEventListener('mouseout', () => li.style.fontSize = '16px');
    }
}