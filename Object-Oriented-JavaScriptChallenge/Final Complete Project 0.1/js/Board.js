class Board {
    constructor() {
        this.rows = 6;
        this.columns = 7;
        this.spaces = this.createSpaces();
    }

    /** 
     * Generates 2D array of spaces. 
     * @return  {Array}     An array of space objects
     */

    createSpaces() {
        const spaces = [];
        for (let i = 0; i < this.columns; i++) {
            const columns = [];

            for (let j = 0; j < this.rows; j++) {
                let space = new Space(i, j);
                columns.push(space);
            }

            spaces.push(columns);
        }
        return spaces;
    }

    drawHTMLBoard() {
        for (const array of this.spaces) {
            for (const space of array) {
                space.drawSVGSpace();
            }
        }
    }
}

/**
 * Another approach for adding the createSpaces() method
 createSpaces() {
        const spaces = [];

        for (let x = 0; x < this.columns; x++) {
            spaces[x] = [];

            for (let y = 0; y < this.rows; y++){
                spaces[x][y] = new Space(x, y);
            }
        }

        return spaces;
    }
 */