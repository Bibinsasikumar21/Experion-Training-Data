// ASYNCHRONOUS
function doThisLongRunningTask(showResult){
    setTimeout(() =>{                    // used to produce delay of 5 sec 
        const name = `JavaScript`;
        showResult(name);
    }, 5000);
}
function showResult(res){
    console.log(res);
}
doThisLongRunningTask(showResult);
console.log('im done');

/*
function doThisLongRunningTask(){
    function showResult(res){
        console.log(res);
    }
    setTimeout(() =>{                    // used to produce delay of 5 sec 
        const name = `JavaScript`;
        showResult(name);
    }, 5000);
    
}

doThisLongRunningTask();
console.log('im done');
*/


//



