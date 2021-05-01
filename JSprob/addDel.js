const names = []

// write a function to add name to an emptly array.


function addName() {
    const name = prompt("Name to add.");
    names.push(name);
   // console.log(names);
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
   // console.log(names);
}

// Display the names of the array.

function display() {
    console.log(names);
}


// write a function to call the methods according the user choice.

function play() {
    const start = prompt("Would you like to use the web app? (y/n) ");
    let req = "empty";
    
    if (start === 'y') {
        while (req !== 'quit') {
            req = prompt("Pls select an option: add, remove, display or quit");
            if (req === 'add') {
                addNew();
            } else if (req === 'remove') {
                delName();
            } else if (req === 'display') {
                display();
            } else if (req === 'quit') {
                req = 'quit';
            } else {
                alert('request not recognized, will quit');
                req = 'quit';
            }
        }
        alert("Thanks for using the app, refresh the page to start over");
    } else {
        alert("Never mind")
    }
    
}


play()
