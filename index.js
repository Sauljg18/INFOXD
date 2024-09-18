const express = require("express");
const router = express.Router();
const path = require('path');
const mysql = require("mysql");

const app = express();

let conexion = mysql.createConnection({
    host:"localhost",
    database: "infoenlace",
    user: "root",
    password: "1$34GMococo"
});

app.set("views", path.join(__dirname,'views'));

app.set("view engine", "ejs");

//se utiliza para manejar datos
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.get("/", function (req, res) {
    res.render('colaboradores');
});

app.get("/colab", (req, res) => {
    // Realiza la consulta y renderiza la vista con los resultados
    conexion.query('SELECT * FROM colaboradores ', (error, results) => {
        if (error) {
            throw error;
        } else {
            res.render('tablacolaboradores', { results: results });
        }
    });
});

app.get("/cliente", (req, res) => {
    // Realiza la consulta y renderiza la vista con los resultados
    conexion.query('SELECT * FROM tabcliente ', (error, results) => {
        if (error) {
            throw error;
        } else {
            res.render('tablacliente', { results: results });
        }
    });
});

app.get("/equipo", (req, res) => {
    // Realiza la consulta y renderiza la vista con los resultados
    conexion.query('SELECT * FROM tabcliente ', (error, results) => {
        if (error) {
            throw error;
        } else {
            res.render('tablacliente', { results: results });
        }
    });
});

app.get("/registro", (req,res) => {
    res.render('colaboradores');
});

app.get("/registrocliente", (req,res) => {
    res.render('registrocliente');
});


app.post("/validar", function(req,res){
    const datos = req.body;
   // Corregir los nombres de las variables para que coincidan con el formulario
   let id_colab = datos.id_colab;
   let nombre = datos.nombre;
   let usuario = datos.usuario;
   let correo = datos.correo;
   let carga = datos.cargo; // Cambié de 'carga' a 'cargo' para mejor comprensión.
   let contacto = datos.contacto;
   let acceso = datos.acceso;
   let password = datos.contrasena;
   let confirmar = datos.confirmar;
   let checar = datos.checar;
   let valor = datos.valor;
   let photo = datos.foto;

   let registrar = "INSERT INTO colaboradores (id_colab, nombre, usuario, correo, cargo, contact, acceso, contrasena, confirmar, valor, foto) VALUE ('"+id_colab +"','"+nombre +"','"+usuario +"','"+correo +"','"+carga +"','"+contacto +"','"+acceso +"','"+password +"','"+confirmar +"','"+valor +"','"+photo +"')";
                
   conexion.query(registrar,function(error){
       if(error){
           throw error;
       }else{
          console.log("Datos almacenados correctamente"); 
       }
   });

    

});


app.post("/aceptar", function(req,res){
    const client = req.body;
   // Corregir los nombres de las variables para que coincidan con el formulario
   let namecliente = client.namecliente;
   let identificacion = client.identificacion;
   let razon = client.razon;
   let externo = client.externo; // Cambié de 'carga' a 'cargo' para mejor comprensión.
   let telefono = client.telefono;
   let correocorp = client.correocorp;
   let cliente = client.cliente;
   let responsable = client.responsable;
   let observacion = client.observacion;
   let postal = client.postal;
   let direccion = client.direccion;
   let numext = client.numext;
   let numint = client.numint;
   let region = client.region;
   let ciudad = client.ciudad;
   let estado = client.estado;

   let registra = "INSERT INTO tabcliente (nombre, identificacion, razon, codigoext, telefonocorp, correocliente, cliente, responsable, observacion, postal, direccion, num_ext, num_int, region, ciudad, estado) VALUE ('"+namecliente +"','"+identificacion +"','"+razon +"','"+externo +"','"+telefono +"','"+correocorp +"','"+cliente +"','"+responsable +"','"+observacion +"','"+postal +"','"+direccion +"','"+numext +"','"+numint +"','"+region +"','"+ciudad +"','"+estado +"')";
                
   conexion.query(registra,function(error){
       if(error){
           throw error;
       }else{
          console.log("Datos almacenados correctamente"); 
       }
   });

    

});


//ruta de archivos estáticos
app.use('/resources', express.static("public"));


app.listen(3000,function(){
    console.log("Servidor creado http://localhost:3000");
});/*se necesita activar el xammp*/


/*const port =process.env.PORT || 3000;

app.listen(port,() => {
    console.log("Servidor creado ${port}");
});*/

