const calculate = require(`./cb`);
calculate.calculate(function ( data1,data2){
    return data1 + data2;
},20,30,5000).then(function(val){
    console.log(val);
})                            