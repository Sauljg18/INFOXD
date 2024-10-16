window.onload = function() {
  const finalizarBtns = document.querySelectorAll('.finalizar-btn');
  const reactivarBtns = document.querySelectorAll('.reactivar-btn');

  // Función para cargar el estado de los botones desde localStorage
  function loadButtonStates() {
    finalizarBtns.forEach(function(btn) {
      const taskId = btn.getAttribute('data-id');
      const estado = localStorage.getItem(`tarea-${taskId}`);
      
      if (estado === 'finalizada') {
        btn.disabled = true;
        btn.textContent = 'Finalizada';
        btn.classList.add('desactivado');
      }
    });

    reactivarBtns.forEach(function(btn) {
      const taskId = btn.getAttribute('data-id');
      const estado = localStorage.getItem(`tarea-${taskId}`);
      
      if (estado === 'reactivada') {
        btn.disabled = true;
        btn.textContent = 'Reactivada';
        btn.classList.add('desactivado');
      }
    });
  }

  loadButtonStates(); // Cargar el estado al inicio

  finalizarBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
      const taskId = btn.getAttribute('data-id');
      
      // Desactivar el botón
      btn.disabled = true;
      btn.textContent = 'Finalizada';
      btn.classList.add('desactivado');

      // Guardar el estado en localStorage
      localStorage.setItem(`tarea-${taskId}`, 'finalizada');

      // Enviar la solicitud POST para actualizar el estado
      fetch('/finalizar-tarea', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id_tarea: taskId })
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Error al finalizar la tarea');
        }
        return response.json(); // Opcional: manejar la respuesta si es necesario
      })
      .catch(error => {
        console.error('Error:', error);
        btn.disabled = false; // Rehabilitar el botón si hay un error
        btn.textContent = 'Finalizar'; // Restaurar texto si hay un error
        btn.classList.remove('desactivado');
        localStorage.removeItem(`tarea-${taskId}`); // Eliminar estado en caso de error
      });
    });
  });

  reactivarBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
      const taskId = btn.getAttribute('data-id');

      // Desactivar el botón
      btn.disabled = true;
      btn.textContent = 'Reactivada';
      btn.classList.add('desactivado');

      // Guardar el estado en localStorage
      localStorage.setItem(`tarea-${taskId}`, 'reactivada');

      // Enviar la solicitud POST para actualizar el estado
      fetch('/reactivar-tarea', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id_tarea: taskId })
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Error al reactivar la tarea');
        }
        return response.json(); // Opcional: manejar la respuesta si es necesario
      })
      .catch(error => {
        console.error('Error:', error);
        btn.disabled = false; // Rehabilitar el botón si hay un error
        btn.textContent = 'Reactivar'; // Restaurar texto si hay un error
        btn.classList.remove('desactivado');
        localStorage.removeItem(`tarea-${taskId}`); // Eliminar estado en caso de error
      });
    });
  });
};


