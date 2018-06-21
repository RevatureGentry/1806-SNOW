//AJAX Example - Day 4, 6/21/2018

window.onload = function() { 
//Wakeup function - when the window loads, do this:
    //Get a reference to the ajaxButtton.
    document.getElementById('ajaxButton').addEventListener('click', fireRequest);
    document.getElementById('formNumBt').addEventListener('click', getPost);
    todoBody = document.getElementById('todosTableBody');
}

function getPost() {
    //Get form value.
    let value = parseInt(document.getElementById('formNumField').value, 10);
    console.log(`value: ${value}`);
    if (isNaN(value)) {
        console.log("ERROR: Not a number.");
        //TODO: Flash a notification.
    }
    else {
        let url = "https://jsonplaceholder.typicode.com/posts/" + value;
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.send();
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                let response = JSON.parse(xhr.responseText);
                updatePost(response);
            }
        }
    }
}
function updatePost(response) {
    console.log("Post: ", response);
    // Get Post Elements
    let postUser = document.getElementById('postUser');
    let postId = document.getElementById('postId');
    let postTitle = document.getElementById('postTitle');
    let postBody = document.getElementById('postBody');

    // Update Post Elements
    postUser.textContent = response.userId;
    postId.textContent = response.id;
    postTitle.textContent = response.title;
    postBody.textContent = response.body;
}

function fireRequest() {
    const url = "https://jsonplaceholder.typicode.com/todos";

    // AJAX Workflow - 5 Steps:
    let xhr = new XMLHttpRequest(); // Step 1: Declare and Instantiate xhr, an object of XMLHttpRequest.
    
    // Step 2: Set a function to the hxr.onreadystatechange event.
    xhr.onreadystatechange = function() {
        if (xhr.readyState < 4) {
            console.log("loading..." + xhr.readyState);
        }
        // Ensure the response has completed and has an HTTP status code of 200. 
        if (xhr.readyState === 4 && xhr.status === 200) { //If processing has completed and the status is 'OK'...
            // Step 5: Handle the response with your code. 
            let response = JSON.parse(xhr.responseText);
            console.log("Loaded. response = ", response);
            addRows(response);
        }
    }

    // Step 3: Open a request to the URL. 
    xhr.open('GET', url); //open("<REQUEST TYPE>", url to send the request to);
    
    // Step 4: Send the request.
    xhr.send();
}

function addRows(response) {
    let numComplete = 0;
    let numIncomplete = 0;
    for (let ajax of response) {
        // Programmatically add an HTML Element
        let todoBody = document.getElementById('todosTableBody');
        let todoCBody = document.getElementById('todosCompletedBody');
        let todoIcBody = document.getElementById('todosIncompletedBody');

        let row = document.createElement('tr');
        let idTd = document.createElement('td');
        let userIdTd = document.createElement('td');
        let titleTd = document.createElement('td');
        
        let row2 = document.createElement('tr');
        let idTd2 = document.createElement('td');
        let userIdTd2 = document.createElement('td');
        let titleTd2 = document.createElement('td');

        // Set each element's text content corresponding to the Object.
        idTd.textContent = ajax.id;
        userIdTd.textContent = ajax.userId;
        titleTd.textContent = ajax.title;

        idTd2.textContent = ajax.id;
        userIdTd2.textContent = ajax.userId;
        titleTd2.textContent = ajax.title;

        // Append HTML elements to row. 
        row.appendChild(idTd);
        row.appendChild(userIdTd);
        row.appendChild(titleTd);

        row2.appendChild(idTd2);
        row2.appendChild(userIdTd2);
        row2.appendChild(titleTd2);

        //Create a reference that holds the 'completed' value. 
        let completed = ajax.completed;

        //Change the style of the row based on if it's completed or not. 
        (completed) ? row.setAttribute('class', 'bg-success') : row.setAttribute('class', 'bg-danger');
        (completed) ? numComplete++ : numIncomplete++;


        // Add the loaded row to the body. 
        todoBody.appendChild(row);
        (completed) ? todoCBody.appendChild(row2) : todoIcBody.appendChild(row2);

    }
    
    //Update Todo Counters.
    document.getElementById('cCounter').textContent = numComplete;
    document.getElementById('icCounter').textContent = numComplete;
}