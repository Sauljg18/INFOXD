//Funcion para cambiar los tab dependiendo lo que des clic     

//Class de los botones
let tab_General = document.getElementById("General"); //Boton 01
let tab_Especificaciones = document.getElementById("Especificaciones"); //Boton 02
let tab_Tareas = document.getElementById("Tareas"); // Boton 03

//Class de contenido
let tab_descripcion = document.getElementById("Descripción"); //Resultado 01
let tab_vista_Especificaciones = document.getElementById("Especificaciones-vista"); //Resultado 02
let tab_vista_Tareas = document.getElementById("Tareas-vista"); // Resultado 03

let click = true;      
tab_descripcion.style.display='block';//Opción predeterminada
tab_vista_Especificaciones.style.display='none'; 
tab_vista_Tareas.style.display='none';

tab_General.onclick =function(){     //Funcion de boton 01
    tab_descripcion.style.display='block';   //Vista reaccion a boton
    tab_vista_Especificaciones.style.display='none'; //Vista oculta de otras opciones
    tab_vista_Tareas.style.display='none';
}

tab_Especificaciones.onclick =function(){     //Funcion de boton 02
    tab_descripcion.style.display='none';   //Vista reaccion a boton
    tab_vista_Especificaciones.style.display='block'; //Vista oculta de otras opciones
    tab_vista_Tareas.style.display='none';
    }

tab_Tareas.onclick =function(){     //Funcion de boton 04
    tab_descripcion.style.display='none';   //Vista reaccion a boton
    tab_vista_Especificaciones.style.display='none'; //Vista oculta de otras opciones
    tab_vista_Tareas.style.display='block';
    }
