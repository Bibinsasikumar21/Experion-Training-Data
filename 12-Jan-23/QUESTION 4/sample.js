

// 👌🦊
// variables ✅, datatypes,operators, conditional statements,loops,functions,class, asynchronous, 
// es6[]
// datatypes
// string,number,array,boolean,object,undefined,null
// 😎
// string - properties,methods
// number - properties,methods 
// array  - properties,methods
// object - properties,methods


//string 
let msg = `hello world`;
// number
let num = 123;
// number array
let numArray = [23,34,454,56];
// string Array
let stringArray = [`nimisha`,`sreenath`,`varsha`];

// boolean
let isMale = true;
let isFemale = false;

// object
let employee = {
    name: `Arun`,
    designation:`Trainee`,
    salary: `4 LPA`,
    age: 25,
    isMarried: false
}

// undefined
let value = undefined;
let test;

// null
let isValue = null;

// string properties - length
// string methods -String slice(),String substr(),String replace()
// String replaceAll(), String toUpperCase(), String toLowerCase(),String concat() etc

// number properties
let number1 = 234;

// number methods
console.log(typeof number1) ;
console.log(typeof number1.toString());

// array methods
let names = [`nimisha`,`sreenath`,`varsha`]; 



// ES6😵
// async,callback, promises,let,const,template literals,
// arrow functions,spread operator,higher order func,
// rest, object literal,classes,modules,destructuring,default parameters


// callback
function calculate(cb,num1,num2){
    console.log(cb(num1,num2));    
}

calculate(function(num1,num2){
    return (num1+num2);
},15,30);

// promise
function isOdd(cb,num,time){
    return new Promise(function (res, rej){
    setTimeout(() => {
        res(cb(num));
    }, time);
})
}

isOdd(function(val){
    if(num%2 != 0){
        return `${num} is odd`;
    }
    else{
        return `${num} is even`;
    }
},25,5000).then(function(value){
    console.log(value)
});



