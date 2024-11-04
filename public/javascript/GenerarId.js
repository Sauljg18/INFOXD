 // Set to store previously generated IDs
    const generatedIDs = new Set();

    function generarIDUnico() {
        let id;
        do {
            // Genera un número de 5 dígitos
            id = Math.floor(10000 + Math.random() * 90000);
        } while (generatedIDs.has(id)); // Repite si el número ya existe en el Set
        
        // Agrega el ID al Set para marcarlo como usado
        generatedIDs.add(id);

        // Asigna el ID al input
        document.getElementById("id_tarea").value = id;
    }

    // Llamada a la función para establecer el valor del input
    generarIDUnico();
