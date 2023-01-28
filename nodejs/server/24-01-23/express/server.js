const express = require('express')
const app = express()

app.get('/',function(req,res){
    res.sendFile(`${__dirname}/homepage.html`)
})
app.get('/login',function(req,res){
    res.sendFile(`${__dirname}/login.html`)
})
app.get('/register',function(req,res){
    res.sendFile(`${__dirname}/registration.html`)
})
app.get('/booking',function(req,res){
    res.send("<h1>This is the booking page</h1>")
})
app.get('/contact',(req,res)=>{
    res.send("<h1>These are the contacts</h1>")
})

app.get('/address',function(req,res){
    res.send("<h1>These are the address page</h1>")
})

app.get('/about',(req,res)=>{
    res.send("<h1>This is the about page</h1>")
})
app.all("*",(req,res)=>{
    res.send("<h1>resource not found</h1>")
})
app.listen(3000);