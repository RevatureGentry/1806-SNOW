var a = setInterval(randomPopUpTarget,200);
var b = setInterval(randomPopInTarget,170);
var c = setInterval(randomizeHideDebuff,500);
var d = setInterval(randomizeTwiceBuff,500);
var points = 0;
var multiplier = 1;
window.onload = function(){
	let elements = document.getElementsByTagName("img");
		
	
	for(let element of elements){
		element.addEventListener('click',(e) => {
			if(element.getAttribute("src")=="popup.png"){	
			element.style.paddingTop= '45px';
			element.setAttribute("src","popin.png");
			element.classList.add("down");
			element.classList.remove("up");
			points+=100*multiplier;
			document.getElementById("scoreboard").innerText = "Score: " + points;
			}
			if(element.classList.contains("hider")){
				element.style.paddingTop= '45px';
			element.setAttribute("src","popin.png");
			element.classList.add("down");
			element.classList.remove("up");
				document.getElementById("mainDiv").style.cursor = 'none';
				setTimeout(()=>{document.getElementById("mainDiv").style.cursor = 'auto';},7000);
				multiplier = 1;
				points-=100;
				document.getElementById("scoreboard").innerText = "Score: " + points;
			}
			if(element.classList.contains("twice")){
				element.style.paddingTop= '45px';
			element.setAttribute("src","popin.png");
			element.classList.add("down");
			element.classList.remove("up");
			multiplier = multiplier*2;
				setTimeout(()=>{multiplier = 1;},10000);
				points += multiplier*100;
			}
			document.getElementById("scoreboard").innerText = "Score: " + points;
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
	if(x != -1){
	let element = array[x];
	element.style.paddingTop = '45px';
	element.setAttribute("src","popin.png");
	element.classList.add("down");
	element.classList.remove("hider");
	element.classList.remove("up");
	}
	
}
function randomizeHideDebuff(){
	let array = document.getElementsByClassName("down");
	var x = Math.floor((Math.random() * array.length) + 0);
	let element = array[x];
	element.style.paddingTop = '0px';
	element.setAttribute("src","hide.png");
	element.classList.add("up");
	element.classList.add("hider");
	element.classList.remove("down");
}
function randomizeTwiceBuff(){
	let array = document.getElementsByClassName("down");
	var x = Math.floor((Math.random() * array.length) + 0);
	let element = array[x];
	element.style.paddingTop = '0px';
	element.setAttribute("src","poptwice.png");
	element.classList.add("up");
	element.classList.add("twice");
	element.classList.remove("down");
}
