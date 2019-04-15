class Board {
    constructor() {
        this.rows = 6;
        this.columns = 7;
        this.spaces = this.createSpaces();
    } // end constructor 

    /** 
     * Generates 2D array of spaces. 
    * @return  {Array}     An array of space objects
    */

    // createSpaces() {
    //     let spaces = new Array(this.columns);

    //     for (let i = 0; i < this.columns; i++) {
    //         spaces[i] = new Array(this.rows);
    //         for (let j = 0; j < this.rows; j++) {
    //             spaces[i][j] = '[' + i + ', ' + j + ']';
    //         }
    //     }

    //     return spaces;
    // }

    createSpaces() {
        const spaces = [];

        for (let x = 0; x < this.columns; x++) {
            const column = [];

            for (let y = 0; y < this.rows; y++) {
                const space = new Space(x,y);
                column.push(space);
            }
            spaces.push(column);
        }

        return spaces;
    }

    /*
    * Draw associated SVG spaces for all game spaces
    */ 
    drawHTMLBoard(){
    // Spaces is a 2D array. The outerloop goes through coloums
    // The inner loop goes over spaces in each coloum    
    //     for (let i = 0; i < this.spaces.length; i++) {
    //         drawSVGSpace([i]);            
    //     }
    // Using for...of loop. The for-of loop creates a loop iterating over iterable member objects.
    // for more info check https://codeburst.io/foreach-vs-for-of-vs-for-in-tug-of-for-d8f935396648
        for (const coloumn of this.spaces) {
            for (const space of coloumn) {
                space.drawSVGSpace();
            } // end inner for of loop            
        } //end outer for of loop

    } // end drawHTMLBoard method

} // end Board class

//let board = new Board();
//console.log(board.spaces);