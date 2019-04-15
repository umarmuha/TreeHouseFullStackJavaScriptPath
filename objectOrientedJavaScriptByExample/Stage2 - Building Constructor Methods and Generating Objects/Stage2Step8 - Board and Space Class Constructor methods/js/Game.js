class Game {
    constructor(){
        this.board = new Board();
        this.players = this.createPlayers();
        this.ready = false;
    } // end constructor

    createPlayers() {
        const players = [new Player('Player 1', 1, '#e15258', true),
                         new Player('Player 2', 2, '#e59a13')];
        return players;
    } // end createPlayers method

    /*
    * Gets the active player whose turn it is currently 
    */ 
    get activePlayer() {
        return this.players.find(player => player.active)
    }

    /*
    * Gets game ready for play
    */
   startGame(){
    this.board.drawHTMLBoard();
    this.activePlayer.activeToken.drawHTMLToken();
    this.ready = true;
    }

    handleKeydown(event){
        if (this.ready) {
            switch (event.key) {
                case "ArrowDown":
                    break;
            
                case "ArrowUp":
                    break;
                
                case "ArrowLeft":
                this.activePlayer.activeToken.moveLeft();
                    break;
                  
                case "ArrowRight":
                this.activePlayer.activeToken.moveRight(this.board.columns);
                    break;
                
                default:
                    return;
            }
            
        }
    }

    playToken(){
        this.ready = false;
        
        for (const coloumn of this.board.spaces) {
            for (const space of coloumn) {
                if (space = null) {
                    space = this.activePlayer.activeToken.columnLocation;   
                }        
            } // end inner for of loop            
        } //end outer for of loop
    }


} // end Game class