class Library{
    constructor(){
        this.books = [],
        this.patrons = [],
        this.dailyFine = .1
    }

    addPatron(patron){
        this.patrons.push(patron);
    }

    addBook(book){
        this.books.push(book);
    }

    chargeFines(){
        let today = new Date();
        // The teachers solution first filters the Patrons that have overdue books. In a large dataset that would be the best approach. 
        for (const patron of this.patrons) {
            if (patron.currentBook !== null && patron.currentBook.dueDate < today) {
                // The difference between two dates is not a date itself but a span of time. In this example, that difference is 14 days.
                // don't need to treat it as a date and call getDate, plus that will only work for spans of 31 days or less. 
                // Instead, just divide it by the number of milliseconds in a day and round down:
                const dateDiff = today - patron.currentBook.dueDate; // date differences are milliseconds
                const daysLate = Math.floor(dateDiff / 86400000) // converts to days by dividing milliseconds in a day and rounds them
                console.log(daysLate);
                // patron.balance = (daysLate * this.dailyFine + patron.balance).toFixed(2);
                patron.balance += daysLate * this.dailyFine;

                // Ealier approach
                // const dateDiff = today.getDate() - patron.currentBook.dueDate.getDate();
                // console.log(dateDiff);
                // patron.balance += this.dailyFine * dateDiff;
                
                // let fine = (today.getDate() - patron.currentBook.dueDate.getDate()) * this.dailyFine;
                // patron.balance = `$${fine.toFixed(2)}`;
            } else {
                return `There are no fines for ${patron}`
            }
        }
    }
}