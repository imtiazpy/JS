/**
 * Challenge: Create a new object type
 * 
 * - Create a new object type "Book" using a class or an object constructor function.
 * - Add at least 5 book objects.
 */

import Book from "./Book.js";

// 1st book object
// Book param order: title, author, ISBN, pubYear, pageNumber, currentPage, readStatus
const theAlchemist = new Book (
    "The Alchemist",
    "Pau Coelho",
    9780062315007,
    "1988",
    208,
    50,
    "finished"
);

console.log("The Book object: ", theAlchemist);
console.log("Name: ", theAlchemist.title);
console.log("current page: ", theAlchemist.currentPage);
console.log(theAlchemist.updateCurrentPage(51));
console.log("New Current page: ", theAlchemist.currentPage);

// 2nd book object

