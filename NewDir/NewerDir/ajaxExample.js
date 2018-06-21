window.onload = function() {
    // Get a reference to the ajaxButton
    document.getElementById('ajaxButton').addEventListener('click',fireRequest);
}

function fireRequest() {
    const url = "https://jsonplaceholder.typicode.com/todos";
    // 1.) Declare and instantiate an object of type XMLHttpRequest
    let xhr = new XMLHttpRequest();
    // 2.) Set a function to the xhr.OnReadyStateChange event
    xhr.onreadystatechange = function() {
        if (xhr.readyState < 4){console.log(`Loading... ReadyState ${xhr.readyState}`);}
        //Check to ensure the response has completed and has HTTP status code of 200
        if (xhr.readyState === 4 && xhr.status === 200) {
            // 5.) handle the response
            let response = JSON.parse(xhr.responseText);
            addRows(response);
        }
    }

    // 3.) Open a request to the URL
    xhr.open("GET",url);

    // 4.) Send the request
    xhr.send();
}


function addRows(response) {
    // The For ... of loop interates over every element of an iterable object
    let numComplete = 0
    let numIncomplete = 0
    for (let ajax of response) {
        // Prgammatically create HTML elements
        let row = document.createElement('tr');
        let idTd = document.createElement('td');
        let userIdTd = document.createElement('td');
        let titleTd = document.createElement('td');

        // Create a reference that holds the completed value
        let completed = ajax.completed;

        // Create holders for number of toDos
        // Set the text content of each cell in the row corresponding to the object
        idTd.TextContent = ajax.id;
        userIdTd.TextContent = ajax.userIdTd;
        titleTd.textContent = ajax.title;

        // We use the element.appendChild() method to dynamically add HTML elements
        row.appendChild(idTd);
        row.appendChild(userIdTd);
        row.appendChild(titleTd);

        // Change the style of the row based of if the Todo was completed
        // boolean_expression ? statement_if_true : statement_if_false
        completed ? row.setAttribute("class","bg-success") : row.setAttribute("class", "bg-danger");
        completed ? numComplete++ : numIncomplete++;
        // Add the row to the table body
        document.getElementById('todosTable').appendChild(row);
    }

    //Add the number pof complete and incomplete todos
    document.getElementById('complete').textContent = `Completed: ${numComplete}`
    document.getElementById('incomplete').textContent = `Incomplete: ${numIncomplete}`
}