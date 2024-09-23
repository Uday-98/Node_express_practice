//serve html page and remove extention like .html

const express = require("express");
const path = require("path");

const app = express();
const dirpath = path.join(__dirname, "public");
//app.use(express.static(dirpath))
app.set("view engine" , "ejs");

app.get("", (req, res) => {
    res.sendFile(`${dirpath}/index.html`)
})

app.get("/about", (req, res) => {
    res.sendFile(`${dirpath}/about.html`)
})

app.get("/help", (req, res) => {
    res.sendFile(`${dirpath}/help.html`)
})


//ejs templet 

app.get("/pro", (req, res) => {
    const user={
        name:'uday',
        email:'uday@gmail.com'
    }
    res.render('profiles',{user});
})


app.get("*", (req, res) => {
    res.sendFile(`${dirpath}/page_not_found.html`)
})



app.listen(5500, () => {
    console.log("the port is running on 5500");
})