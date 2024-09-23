const express = require ("express");

const app=express();

const controller = require ("../Controller/testController")

app.get("/",controller.showAllData);

app.get("/:id",controller.showOne);

app.get("/showq/:id",controller.showOneq);

app.post("/insert",controller.DataCreate);

app.post("/insertd",controller.DataCreateDynamic);

app.patch("/update",controller.update);

app.patch("/updated/:id",controller.updated);

app.delete("/delete",controller.removes);

app.delete("/delete/:id",controller.remove);



module.exports=app;