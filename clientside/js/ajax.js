window.onload = function() {
    let ajaxButton = document.getElementById('ajax-button');
    ajaxButton.addEventListener('click', fireRequest);
}

function fireRequest() {
    const url = "https://jsonplaceholder.typicode.com/posts/";
    post_number = document.getElementById('user_input').value;

    //1. Declare and instantiate an object of type XMLHttpRequest.
    let xhr = new XMLHttpRequest();
    //2. Set a function to the chr.onreadystatechange event
    xhr.onreadystatechange = function() {
        //Check to ensure the response has completed and has a status of 200.
        if (xhr.readyState < 4) {
            console.log(`Loading...${xhr.readyState}`);
        }
        if (xhr.readyState == 4 && xhr.status == 200) {
            //Handle the Response
            let response = JSON.parse(xhr.responseText);
            //console.log(response);
            addRows(response);
        }
    }

    //3. Open a request to the URL.
    xhr.open("GET", url+post_number);

    //4. We need to send the request
    xhr.send();
}

function addRows(response) {
    //The for...of loop iterates over every element of an iterable object.
    let numComplete = 0;
    let numIncomplete = 0;

    //for (let ajax of response) {
    ajax = response;
        //Programmatically create HTML elements
        let row = document.createElement("tr");
        let idTd = document.createElement('td');
        let userIdTd = document.createElement('td');
        let titleTd = document.createElement('td');
        let bodyTd = document.createElement('td');

        //Create a reference that holds the completed value.
        /* let completed = ajax.completed;
        color = "White";
        if (completed) {
            color = "green";
        }

        //(completed) ? row.setAttribute('class', 'bg-success') : row.setAttribute('class', 'bg-danger');

        if (completed) {
            row.setAttribute('class', 'bg-success');
            numComplete++;
        }
        else {
            row.setAttribute('class', 'bg-danger');
            numIncomplete++;
        } */



        //Sets the text content of each cell in the row corresponding to the Object.
        idTd.textContent = ajax.id;
        userIdTd.textContent = ajax.userId;
        titleTd.textContent = ajax.title;
        bodyTd.textContent = ajax.body;
        //We use the element.appendChild() to dynamically add HTML elements
        row.appendChild(idTd);
        row.appendChild(userIdTd);
        row.appendChild(titleTd);
        row.appendChild(bodyTd);

        //Add the row to the table body
        document.getElementById("todosTable").appendChild(row);
    
    /* document.getElementById("complete").textContent = `Completed ${numComplete}`;
    document.getElementById("incomplete").textContent = `Incomplete ${numIncomplete}`; */
}