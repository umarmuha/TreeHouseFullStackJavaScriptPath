$(document).ready(function () {
    let library = new Library();
    let book = new Book('Harry Potter and the Sorcerer\'s Stone', 'J.K. Rowling', '978-0439708180');
    let patron = new Patron('Jugga', 'jugga@style.com')
    
    
    library.addBook(book);
    library.addPatron(patron);
    patron.checkOut(book);
    library.chargeFines();
    
    
    // console.log(library);
    // console.log(patron);
    console.log(book);

    // patron.returnBook(book);
    console.log(patron);

    library.chargeFines(patron);
    console.log(patron);

    


});