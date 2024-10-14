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
    })
  })
}
