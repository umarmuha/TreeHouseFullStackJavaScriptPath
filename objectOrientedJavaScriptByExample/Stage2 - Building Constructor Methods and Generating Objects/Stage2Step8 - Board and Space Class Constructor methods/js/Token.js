class Token {
    constructor(index, owner){
        this.owner = owner;
        this.id = `token-${index}-${owner.id}`;
        this.dropped = false;
        this.columnLocation = 0;
    } // end constructor

    get htmlToken(){
        //return $("this.id");
        return document.getElementById(this.id);
    }

    /** 
     * Gets left offset of html element.
     * @return  {number}   Left offset of token object's htmlToken.
     */
    get offsetLeft(){
        return this.htmlToken.offsetLeft;
    }

    /**
     * Draw new HTML token
     */
    drawHTMLToken(){
        const token = document.createElement("div");
        document.getElementById('game-board-underlay').appendChild(token);
        //$('#game-board-underlay').append(token);
        token.setAttribute("id", this.id);
        token.setAttribute("class", "token");
        token.style.backgroundColor = this.owner.color;
    }

    /** 
     * Moves html token one column to left.
     * the - 76 means to move the token 76 px to the left
     * |---|>offset<-76->| disgram of a 2 coloum space
     */
    moveLeft(){
        if (this.columnLocation > 0) {
            this.htmlToken.style.left = this.offsetLeft - 76;
            this.columnLocation --;
        }
    }

    /** 
     * Moves html token one column to right
     * @param   {number}    columns - number of columns on the game board    
     */
    moveRight(coloums){
        if (this.columnLocation < columns -1){
            this.htmlToken.style.left = this.offsetLeft + 76;
            this.columnLocation ++;
        }
    }

    /** 
     * Drops html token into targeted board space.
     * @param   {Object}   target - Targeted space for dropped token.
     * @param   {function} reset  - The reset function to call after the drop animation has completed.
     */
    drop(target, reset){
        this.dropped = true;
    
        // animate syntax (selector).animate({styles},speed,easing,callback)     
        $(this.htmlToken).animate({
            top: (target.y * target.diameter)
        }, 750, 'easeOutBounce', reset )
    }



} // end token class