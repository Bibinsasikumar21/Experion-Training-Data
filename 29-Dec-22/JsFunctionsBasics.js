greet();  
// calling functions before declaration will be supported in JS 
function greet(){
    console.log(` hello world `);
}

//  ***************************************************************
function add(firstNumber, secondNumber){
    console.log(`sum=`, firstNumber + secondNumber);
    var sum = firstNumber + secondNumber;
    return sum;
}
add(5, 4);

// **********************************************************
function convertCase(value){
    return (value.toUpperCase());
}
const result = convertCase(`hello world`);
console.log(result);
console.log(result.toLowerCase());

// **********************************************************

function getFirstChar1(value){
    return value[0];
}

const getFirstChar2 = function(value){
    return value[0];
};

const getFirstChar3 = (value) =>{
    return value[0];
};

console.log(getFirstChar1(`Hello`));
console.log(getFirstChar2(`Hello`));
console.log(getFirstChar3(`Hello`));

// *****************************************
const getFirstChar = value => value[0];
console.log(getFirstChar(`hello`));

// **********************************************

const array1 = [1, 2, 3, 4, 5, 6];
const array2 = [] ;

    for(var i=0; i< array1.length; i++){
        if(array1[i]%2===0){
           array2.push(array1[i]);
        }
    }
        
    
console.log(array2);

// **************************************************

const numbers = [1, 2, 3, 4, 5, 6];
const res = numbers.filter(value => value %2 ==0);
console.log( res);

// *************************************************
const numbers1 = [`bibin`, `gokul`, `jomet` ];
const res1 = numbers1.filter(value => value ==`bibin`);
console.log( res1);

// *****************************************************

const numb = [1, 2, 3, 4, 5, 6];
//  check for an element 5
if(numb.includes(5))
{
    console.log(`array contains element 5`);
}
numb.fill(10);  // fill all the element in the array with 10
console.log(numb);

// ********************************************************

