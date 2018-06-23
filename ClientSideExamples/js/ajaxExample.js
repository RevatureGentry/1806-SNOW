window.onload = function(){
    // Get a reference to the ajaxButton
    document.getElementById('ajaxButton').addEventListener('click', fireRequest);
    document.getElementById('submit').addEventListener('click',selectRequest);
}


function fireRequest(){
    const url = "https://jsonplaceholder.typicode.com/todos"

    // 1 Declare and instantiate an object of type XMLNHttpRequest
    let xhr = new XMLHttpRequest();

    // 2. Set a function to the xhr.onreadystatechange event
    xhr.onreadystatechange = function(){
        // Check to ensure the response has completed and has a status of 200
        if(xhr.readyState === 4 && xhr.status === 200){
            // 5. Handle the response
            let response = JSON.parse(xhr.responseText);
            addRows(response);
        }
    }

    // 3. Open a request to the URL
    xhr.open("GET",url);

    // 4. We need to send the request
    xhr.send();
}

function addRows(response){
    let numComplete = 0;
    let numIncomplete = 0;

    // The for...of loop iterates over every element of an Iterable object
    for(let ajax of response){
        // Programmatically create HTML elements with document.createElement
        let row = document.createElement('tr');
        let idTd = document.createElement('td');
        let userIdTd = document.createElement('td');
        let titleTd = document.createElement('td');

        // Create a reference that hold the 'completed' value
        let completed = ajax.completed;


        // Set the text content of each cell in the row corresponding to the Object
        idTd.textContent = ajax.id;
        userIdTd.textContent = ajax.userId;
        titleTd.textContent = ajax.title;

        // We use the element.appendChild() method to dynamically add HTML elements
        row.appendChild(idTd);
        row.appendChild(userIdTd);
        row.appendChild(titleTd);

        // Change the style of the row based on if the Todo was completed
        // boolean_expression ? statement_if_true : statement_if_false;
        completed ? row.setAttribute('class','bg-success') : row.setAttribute('class','bg-danger');
        completed ? numComplete++ : numIncomplete++;

        // Add the row to the table body
        document.getElementById('todosTable').appendChild(row);
    }

    // Add the number of complete and incomplete todos
    document.getElementById('complete').textContent = `Completed: ${numComplete}`;
    document.getElementById('incomplete').textContent = `Incomplete: ${numIncomplete}`;
}

function selectRequest(){
    const url = "https://jsonplaceholder.typicode.com/todos"

    // 1 Declare and instantiate an object of type XMLNHttpRequest
    let xhr = new XMLHttpRequest();

    // 2. Set a function to the xhr.onreadystatechange event
    xhr.onreadystatechange = function(){
        
        // Check to ensure the response has completed and has a status of 200
        if(xhr.readyState === 4 && xhr.status === 200){
            // 5. Handle the response
            let response = JSON.parse(xhr.responseText);
            let v = document.getElementById('select').value;
            console.log(document.getElementById('select').value);
            console.log(v);
            addRow(response,v);
        }
    }

    // 3. Open a request to the URL
    xhr.open("GET",url);

    // 4. We need to send the request
    xhr.send();
}

function addRow(response,value){
    console.log(value);
    for (let ajax of response){
        if(ajax.id == value){
            // Programmatically create HTML elements with document.createElement
            let row = document.createElement('tr');
            let idTd = document.createElement('td');
            let userIdTd = document.createElement('td');
            let titleTd = document.createElement('td');

            // Create a reference that hold the 'completed' value
            let completed = ajax.completed;


            // Set the text content of each cell in the row corresponding to the Object
            idTd.textContent = ajax.id;
            userIdTd.textContent = ajax.userId;
            titleTd.textContent = ajax.title;

            // We use the element.appendChild() method to dynamically add HTML elements
            row.appendChild(idTd);
            row.appendChild(userIdTd);
            row.appendChild(titleTd);

            // Change the style of the row based on if the Todo was completed
            // boolean_expression ? statement_if_true : statement_if_false;
            completed ? row.setAttribute('class','bg-success') : row.setAttribute('class','bg-danger');

            // Add the row to the table body
            document.getElementById('todosTable').appendChild(row);
        }
    }
}