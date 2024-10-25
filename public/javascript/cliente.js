let detalles = document.getElementById("detalle");
let configurar = document.getElementById("config");

let formula1 = document.getElementById("formu1");
let formula2 = document.getElementById("formu2");


formula2.style.display='none';


detalles.onclick = function(){     //Funcion de boton 02
    formula2.style.display='none'; //Vista oculta de otras opciones
    formula1.style.display='block';   //Vista reaccion a boton 
}

configurar.onclick = function(){     //Funcion de boton 02
    formula2.style.display='block';   //Vista reaccion a boton
    formula1.style.display='none'; //Vista oculta de otras opciones
}