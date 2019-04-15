const game = new Game();

$('#begin-game').click(function() {
    game.startGame();
    this.style.display = 'none';
    document.getElementById('play-area').style.opacity = '1';
});

$(document).on("keydown", function(event){
    game.handleKeydown(event);        
})

// // Code coped from the solution
// document.getElementById('begin-game').addEventListener('click', function(){
//     game.startGame();
//     this.style.display = 'none';
//     document.getElementById('play-area').style.opacity = '1';
// });