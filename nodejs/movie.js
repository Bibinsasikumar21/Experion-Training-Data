function generateTicket(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res({orderId:1,name:"wakanda forever",time:"9pm",rate:205})
        },7000)
    })
    
}
 generateTicket().catch((err)=>{
    console.log("hai")
 }).then((value)=>{
    console.log(value)
 })
