// greet("nimisha")

function makeicecream(icecream,flavour){

    setTimeout(()=>{
            return icecream(flavour)
        
    },5000)
}

let grade = makeicecream(function (flav){
// console.log(flav+" flavoured cream")
return "good"
},"strawberry");

// console.log(grade)
// function makeicecream(icecream,flavour){
    // return new Promise(function (res,rej){
    //     setTimeout(()=>{
    //     res('hai')
        
    // },5000)
    // })
        
    // }
    
    // makeicecream(function (flav){
    // console.log(flav+" flavoured cream")
    // return "good"
    // },"strawberry").then(function(res){
    //     console.log(res)
    // })
    // .catch(function (err){
    //     console.log(err)
    // })
    
    
    

// ES6 
// callback, promises 
// let,const,✅template literals✅,arrow functions✅,spread operator,higher order func
// rest,object literal,classes,modules,
// destructuring,default parameters


// console.log(`
// the firstname is ${name.substring(0,5)} 
// the last name is ${name.substring(6,name.length)} 
// and age is ${age}`)


// let greet = (name,age) => {
// console.log(`good morning ${name}`);
// return `good morning ${name}`;
// }
// let message = greet("nimisha");
// console.log(message)

// let greet =  name =>  console.log(`Good morning ${name}`)

let num1 = 10;
let num2 = num1;

let person = {
name : "bibin",
age : 22,
score :150
}
let person2 = {...person}

person2.name = "nimisha";

person2.age = 22;

person2.score = 100;

// console.log(person2)
// console.log(person)



let info = {
    name:"bibin sasikumar",
    age:22,
    fav_food:['biryani','barbeque'],

   
    place:"Kottayam",
    favourite_car:"Punch",
    company:"Experion",
    salary:'20 lakhs ctc'
}


// let name = info.name;
// let age = info.age;
// let fav_food = info.fav_food;
// let place = info.place;
// let favourite_car = info.favourite_car;
// let company = info.company;
// let salary = info.salary;


let {name,age,fav_food,place,favourite_car,company,salary} = info;

// console.log(name,age,fav_food,place,favourite_car,company,salary);


let [food,foo2] = info.fav_food;

// console.log(food,foo2)

let secret_id = "1234";

module.exports = {name:"bibin"}
