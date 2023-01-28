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
console.log("server has started");
let server = http.createServer(function (req, res) {

    if (req.url === '/') {
        res.write("hai")
        res.end()
    }
    if (req.url === '/about') {
        res.write("<h1>this is the about page</h1>");
        res.end()
    }
    if (req.url === '/login') {
        res.write('<button>hello</button>');
        res.end();
    }
})


server.listen(3000)
