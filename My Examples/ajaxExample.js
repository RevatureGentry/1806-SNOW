window.onload = () => {
    document.getElementById('ajaxButton').addEventListener('click', populateTable);
}

function populateTable() {
    const url = "https://jsonplaceholder.typicode.com/todos";
    let xhr = new XMLHttpRequest();
    let complete = 0;
    let incomplete = 0;
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            let response = JSON.parse(xhr.responseText);
            for (let todo of response) {
                let row = document.createElement('tr');
                let userId = document.createElement('td');
                let todoId = document.createElement('td');
                let title = document.createElement('td');
                let completed = todo.completed;

                userId.textContent = todo.userId;
                todoId.textContent = todo.id;
                title.textContent = todo.title;

                row.appendChild(userId);
                row.appendChild(todoId);
                row.appendChild(title);

                (completed) ? row.setAttribute('class', 'bg-success') : row.setAttribute('class', 'bg-danger');
                (completed) ? complete++ : incomplete++;
                document.getElementById('todosTable').appendChild(row);
            }
            document.getElementById('complete').textContent = `Completed: ${complete}`;
            document.getElementById('incomplete').textContent = `Incomplete: ${incomplete}`;
        }
    }
    xhr.open('GET', url);
    xhr.send();
}
