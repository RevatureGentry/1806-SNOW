window.onload =  function(){
    document.getElementById('ajaxButton').addEventListener('click', fireRequest);
}


function fireRequest(){
    const url = "https://jsonplaceholder.typicode.com/todos"
    //1. declar and instanciate an object of type XMLHttpRequest
    let xhr = new XMLHttpRequest();
    //2. set a fucntion to the xhr.onreadystatechange event
    xhr.onreadystatechange = function(){ //technically doesnt enter function until after step 4
        //check to ensure the response has completed and has a status of 200
        if(xhr.readyState < 4){
            console.log("loading..." + xhr.readyState);
        }
        if(xhr.readyState === 4  && xhr.status === 200){
            //5. handle the response
            let response = JSON.parse(xhr.responseText); //puts xhr.responseText into js
            addRows(response);
        }
    }
    //3. open a request to URL
    xhr.open('GET',url);
    //4. send the request
    xhr.send();
}

function addRows(response){
    let numComplete = 0;
    let numIncomplete = 0;
    for( let ajax of response){
        //programmatically create html elements
        let row = document.createElement('tr');
        let idTD = document.createElement('td');
        let userIDTD = document.createElement('td');
        let titleTD = document.createElement('td');

        //create a reference that holds the 'completed' value
        let completed = ajax.completed;

        //sets the text content of each cell in the row corresponding to the object
        idTD.textContent = ajax.id;
        userIDTD.textContent = ajax.userId;
        titleTD.textContent = ajax.title

        //we use the element.appendChild() method to dynamically add html elements
        row.appendChild(idTD);
        row.appendChild(userIDTD);
        row.appendChild(titleTD);

        //change the style of the row based on if the Todo was completed
        /*if(completed){
            row.setAttribute('class', 'bg-success')
            numComplete++;
        }
        else{
            row.setAttribute('class', 'bg-danger');
            numIncomplete++;
        }
        */
        //or you can do
        //boolean_expression ? statment_if_true : statment_if_false
        completed ? row.setAttribute('class','bg-success') : row.setAttribute('class', 'bg-danger');
        completed ? numComplete++ : numIncomplete++;
        
        //add row to table body
        document.getElementById('todosTable').appendChild(row);
    }
    //add number of complete and incomplete todos
    document.getElementById('complete').textContent = `Completed: ${numComplete}`;
    document.getElementById('incomplete').textContent = `Incomplete: ${numIncomplete}`;
}

function getSinglePost(postNum){
    const url = "https://jsonplaceholder.typicode.com/posts/" + postNum;
   // url = url + "/" + postNum;
    //1. declar and instanciate an object of type XMLHttpRequest
    let xhr = new XMLHttpRequest();
    //2. set a fucntion to the xhr.onreadystatechange event
    xhr.onreadystatechange = function(){ //technically doesnt enter function until after step 4
        //check to ensure the response has completed and has a status of 200
        if(xhr.readyState < 4){
            console.log("loading..." + xhr.readyState);
        }
        if(xhr.readyState === 4  && xhr.status === 200){
            //5. handle the response
            let response = JSON.parse(xhr.responseText); //puts xhr.responseText into js
            console.log(response);
            addPost(response);
        }
    }
    //3. open a request to URL
    xhr.open('GET',url);
    //4. send the request
    xhr.send();
}
function addPost(postNum){
    let newBody = document.createElement('tbody');
    let rowuser = document.createElement('tr');
    let rowtitle = document.createElement('tr');
    let rowbody = document.createElement('tr');
    
    let puser = document.createElement('td');
    let ptitle = document.createElement('td');
    let pbody = document.createElement('td');

    puser.textContent = `Id: ${postNum.id} User: ${postNum.userId}`;
    ptitle.textContent = `Title: ${postNum.title}`;
    pbody.textContent = `Body: ${postNum.body}`;
    

    rowuser.appendChild(puser);
    rowtitle.appendChild(ptitle);
    rowbody.appendChild(pbody);

    newBody.appendChild(rowuser);
    newBody.appendChild(rowtitle);
    newBody.appendChild(rowbody);
    
    document.getElementById('postTable').appendChild(rowuser);
    document.getElementById('postTable').appendChild(rowtitle);
    document.getElementById('postTable').appendChild(rowbody);
}
function userInput(number){
    var postID = document.getElementById("postID").value;
    getSinglePost(postID);
    
}