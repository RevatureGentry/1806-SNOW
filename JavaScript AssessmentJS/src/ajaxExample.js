windows.onload = function() {
    //Get a reference to the ajaxButton
    document.getElementById('ajaxButton').addEventListener('click', fireRequest);
}

function fireRequest(){
    const url = "https://jsonplaceholder.typicode.com/todos";

    // 1. Declare and instatiate an object of type XMLHttpRequest
    let xhr = new XMLHttpRequest();

    //2. Set a function to the xhr.onreadystatechange even
    xhr.onreadystatechange = function(){
        if (xhr.readyState < 4){
            console.log('loading...' + xhr.readyState);
        }
        //Check to ensure the response has completed and has a status of 200
        if (xhr.readyState === 4 && xhr.status === 200){
            // 5. Handle the response
            let response = JSON.parse(xhr.responseText);
        }
    }

    // 3. Open a request to the URL
    xhr.open("GET", url);

    // 4. We need to send the request
    xhr.send();
}
