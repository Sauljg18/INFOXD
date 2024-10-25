


const toggle = document.getElementById('toggle')
const nav = document.getElementById('nav')

//toggle.addEventListener('clik', () => nav.classList.toggle('active'))
let viewPassword=document.getElementById('viewPassword');
let password=document.getElementById('password');


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