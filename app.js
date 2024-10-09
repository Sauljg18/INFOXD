const express = require("express");;
const path = require('path');
const bcrypt = require('bcryptjs');
const mysql = require("mysql");;
const app = express();
const session = require('express-session');

app.use(session({
    secret: 'tu_clave_secreta',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false } // Cambia a true si usas HTTPS
}));

const connection = mysql.createConnection({
    host: 'localhost',     // Cambia esto por tu host (puede ser 'localhost' o un servidor remoto)
    user: 'root',          // Tu usuario de MySQL
    password: '',          // La contraseña de tu usuario de MySQL
    database: 'infoenlace' // El nombre de tu base de datos
});

// Conectar a la base de datos
connection.connect((err) => {
    if (err) {
        console.error('Error conectando a la base de datos:', err);
        return;
    }
    console.log('Conectado a la base de datos MySQL.');
});

// Configuración de vistas y archivos estáticos
app.set("views", path.join(__dirname, 'views'));
app.set("view engine", "ejs");
app.use(express.static('public'));  // Para archivos estáticos como CSS, JS
app.use(express.json());
app.use(express.urlencoded({ extended: false }));



// Ruta para manejar el login
app.get("/", (req, res) => {
    res.render("Loggin");  // Redirige a la página de inicio
});




//Verificacion entre ejs loggin y BD
app.post('/login', (req, res) => {
    const { usuario, contrasena } = req.body;

    // Consulta para verificar el usuario y la contraseña
    const query = `SELECT * FROM colaboradores WHERE usuario = ? AND contrasena = ?`;

    connection.query(query, [usuario, contrasena], (err, results) => {
        if (err) {
            console.error('Error al consultar la base de datos:', err);
            return res.status(500).send('Error interno del servidor');
        }
        // Si se encuentra un colaborador, redirige a una nueva página
        if (results.length > 0){
            req.session.usuario = results[0];
            connection.query('SELECT DISTINCT colaboradores.nombre AS colaboradorNombre, tabcliente.nombre AS clienteNombre, tabcliente.codigoext AS clientecodigo FROM colaboradores, tabcliente ', (error, results) => {
                if (error) {
                    throw error;
                } else {
                    res.render('inicio',  { results: results });
                }
            });
        } else {
            res.send('Usuario o contraseña incorrectos');
        }
    });
});

app.get("/sesion",(req, res) => {
// Consulta en la base de datos
const query = 'SELECT * FROM colaboradores';
connection.query(query, (error, results) => {
    if (error) {
        console.error('Error en la consulta: ', error);
        // Si estás dentro de una ruta HTTP:
        // res.status(500).json({ message: 'Error interno del servidor' });
        return;
    }
    
    if (results.length > 0) {
        const user = results[0];

        // Comparar la contraseña con la contraseña encriptada
        bcrypt.compare(password, user.contraseña, (err, match) => {
            if (err) {
                // Manejo del error
                res.status(500).json({ message: 'Error interno del servidor' });
            } else if (match) {
                res.json({ message: 'Inicio de sesión exitoso' });
                connection.query('SELECT * FROM tareas', (error, results) => {
                    if (error) {
                        console.log(error);
                        res.status(500).send("Error al cargar las tareas");
                    } else {
                        // Renderiza la página de inicio con los datos de las tareas
                        res.render('inicio', { tareas: results });
                    }
                });
            } else {
                res.status(401).json({ message: 'Contraseña incorrecta' });
            }
        });
    } else {
        res.status(404).json({ message: 'Usuario no encontrado' });
    }
});
});

//VERIFICAR SI EL USUARIO INICIO SESION
const authMiddleware = (req, res, next) => {
    if (req.session && req.session.usuario) {
        // Si la sesión existe, continúa con la solicitud
        return next();
    } else {
        // Si no hay sesión, redirige a la página de inicio de sesión
        return res.redirect('/');
    }
};


//Inicia visualización del proyecto con "node index" en una terminal 
app.get('/home',authMiddleware, (req, res) => {
    // Consulta para obtener todas las tareas 
    // Realiza la consulta y renderiza la vista con los resultados
    connection.query('SELECT DISTINCT colaboradores.nombre AS colaboradorNombre, tabcliente.nombre AS clienteNombre, tabcliente.codigoext AS clientecodigo FROM colaboradores, tabcliente ', (error, results) => {
    if (error) {
        throw error;
    } else {
        res.render('inicio', { results: results });
    }
});
});
/*jaaka*/
app.get("/colab", authMiddleware, (req, res) => {
    // Realiza la consulta y renderiza la vista con los resultados
    connection.query('SELECT * FROM colaboradores ', (error, results) => {
        if (error) {
            throw error;
        } else {
            res.render('tablacolaboradores', { results: results });
        }
    });
});

app.get("/clientes", authMiddleware, (req, res) => {
    // Realiza la consulta y renderiza la vista con los resultados
    connection.query('SELECT * FROM tabcliente ', (error, results) => {
        if (error) {
            throw error;
        } else {
            res.render('tablacliente', { results: results });
        }
    });
});

app.get("/equipo", authMiddleware, (req,res) => {
    res.render('Equipos');
});

app.get("/resequipo", authMiddleware, (req,res) => {
    res.render('RegistroEquipos');
});


app.get("/producto",authMiddleware, (req,res) => {
    res.render('TablaProductos');
});

app.get("/servicio",authMiddleware, (req,res) => {
    res.render('TablaServicios');
});

app.get("/tarea",authMiddleware, (req, res) => {
    // Realiza la consulta y renderiza la vista con los resultados
    connection.query('SELECT * FROM tareas ', (error, results) => {
        if (error) {
            throw error;
        } else {
            res.render('TablaTareas', { results: results });
        }
    });
});
    

app.get("/registro",authMiddleware, (req,res) => {
    res.render('colaboradores');
});

app.get("/registrocliente",authMiddleware, (req,res) => {
    res.render('registrocliente');
});

//Este codigo permite verificar el usuario que vas a editar
app.get('/editcliente/:id_cliente',authMiddleware, (req,res) => {
    const id =req.params.id_cliente;
    connection.query('SELECT * FROM tabcliente WHERE id_cliente=?',[id],(error,results)=>{
    if(error){
        throw error;
    }else{
        res.render('EditarCliente',{cliente:results[0]});
    }
})
    });

    //Permite editar los datos  del colaborador 
    app.get('/editcola/:idcolaborador', authMiddleware, (req,res) => {
        const id =req.params.idcolaborador;
        connection.query('SELECT * FROM colaboradores WHERE idcolaborador=?',[id],(error,results)=>{
        if(error){
            throw error;
        }else{
            res.render('EditarColaboradores',{colaborador:results[0]});
        }
    })
        });

app.post("/validar", function(req,res){ // REGISTRO DE COLABORADOR
    const datos = req.body;
   // Corregir los nombres de las variables para que coincidan con el formulario
    let idcolaborador = datos.idcolaborador;
    let nombre = datos.nombre;
    let usuario = datos.usuario;
    let correo = datos.correo;
    let carga = datos.cargo; // Cambié de 'carga' a 'cargo' para mejor comprensión.
    let contacto = datos.contacto;
    let acceso = datos.acceso;
    let password = datos.contrasena;
    let confirmar = datos.confirmar;
    let valor = datos.valor;
    let photo = datos.foto;

    let registrar = "INSERT INTO colaboradores (idcolaborador, nombre, usuario, correo, cargo, contacto, acceso, contrasena, confirmar, valor, foto) VALUE ('"+idcolaborador +"','"+nombre +"','"+usuario +"','"+correo +"','"+carga +"','"+contacto +"','"+acceso +"','"+password +"','"+confirmar +"','"+valor +"','"+photo +"')";
                
    connection.query(registrar,function(error){
    if(error){
    throw error;
        }else{
        console.log("Datos almacenados correctamente"); 
        }
    });

    

});

app.post("/updatec", function(req,res){ // REGISTRO DE COLABORADOR
    const datos = req.body;
   // Corregir los nombres de las variables para que coincidan con el formulario
    let idcolaborador = datos.idcolaborador;
    let nombre = datos.nombre;
    let usuario = datos.usuario;
    let correo = datos.correo;
    let carga = datos.cargo; // Cambié de 'carga' a 'cargo' para mejor comprensión.
    let contacto = datos.contacto;
    let acceso = datos.acceso;
    let password = datos.contrasena;
    let confirmar = datos.confirmar;
    let valor = datos.valor;
    let photo = datos.foto;


    connection.query("UPDATE colaboradores  SET ? WHERE idcolaborador = ?",[{nombre:nombre, usuario:usuario, correo:correo, cargo:carga, contacto:contacto, acceso:acceso, contrasena:password, confirmar:confirmar, valor:valor, foto:photo}, idcolaborador],(error,results)=>{
    if(error){
        throw error;
    }else{
        console.log("Datos almacenados actualizado"); 
    }
});

});

app.post("/aceptar", function(req,res){ //REGISTRO DE CLIENTE
    const client = req.body;
   // Corregir los nombres de las variables para que coincidan con el formulario
   let id_cliente = client.id_cliente;
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

   let registra = "INSERT INTO tabcliente (id_cliente, nombre, identificacion, razon, codigoext, telefonocorp, correocliente, cliente, responsable, observacion, postal, direccion, num_ext, num_int, region, ciudad, estado) VALUE ('"+id_cliente+"','"+namecliente +"','"+identificacion +"','"+razon +"','"+externo +"','"+telefono +"','"+correocorp +"','"+cliente +"','"+responsable +"','"+observacion +"','"+postal +"','"+direccion +"','"+numext +"','"+numint +"','"+region +"','"+ciudad +"','"+estado +"')";
                
   connection.query(registra,function(error){
       if(error){
           throw error;
       }else{
          console.log("Datos almacenados correctamente"); 
       }
   });

});



app.post("/update", function(req,res){ //UPDATE DE CLIENTE
    const client = req.body;
    // Corregir los nombres de las variables para que coincidan con el formulario
    let id_cliente = parseInt(client.id_cliente, 10);
    let identificacion = parseInt(client.identificacion, 10);
    let externo = parseInt(client.externo, 10);
    let telefono = parseInt(client.telefono, 10);
    let postal = parseInt(client.postal, 10);
    let numext = parseInt(client.numext, 10);
    let numint = parseInt(client.numint, 10);

    let namecliente = client.namecliente;
    let razon = client.razon;
    let correocorp = client.correocorp;
    let cliente = client.cliente;
    let responsable = client.responsable;
    let observacion = client.observacion;
    let direccion = client.direccion;
    let region = client.region;
    let ciudad = client.ciudad;
    let estado = client.estado;
               
   connection.query("UPDATE tabcliente  SET ? WHERE id_cliente = ?",[{nombre:namecliente, identificacion:identificacion, razon:razon, codigoext:externo, telefonocorp:telefono, correocliente:correocorp, cliente:cliente, responsable:responsable, observacion:observacion, postal:postal, direccion:direccion, num_ext:numext, num_int:numint, region:region, ciudad:ciudad, estado:estado}, id_cliente],(error,results)=>{
       if(error){
           throw error;
       }else{
          console.log("Datos almacenados actualizado"); 
       }
   });

});


//ELIMINAR REGISTRO DE CLIENTE
app.get("/delete/:id_cliente", authMiddleware, function(req,res){ 
    const id =req.params.id_cliente;
    connection.query('DELETE FROM tabcliente WHERE id_cliente=?',[id],(error,results)=>{
     if(error){
         throw error;
     }else{
        connection.query('SELECT * FROM tabcliente ', (error, results) => {
            if (error) {
                throw error;
            } else {
                res.render('tablacliente', { results: results });
            }
        });
     }
 })
     });

     //ELIMINAR REGISTRO DE CLIENTE
app.get("/deletes/:idcolaborador",authMiddleware, function(req,res){ 
    const id =req.params.idcolaborador;
    connection.query('DELETE FROM colaboradores WHERE idcolaborador=?',[id],(error,results)=>{
     if(error){
         throw error;
     }else{
        connection.query('SELECT * FROM colaboradores ', (error, results) => {
            if (error) {
                throw error;
            } else {
                res.render('tablacolaboradores', { results: results });
            }
        });
     }
 })
     });



app.post("/aceptartarea",  function(req,res){ //REGISTRO TAREA
    const tarea = req.body;
   // Corregir los nombres de las variables para que coincidan con el formulario
   let id_tarea = tarea.id_tarea;
   let cliente = tarea.cliente;
   let colaborador = tarea.colaborador;
   let fecha = tarea.fecha;
   let hora = tarea.hora; // Cambié de 'carga' a 'cargo' para mejor comprensión.
   let tipo = tarea.tipo;
   let prioridad = tarea.prioridad;
   let descripcion = tarea.descripcion;
   

   let registrar = "INSERT INTO tareas (id_tarea, cliente, colaborador, fecha, hora, tipo, prioridad, descripcion) VALUE ('"+id_tarea +"','"+cliente +"','"+colaborador +"','"+fecha +"','"+hora +"','"+tipo +"','"+prioridad +"','"+descripcion +"')";
                
   connection.query(registrar,function(error){
       if(error){
           throw error;
       }else{
          console.log("Datos almacenados correctamente"); 
       }
   });
});

//ruta de archivos estáticos
app.use('/resources', express.static("public"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});




/*
app.listen(3000,function(){
    console.log("Servidor creado http://localhost:3000");
});;*/
