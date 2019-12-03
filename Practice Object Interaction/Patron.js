class Patron{
    constructor(name, email){
        this.name = name,
        this.email = email, 
        this.currentBook = null,
        this.balance = 0
    }

    checkOut(book){
        this.currentBook = book;
        book.out = true;
        book.patron = this;
        // let today = new Date();
        // today.setDate(today.getDate() + 14)
        // book.dueDate = today;
    }

    returnBook(book){
        this.currentBook = null;
        this.balance = 0;
        book.out = false;
        book.patron = null;
        // book.dueDate = null;
    }
}