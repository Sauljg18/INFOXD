let detalles = document.getElementById("detalle");
let configurar = document.getElementById("config");
let formula1= document.getElementById("formu1"); //Primer Formulario
let formula2= document.getElementById("formu2"); //Segundo Formulario


// Selecciona el input y el botón
let password = document.getElementById('password');
let viewPassword = document.getElementById('viewPassword');

// Inicializa una variable para manejar el estado de mostrar/ocultar contraseña
let click = false;

// Asegúrate de que la referencia a los elementos existe
if (password && viewPassword) {
    // Agrega un evento click al botón de mostrar/ocultar contraseña
    viewPassword.addEventListener('click', (e) => {
        console.log("Botón de mostrar/ocultar contraseña clickeado"); // Para verificar que el evento ocurre
        
        // Cambia el tipo de input entre 'text' y 'password'
        if (!click) {
            password.type = 'text';
            viewPassword.textContent = 'Ocultar Contraseña'; // Cambiar el texto del botón
            click = true;
        } else {
            password.type = 'password';
            viewPassword.textContent = 'Mostrar Contraseña'; // Cambiar el texto del botón
            click = false;
        }
    });
} else {
    console.log("Error: No se encontraron los elementos 'password' o 'viewPassword'");
}


      formula2.style.display='none';


      
detalles.onclick =function(){
    formula1.style.display='block';
    formula2.style.display='none';

}

configurar.onclick =function(){
    formula1.style.display='none';
    formula2.style.display='block';
    
}




      const defaultFile = '/resources/IMAGENES/perfil-de-usuario.jpg'; 
      const file = document.getElementById('foto');
      const img = document.getElementById('img');
      
      // Si la página está en modo edición y existe una imagen previa, usa esa imagen
      const initialImage = img.src; 

      file.addEventListener('change', e => {
        if (e.target.files && e.target.files[0]) {
            const reader = new FileReader();
            reader.onload = function(event) {
                img.src = event.target.result + '?rand=' + Math.random(); // Forzar actualización de imagen
                img.style.width = '100%';
                img.style.height = '100%';
            };
            reader.readAsDataURL(e.target.files[0]);
        } else {
            img.src = initialImage ? initialImage : defaultFile;
        }
    });
    
    