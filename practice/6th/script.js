
// adding classes to an Element
document.querySelector("body header div:first-child").classList.add("test", "test2");

// removing a class from an Element
document.querySelector("body header div:first-child").classList.remove("test2");

// adding attr to an Element
document.querySelector("body header div:first-child").setAttribute("title", "title goes here");

// finding the value of the added Attr
document.querySelector("body header div:first-child").getAttribute("title");

// setting the inline style of an Element
document.querySelector("body header div:first-child").style.backgroundColor="olive";
document.querySelector("body header div:first-child").style.color="purple";

// checkign the cssText of an Element
document.querySelector("body header div:first-child").style.cssText
// "background-color: olive; color: purple;" //output

// setting inline style with class
document.querySelector(".site-title").style.backgroundColor="grey";

// changing the value of Attr
document.querySelector(".site-title").setAttribute("style", "background-color: navy; color: orange;");


