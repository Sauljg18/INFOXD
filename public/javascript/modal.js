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
    //PENDIENTE COMO NIVEL AVANZADO//
    .then(response => response.json())
    .then(data => {
        
        if (data.success) {
            addServiceToTable(nombre);
            closeModal();
        } else {
            alert('Error: ' + data.error);
        }
    })
    .catch(error => console.error('Error en la solicitud:', error));
});

