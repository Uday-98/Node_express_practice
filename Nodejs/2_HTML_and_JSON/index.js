const express = require("express");
const app = express();

app.get("", (req, res) => {
    res.send(`<h1> Welcome to Home Page </h1> <a href="/about">go to About page </a>`)
});


app.get("/about", (req, res) => {
    // http://localhost:5000/about?name=anil    in url write after that the name value is input in input box
    res.send(`    
    <input type="text" name="name" placeholder="enter your name" value="${req.query.name}">
    <input type="button" value="Click"/>
    <a href="/">go to Home page </a>
`)

});


app.get("/help", (req, res) => {
    res.send([
        {
            name:"uday",
            company:"M.P.C.L"
        },

        {
            name:"sumit",
            company:"M.P.C.L"
        }
    ])
});



app.listen(5000, () => {
    console.log("the port is running on 5000")
})