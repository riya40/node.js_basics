const http = require('http')
const fs = require('fs');

const server=http.createServer((req,res)=>{
    if(req.url =='/'){
        fs.readFile('index.html',(err,data)=>{
            if(err){
                res.statusCode = 500;
                res.end('error reading file');
            }else{
                res.statusCode = 200;
                res.setHeader('Content-Type','text.html');
                res.end(data);
            }
        });
    }else{
        res.statusCode = 404;
        res.end('not found');
    }
});

const port = 8080;
server.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}`)
})