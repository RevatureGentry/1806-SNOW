window.onload = function() {
    // get a reference to the ajax button
    document.getElementById('ajaxbutton').addEventListener('click', fireRequest);
}


function fireRequest() {
    const url = "https://jsonplaceholder.typicode.com/todos"

    //1. declare and instanciate an object type XMLHttpRequest
    let xhr = new XMLHttpRequest();

    //2 set a function to the xhr.onreadystatechange event
    xhr.onreadystatechange = function() {
        if (xhr.readyState < 4) {
            console.log(`loading...${xhr.readyState}`);
        }
        // check to ensure the response has completed and has a status of 200
        if (xhr.readyState === 4 && xhr.status === 200) {
            // 5 handle the response
            let response = JSON.parse(xhr.responseText);
            console.log(response);
        }
    }
    //3 open a request to the url
    xhr.open("GET", url);

    // 4 send the request
    xhr.send();
}