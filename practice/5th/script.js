// Practicing finding Element in DOM



// console.log(document.querySelector(".siteheader"));

const main = document.querySelector(".maincontent"); //class

// const p = document.querySelector("main p"); //(element element)

// const content = `<h1>testing</h1>`;

// main.innerHTML = content;

// main.p.style.backgroundColor = "red";


// inline style
document.querySelector(".site-title").style.color = "purple";

document.body.style.backgroundColor = "orange";

document.querySelector(".maincontent").style.backgroundColor = "aqua";

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



document.querySelector("img").hasAttribute('src')
// true
document.querySelector("img").hasAttribute('alt')
// true
document.querySelector("img").getAttribute('alt')
// ""
document.querySelector("img").setAttribute('alt', 'alt-attr');
// undefined
// alt = "alt-attr"
document.querySelector("img").setAttribute('title', 'new title');
// undefined
// adds another attr title with value
document.querySelector("img").attributes;
// NamedNodeMap {0: src, 1: alt, 2: loading, 3: title, src: src, alt: alt, loading: loading, title: title, length: 4}
document.querySelector("img").getAttribute("title");
// "new title"
document.querySelector("img").removeAttribute("title");
// undefined
// removes the attr title



