//used to set event listeners
window.onload = function(){
	
	//Get a reference to EVERY HTML element on the page
	let elements = document.querySelectorAll("*");
	//console.log(elements);
	
	//the for...of iterates through every element in an iterable object
	/*for (let element of elements) {
		element.addEventListener('click', e => alert(`Capturing: ${element.tagName}`), true);//for capturing
		element.addEventListener('click', e => alert(`Bubbling: ${element.tagName}`));//for bubbling
	}*/
	
	let listItems = document.getElementsByTagName("li");
	for (let li of listItems){
		li.addEventListener('mouseover', () => li.style.color = "red");
		li.addEventListener('mouseover', () => li.style.fontSize = "30px");
		li.addEventListener('mouseout', () => li.style.color = "black");
		li.addEventListener('mouseout', () => li.style.fontSize = "16px");
	}
}