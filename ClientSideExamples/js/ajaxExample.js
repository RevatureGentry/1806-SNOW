window.onload = function() {
    // Get a reference to the ajaxButton
    document.getElementById('ajaxButton').addEventListener("click", resetUrl);
    document.getElementById('specificButton').addEventListener("click", generateUrl);
}

var url = "https://jsonplaceholder.typicode.com/todos"

function generateUrl() {
    url = "https://jsonplaceholder.typicode.com/todos";
    let field = prompt('Which field would you like to access?');
    url = url + "/" + field;
    fireRequest();
}

function resetUrl() {
    url = "https://jsonplaceholder.typicode.com/todos";
    fireRequest();
}

function fireRequest() {

    // 1. Declare and instantiate an XMLHttpRequest object
    let xhr =  new XMLHttpRequest();
    // 2. Set a function to the xhr.onreadystatechange event
    xhr.onreadystatechange = function() {
        if (xhr.readyState < 4) console.log(`loading... ${xhr.readyState}`);
        // Check to ensure the response has completed and has a status of 200
        if (xhr.readyState === 4 && xhr.status === 200) {
            // 5. Handle the response. Get responseText back as a JSON string and
            // convert back to JavaScript
            let response = JSON.parse(xhr.responseText);
            if (!Array.isArray(response)) {
                temp = [];
                temp.push(response);
                response = temp;
            }
            addRows(response);
        }
    }

    // 3. Open a request to the URL
    xhr.open("GET", url);

    // 4. We need to send the request
    xhr.send();
}

function addRows(response) {
    // The for...of loop iterates over every element of an iterable object
    var tableBody = document.getElementById("todosTable");
    while (tableBody.hasChildNodes()) {
        tableBody.removeChild(tableBody.firstChild);
    }
    // Create holders for number of todos
    let numComplete = 0;
    let numIncomplete = 0;
    for (let ajax of response) {
        // Programmatically create HTML elements
        let row = document.createElement('tr');
        let idTd = document.createElement('td');
        let userIdTd = document.createElement('td');
        let titleTd = document.createElement('td');

        // Create a reference that holds the 'completed' value
        let completed = ajax.completed;

        // Set the text content of each cell in the row corresponding to the object
        idTd.textContent = ajax.id;
        userIdTd.textContent = ajax.userId;
        titleTd.textContent = ajax.title;

        // We use the element.appendChild() method to dynamically add HTML elements
        row.appendChild(idTd);
        row.appendChild(userIdTd);
        row.appendChild(titleTd);
        
        // Change the style of the row based on if the Todo was completed
        //Ternary operator-- if/else shorthand
        //boolean expression ? if true : if false;
        completed ? row.setAttribute('class', 'bg-success') : row.setAttribute('class', 'bg-danger');
        completed ? numComplete++ : numIncomplete++;

        // Add the row to the table body
        document.getElementById("todosTable").appendChild(row);
    }

    // Add the complete and incomplete todos
    document.getElementById("complete").textContent = `Completed: ${numComplete}`;
    document.getElementById("incomplete").textContent = `Not Completed: ${numIncomplete}`;
}