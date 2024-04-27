function validarNombre(idCampo) {
    let nombreInput = document.getElementById(idCampo);
    let nombre = nombreInput.value;
    let nombreError = document.getElementById(idCampo + "-error");

    if (nombre.length <=3) {
        nombreError.innerText = "Por favor, ingresa tu nombre.";
        return false;
    } else {
        nombreError.innerText = "";
        nombreInput.classList.remove('is-invalid'); // Quitar la marca de inválido
        return true;
    }
}

