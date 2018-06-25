window.onload = function()
{
    // get a reference to the AJAX button
        document.getElementById('ajaxButton').addEventListener('click', fireRequest)
        document.getElementById('idsubmit').addEventListener('click', getId)
}

function fireRequest()
{
    console.log('ajaxButton clicked!');
    //const text = document.getElementById('text');

    //1. Declare and intitialize an object of XMLHttpRequest
    const url = 'https://jsonplaceholder.typicode.com/todos';
    let xhr = new XMLHttpRequest();
   
    //2 set a function to the xhr.onreadystatechange event
    xhr.onreadystatechange = function()
    {
        if (xhr.readyState < 4)
            {
                console.log('Loading' + xhr.readyState);
            }
        // check to esnrue the reponse has copmpleted and has a status of 200
        if (xhr.readyState === 4 && xhr.status === 200)
            {
                //5. Handle the Response
               let response =  JSON.parse(xhr.responseText);
               addRows(response);
            }
    }

    //3. Open a request to the URL (opens the URL provided)
    xhr.open('GET', url);

    //4. Send the request
    xhr.send();

    function addRows(response)
{
    let numComplete = 0;
    let numIncomplete = 0;
    
    // The for...of loop iterates over every element of an Iterable object

    for (let ajax of response)
    {

        // Programmatically reate HTML elements document.createElement
        
        let row = document.createElement('tr');
        let idTd = document.createElement('td')
        let userIdTd = document.createElement('td')
        let titleTd = document.createElement('td')

        //create a reference that holds the 'completed' value
        
        let completed = ajax.completed;

        
    
        //set the text content of each cell in the row corresponding ot the object
        idTd.textContent = ajax.id;
        userIdTd.textContent =ajax.userId;
        titleTd.textContent = ajax.title;
    
        //We use the element.appendChild() method to dynamically add HTML elements

        row.appendChild(idTd);
        row.appendChild(userIdTd);
        row.appendChild(titleTd);

        //change the style of the row based on if the Todo was completed
       /* if (completed)
            {
                row.setAttribute('class', 'bg-success');

            } else
                    {
                        row.setAttribute('class', 'bg-danger');
                    }
                    */

            // boolean_expression ? statement_if_true : statement_if_false
           
            completed ? row.setAttribute('class', 'bg-success') : row.setAttribute('class', 'bg-danger');
            completed ? numComplete++ : numIncomplete++;
        
            // Add the row to the table body
        document.getElementById('todosTable').appendChild(row);

    }

    // add the number of complete and incomplete todos
    document.getElementById('complete').textContent = `Completed: ${numComplete}`;
    document.getElementById('incomplete').textContent = `Incomplete: ${numIncomplete}`;
}
}






function getId()
{
    
    const myText = document.getElementById('text').value;

  
    const url = 'https://jsonplaceholder.typicode.com/todos/';
    let xhr = new XMLHttpRequest();
   
    xhr.onreadystatechange = function()
    {
        if (xhr.readyState < 4)
            {
                console.log('Loading' + xhr.readyState);
            }
       
        if (xhr.readyState === 4 && xhr.status === 200)
            {
               let response =  JSON.parse(xhr.responseText);
               addId(response);
            }
            
            
            xhr.open("GET", url + myText);

            xhr.send();
            
            function addId(response)
            {
            
        
                    let row = document.createElement('tr');
                    let idTd = document.createElement('td')
                    let userIdTd = document.createElement('td')
                    let titleTd = document.createElement('td')
            
                
                    
            
                    
             
                    idTd.textContent = response.id;
                    userIdTd.textContent =response.userId;
                    titleTd.textContent = response.title;
                
                    row.appendChild(idTd);
                    row.appendChild(userIdTd);
                    row.appendChild(titleTd);
            
                   
                     
                    
                    document.getElementById('todosTable').appendChild(row);
            
                
            
            
           
            }
    
    
    
        }
}
