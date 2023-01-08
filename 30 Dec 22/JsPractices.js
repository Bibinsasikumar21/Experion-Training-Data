const languages = [`C`, `C++`, `Java`, `python`];
languages.forEach(value => console.log(value));
// prints elements of the array using forEach


const person = {
    name: 'john', age: 20
};
person.name = 'new name';
console.log(person.name);
person.email = 'name@gmail.com'; // it will not give suggestion. so add it in the declaration
console.log(person);

// *****************************************
const person1 = {
    name: 'Arun',
    age: 20,
    experience: [
        {
            company: 'ABC',
            years: '2'
        }, 
        {
            company: 'XYZ',
            years: '3'
        }
    ]
}
console.log(person1);
console.log(person1.experience[0].company);
console.log(person1.experience[0].years);

person1.experience.forEach(exp=>console.log('company are',exp.company));

// matrix using arrays

const m1 = [
    [1, 2],
    [3, 4]
];

const m2 = [
    [5, 6],
    [2, 4]
];

const m3 = [
    [],
    []
];

// setTimeout
setTimeout(()=>{
console.log('code worked');

});

// **************************************************************
// 'this' keyword is used to access the variable within the class
// variable inside the function can be called without using 'this' keyword

const student = {
    name: 'student 1',
    mark1: 30,
    mark2: 20,
    total: function(){
        const extraMark = 5;
        console.log(this.mark1 + this.mark2 + extraMark);
    }
};
student.total();

// *******************************************************
// creating a copy of the student and modifying the copy
// const copy = student; will create a copy and refering to the orginal data,
//  but modifying the orginal data
const copy = Object.assign({age: 18}, student);
copy.name = 'new name';
console.log(student);
console.log(copy);

// *****************************************************
// destructuring-means extracting data from arrays and objects and
//  assign them to variables.
const student2 = {
    fullName: 'myName',
    mar1: 10,
    mar2: 20
};
const {fullName, mar1} = student2;
console.log('fullname is', fullName);

// printing values of the variable 
const keys = Object.keys(student2);
keys.forEach(key =>{
    console.log(student2[key])
});

// ***********************************************************
