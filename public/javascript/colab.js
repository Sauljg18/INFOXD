
let formula1= document.getElementById("formu1"); //Primer Formulario
let formula2= document.getElementById("formu2"); //Segundo Formulario

// Selecciona el input y el botón
let password = document.getElementById('password');
let confirmar = document.getElementById('confirm');
let viewPassword = document.getElementById('viewPassword');

// Inicializa una variable para manejar el estado de mostrar/ocultar contraseña
let click = false;

function checkpass(){
    let password = document.getElementById('password').value;
    let confirmar = document.getElementById('confirm').value;
    let message = document.getElementById('message');
    const boton = document.getElementById('envio');

    boton.disabled = true;

    if(password.length !=0){
        if(password == confirmar){
            message.textContent ="Contraseña good"
            boton.disabled = false;
        }
        else{
            message.textContent="NAH NO ES EL MISMO"
            boton.disabled = true;
        }
    }
}

function tiene_numeros(texto) {
    var numeros = "0123456789";
    for (i = 0; i < texto.length; i++) {
      if (numeros.indexOf(texto.charAt(i), 0) != -1) {
        return 1;
      }
    }
    return 0;
  }

  function tiene_letras(texto) {
    var letras = "abcdefghyjklmnñopqrstuvwxyz";
    texto = texto.toLowerCase();
    for (i = 0; i < texto.length; i++) {
      if (letras.indexOf(texto.charAt(i), 0) != -1) {
        return 1;
      }
    }
    return 0;
  }

  function tiene_minusculas(texto) {
    var letras = "abcdefghyjklmnñopqrstuvwxyz";
    for (i = 0; i < texto.length; i++) {
      if (letras.indexOf(texto.charAt(i), 0) != -1) {
        return 1;
      }
    }
    return 0;
  }

  function tiene_mayusculas(texto) {
    var letras_mayusculas = "ABCDEFGHYJKLMNÑOPQRSTUVWXYZ";
    for (i = 0; i < texto.length; i++) {
      if (letras_mayusculas.indexOf(texto.charAt(i), 0) != -1) {
        return 1;
      }
    }
    return 0;
  }

  function tiene_simbolo(texto) {
    var simbolo = "!#$%&/()=?¡¿@{}[]+-*/";
    for (i = 0; i < texto.length; i++) {
      if (simbolo.indexOf(texto.charAt(i), 0) != -1) {
        return 1;
      }
    }
    return 0;
  }

  function getPasswordSecurity(password) {
    let secValue;
    let lengthSecurityValues = [0, 0, 0, 0, 10, 10, 30, 30, 30];
    if(password.length >= lengthSecurityValues.length) {
      secValue = 40;
    } else {
      secValue = lengthSecurityValues[password.length];
    }
    if (tiene_numeros(password) && tiene_letras(password) ) {
      secValue += 30;
    }
    if (tiene_numeros(password) && tiene_letras(password) && tiene_simbolo(password)) {
        secValue += 10;
      }
    if (tiene_minusculas(password) && tiene_mayusculas(password)) {
      secValue += 20;
    }
    
    return secValue;
  }

  document.getElementById('password').addEventListener('keyup', function(e) {
    document.getElementById('seg').innerText = getPasswordSecurity(e.target.value) + "%";
  });

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

