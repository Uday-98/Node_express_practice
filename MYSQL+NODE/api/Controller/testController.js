const con = require ("../connection");

//------------------------............show all Data at a time..............................//

const showAllData=async(req, res)=>{
    con.query("select *from student",(err, result)=>{
        if(err){
            res.json({
                Status:false,
                Message:err.message
            })
        }

        else{
            if(result.length!=0){
                res.json({
                    Status:true,
                    Message:"These Data are avilable in the Table",
                    Data:result
                })
            }
            else{
                res.json({
                    Status:false,
                    Message:"Data not present in the Table",
                    Data:result
                })
            }
        }
    })
};



//------------------------............show specific data by Id ..............................//

const showOne=async(req, res)=>{
    con.query("select *from student where id = ?",req.params.id,(err, result)=>{
        if(err){
            res.json({
                Status:false,
                Message:err.message
            })
        }

        else{
            if(result.length!=0){
                res.json({
                    Status:true,
                    Message:"These Data are avilable in the Table",
                    Data:result
                })
            }
            else{
                res.json({
                    Status:false,
                    Message:"Data not present in the Table",
                    Data:result
                })
            }
        }
    })
};



//.................show specific data by query like question marke in url............................//

const showOneq=async(req, res)=>{
    con.query("select *from student where id = ?",req.query.id,(err, result)=>{
        if(err){
            res.json({
                Status:false,
                Message:err.message
            })
        }

        else{
            if(result.length!=0){
                res.json({
                    Status:true,
                    Message:"These Data are avilable in the Table",
                    Data:result
                })
            }
            else{
                res.json({
                    Status:false,
                    Message:"Data not present in the Table",
                    Data:result
                })
            }
        }
    })
};



//----------------------------------Data insert Static----------------------------//

const DataCreate=async(req, res)=>{

    const data={"name":"uday" , "city":"vns" , "address":"vns"}
    con.query("insert into student set ?",data,(err, result)=>{
        if(err){
            res.json({
                Status:false,
                Message:err.message
            })
        }
        else{
            res.json({
                Status:true,
                Message:"Data insert scuccesfully",
                Data:result
            })
        }
    })
}



//----------------------------------Data insert Dynamically----------------------------//

const DataCreateDynamic=async(req, res)=>{

    const data=req.body
    con.query("insert into student set ?",data,(err, result)=>{
        if(err){
            res.json({
                Status:false,
                Message:err.message
            })
        }
        else{
            res.json({
                Status:true,
                Message:"Data insert scuccesfully",
                Data:result
            })
        }
    })
}



//........................Data update Static................//

const update=async(req, res)=>{

    const data=["UP" , 1]
    con.query("update student set address=? where id=?",data,(err, result)=>{
        if(err){
            res.json({
                Status:false,
                Message:err.message
            })
        }
        else{
            res.json({
                Status:true,
                Message:"Data Update scuccesfully",
                Data:result
            })
        }
    })
}


//........................Data update Dynamic................//

const updated=async(req, res)=>{
    console.log(req.params.id, req.body.address)
    con.query("update student set address=? where id=?",[req.body.address, req.params.id],(err, result)=>{
        if(err){
            res.json({
                Status:false,
                Message:err.message
            })
        }
        else{
            res.json({
                Status:true,
                Message:"Data Update scuccesfully",
                Data:result
            })
        }
    })
}




//------------------------------Data delete static-------------//

const removes=async(req, res)=>{
    con.query("delete from student  where id="+4,(err, result)=>{
        if(err){
            res.json({
                Status:false,
                Message:err.message
            })
        }
        else{
            res.json({
                Status:true,
                Message:"Data Data scuccesfully",
                Data:result
            })
        }
    })
}




//------------------------------Data delete Dynamic-------------//

const remove=async(req, res)=>{
    con.query("delete from student  where id="+req.params.id,(err, result)=>{
        if(err){
            res.json({
                Status:false,
                Message:err.message
            })
        }
        else{
            res.json({
                Status:true,
                Message:"Data Data scuccesfully",
                Data:result
            })
        }
    })
}






module.exports={showAllData , showOne, showOneq, DataCreate , DataCreateDynamic, update, updated , remove , removes}