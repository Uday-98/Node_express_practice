const mysql = require("mysql");
const dotenv = require ("dotenv");

dotenv.config()

const con=mysql.createConnection({
    host:process.env.host,
    user:process.env.user,
    password:process.env.password,
    database:process.env.database
});

con.connect((err)=>{
    if(err){
        console.log(err.message);
    }

    else{
        console.log("Database Connected")
    }
});

// con.query("select *from student",(err, data)=>{
//     if(err){
//         console.log(err.message);
//     }

//     else{
//         console.log(data)
//     }
// })

module.exports=con;