const express = require("express");
const db = {
    username:"bibin",
    password:"1234"
}
const app = express()
const parser = require('body-parser')
app.use(parser.urlencoded({extended:false}))

app.get('/',(req,res)=>{
    res.send("<h1>This is the home page</h1>")
})

app.get('/login',(req,res)=>{
    res.sendFile(`${__dirname}/index.html`)
})

app.get('/registration',(req,res)=>{

    res.sendFile(`${__dirname}/registration.html`)
})
app.post('/login',(req,res)=>{
    console.log(req.body.username)
    if(db.username === req.body.username && db.password === req.body.password){
        res.send(`<h1> Hi ${req.body.username} you are logged in!....</h1>`)
    }
    else{
        res.send("<h1>username or password incorrect</h1>")
    }

})
app.listen(5000)