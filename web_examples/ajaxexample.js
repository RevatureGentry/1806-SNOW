window.onload = function(){
	var btn = document.getElementById("ajaxButton");
	btn.addEventListener('click',fireRequest);
	var search = document.getElementById("search");
	search.addEventListener('click',post);
}

function fireRequest(){
	const url = "https://jsonplaceholder.typicode.com/todos";
	let xhr = new XMLHttpRequest();
	
	
	xhr.onreadystatechange = function(){
		if(xhr.readyState === 4 && xhr.status === 200){
			let response = JSON.parse(xhr.responseText);
			addRows(response,"todosTable");
			
		}
	}
	
	xhr.open("GET",url);
	xhr.send();
}
		var numIncomplete =0;
		var numComplete=0;
function addRows(response,tablename){
		//for..of loop iterates over every element of an iterable object

		for(let ajax of response){
			let row = document.createElement('tr');
			let idTd=document.createElement('td');
			let userIdTd = document.createElement('td');
			let titleTd = document.createElement('td');
			let completed = ajax.completed;
			
			idTd.textContent = ajax.id;
			userIdTd.textContent=ajax.userId;
			titleTd.textContent=ajax.title;
			
			row.appendChild(idTd);
			row.appendChild(userIdTd);
			row.appendChild(titleTd);
			
			if(completed === true){
				document.getElementById("");
				
			}
			
			(completed ? row.classList.add("bg-info") : row.classList.add("bg-light"));
			(completed ? numComplete++ : numIncomplete++);
			document.getElementById("complete").innerHTML = `Complete : ${numComplete}`;
			document.getElementById("incomplete").innerHTML = `Incomplete : ${numIncomplete}`;
			document.getElementById(tablename).appendChild(row);
		}
	
}
	function updateTable(){
		var count =0;
		var myNode = document.getElementById("selectTable");
		while (myNode.firstChild) {
			myNode.removeChild(myNode.firstChild);
		}
		var col = 0;
		var colselector = document.getElementById("colselector");
		var rowselector = document.getElementById("rowselector");
		col = colselector.selectedIndex;
		
		
			var t = rowselector.value;
			for(var i =1; i< document.getElementById("todosTable").childNodes.length;i++){
				document.getElementById("todosTable").childNodes[i].childNodes[col]
					if(document.getElementById("todosTable").childNodes[i].childNodes[col].textContent == t){
						var y = document.getElementById("todosTable").childNodes[i].cloneNode(true);
						y.classList.remove("bg-success");
						y.classList.add("bg-light");
						count++;
						document.getElementById("selectTable").appendChild(y);
					}
			}
			if(count != 1){
			document.getElementById("results").innerHTML = ` ${count}  Results Found`;
			}
			else{
				document.getElementById("results").innerHTML = ` ${count}  Result Found`;
			}
	}
	function post(){
		const url = "https://jsonplaceholder.typicode.com/posts/";
	let xhr = new XMLHttpRequest();
	
	
	xhr.onreadystatechange = function(){
		if(xhr.readyState === 4 && xhr.status === 200){
			let response = JSON.parse(xhr.responseText);
			addRows(response,"selectTable");
			
		}
	}
	var t = rowselector.value;
	
	xhr.open("POST",url,true);
	xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	
	xhr.send(`{id=${t}}	`);
}