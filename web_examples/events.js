var a = setInterval(randomPopUpTarget,100);
var b = setInterval(randomPopInTarget,100);
window.onload = function(){
	let elements = document.getElementsByTagName("img");
		
	
	for(let element of elements){
		element.addEventListener('click',(e) => {
			if(element.getAttribute("src")=="popup.png"){	
			element.style.paddingTop= '45px';
			element.setAttribute("src","popin.png");
			element.classList.add("down");
			element.classList.remove("up");
			
			}
			/*else if(element.getAttribute("src")=="popin.png"){
				element.style.paddingTop = '0px';
				element.setAttribute("src","popup.png");
				
			}*/
		})
	}
	
}

function randomPopUpTarget(){
	
	
	let array = document.getElementsByClassName("down");
	var x = Math.floor((Math.random() * array.length) + 0);
	let element = array[x];
	element.style.paddingTop = '0px';
	element.setAttribute("src","popup.png");
	element.classList.add("up");
	element.classList.remove("down");
	
	
}
function randomPopInTarget(){

	let array = document.getElementsByClassName("up");
	var x = Math.floor((Math.random() * array.length-1) + 0);
	let element = array[x];
	element.style.paddingTop = '45px';
	element.setAttribute("src","popin.png");
	element.classList.add("down");
	element.classList.remove("up");
}
