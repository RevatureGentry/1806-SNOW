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
            addrows(response);
        }
    }
    //3 open a request to the url
    xhr.open("GET", url);

    // 4 send the request
    xhr.send();
}

function addrows(response) {
    
    let numComplete = 0;
    let numIncomplete = 0;


    // the for of loop iterates over every element of an iterable object
    for (let ajax of response) {
        //programmatically create html elements
        let row = document.createElement('tr');
        let idTd = document.createElement('td');
        let userIdTd = document.createElement('td');
        let titleTd = document.createElement('td');    

        //create a reference that holds the completed value
        let completed = ajax.completed;


        // set the text content of each cell in the row corresponding to the object
        idTd.textContent = ajax.id;
        userIdTd.textContent = ajax.userId;
        titleTd.textContent = ajax.title;


        //we use the element.appendChild() metod to dynamically add html elements
        row.appendChild(idTd);
        row.appendChild(userIdTd);
        row.appendChild(titleTd);

        //change the style of the row based on if the todo was completed
        // boolean_expression? statement if_true : statment_if_false
        completed ? row.setAttribute('class', 'bg-success') : row.setAttribute('class', 'bg-danger');
        completed ? numComplete++ : numIncomplete++;

        // add the row to the table body
        document.getElementById('todoTable').appendChild(row);
    }

    // add the number of complete and incomplete todos
    document.getElementById('complete').textContent = `Completed: ${numComplete}`;
    document.getElementById('incomplete').textContent = `Incompleted: ${numIncomplete}`;
}