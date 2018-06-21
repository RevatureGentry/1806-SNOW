window.onload = function() {
    // get a reference to the ajax button
    document.getElementById('ajaxbutton').addEventListener('click', fireRequest);
}


function fireRequest() {
    const url = "https://jsonplaceholder.typicode.com/posts"

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

function search() {
    let input, filter, table, tr, td, i;
    input = document.getElementById('input');
    filter = input.value;
    table = document.getElementById('posts');
    tr = table.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            if (td.innerHTML.indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }

}

function addrows(response) {
    // the for of loop iterates over every element of an iterable object
    for (let ajax of response) {
        //programmatically create html elements
        let row = document.createElement('tr');
        let idTd = document.createElement('td');
        let titleTd = document.createElement('td');    
        let bodyTd = document.createElement('td');


        // set the text content of each cell in the row corresponding to the object
        idTd.textContent = ajax.id;
        titleTd.textContent = ajax.title;
        bodyTd.textContent = ajax.body;


        //we use the element.appendChild() metod to dynamically add html elements
        row.appendChild(idTd);
        row.appendChild(titleTd);
        row.appendChild(bodyTd);

        // add the row to the table body
        document.getElementById('posts').appendChild(row);
    }
}