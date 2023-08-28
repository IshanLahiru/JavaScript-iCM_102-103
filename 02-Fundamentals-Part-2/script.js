'use strict';
//////////////////////////////////////////////////////////
//Activating Strict Mode

// let isAdded = false;
// const pass = true;
// if(pass)isAdde = true;
// if (isAdded) console.log(`It's added.`);

////////////////////////////////////////////////////////////
//Functions

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

const fullName = function(fName,sName){
    console.log(`${fName} ${sName}.`);
}
fullName("Ishan", "Lahiru");

const theName = (fName,sName) => {
    console.log(`${fName} ${sName} 22.`);
}
theName("Ishan", "Lahiru");

isPrime(2);
