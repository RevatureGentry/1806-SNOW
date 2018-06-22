// used in conjunction with ./6_21_2018/ajax.html think yew

// takes in some iterable Object and creates a row and a cell with content given by response ajax element
function addRows(response) {
    let num_complete = 0;
    let num_incomplete = 0;
    // for(let element of elements) loops over every elements of an Iterable object
    for (let ajax of response) {
        // programatically create HTML elements
        let row = document.createElement('tr');
        let idTd = document.createElement('td');
        let userIdTd = document.createElement('td');
        let titleTd = document.createElement('td');
        let completed = ajax.completed; // true or false

        // set the text content of each cell in the row corresponding to the Object
        idTd.textContent = ajax.id;
        userIdTd.textContent = ajax.userId;
        titleTd.textContent = ajax.title;

        // we use the element.appendChild() method to dynamically add HTML elements
        row.appendChild(idTd);
        row.appendChild(userIdTd);
        row.appendChild(titleTd);

        // change the style of the row based on if the Todo was completed
        /*
        if(completed)
            row.setAttribute('class', 'bg-success');
        else
            row.setAttribute('class', 'bg-danger');
        */
       // if..else equivalent
       // boolean expression ? statement_if_true : statement_if_false;

       completed ? row.setAttribute('class', 'bg-success') : row.setAttribute('class', 'bg-danger');
        completed ? num_complete += 1 : num_incomplete += 1;
        // add the row to the table body
        document.getElementById('todosTable').appendChild(row);
    }

    // Add the number of complete and incomplete rows
    document.getElementById('complete').textContent = `Completed: ${num_complete}`;
    document.getElementById('incomplete').textContent = `Incomplete: ${num_incomplete}`;
};

function fireRequest(){
    console.log('Ajax button clicked');
    const url = "https://jsonplaceholder.typicode.com/todos";
    // 1. Declare and instantiate an object of type XMLHttpRequest
    let xhr = new XMLHttpRequest();
    // 2. Set a function to the xhr.onreadystatechange event
    xhr.onreadystatechange = function(){
        if(xhr.readyState < 4){
            console.log('loading...' + xhr.readyState);
        }
        // check to ensure the response has completed and has a status of 200
        if(xhr.readyState === 4 && xhr.status === 200){
            // 5. Handle the response
            let response = xhr.responseText;
            response = JSON.parse(response);
            console.log(response);
            addRows(response);
        }
    };

    // 3. Open a request to the URL
    xhr.open("GET", url);

    // 4. We need to send the request
    xhr.send();

};

//---------- functions for retrieving a specific row given user number input -----------------
function addRow(response){
    let row = document.createElement('tr');
    let idTd = document.createElement('td');
    let userIdTd = document.createElement('td');
    let titleTd = document.createElement('td');
    idTd.textContent = response.id;
    userIdTd.textContent = response.userId;
    titleTd.textContent = response.title;
     row.appendChild(idTd);
     row.appendChild(userIdTd);
     row.appendChild(titleTd);
     document.getElementById('getPostsTable').appendChild(row);
}
// look up webpage given certain id specified in form submitted by id
function lookupID(evt){
    evt.preventDefault();
    let pagenum = document.getElementById("id_val").value;
    console.log(typeof pagenum);
    if (!isNaN(pagenum) && pagenum <= 100 && pagenum > 0) {
        let url = "https://jsonplaceholder.typicode.com/posts/" + pagenum;
        console.log(url);
        let xhr = new XMLHttpRequest();
        // 2. Set a function to the xhr.onreadystatechange event
        xhr.onreadystatechange = function () {
            if (xhr.readyState < 4) {
                console.log('loading...' + xhr.readyState);
            }
            // check to ensure the response has completed and has a status of 200
            if (xhr.readyState === 4 && xhr.status === 200) {
                // 5. Handle the response
                let response = xhr.responseText;
                response = JSON.parse(response);
                console.log(response);
                addRow(response);
                document.getElementById("err_p").innerHTML = " ";
            }
        };
        // 3. Open a request to the URL
        xhr.open("GET", url);
        // 4. We need to send the request
        xhr.send();
        
    }
    else{
        document.getElementById("err_p").innerHTML = "NOT A VALID INPUT";
    }
};
//-------------------------------------------------------------------------------------------\
window.onload = function () {
    // Get a reference to the ajaxButton
    document.getElementById('ajaxButton').addEventListener('click',
        fireRequest);
    document.getElementById('form1').addEventListener('submit', lookupID);
};
