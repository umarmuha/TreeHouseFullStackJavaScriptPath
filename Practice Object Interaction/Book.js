class Book{
    constructor(title, author, isbn){
        this.title = title,
        this.author = author,
        this.isbn = isbn, 
        this._out = false, 
        this.dueDate = null, 
        this.patron = null
    }

    get out(){
        return this._out;
    }
    set out(out){
        this._out = out;
        if (out) {
            let today = new Date();
            today.setDate(today.getDate() - 14)
            this.dueDate = today;
        } else {
            this.dueDate = null;
        }
    }
}