const express=require('express');

const app=express();
app.set('view engine','ejs');
app.use(express.static('views'));

app.get('/',(req,res)=>{
    res.sendFile('/views/home.html');
}).listen(8081,()=>{
    console.log('Server starting on port number 8081');
})
