class Game {
    constructor() {
        this.board = new Board();
        this.players = this.createPlayers();
        this.ready = false;
    }

    /** 
     * Creates two player objects
     * @return  {Array}    An array of two Player objects.
     */
    createPlayers() {
        // const players = [new Player('Player 1', 1, '#e15258', true),
        //                  new Player('Player 2', 2, '#e59a13')]; // Default active state is false
        // return players;

        // This can be accomplished in one line. Got this idea from another student
        // https://teamtreehouse.com/community/would-this-version-of-createplayers-method-work 
        return [new Player('Player 1', 1, '#e15258', true), new Player('Player 2', 2, '#e59a13')];

    }

    /**
     * Gets game ready for play!
     */
    startGame() {
        this.board.drawHTMLBoard();
        this.ready = true;
        this.activePlayer.activeToken.drawHTMLToken()
    }


    get activePlayer() {
        // One approach
        // for (const player of this.players) {
        //     if(player.active = true){
        //         return player;
        //     }
        // }
        // Second Approach
        return this.players.find(player => player.active)
    }

    playToken() {
        // Alternate solution by another student https://teamtreehouse.com/community/my-playtoken-solution 
        let column = this.board.spaces[this.activePlayer.activeToken.columnLocation]
        let targetSpace = null;
        for (const space of column) {
            if (space.token === null) {
                targetSpace = space;
            }
        }
        if (targetSpace !== null) {
            newGame.ready = false;
            targetSpace.mark(this.activePlayer.activeToken);
            this.activePlayer.activeToken.drop(targetSpace, () => {
                this.updateGameState(this.activePlayer.activeToken, targetSpace);
            });

        }

    }

    /** 
     * Checks if there a winner on the board after each token drop.
     * @param   {Object}    Targeted space for dropped token.
     * @return  {boolean}   Boolean value indicating whether the game has been won (true) or not (false)
     */
    checkForWin(target) {
        const owner = target.token.owner;
        let win = false;

        //For Vertical check
        for (let x = 0; x < this.board.columns; x++) {
            for (let y = 0; y < this.board.rows - 3; y++) {
                if (this.board.spaces[x][y].owner === owner &&
                    this.board.spaces[x][y + 1].owner === owner &&
                    this.board.spaces[x][y + 2].owner === owner &&
                    this.board.spaces[x][y + 3].owner === owner) {

                    win = true;
                }
            }
        }

        //For Horizontal check
        for (let x = 0; x < this.board.columns - 3; x++) {
            for (let y = 0; y < this.board.rows; y++) {
                if (this.board.spaces[x][y].owner === owner &&
                    this.board.spaces[x + 1][y].owner === owner &&
                    this.board.spaces[x + 2][y].owner === owner &&
                    this.board.spaces[x + 3][y].owner === owner) {

                    win = true;
                }
            }
        }

        // For diagonal check
        for (let x = 3; x < this.board.columns; x++) {
            for (let y = 0; y < this.board.rows - 3; y++) {
                if (this.board.spaces[x][y].owner === owner &&
                    this.board.spaces[x - 1][y + 1].owner === owner &&
                    this.board.spaces[x - 2][y + 2].owner === owner &&
                    this.board.spaces[x - 3][y + 3].owner === owner) {

                    win = true;
                }
            }
        }

        // For diagonal check
        for (let x = 3; x < this.board.columns; x++) {
            for (let y = 3; y < this.board.rows; y++) {
                if (this.board.spaces[x][y].owner === owner &&
                    this.board.spaces[x - 1][y - 1].owner === owner &&
                    this.board.spaces[x - 2][y - 2].owner === owner &&
                    this.board.spaces[x - 3][y - 3].owner === owner) {

                    win = true;
                }
            }
        }
        return win;
    }

    /** 
     * Switches active player. 
     */
    switchPlayers() {
        return this.players.map(player => player.active = true ? false : true);
    }

    /** 
     * Displays game over message.
     * @param {string} message - Game over message.      
     */
    gameOver(message) {
        let gameOver = document.getElementById("game-over");
        gameOver.style.display = 'block';
        gameOver.textContent = message;
    }

    /** 
     * Updates game state after token is dropped. 
     * @param   {Object}  token  -  The token that's being dropped.
     * @param   {Object}  target -  Targeted space for dropped token.
     */
    updateGameState(token, target) {
        // Space on the board where the token is being dropped
        target.mark(token);
        // Check for win after the token is dropped. If four in a row, game ends
        if (checkForWin(target)) {
            this.gameOver(`${target.owner.name} wins!`);
        } else {
            this.switchPlayers()
            /**
             * game should check to ensure that the activePlayer still has available tokens. 
             * If there are still available tokens, then draw a new htmlToken, 
             * and then set the game state to ready.
             */
            if (this.activePlayer.unusedTokens().length !== 0) {
                return this.activePlayer.activeToken.htmlToken()
            } else {
                this.gameOver();
            }
        }


    }

    /**
     * Branches code, depending on what key player presses
     * @param   {Object}    e - Keydown event object
     */
    handleKeydown(event) {

        if (this.ready) {

            if (event.key === "ArrowLeft") {
                this.activePlayer.activeToken.moveLeft()
            }

            if (event.key === "ArrowRight") {
                this.activePlayer.activeToken.moveRight(this.board.columns)
            }

            if (event.key === "ArrowDown") {
                this.playToken();
                this.switchPlayers();
            }
        }
    }
}