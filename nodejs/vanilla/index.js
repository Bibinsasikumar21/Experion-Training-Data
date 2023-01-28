const http = require('http');
const fs = require('fs');
const server = http.createServer((req,res)=>{
    console.log(req);
    if(req.url === '/'){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write("hello user ");
        res.end();
    }
    if(req.url === '/login'){
        res.writeHead(200,{'Content-Type':'text/html'});
        let data = fs.readFileSync('./index.html',{encoding: 'utf-8',flag:'r'});
        res.write(data);

        res.end();
    }
    if(req.url === '/about'){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write("you are in about page ");
        res.end();
    }
    if(req.url === '/contact'){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write("contact page ");
        res.end();
    }
    
})
server.listen(5000, ()=> console.log("server has started"))