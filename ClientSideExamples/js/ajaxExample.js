window.onload = function(){
    //get a reference to the ajaxButton
    document.getElementById('ajaxButton').addEventListener('click', fireRequest);
    document.getElementById('search').addEventListener('click', singleSearch);
    
}
function singleSearch(){
    let url = "https://jsonplaceholder.typicode.com/posts/";
    //1. declare and instantiate object of type XMLHttpRequest
    let xhr = new XMLHttpRequest();
    url = url + document.getElementById("searchnumber").value;
    
    //2. set a function to the xhr.onreadystatechange event
    xhr.onreadystatechange = function(){
        //check to ensure the response has completed and has a status of 200
        if(xhr.readyState === 4 && xhr.status === 200){
            //5. handle the response
            if (xhr.readyState < 4){
                console.log("loading..." + xhr.readyState);
            }
            if(xhr.readyState === 4 && xhr.status === 200){
                let response = JSON.parse(xhr.responseText);
                //getAjax(7, response);
                
                addRows(response);
            }
        }
    }
    console.log(url);
        //3. open a request to the URL
    xhr.open("GET", url);
    //4. send the request
    xhr.send();
}
function fireRequest(){
    const url = "https://jsonplaceholder.typicode.com/todos";

    //1. declare and instantiate object of type XMLHttpRequest
    let xhr = new XMLHttpRequest();
    //2. set a function to the xhr.onreadystatechange event
    xhr.onreadystatechange = function(){
        //check to ensure the response has completed and has a status of 200
        if(xhr.readyState === 4 && xhr.status === 200){
            //5. handle the response
            if (xhr.readyState < 4){
                console.log("loading..." + xhr.readyState);
            }
            if(xhr.readyState === 4 && xhr.status === 200){
                let response = JSON.parse(xhr.responseText);
                //getAjax(7, response);
                
                addRows(response);
            }
        }
    }

    //3. open a request to the URL
    xhr.open("GET", url);
    //4. send the request
    xhr.send();
}
function getAjax(elementNumber, ajaxtable){
    console.log("worked");
    var el = ajaxtable[elementNumber];
    let row = document.createElement("tr");
    let idTd = document.createElement('td');
    let userIdTd= document.createElement('td');
    let titleTd = document.createElement('td');
    idTd.textContent = el.id;
    userIdTd.textContent = el.userId;
    titleTd.textContent = el.title;
    row.appendChild(idTd);
    row.appendChild(userIdTd);
    row.appendChild(titleTd);
    document.getElementById('todosTable').appendChild(row);
}
function addRows(response){
    //counter for the number of complete/incomplete tasks
    let numComplete = 0;
    let numIncomplete = 0;
    // the for...of loop iterates over every element of an iterable object
    for (let ajax of response){
        //programmatically create HTTP Element
        let row = document.createElement('tr');
        let idTd = document.createElement('td');
        let userIdTd = document.createElement('td');
        let titleTd = document.createElement('td');

        //create a reference that holds the 'completed' value
        let completed = ajax.completed;


        //set the text content in each cell in the row corresponsing to the object.
        idTd.textContent = ajax.id;
        userIdTd.textContent = ajax.userId;
        titleTd.textContent = ajax.title;

        //we use the element.appendChild() method to dynamically add HTML elements
        row.appendChild(idTd);
        row.appendChild(userIdTd);
        row.appendChild(titleTd);

        //change style of the row based on if the todo was completed
        completed ? row.setAttribute('class', 'bg-success') : row.setAttribute('class', 'bg-danger');
        completed ? numComplete ++ : numIncomplete ++;
        //add the row to table body
        document.getElementById('todosTable').appendChild(row);

    }
    document.getElementById("complete").textContent = `completed: ${numComplete}`;
    document.getElementById("incomplete").textContent = `incomplete: ${numIncomplete}`;
}