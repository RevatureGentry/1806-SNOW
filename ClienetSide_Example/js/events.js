window.onload = function(){
    // Get a reference to EVERY HTML element on the page
    let elements = document.querySelectorAll("*");
    console.log(elements);

    //for (let i = 0; i < elements.length; i++){
            // fo stuff with elements[i]
    //}

    // the for...of interates through every element in and Iterable oibject
    for (let element of elements){
        element.addEventListener('click', e => alert(`Capturing: ${element.tagName}`), true);
        element.addEventListener('click', e => alert(`Bubbling: ${element.tagName}`));
    }
    
    let listItems = document.getElementsByTagName("li");
    for (let li of listItems){
        li.addEventListener('mouseover', () => li.style.color = "red");
        li.addEventListener('mouseover', () => li.style.fontSize = "40px");
        li.addEventListener('mouseout', () => li.style.color = "black");
        li.addEventListener('mouseout', () => li.style.fontSize = "16px");
    }
}