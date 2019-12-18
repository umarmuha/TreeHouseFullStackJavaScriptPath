let newGame = new Game();
//newGame.activePlayer.activeToken.drawHTMLToken();
//console.log(newGame.board.spaces);

/** 
 * Listens for click on `#begin-game` and calls startGame() on game object
 */
document.getElementById("begin-game").addEventListener("click", function() {
    newGame.startGame();
    this.style.display = 'none';
    document.getElementById('play-area').style.opacity = '1';
});

document.addEventListener('keydown', function (event) {
  newGame.handleKeydown(event);  
});