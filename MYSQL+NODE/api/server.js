const express = require ("express");
const morgan = require ("morgan");
const app = express();

const port = process.env.port || 3000;

const route = require ("./Route/routes")

app.use(morgan("dev"))
app.use(express.json());

app.use("/api",route)







app.listen(port, ()=>{
    console.log(`Server listing on http://localhost:${port}`)
})