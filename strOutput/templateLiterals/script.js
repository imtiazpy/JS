/**
 * Use template literals to output HTML
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
 *
 */
import Backpack from "./Backpack.js";
import Book from "./Book.js";


// Backpack object
const everydayPack = new Backpack(
  "Everyday Pack",
  30,
  "grey",
  15,
  26,
  26,
  false,
  "December 5, 2018 15:00:00 PST"
);

// Book object
const aBook = new Book (
  'book title',
  'Jon doe',
  1245868,
  "2019",
  500,
  250,
  "reading"
);


// template literals
const content = `
  <div>
    <article>
      <h1>${everydayPack.name}</h1>
      <ul>
        <li>Volume: ${everydayPack.volume}</li>
        <li>Color: ${everydayPack.color}</li>
        <li>Age: ${everydayPack.backpackAge()}</li>
        <li>Number of pockets: ${everydayPack.pocketNum}</li>
        <li>Left strap length: ${everydayPack.strapLength.left}</li>
        <li>Right strap length: ${everydayPack.strapLength.right}</li>
        <li>Lid status: ${everydayPack.lidOpen}</li>
      </ul>
    </article>
  </div>
`;

const secContent = `
  <div>
    <article>
      <h1>Book</h1>
      <ul>
        <li>Title: ${aBook.title}</li>
        <li>Author: ${aBook.author}</li>
        <li>ISBN: ${aBook.ISBN}</li>
        <li>Published Year: ${aBook.pubYear}</li>
        <li>Page Number: ${aBook.pageNumber}</li>
        <li>Current Page: ${aBook.currentPage}</li>
        <li>Read status: ${aBook.readStatus}</li>
      </ul>
    </article>
  </div>
`;



const first = document.createElement("first");
first.innerHTML = content;

const second = document.createElement("second");
second.innerHTML = secContent;

// document.body.innerHTML = content;
// document.body.innerHTML = secContent;

document.body.appendChild(first);
document.body.appendChild(second);


// For browser testing
console.log("The everydayPack object:", everydayPack);
console.log("The pocketNum value:", everydayPack.pocketNum);
console.log("Days since aquired:", everydayPack.backpackAge());
