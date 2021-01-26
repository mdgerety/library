let myLibrary = [];

function Book(title, author, pages, haveRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.haveRead = haveRead;
        return `Title: ${title}, Author: ${author}, Pages: ${pages}, Have Read: ${haveRead}`;
}

function addBookToLibrary(newBook) {
    myLibrary.push(newBook);
}

function displayLibrary (array) {
    const myArray = array;
    const e = document.querySelector('.library-container');
    for (i = 0; i <= myArray.length - 1; i++) {
        let bookCard = document.createElement("div");
        bookCard.className = "bookCard";
        bookCard.id = myArray[i].title;
        bookCard.innerText = `Title: ${myArray[i].title}, `
        e.appendChild(bookCard);
    }
}

const theHobbit = new Book ("The Hobbit", "J.R.R. Tolkein", "295 Pages", true);
const harryPotterSorcerersStone = new Book ("Harry Potter and the Sorcerer's Stone", "J.K. Rowling", "309", true);

addBookToLibrary(theHobbit);
addBookToLibrary(harryPotterSorcerersStone);

displayLibrary(myLibrary);