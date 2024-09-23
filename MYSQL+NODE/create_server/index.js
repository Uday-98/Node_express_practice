const express = require ("express");

const app = express ();

const Port = process.env.Port || 3000;

app.get('', (req, res)=>{
    res.send("Hii welcome")
});


app.get('/about', (req, res)=>{
    res.send("About Page")
})


app.listen(Port, ()=>{
    console.log(`Server listing http://localhost:${Port}`);
})