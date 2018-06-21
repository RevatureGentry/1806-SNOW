window.onload = function() {

    // Get a reference to EVERY HTML ELEMENT...on the page. 
    let elements = document.querySelectorAll("*");

    // for (let i=0; i<elements.length; i++) This is not the only way to iterate through the array.

    //The for...of iterates through every element in an Iterable object. 
    /* for (let element of elements) { //Syntax: for ([each] <variable element> of <iterable object>)... 
        element.addEventListener('click', () => alert(`Capturing: ${element.tagName}`), true);
        element.addEventListener('click', () => alert(`Bubbling: ${element.tagName}`));
    } Shift+Alt+A to uncomment all. */

    let listItems = document.getElementsByTagName("li");
    for (let li of listItems) {
        li.addEventListener('mouseover', () => li.style.color = 'red'); //The style element on any property allows you to mess with it.
        li.addEventListener('mouseout', () => li.style.color = 'black');
        li.addEventListener('mouseover', () => li.style.fontSize = '18px');
        li.addEventListener('mouseout', () => li.style.fontSize = '16px');
    }
}