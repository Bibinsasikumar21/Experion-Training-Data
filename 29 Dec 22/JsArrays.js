const numbers = [1, 2, 3 ];
console.log(typeof numbers);
console.log(numbers);


numbers.push(20);
numbers.push(20,30);
console.log(numbers);
// using push method, we can add elements to the array

const firstArray = [1, 2, 3];
const secondArray = [4, 5, 6];
firstArray.push(...secondArray); 
// ""..." is used to append each element to the array while using push
console.log(`array after appending using push:`, firstArray);


const fArray = [1, 2, 3];
const sArray = [4, 5, 6];
const tArray = fArray.concat(sArray) ;
// it appends the entire array to an array and return the array
console.log(`append using concat method`);
console.log(tArray);


