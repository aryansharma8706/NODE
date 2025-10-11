const http = require('http') ;
const server = http.createServer((req,res)=>{
    if(req.url === '/users'){
        res.statusCode = 201
        res.and('users data')
    }else{
        res.end('home')
    }
})
server.listen(5000,()=>{
    console.log('server is runing');
    console.log(server);
})