//import {books} from "./constants/data.js"

let books = [
    {
        isbn: "1600506460320",
        title: "Great book",
    },
    {
        isbn: "1600506460373",
        title: "Ok book",
    },
    {
        isbn: "1600506460521",
        title: "Bad book",
    },
    {
        isbn: "1600506460456",
        title: "Terrible book",
    },
];

function createHTML() {
    const bookContainer = document.querySelector(".book-container")

    bookContainer.innerHTML = "";

    books.forEach(function (book) { 
        bookContainer.innerHTML +=      `<div class="book">
                                            <h3>Title: ${book.title}</h3>
                                            <h4>ISBN: ${book.isbn}</h4>
                                            <i class="fa fa-trash" data-title="${book.title}" data-isbn="${book.isbn}">
                                        </div>` 
    });
     

    const trashCans = document.querySelectorAll(".book i");

    trashCans.forEach(function (can) {
        can.addEventListener("click", removeFromList);
    });
}

createHTML()

function removeFromList() {
    console.log(event)

    const deleteThisBook = event.target.dataset.book;

    const newList = books.filter(function (book) {
        if (deleteThisBook !== book) {
            return true
        }
    });

    books = newList;

    createHTML();
}
