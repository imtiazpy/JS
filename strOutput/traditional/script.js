/**
 * Use template literals to output HTML
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
 *
 */
import Backpack from "./Backpack.js";


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

// Traditional way of outputting String with JS Object
const content = "<h1>" + everydayPack.name + "</h1>" 
          + "<ul> <li>Volume: " + everydayPack.volume + "</li>" +
          "<li>Color: " + everydayPack.color + "</li></ul>";

// document.body.innerHTML = content;


const first = document.createElement("first");
first.innerHTML = content;

document.body.appendChild(first);
// document.body.appendChild(second);


// For browser testing
console.log("The everydayPack object:", everydayPack);
console.log("The pocketNum value:", everydayPack.pocketNum);
console.log("Days since aquired:", everydayPack.backpackAge());
