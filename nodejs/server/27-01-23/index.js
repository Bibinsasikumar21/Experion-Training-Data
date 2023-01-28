const express = require('express');

const app = express();
const cors = require('cors')

app.use(cors())
const list =
[{
    name:'akshaya',
    age:21,
    address:"Alappuzha"
},{
    name:'malu',
    age:21,
    address:"Alappuzha"
},{
    name:'nimisha',
    age:22,
    address:"palakkad"
},{
    name:'nath',
    age:22,
    address:"Kottayam"
}]
app.get('/friends',(req,res)=>{
    
    
    res.status(200)
    res.json({message:"success",payload:list})
});
app.post('/friends',(req,res)=>{
    
    console.log(req.body)
    res.send()
})
app.listen(5000)