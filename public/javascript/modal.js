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
    // Envío de los datos al backend
    fetch('/agregar-servicio', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nombre, precio }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            addServiceToTable(nombre);  // Añade el nuevo servicio en la tabla
            closeModal();  // Cierra el modal solo si se guarda correctamente
        } else {
            alert('Error: ' + data.error);  // Muestra mensaje en caso de error
        }
    })
    .catch(error => console.error('Error en la solicitud:', error));
});