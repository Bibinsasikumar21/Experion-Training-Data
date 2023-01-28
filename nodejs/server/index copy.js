// const fs = require('fs');
// const Event = require('events');
// const os = require('os')
// const password = require('./password')

// // globals
// console.log(__filename)
// console.log(__dirname)
// require
// module
// module.exports.name = "akshaya"
// console.log(module)


// // builtin modules



// // http,fs,os,path,events

// // fs
// let data = fs.readFileSync('./password.js',{encoding:'utf-8',flag:'r'});
// console.log(data)

// let Fs = {
// readFileSync:function (filename,obj){
//     console.log(`filename is ${filename}`)
//     console.log(obj.encoding,obj.flag)
// }
// }

// Fs.readFileSync('password.js',{encoding:'utf-8',flag:'r'})
// fs.readFile('./password.js',{encoding:"utf-8",flag:'r'},(err,data)=>{
    
//     console.log("async fs",data)
// })


// const events = new Event();
// events.on('connected',function (){
//     console.log('connected successfully')
//     })
// events.on('connected',function (){
// console.log('connected successfully again')
// })

// events.emit('connected');
// // fs,os,path events http


// const fs = require('fs');
// const os = require('os');
// const path = require('path');
// const Event = require('events');
// // let data = fs.readFileSync("./password.js",{encoding:"utf-8",flag:'r'})


// fs.readFile("./password.js","utf-8",function(error,streak){
//     console.log(streak)
// })



// const event = new Event();

// event.on("done",function(one,two,three,four){
//     console.log(one,two,three,four);
// });
// event.on("done",function(){
//     console.log("Done executing")
// });
// event.emit("done","hai","yeah","hahaha","qwerty")


const http = require("http");
const fs = require('fs')
console.log("server has started");

let server = http.createServer(function (req,res){
  
    if(req.url === '/'){
       
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write("hai")
        res.end()
    }
    if(req.url === '/about'){
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write("<h1>this is the about page</h1>");
        res.end()
    }
    if(req.url === '/login'){
       res.writeHead(200,{'Content-Type':'text/html'})
       let html_code = fs.readFileSync("./index.html",{encoding:"utf-8",flag:'r'})
       console.log(html_code)
       res.write(html_code)
       res.end() 
// res.write(`<input type = "password" placeholder = "Enter your password">`);
// res.write(`<button>Login</button>`);
      
    }

    if(req.method === "POST"){
       
        res.end()
    }
    else{
        res.writeHead(404)
        res.end("<h1>Not found</h1>")
    }
})


server.listen(7000)
