window.onload = function(){
    // Get a reference to the ajaxButton 
    //document.getElementById("ajaxButton").addEventListener('click', fireRequest);
    document.getElementById("ajaxIdButton").addEventListener('click', fireRequest);

}


function fireRequest(){
    const url = "https://jsonplaceholder.typicode.com/posts"

    // 1. Declare and instantiate an object of type XMLHttpRequest
    let xhr = new XMLHttpRequest();
    let id = document.getElementById("IdValue").value;
    console.log(id);
    // 2. Set a function to the xhr.onreadystatechange event
    xhr.onreadystatechange = function(){
        // Check to ensure the response has completed and has a status of 200
        if(xhr.readyState < 4){
            console.log("loading..." + xhr.readyState);
        }
        if(xhr.readyState === 4 && xhr.status === 200){
            // 5. Handle the response 
            let response  = JSON.parse(xhr.responseText);
           // addRows(response);
            addOneId(response,id);
        }
    }

    // 3. Open a request to the URL
    xhr.open("GET", url);

    // 4. We need send the request 
    xhr.send();

}

function addOneId(response, id){
    for(let ajax of response){
        if(ajax.id == id){
            
            let row = document.createElement("tr");
            let idTd = document.createElement("td");
            let userIDTd = document.createElement("td");
            let titleTd = document.createElement("td");
            let bodyTd = document.createElement("td");

            idTd.textContent = ajax.id;
            userIDTd.textContent = ajax.userId;
            titleTd.textContent = ajax.title;
            bodyTd.textContent = ajax.body;
            row.appendChild(idTd);
            row.appendChild(userIDTd);
            row.appendChild(titleTd);
            row.appendChild(bodyTd)
            document.getElementById('todosTable').appendChild(row);
            break;
        }
    }
}
function addRows(response){
    let numComplete = 0;
    let numIncomplete  = 0;

    // The for ...of loop iterates over every elemetn of an iterable object
    for(let ajax of response){
        // Programmatically create HTML elements with document.createElement
        let row = document.createElement("tr");
        let idTd = document.createElement("td");
        let userIDTd = document.createElement("td");
        let titleTd = document.createElement("td");

        // Create a reference that hodls the 'completed' value
        let completed = ajax.completed;

        //set the text content of each cell in the row corresponding to the Object
        idTd.textContent = ajax.id;
        userIDTd.textContent = ajax.userId;
        titleTd.textContent = ajax.title;

        // We use the elemtn.appendCHild() method to dynamically add HTML elements
        row.appendChild(idTd);
        row.appendChild(userIDTd);
        row.appendChild(titleTd);

        // Change the style of the row based on if the todo was complete
        // boolean experssion ? statemeent_if_true : state_if_false;
        completed ? row.setAttribute('class','bg-success') : row.setAttribute('class', 'bg-danger');
        completed ? numComplete++ : numIncomplete++;
        // Add the row to the table body
        document.getElementById('todosTable').appendChild(row);


    }

    // Add the number of complete and inclomplete todos
    document.getElementById('complete').textContent = `Completed: ${numComplete}`;
    document.getElementById('incomplete').textContent = `Incomplete: ${numIncomplete}`;
}