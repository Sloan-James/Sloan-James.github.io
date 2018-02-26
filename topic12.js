var image = new Image();
image.onload = cutImageUp;
image.src = "Deck/cards.png";
var Deck = [];
var playerDeck = [];
var cardPlayer = document.getElementById('playerCard');
var cardFrontPlayer = document.getElementById('playerFront');
var computerDeck = [];
var cardComputer = document.getElementById('computerCard');
var cardFrontComputer = document.getElementById('computerFront');



function cutImageUp() {

  for(var x = 0; x < 4; x++) {
    for(var y = 0; y < 13; y++) {
      var canvas = document.createElement('canvas');
      canvas.width = 73.077;
      canvas.height = 98;
      var context = canvas.getContext('2d');
      context.drawImage(image, y * 73.077, x * 98, 73.077, 98, 0, 0, canvas.width, canvas.height);
      if(y==0){
          value = 14;
      } else {
          value = y + 1;
      }
      var card = {cardFace: canvas.toDataURL(), cardValue: value};
      Deck.push(card);
    }
  }


    shuffle(Deck);
    for( var i = 0; i < (Deck.length)/2; i = i + 2){
        playerDeck.push(Deck[i]);
        computerDeck.push(Deck[i+1]);
    }

    updateDeckSize();
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function flip() {
    Player = playerDeck.shift();
    Computer = computerDeck.shift();

    cardFrontPlayer.style.backgroundImage = "url('" + Player.cardFace + "')";
    cardFrontComputer.style.backgroundImage = "url('" + Computer.cardFace + "')";

    flipCard();
}

function flipCard() {
    cardPlayer.classList.add('flipped');
    cardComputer.classList.add('flipped');
}

function storeCard() {
    cardPlayer.classList.add('stowed');
    cardComputer.classList.add('stowed');

    setTimeout(function() {
        cardPlayer.classList.remove('flipped');
        cardPlayer.classList.remove('stowed');
        cardPlayer.classList.add('low');
        cardComputer.classList.remove('flipped');
        cardComputer.classList.remove('stowed');
        cardComputer.classList.add('low');
    }, 1600);

    setTimeout(function() {
        cardPlayer.classList.remove('low');
        cardComputer.classList.remove('low');
    }, 1650);

    determineWinner();
}

function storeAndFlip() {
    storeCard();
    setTimeout(function() {
        flip();
    }, 1700);
}

function War() {
   //not functioning
   /* I imagine to make this work, would require adding and removing
    * div elements through javascript to show the flipped cards*/
}

function updateDeckSize(){
    var playerDeckSize = document.getElementById('playerSize');
    var computerDeckSize = document.getElementById('computerSize');

    playerDeckSize.innerHTML = playerDeck.length;
    computerDeckSize.innerHTML = computerDeck.length;
}

function determineWinner() {

    if(Player.cardValue > Computer.cardValue){
        playerDeck.push(Player);
        playerDeck.push(Computer);
    } else if(Player.cardValue < Computer.cardValue){
        computerDeck.push(Player);
        computerDeck.push(Computer);
    } else {
        War(); //not functioning
        //Gives back on equal value for time being.
        playerDeck.push(Player);
        computerDeck.push(Computer);
    }

    updateDeckSize();
}
