const connection = mysql.createConnection({
    host: 'localhost',     // Cambia esto por tu host (puede ser 'localhost' o un servidor remoto)
    user: 'root',          // Tu usuario de MySQL
    password: '',          // La contraseña de tu usuario de MySQL
    database: 'infoenlace' // El nombre de tu base de datos
    });

    let final = document.getElementById("finish");
    let activo = document.getElementById("active");
  final.onclick =function(){     //Funcion de boton 01
    activo.innerHTML='Finalizado';
    activo.style.color = "red";
    //Vista reaccion a boton
    }