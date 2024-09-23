const http = require ("http");
http.createServer((req, res)=>{
    res.writeHead(200 , {"content-type":"application\json"});
    res.write("<h1> Hi welcom to Node Js</h1>");
    res.end();

    


}).listen(5000,()=>{
    console.log(`server listing on 5000`)
});




