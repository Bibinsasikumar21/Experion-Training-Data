// take cup, wash cup, enter to queue (4sec in queue)
// choose option [tea,coffee,hot] (random)
// 4 sec to fill drink in cup
// machine refill - 3 sec


const users = [`Athul`, `Sreejith`, `Ramesh`, `Gireesh`, `Gautham`];

function coffeeMaker(cb, drinks, time) {
    return new Promise(function (res, rej) {

        console.log(`Please Take your cup and wash within 5 sec`);
        setTimeout(()=>{
        },5000);



        setTimeout(() => {
            console.log(`wait for 4 sec`);
            let isReady;
            if (drinks == `coffee`) {
                isReady = `Coffee Filled! please take your coffee`;
            }
            else if(drinks == 'tea'){
                isReady = `Tea Filled! please take your Tea`;
            }
            else {
                isReady = `Water Filled! please take your water`;
            }

            res(cb(isReady))
    }, time);
    })
}

let drinks = `coffee`;
coffeeMaker(function ( drinks){
    return drinks;
},drinks, 4000).then(function(val){
    console.log(val);
})    