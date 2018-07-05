//card image array
const cardsArray = [{
    'name' : 'stein',
    'img' : './cards/beer-stein.png',
},
{
    'name' : 'blacksmith',
    'img' : './cards/blacksmith.png',
},
{
  'name' : 'walrus',
  'img' : './cards/walrus-head.png',
},
{
    'name' : 'axes',
    'img' : './cards/crossed-axes.png',
},
{
    'name' : 'hilt',
    'img' : './cards/diamond-hilt.png',
},
{
    'name' : 'drakkar',
    'img' : './cards/drakkar.png',
},
{
    'name' : 'fish',
    'img' : './cards/fish-smoking.png',
},
{
    'name' : 'boot',
    'img' : './cards/fur-boot.png',
},
{
    'name' : 'horn',
    'img' : './cards/hunting-horn.png',
},
{
    'name' : 'hydra',
    'img' : './cards/hydra.png',
},
{
    'name' : 'storm',
    'img' : './cards/lightning-storm.png',
},
{
    'name' : 'rune',
    'img' : './cards/rune-stone.png',
},
{
    'name' : 'shield',
    'img' : './cards/viking-shield.png',
},
{
    'name' : 'hood',
    'img' : './cards/warlock-hood.png',
},
{
    'name' : 'wolf',
    'img' : './cards/wolf-head.png',
}
]; //15 unique cards = 30 displayed cards

//this will create a new array with 2x the amount of images
//from before to make matches
const gameGrid = cardsArray.concat(cardsArray).sort(() => 0.5 - Math.random());

let firstGuess = '';    // need first and second to allow for multiple guesses
let secondGuess = '';
let count = 0;
let previousTarget = null;  //created to prevent players from selecting the same element twice
let delay = 1000;

const game = document.getElementById('game'); //grab the div with id 'game'
const grid = document.createElement('section');
grid.setAttribute('class', 'grid');       //create a new section with class grid
game.appendChild(grid);               // add grid to the game div

/* 
function countclicks {

} 
*/
function reload() {
  location.reload();
}


// for each card array item
gameGrid.forEach(item => {
  const { name, img } = item;

  const card = document.createElement('div');
  card.classList.add('card');
  card.dataset.name = name;
// create the blank front of the card
  const front = document.createElement('div');
  front.classList.add('front');

  const back = document.createElement('div');
  back.classList.add('back');
  back.style.backgroundImage = `url(${img})`;

  grid.appendChild(card);
  card.appendChild(front);
  card.appendChild(back);
});

//when matched add css 
const match = () => {
  const selected = document.querySelectorAll('.selected');
  selected.forEach(card => {
    card.classList.add('match');
  });
};


const resetGuesses = () => {
  firstGuess = '';
  secondGuess = '';
  count = 0;
  previousTarget = null;

  var selected = document.querySelectorAll('.selected');
  selected.forEach(card => {
    card.classList.remove('selected');
  });
};

//whenever an image is clicked, select it
grid.addEventListener('click', event => {

  const clicked = event.target;
// do not allow the background, previous card or matches to become selected
  if (
    clicked.nodeName === 'SECTION' ||
    clicked === previousTarget ||
    clicked.parentNode.classList.contains('selected') ||
    clicked.parentNode.classList.contains('match')
  ) {
    return;
  }

  if (count < 2) {
    count++;
    if (count === 1) {
      //become first guess
      firstGuess = clicked.parentNode.dataset.name;
      console.log(firstGuess);
      clicked.parentNode.classList.add('selected');
    } else {
      //become second guess
      secondGuess = clicked.parentNode.dataset.name;
      console.log(secondGuess);
      clicked.parentNode.classList.add('selected');
    }

    //if both guesses aren't empty and they match, we run match and reset guess attempts
    if (firstGuess && secondGuess) {
      if (firstGuess === secondGuess) {
        setTimeout(match, delay);
      }
      setTimeout(resetGuesses, delay);
    }
    previousTarget = clicked;
  }
});