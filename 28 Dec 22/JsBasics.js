console.log(`hello world`);
console.log(`hello`,`world`);
// printing data in JS

var i = 5;
var j = 10;
// variable declaration-use app spacing
console.log(i+j);

var firstName = `John`;
var lastName = `Samual`;
console.log(firstName, lastName);

console.log(typeof firstName);
// typeof is used to return the type of the data
var data = `this is a string`;
console.log(data);
console.log(data[0]);
console.log(data.length);
// print length of the string

console.log(data[data.length -1]);
// print last element of the string
data.toUpperCase(); // will not modify the orginal data

var res = data.toUpperCase();
console.log(res);

var message = `   JS IN WEB DESIGNING`;
console.log(message.trim());
// remove spaces from both ends

console.log(message.trimStart);
// remove spaces from beginning

console.log(message.trimEnd);
//   remove spaces from end

var msg1 = `  JS for web  `;
var trimData = msg1.trim();
console.log(trimData.split(`   `));

var message1 = `this is js`;
var resul = message1.replace(` `,`_`); // replaces the first occurance
console.log(resul);
var re = message1.replaceAll(` `,`_`); // replaces all occurances
console.log(re);


var message2 = `   JS for Java Script   `;
var copy = message2.toUpperCase().trim().replaceAll(` `, `_`);
console.log(copy);
var result = message2.replace(copy);
console.log(result);

// var have a global scope. anything written as a var will be out off the local scope
// to declare a variable for local scope, use let keyword
// use const keyword to declare variable that is not changing

const firsName = `bibin`;

var lasName = `sasikumar`;
console.log(firsName, lasName);

for(let m=1;m<5; m++){
console.log(m);
}

// const variable should always be initialized

// program to find sum of two nos
var num1 = 3;
var num2 = 4;
var sum = num1+num2;
console.log(`sum=`, sum);

// program for string join

var firstString = `java`;
var secondString = `Script`;
var combine1 = firstString+ ` ` + secondString;
var combine2 = firstString.concat(` `, secondString);
var combine3 = `${firstString} ${secondString}`;
console.log(combine1);
console.log(combine2);
console.log(combine3);
 