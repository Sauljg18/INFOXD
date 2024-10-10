window.onload = function() {
  const finalizarBtns = document.querySelectorAll('.finalizar-btn');

  finalizarBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
      const taskId = btn.getAttribute('data-id');
      
      // Enviar la solicitud POST para actualizar el estado
      fetch('/finalizar-tarea', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id_tarea: taskId })
      })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          // Cambiar el estado en la interfaz
          const statusElement = document.getElementById('active-' + taskId);
          statusElement.innerHTML = 'FINALIZADO';
          statusElement.style.color = 'red';
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
    });
  });
}
