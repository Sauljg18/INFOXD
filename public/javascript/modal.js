// Abre el modal
function openModal() {
    document.getElementById('modal').style.display = 'block';
    console.log('Modal abierto'); // Verifica que se abra correctamente
}

// Cierra el modal
function closeModal() {
    console.log('Cerrando modal'); // Verifica si se ejecuta esta línea
    document.getElementById('modal').style.display = 'none';
}

document.getElementById('serviceForm').addEventListener('submit', function (event) {
    const nombre = document.getElementById('IDnombre').value;
    const precio = document.getElementById('IDprecio').value;
    // Envío de los datos al backend
    
    fetch('/agregar-servicio', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nombre, precio }),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Error en la respuesta del servidor');
        }
        return response.json();
    })
    .then(data => {
        console.log('Respuesta del servidor:', data); // Verifica la respuesta
        if (data.success) {
            addServiceToTable({ nombre, precio });  // Añade el servicio
            closeModal();  // Cierra el modal
            document.getElementById('serviceForm').reset();  // Limpia el formulario
        } else {
            alert('Error: ' + data.error);
        }
    })
    .catch(error => console.error('Error en la solicitud:', error));
});
