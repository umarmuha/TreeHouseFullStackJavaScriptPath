class Player {
    constructor(name, id, color, active = false) {
        this.name = name;
        this.id = id;
        this.color = color;
        this.active = active;
        this.tokens = this.createTokens(21);
    }

    /**
     * Creates token objects for player
     * @param     {number}    num - Number of token objects to be created
     * @returns   {Array}     An array of the newly created token objects
     */
    createTokens(num) {
        const tokens = [];
        for (let index = 0; index < num; index++) {
            let token = new Token(index, this);
            tokens.push(token);
        }
        return tokens;
    }

    get unusedTokens(){
        return this.tokens.filter(token => !token.dropped);
    }

    get activeToken(){
        return this.unusedTokens[0];
    }

    /** 
     * Check if a player has any undropped token
     * @return {Boolean}
    */
   checkTokens(){
       return this.unusedTokens.length == 0 ? false : true;
   }
}

