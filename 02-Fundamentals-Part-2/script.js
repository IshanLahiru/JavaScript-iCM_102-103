'use strict';
//////////////////////////////////////////////////////////
//Activating Strict Mode
//-----------------------

// To enable strict mode in javaScript, you need to include a special directive
// at the beginning of your script or function.

// Script-Level Strict Mode.
// =========================

// To activate strict mode for the entire script, include the following directive
// at the beginning of your javaScript file.

/*
"use strict";

// Your JavaScript code here
*/

// Function-Level Strict Mode.
// ===========================

// To activate strict mode for a spesific function, include the directive at
// the beginning of the function.
/*
function myFunction() {
    "use strict";
    // Your function code here

    let isAdded = false;
    const pass = true;
    if(pass)isAdde = true;
    if (isAdded) console.log(`It's added.`);
}
*/

// Benefits of Strict Mode.
// ========================

//        # Error prevention
//        ------------------
//            Strict mode catches common coding mistakes and throws errors that
//        might have been ignored in none-strict mode, helping you identify and
//        fix issues early
//
//        # Safer Assignments
//        -------------------
//            Strict mode prevents accidental global variable assignments,
//        reducing the likelihood of unintentionally polluting the global scope.
//
//        # Restricted Syntax
//        -------------------
//            Some JavaScript behaviors that are considered error - prone or deprecated
//        are disallowed in strict mode, encouraging the use of safer alternatives.
//
//        # Better Performance
//        --------------------
//            In some cases, strict mode allows the JavaScript engine to optimize code
//        better, leading to potential performance improvements.

///////////////////////////////////////////////////////////////////////////////////////
//Functions

// function declaration
// --------------------
//  You can declare a function using the 'function' keyword followed by the function
// name, a list of parameters enclosed in parentheses, and the function body enclosed
// in curly braces.
/*
    function logger(){
        console.log(`logger`);
    }
    logger();

    function numberLogger(num1, num2){
         console.log(num1);
         console.log(num2);
    }
    numberLogger(2,5);

    function sumOf(num1,num2){
         return num1+num2;
    }
    let x = sumOf(5,4);

    console.log(`the sum is ${x}.`);
*/
// function expression
// -------------------
//      you can also define a function using function expressions. in this case, the function
//  is assigned to a variable.
/*
    const fullName = function(fName,sName){
        console.log(`${fName} ${sName}.`);
    }
    fullName("Ishan", "Lahiru");

// Arrow functions(ES6)
// --------------------
//  Arrow functions provide a more concise syntax for defining functions. they are especially 
// useful for short, one-expression functions.

    const theName = (fName,sName) => {
        console.log(`${fName} ${sName} 22.`);
    }
    theName("Ishan", "Lahiru");

    const isOdd = (num) => {
        if(num%2==0){
            console.log(`Number ${num} is not an odd number `);
        }else{
            console.log(`Number ${num} is an odd number `);
        }
    }

    isOdd(2);
    isOdd(1);
*/
// Return Statement.
// -----------------
// The return statement is used to specify the value that a function should return.
/*
    function multiply(a, b) {
        return a * b;
    }

    const result = multiply(4, 5);
    console.log(result);  // Output: 20
*/
// IIFE(Immediately Invoked Function Expression).
// ----------------------------------------------
//  An IIFE is a function that's defined and invoked immediately after being created. 
// It's often used to create a private scope for variables.
/*
    (function () {
        // Code here
    })();
*/

//////////////////////////////////////////////////////////
// Arrays

// Arrays are the fundamental data structure in JavaScript used to store collections of values, 
// whether they are numbers, strings, Objects, or even other arrays. JavaScript arrays are dynamic 
// and can change in size (grow or shrink)during requestAnimationFrame.
/*
const friend1 = `Nimal`;
const friend2 = `Kamal`;
const friend3 = `sunil`;
*/
// Using array literals 
/*
let friends = [`Nimal`,`Kamal`,`Sunil`];

console.log(friends);
console.log(friends[0]);
console.log(friends.length);
*/
// Using the array constructor
/*
friends = new Array(`Danapala`,`Gunapala`,`Somapala`);

*/
// Modifying Elements
/*
console.log(friends);
friends[0] = `Ajith`;
console.log(friends);

friends[0] = document.getElementById(`name`).attributes.defaultValue.nodeValue;
console.log(friends);
*/
//add element
/*
friends.push(`yasapala`);

friends.unshift(`pathirana`);
*/
//remove element
/*
friends.pop();

friends.shift();

console.log(friends);

console.log(friends.includes(`k`));
*/
/////////////////////////////////////////////
//looping Array
/*
for(let i = 0; i < friends.length;i++){
    console.log(friends[i]);
}

let j = 0;
while(j!=friends.length){
    console.log(`while loop : ${friends[j]}`);
    j++;
}

let k = -1;
do{
    k++;
    console.log(`do while loop : ${friends[k]}`);
}
while(j!=friends.length-1);

*/

//coding challange (bubble sort)

let ar = [52,74,36,58,96,32,56,41];

console.log(ar);//[52, 74, 36, 58, 96, 32, 56, 41]
//your code 

function sortAr(ar){
    for(let i = 0 ; i < ar.length ; i++){
        for (let j = 0 ; j < (ar.length-i-1); j++){
            if(ar[j] > ar[j+1]){
                let temp = ar[j];
                ar[j] = ar[j+1];
                ar[j+1] = temp;
            }
        }
    }
    return ar;
}
console.log(sortAr(ar));//[ 32, 36, 41, 52, 56, 58, 74, 96]

///////////////////////////////////////////////////////////
// Introduction to objects
/*
const vimal = [
    'Vimal',
    'Sanjeewa',
    '23',
    'Student'
];

console.log(vimal[3]);
*/
/*
const vimal = {
    firstName: 'Vimal',
    lastName: 'Sanjeewa',
    age: 23 ,
    occupation: 'Student' 
};

console.log(vimal.firstName);
*/
///////////////////////////////////////////////
// Dot and Bracket Notation
/*
const vimal = {
    firstName: 'Vimal',
    lastName: 'Sanjeewa',
    age: 23,
    occupation: 'Student'
};

//Dot notation
console.log(vimal.firstName);//Vimal

//bracket notation
console.log(vimal['lastName'])//Sanjeewa

let s = `lastName`;
console.log(vimal[s]);

let keys = ['firstName','lastName','age','occupation'];

console.log('/////////////////////////');

keys.forEach(e => {
    console.log(`${e} : ${vimal[e]}`); 
});
*/
///////////////////////////////////////
//Object Methods

const vimal = {
    firstName: 'Vimal',
    lastName: 'Sanjeewa',
    age: 23,
    occupation: 'Student',
    fullName: function(){
        return this.firstName+` `+this.lastName;
    },
    canGetDrivingLisance: function(){
        return (this.age >= 18) ? `Yes, ${this.fullName()} is ${this.age} years old. So he can get the driving lisance.` : `No, ${this.fullName()} is ${this.age} years old. So he can't get the driving lisance.`;
    } 
};

console.log(vimal.fullName());
console.log(vimal.canGetDrivingLisance());
// Yes, Vimal Sanjeewa is 23 years old. So he can get the driving lisance.
vimal.age = 12;
console.log(vimal.canGetDrivingLisance());
// No , Vimal Sanjeewa is 12 years old. So he can't get the driving lisance.
console.log(vimal.age);

console.log(vimal);

//es6 classes
/*
class Person{
    constructor(firstName, lastName, age, occupation){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.occupation = occupation;
    }
}
Person.prototype.fullName = function () {
    return `${this.firstName} ${this.lastName}`;
}

let kasun = new Person('Kasun','Saliya',26,'Driver');

console.log(kasun);
*/

//create a es6 class Person
// it should contain firstName, lastName, age, occupation, friends (array)
// friends array should contain strings

class Person {
    constructor(firstName, lastName, age, occupation, friends = []) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.occupation = occupation;
        this.friends = friends;
    }
}

Person.prototype.friendNames = function () {
    let str = "";
    for (let index = 0; index < this.friends.length; index++) {
        if (index > 0) {
            str += ", ";
        }
        str += this.friends[index];
    }
    return str;
}

let people = new Array();
people.push(new Person("Inama", "Mawillmada", 12, "Student", ["John", "Ann", "Rose"]));
people.push(new Person("Sethuli", "Mawillmada", 15, "Student", ["Rick", "Josph", "Lily"]));
people.push(new Person("Asanka", "Mawillmada", 20, "Student", ["Clara", "Cloey", "Adrien"]));

people.forEach(element => {
    console.log(`${element.firstName}'s friends: ${element.friendNames()}`);
})






