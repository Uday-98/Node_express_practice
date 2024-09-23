//serve html page using static path

const express=require("express");
const path=require("path");

const app=express();
const dirpath=path.join(__dirname,"public");
app.use(express.static(dirpath))




app.listen(5500,()=>{
    console.log("the port is running on 5500");
})