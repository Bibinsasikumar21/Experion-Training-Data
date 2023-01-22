// function greet(name){
//     console.log(name)
// }

// let greet = function (name){
//     console.log(name)
// }
// function greet(bibin){
//     let name = "nimisha";
//     let age = 22
//     bibin(name,age)
// }
// greet(function (bibin,bibi){
//     console.log(bibin,bibi)
//     });
    

// function promise(akshaya){
//     let resolve = function (arg){
//         console.log(arg)
//     }
//     let reject = function (){
//         console.log("reject")
//     }
//     akshaya(resolve,reject)
// }

// promise(function (resolve,reject){
//     resolve("hai")
// })

// function Icecream(makeicecream,flavour,time){
//     setTimeout(function (){
//         makeicecream(flavour,time)
//     },time)
// }














// Icecream(function (flav,time){
//     console.log(`We had made ${flav} flavoured icecream in ${time/1000} seconds`);
// },"strawberry",5000);



y














function WeatherApi(place,age){
    return new Promise(function (resolve,reject){
        setTimeout(function (){
            if(age <= 18){
            resolve({temp:"24*c",place,status:"cloudy"})
            }
            else{
                reject("You are not allowed")
            }
        },5000)
    })
    
}
let weather_now;
WeatherApi("kochi",16).then(function (res){
    console.log(res)
}).catch(function (err){
    console.log(err)
});

