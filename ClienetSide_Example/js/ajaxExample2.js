window.onload = function(){
    // Get a referenc to the AJAX button
    this.document.getElementById("ajaxbutton").addEventListener('click', fireRequest);
}

function fireRequest(){
    const url = "https://jsonplaceholder.typicode.com/posts";
    // 1. Declare and instantiate an object of type XMLHttpRequest
    let xhr = new XMLHttpRequest();

    //2. Set function to the xhr.onreadystatechange event
    xhr.onreadystatechange = function(){
        if(xhr.readyState < 4){
            console.log(`loading...... ${xhr.readyState}`);
        }
        // Check to ensure the response has completed and has a status of 200
        if(xhr.readyState == 4 && xhr.status == 200){
            // 5. Handle the response
            let response = JSON.parse(xhr.responseText);
            //console.log(response);
            addRows(response);
        }
    }

    //3. Open a request to the URL
    xhr. open("GET", url);

    // 4. We need to send request
    xhr.send();
}

function addRows(response){
    var userInput = document.getElementById("userInput").value
    // the for...of loop iterate over every elements of an iterable object
    for(let ajax of response){
        //Programmatically create HTML elements with document.createElement
        document.getElementById("postTable").deleteRow(0);
        let row = document.createElement('tr');
        let idTd = document.createElement('td');
        let userIDTd = document.createElement('td');
        let titleTd = document.createElement('td');
        let bodyTd = document.createElement('td');

        //Set the text content of each cell in the row corressponding to the object

        idTd.textContent = ajax.id;
        userIDTd.textContent = ajax.userId;
        titleTd.textContent = ajax.title;
        bodyTd.textContent = ajax.body;

        //console.log(idTd.textContent);
        if (idTd.textContent == userInput){
        //We use the element.appendChild() mehtod to dynamically add HTML elements
            row.appendChild(idTd);
            row.appendChild(userIDTd);
            row.appendChild(titleTd);
            row.appendChild(bodyTd);
        }
        //Change the style of the row base on the todo if it was completed
        /*if (completed){
            row.setAttribute('class', 'bg-success');
        }
        else{
            row.setAttribute('class', 'bg-danger');
        }*/

        //boolean_expression ? statement_if_true: statement_if_false; 
        //completed ? row.setAttribute('class', 'bg-success') : row.setAttribute('class', 'bg-danger');
        //completed ? numComplete++ : numIncomplete++;

        // Add the row to the table body
        document.getElementById("postTable").appendChild(row);
    }
    
}
