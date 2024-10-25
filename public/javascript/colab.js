
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

const fileInput = document.getElementById('foto');
const imgPreview = document.getElementById('img');
const defaultImage = 'https://i.pinimg.com/236x/2a/2e/7f/2a2e7f0f60b750dfb36c15c268d0118d.jpg';

// Agregar evento al input file para vista previa
fileInput.addEventListener('change', function (e) {
   const file = e.target.files[0]; // Seleccionar el primer archivo

if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
         imgPreview.src = e.target.result; // Mostrar la imagen cargada
         imgPreview.style.width = '300px'; // Ajustar el tamaño según sea necesario
        imgPreview.style.height = '300px';
    };
      reader.readAsDataURL(file); // Leer el archivo como URL de datos
    } else {
      imgPreview.src = defaultImage; // Si no hay imagen seleccionada, volver a la imagen por defecto
    }
});
    