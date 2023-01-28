const http = require('http')

let server = http.createServer(function (req,res){
    if(req.url === '/'){
        res.writeHead(200,{'content-type':'text/html'})
        res.write('<h1>this is the homepage</h1>')
    }
    if(req.url === '/login'){
        res.write('<h1>this is the login page</h1>')
    }
    if(req.url === '/signup'){
        res.write('<h1>this is the signup page</h1>')
    }
    if(req.url === '/booking'){
        res.write('<h1>this is the booking page</h1>')
    }
    if(req.url === '/about'){
        res.write('<h1>this is the about page</h1>')
    }
    res.end()
})

server.listen(5000)