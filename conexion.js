const express = require("express");

const app = express();

app.set("view engine", "ejs");

app.get("/", function(req,res){
    res.render("colaboradores");
});

//ruta de archivos estáticos
app.use('/resources', express.static("public"));

app.listen(3000,function(){
    console.log("Servidor creado http://localhost:3000");
});