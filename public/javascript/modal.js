// Abre el modal
function openModal() {
    document.getElementById('modal').style.display = 'block';
}
// Cierra el modal
function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

document.getElementById('serviceForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const nombre = document.getElementById('IDnombre').value;
    const precio = document.getElementById('IDprecio').value;

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
