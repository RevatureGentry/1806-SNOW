var a = setInterval(randomPopUpTarget, 1500);
var e = setInterval(randomizeCivilian, 2750);
var a = setInterval(randomPopUpTarget, 6000);
var a = setInterval(randomPopUpTarget, 2500)
var b = setInterval(randomPopInTarget, 1900);
var b = setInterval(randomPopInTarget, 3111);
var b = setInterval(randomPopInTarget, 5000);
var c = setInterval(randomizeHideDebuff, 4000);
var d = setInterval(randomizeTwiceBuff, 6000);
var e = setInterval(randomizeReverso,8000);
//var ran = Math.floor((Math.random() * 10) + 1);
//setTimeout(summonMegaPinata, 10000+(z*1000));
var points = 0;
var multiplier = 1;
var chaincount = 0;
var comment = "";
var reversed = 0;
window.onload = function () {
	document.getElementById("mainDiv").style.cursor = 'crosshair';
  let elements = document.getElementsByClassName("down");
  for (let element of elements) {
    element.addEventListener('click', () => {
      
      if (element.classList.contains("hider")) {
		showHit(element,"hithider");
        document.getElementById("mainDiv").style.cursor = 'none';
		document.getElementById("comment").innerHTML = "NO CURSOR!";
        setTimeout(() => {
          document.getElementById("mainDiv").style.cursor = 'crosshair';
		  if(document.getElementById("comment").innerHTML == "NO CURSOR!"){
		  document.getElementById("comment").innerHTML = " ";
		  }
        }, 7000);
		document.getElementById("comment").innerHTML = "NO CURSOR!";
		if(!reversed){
			chaincount=0;
			multiplier = 1;
			calcMultiplier();
			points -= 100;
		}
		else{
			chaincount++;
			points += 100 * multiplier;
			if(chaincount%4 === 0){
			multiplier++;
			calcMultiplier();
			}
		}
        document.getElementById("scoreboard").textContent	 = "Score: " + points;
		document.getElementById("multiplier").innerHTML =`x${multiplier}`;
      }
      else if (element.classList.contains("twice")) {
        showHit(element,"hittwice");
		if(!reversed){
			multiplier = multiplier +1;
			document.getElementById("multiplier").innerHTML =`x${multiplier}`;
		}
		else{
			if(multiplier > 1){
			multiplier-=1;
			}
			document.getElementById("multiplier").innerHTML =`x${multiplier}`;
		}
        points += multiplier * 100;
      }
	  else if (element.classList.contains("civilian")) {
        showHit(element,"hitcivilian");
		if(!reversed){
			chaincount=0;
			if(multiplier > 8){document.getElementById("comment").innerHTML = "OOF!"};
			multiplier = 1;
			calcMultiplier();
			document.getElementById("multiplier").innerHTML =`x${multiplier}`;
			points -= multiplier * 100;
		}
		else{
			chaincount++;
			points += 100 * multiplier;
			if(chaincount%4 === 0){
			multiplier++;
			calcMultiplier();
			}
		}
		document.getElementById("scoreboard").innerText = "Score: " + points;
	  }
	  else if(element.classList.contains("reverso")){
		  showHit(element,"hitreverso");
		  reversed = 1;
		  document.getElementById("comment").innerHTML = "REVERSED!";
		  inverse();
	  }
	  else if (element.classList.contains("up")) {
        showHit(element,"hitup");
		if(!reversed){
			chaincount++;
			points += 100 * multiplier;
			if(chaincount%4 === 0){
			multiplier++;
			calcMultiplier();
			}
		}
		else{
			points -= 100 * multiplier;
			chaincount=0;
			multiplier=1;
			calcMultiplier();
		}
        document.getElementById("scoreboard").textContent = "Score: " + points;
		document.getElementById("multiplier").innerHTML =`x${multiplier}`;
	  }
	  document.getElementById("scoreboard").innerText = "Score: " + points;
    });//listener end
  }//loop end
}//onload end
function forcePopIn(element){
	element.classList.add("down");
    element.classList.remove("hider");
	element.classList.remove("twice");
	element.classList.remove("civilian");
    element.classList.remove("up");
	element.classList.remove("reverso");
}
function randomPopUpTarget() {
  let array = document.getElementsByClassName("down");
  var x = Math.floor((Math.random() * array.length) + 0);
  let element = array[x];
  element.classList.add("up");
  element.classList.remove("down");
  var y = Math.floor((Math.random() * 3000) + 1000);
  setTimeout(forcePopIn,y,element);
	document.getElementById("multiplier").innerHTML =`x${multiplier}`;
}
function randomPopInTarget() {

  let array = document.getElementsByClassName("up");
  var x = Math.floor((Math.random() * array.length) + 0);
  if (x != -1) {
    let element = array[x];
	if(element == undefined)
	{return;}
    element.classList.add("down");
    element.classList.remove("hider");
	element.classList.remove("twice");
	element.classList.remove("civilian");
    element.classList.remove("up");
	element.classList.remove("reverso");
  }
	document.getElementById("multiplier").innerHTML =`x${multiplier}`;
}
function randomizeHideDebuff() {
  let array = document.getElementsByClassName("down");
  if (x != -1) {
	var x = Math.floor((Math.random() * array.length) + 0);
	let element = array[x];
	element.classList.add("up");
	element.classList.add("hider");
	element.classList.remove("down");
	var y = Math.floor((Math.random() * 3000) + 1000);
	setTimeout(forcePopIn,y,element);
  }
  document.getElementById("multiplier").innerHTML =`x${multiplier}`;
  calcMultiplier();
}
function randomizeTwiceBuff() {
	
  let array = document.getElementsByClassName("down");
  var x = Math.floor((Math.random() * array.length) + 0);
  if (x != -1) {
	let element = array[x];
	element.classList.add("up");
	element.classList.add("twice");
	element.classList.remove("down");
  }
  document.getElementById("multiplier").innerHTML =`x${multiplier}`;
  calcMultiplier();
}
function randomizeCivilian() {
	
  let array = document.getElementsByClassName("down");
  var x = Math.floor((Math.random() * array.length) + 0);
  if (x != -1) {
	let element = array[x];
	element.classList.add("up");
	element.classList.add("civilian");
	element.classList.remove("down");
	calcMultiplier();
	var y = Math.floor((Math.random() * 3000) + 1000);
	setTimeout(forcePopIn,y,element);
  }
  document.getElementById("multiplier").innerHTML =`x${multiplier}`;
  calcMultiplier();
}
function randomizeReverso(){
	let array = document.getElementsByClassName("down");
	var x = Math.floor((Math.random() * array.length) + 0);
	if (x != -1) {
		let element = array[x];
		element.classList.add("up");
		element.classList.add("reverso");
		element.classList.remove("down");
		calcMultiplier();
		var y = Math.floor((Math.random() * 3000) + 1000);
		setTimeout(forcePopIn,y,element);
	}
	document.getElementById("multiplier").innerHTML =`x${multiplier}`;
	calcMultiplier();
}
function summonMegaPinata(){
	
	
}
function shake(){

	
}
function showHit(element,cname){
	element.classList.remove("hider");
	element.classList.remove("twice");
	element.classList.remove("civilian");
	element.classList.remove("reverso");
    element.classList.remove("up");
	element.classList.add(cname);
	setTimeout(()=>{element.classList.remove(cname);element.classList.add("down");},2000);
}
function inverse(){
	let reverso = document.getElementsByClassName("nopad");
	for(let element of reverso){
		element.classList.remove("bg-dark");
		element.classList.add("bg-secondary");
	}
	document.getElementById("comment").innerHTML = "REVERSED!";
	setTimeout(unverse,10000)
}
function unverse(){
	let reverso = document.getElementsByClassName("nopad");
	for(let element of reverso){
		element.classList.remove("bg-secondary");
		element.classList.add("bg-dark");
	}
	reversed = 0;
	document.getElementById("comment").innerHTML = " ";
}
function calcMultiplier(){
	var style = window.getComputedStyle(document.getElementById("multiplier"), null).getPropertyValue('font-size');
	var fontSize = parseFloat(style); 
	if(fontSize<34){document.getElementById("multiplier").style.fontSize = (13 + chaincount) + 'px';}
	var cstyle = window.getComputedStyle(document.getElementById("comment"), null).getPropertyValue('font-size');
	var cfontSize = parseFloat(cstyle); 
	if(cfontSize<34){document.getElementById("comment").style.fontSize = (13 + chaincount) + 'px';}
	if(multiplier>30){document.getElementById("comment").innerHTML="GOD-LIKE!";}
	else if(multiplier>15){document.getElementById("comment").innerHTML="Rampage!";}
	else if(multiplier>10){document.getElementById("comment").innerHTML="Amazing!";}
	else if(multiplier>7){document.getElementById("comment").innerHTML="Outstanding!";}
	else if(multiplier>5){document.getElementById("comment").innerHTML="Great!";}
	else if(multiplier>3){document.getElementById("comment").innerHTML ="GOOD!";}
}