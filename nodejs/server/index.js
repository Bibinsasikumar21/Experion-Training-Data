const express = require('express')
const path = require('path')
const app = express();

app.get('/',function (req,res){
    res.status(200)
    res.send("<h1>This is the homepage </h1>")
})
app.get("/about",function (req,res){
    res.status(200)
    res.send("<h1>This is the about page</h1>")
})
app.get("/login",function (req,res){
    res.status(200)
    res.sendFile(path.join(__dirname,"index.html"))
})
app.listen(1000,function(){
    console.log("Server has started successfully at port 1000");
})