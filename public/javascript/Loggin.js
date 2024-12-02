


document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');


    // Verificación básica de nombre y contraseña (esto es solo un ejemplo)
    if (username === 'admin' && password === '123456') {
        message.style.color = 'green';
        message.textContent = 'Inicio de sesión exitoso.';

        // Aquí podrías redirigir a otra página o realizar otras acciones
    } else {
        message.style.color = 'red';
        message.textContent = 'Usuario o contraseña incorrectos.';
    }
});

// Ruta para servir archivos estáticos como HTML, CSS, y JS
app.use(express.static('public'));


document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    fetch('/loggin', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    })
    .then(response => response.json())
    .then(data => {
        const message = document.getElementById('message');
        if (data.message === 'Inicio de sesión exitoso') {
            message.style.color = 'green';
            message.textContent = data.message;
            // Redirigir a otra página si el login es exitoso
            window.location.href = '/';
        } else {
            message.style.color = 'red';
            message.textContent = data.message;
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
