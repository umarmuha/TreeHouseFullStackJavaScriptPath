/**
 * Inside the play method, write an empty if statement that checks if it's the players turn. Use dot notation.
 * Inside the if statement, return a string equal to the value of the name property followed by the string " is now playing!". 
 * Use bracket notation.
 */


const player1 = {
    name: 'Ashley',
    color: 'purple',
    isTurn: true,
    play: function(){
        if (this.isTurn) {
            return `${this['name']} is now playing!`
        }
    }
}

