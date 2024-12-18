
const data = Array.from({ length: 100 }, (_, i) => `Elemento ${i + 1}`);

const itemsPerPage = 10; // Elementos por página
let currentPage = 1; // Página actual

// Función para mostrar la página actual
function renderPage(page) {
    const start = (page - 1) * itemsPerPage; // Índice inicial
    const end = start + itemsPerPage; // Índice final
    const itemsToShow = data.slice(start, end); // Elementos de la página actual

    const contentDiv = document.getElementById("content");
    contentDiv.innerHTML = itemsToShow
        .map(item => `<div>${item}</div>`)
        .join(""); // Mostrar los elementos

    renderPagination();
}

// Función para renderizar los botones de paginación
function renderPagination() {
    const totalPages = Math.ceil(data.length / itemsPerPage);
    const paginationDiv = document.getElementById("pagination");

    paginationDiv.innerHTML = ""; // Limpiar botones anteriores

    // Crear botones de paginación
    for (let i = 1; i <= totalPages; i++) {
        const button = document.createElement("button");
        button.textContent = i;
        button.classList.add(i === currentPage ? "active" : "");
        button.addEventListener("click", () => {
            currentPage = i;
            renderPage(currentPage); // Cargar la página seleccionada
        });
        paginationDiv.appendChild(button);
    }
}

// Inicializar la primera página
renderPage(currentPage);


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
