function validar(form) {

    var nombre = form.nombre.value.trim(); //.trim() elimina los espacios en blanco al inicio y al final
    if (nombre === "" || Verificar(nombre)) { //nombre === ""  Verifica si el usuario dejó el campo vacío. 
        alert("Por favor, ingrese su nombre.");
        return false;
    }

    var edad = form.edad.value.trim(); //.trim() elimina los espacios en blanco al inicio y al final
    if (edad === "" || isNaN(edad) || edad <= 0 || Verificar(edad)) { // Comprueba si el valor ingresado no es un número y Se asegura de que la edad sea positiva.
        alert("Por favor, ingrese una edad válida.");
        return false;
    }

    var sexo = form.sexo.value; //obtiene el valor seleccionado
    if (sexo === "") {
        alert("Por favor, seleccione su sexo.");
        return false;
    }

    var deporte = form.deporte.value; //obtiene el valor seleccionado
    if (deporte === "ninguno") {
        alert("Por favor, seleccione un deporte favorito.");
        return false;
    }

    // Si todo es válido 
    alert("Datos subidos correctamente"); // Muestra un mensaje de éxito
    return true;
}

// Función para detectar si hay etiquetas HTML en el texto
function Verificar(texto) {
    var revision = /<\/?[a-z][^>]*>/i;
    //Comprueba si el texto contiene etiquetas HTML 
    if (revision.test(texto)) { //se usa  para comprobar si una cadena de texto coincide con un patrón determinado.
        alert("Se han detectado etiquetas HTML");
        return true; // Retorna true si se detectaron etiquetas HTML
    }
    return false; // Retorna false si no se detectaron etiquetas HTML
}
