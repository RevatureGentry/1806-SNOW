window.onload = function(){
    // Get a reference to EVERY HTML element on the page
    let elements = document.querySelectorAll("*");
    console.log(elements);

    // for(let i = 0; i < elements.length; i++)

    // the for...of iterates through every element in an Iterable object
    /*
    for(let element of elements){
        element.addEventListener('click', () =>
        alert(`Capturing: ${element.tagName}`, true)
        );
        element.addEventListener('click', () =>
        alert(`Bubbling: ${element.tagName}`, false)
    
        );
    };
    */

    let listItems = document.getElementsByTagName("li");
    console.log(listItems);

    for(let li of listItems){
        li.addEventListener('mouseover', () => li.style.color = 'red');
        li.addEventListener('mouseover', () => li.style.fontSize = '48px');
        li.addEventListener('mouseout', () => li.style.color = 'black');
        li.addEventListener('mouseout', () => li.style.fontSize = '14px');

    }

}

var c_list = document.getElementsByClassName("myCanvas");
var counter = 1;
for(let c of c_list){
    var ctx = c.getContext("2d");
    ctx.rotate(Math.PI / 180);
    ctx.fillRect(50, 20, 100, 50);
    
}
