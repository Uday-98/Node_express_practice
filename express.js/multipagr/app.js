const express=require('express');
const app=express();
const fs=require('fs');

const header=fs.readFileSync('header.txt','utf-8')
const footer=fs.readFileSync('footer.txt','utf-8')

app.get('/',(req,res)=>{
    const content=fs.readFileSync('home.txt','utf-8')
    res.send(header+content+footer);
})


app.get('/home',(req,res)=>{
    const content=fs.readFileSync('home.txt','utf-8')
    res.send(header+content+footer);
})

app.get('/about',(req,res)=>{
    const content=fs.readFileSync('about.txt','utf-8')
    res.send(header+content+footer);
})

app.listen(8081,()=>{
    console.log('Server starting on port number 8081');
})
