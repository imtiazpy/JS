// write a function to add name to an emptly array.

const names = [];

function addName() {
    const name = prompt("Name to add.");
    names.push(name);
    console.log(names);
}



// Delete any name from the array.

function delName() {
    const name = prompt("Name to delete");
    if (names.includes(name)) {
        const index = names.indexof(name);
        names.splice(index, 1);
    } else {
        alert("Name not found!");
      }
    console.log(names);
}
