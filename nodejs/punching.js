let employees = ['Bibin', 'Nimisha', 'Sreenath', 'Varsha', 'Akshaya', 'Akhil', 'Aswin'];
let len = employees.length;

let count = 0;
function punching(employees) {
    return new Promise(function (res, rej) {
            setTimeout(function () {
           console.log(count)
                if (employees[count] === 'Akhil') {
                    console.log("Akhil ")
                    rej(`access denied`);
                }
                else{
                    res(`${employees[count]}-Access granted`);
                }
                count++;
            }, 2000);    
    });
}

for(let j=0;j<len;j++){
punching(employees).then(
    function (value) {
        console.log(value);
    }).catch(function(val){
        
        console.log(val);
    });
}


