var a = setInterval(randomPopUpTarget, 700);
var a = setInterval(randomPopUpTarget, 3000);
var a = setInterval(randomPopUpTarget, 1900);
var b = setInterval(randomPopInTarget, 440);
var b = setInterval(randomPopInTarget, 1000);
var b = setInterval(randomPopInTarget, 2000);
var c = setInterval(randomizeHideDebuff, 4000);
var d = setInterval(randomizeTwiceBuff, 5000);
//var ran = Math.floor((Math.random() * 10) + 1);
//setTimeout(summonMegaPinata, 10000+(z*1000));
var points = 0;
var multiplier = 1;

window.onload = function () {
	document.getElementById("mainDiv").style.cursor = 'crosshair';
  let elements = document.getElementsByClassName("down");
  for (let element of elements) {
    element.addEventListener('click', () => {
      if (element.classList.contains("up")) {
        element.classList.add("down");
        element.classList.remove("up");
        points += 100 * multiplier;
        document.getElementById("scoreboard").innerText = "Score: " + points;
		document.getElementById("multiplier").innerHTML =`x${multiplier}`;
      }
      if (element.classList.contains("hider")) {
        element.classList.add("down");
        element.classList.remove("up");
		element.classList.remove("hider");
        document.getElementById("mainDiv").style.cursor = 'none';
        setTimeout(() => {
          document.getElementById("mainDiv").style.cursor = 'crosshair';
        }, 7000);
        multiplier = 1;
        points -= 100;
        document.getElementById("scoreboard").innerText = "Score: " + points;
		document.getElementById("multiplier").innerHTML =`x${multiplier}`;
      }
      if (element.classList.contains("twice")) {
        element.classList.add("down");
        element.classList.remove("up");
		element.classList.remove("twice");
        multiplier = multiplier * 2;
		document.getElementById("multiplier").innerHTML =`x${multiplier}`;
		
        setTimeout(() => {
          multiplier= multiplier/2;
		  document.getElementById("multiplier").innerHTML =`x${multiplier}`;
        }, 10000);
        points += multiplier * 100;
		
      }
      document.getElementById("scoreboard").innerText = "Score: " + points;
      /*else if(element.getAttribute("src")=="popin.png"){
       element.style.paddingTop = '0px';
       element.setAttribute("src","./assets/popup.png");
       
       }*/
    })
  }

}

function randomPopUpTarget() {


  let array = document.getElementsByClassName("down");
  var x = Math.floor((Math.random() * array.length) + 0);
  let element = array[x];
  element.classList.add("up");
  element.classList.remove("down");
	document.getElementById("multiplier").innerHTML =`x${multiplier}`;

}
function randomPopInTarget() {

  let array = document.getElementsByClassName("up");
  var x = Math.floor((Math.random() * array.length - 1) + 0);
  if (x != -1) {
    let element = array[x];
    element.classList.add("down");
    element.classList.remove("hider");
	element.classList.remove("twice");
    element.classList.remove("up");
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
  }
  document.getElementById("multiplier").innerHTML =`x${multiplier}`;
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
}
function summonMegaPinata(){
	
	
}
function starfall(){
	
	
}