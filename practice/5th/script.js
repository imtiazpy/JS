// Practicing finding Element


// console.log(document.querySelector(".siteheader"));

const main = document.querySelector(".maincontent"); //class

// const p = document.querySelector("main p"); //(element element)

// const content = `<h1>testing</h1>`;

// main.innerHTML = content;

// main.p.style.backgroundColor = "red";

document.body.style.backgroundColor = "orange";

document.getElementById("pack01").style.backgroundColor = "lightblue";
document.getElementById("pack02").style.backgroundColor = "olive";







console.log(document.querySelector("main").className);
// maincontent

console.log(document.querySelector("main li:first-child").className);
// feature backpack__volume

console.log(document.querySelector("main li:first-child").classList);
// ["feature", "backpack__volume"]



// modifying element classes
console.log(document.querySelector("main li:first-child").classList.replace("feature", "new"));







