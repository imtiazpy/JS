/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */

import Backpack from "./Backpack.js";
import Shirt from "./Shirt.js";

const newBackpack = new Backpack (
    'school bag',
    10,
    'black',
    10,
    20,
    20,
    false
);

const newShirt = new Shirt (
    'm',
    'red',
    'full',
    true
);


console.log("the backpack object: ", newBackpack);
console.log('Backpack color: ', newBackpack.color);
console.log('-----------------');
console.log("The shirt object: ", newShirt);
console.log('Shirt color: ', newShirt.color);
console.log('previous sleeve length: ', newShirt.sleeveLength);
console.log(newShirt.changeSleeveLength('half'));
console.log('New sleeve length: ', newShirt.sleeveLength);
