var image = new Image();
image.onload = cutImageUp;
image.src = "Deck/cards.png";

function cutImageUp() {
  var imagePieces = [];
  for(var x = 0; x < 13; x++) {
    for(var y = 0; y < numRowsToCut; y++) {
      var canvas = document.createElement('canvas');
      canvas.width = 73.077;
      canvas.height = 98;
      var context = canvas.getContext('2d');
      context.drawImage(image, x * 73.077, y * 98, 73.077, 98, 0, 0, canvas.width, canvas.height);
      imagePieces.push(canvas.toDataURL());
    }
  }

  var anImageElement = document.getElementById('playerDeck');
  anImageElement.src = imagePieces[0];
}