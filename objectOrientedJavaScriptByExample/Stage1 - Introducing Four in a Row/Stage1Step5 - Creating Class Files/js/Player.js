class Player {
    constructor(name, id, color, active = false){
        this.name = name;
        this.id = id;
        this.color = color;
        this.active = active;
        this.tokens = this.createTokens(21);
    } // end constuctor

    createTokens(num){
        const tokens = [];
        for (let i = 0; i < num; i++) {
            let token = new Token(i, this);
            console.log(token);
            tokens.push(token);
        }
        return tokens;
    } // end createTokens
} // end player class


