//Linking a javascript file


////////////////////////////////////////////////
// Values and Variables
/*
Values
======
In javaScript, values are the fundamental building blocks that data takes on.
Values can be various types, such as numbers,strings,booleans,objects,arrays and more.
Variables are used to store and manipulate these values.
 ex :
    # Numbers: Numeric values, both integers and floating-point numbers. Example: 42, 3.14.
    # Strings: Textual data enclosed in single ('') or double ("") quotes. Example: 'Hello, world!', "JavaScript".
    # Booleans: Logical values representing true or false. Example: true, false.
    # Null: A special value representing the absence of any value or object. Example: null.
    # Undefined: A value given to uninitialized variables or unavailable properties. Example: undefined.
    # Objects: Collections of key-value pairs, used to represent more complex data structures. Example: { key: 'value', age: 25 }.
    # Arrays: Ordered lists of values, indexed by integers. Example: [1, 2, 3, 4].
    # Functions: Blocks of reusable code that can be invoked with arguments. Example: function add(a, b) { return a + b; }.


Variables
=========
A variable is a symbolic name that references a value in JavaScript. 
You declare variables using the var, let, or const keyword, followed by the variable name.

    # var: Used for declaring variables globally or within a function.
    # let: Introduces block-scoped variables. It's the recommended way to declare variables that will change.
    # const: Also block-scoped, but once assigned, the value cannot be changed. Used for constants.

    Example variable declarations:
*/
/*
    var firstName = `sanath`;
    let name = `malitha`;
    const pi = 3.14;

    console.log(name);
    
//  ps:
//      Remember that JavaScript is case-sensitive, 
//      so myVariable and MyVariable are considered different variables.
*/

////////////////////////////////////////////////
// Data Types
/*
let variable = `kamal`;
variable = false;
variable = 10;
variable = 10.2;
variable = Symbol("foo");
variable = {};
console.log(typeof variable)
*/
////////////////////////////////////////////////
// Basic operators

/*

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName);

// Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--;
x--;
console.log(x);

// Comparison operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);

*/
//////////////////////////////////////////////////
//Strings and Template Literals
/*
let fName = 'Nimal';
let lName = 'Sumanasiri';
let age = 25;

let msg = fName+" "+lName+" is "+age+" years old.";
msg = `${fName} ${lName} is ${age} years old.`;

console.log(msg);

*/
//////////////////////////////////////////////////
//Flow controle (if/else Statements)
/*
let age = 15;

if(age > 18) {
    console.log(`You can get the driving lisance.`);
}else if (age < 17){
    console.log(`You can get the driving lisance in after the next birthday.`);
}else{
    console.log(`You can't get the driving lisance.`);
}
*/