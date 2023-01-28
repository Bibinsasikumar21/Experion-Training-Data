
const http = require('http')
const app = http.createServer(function(req,res){
 console.log(req)
 if(req.url === '/'){
    res.writeHead(200,{'Content-Type':'text/html'})
    res.write("hai")
    res.end()
 }
 else if(req.url === '/about'){
    res.write("this is about page")
    res.end()
 }

})
app.listen(5000,function(){
console.log("server has started successfully at port");
})