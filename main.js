function validarNombre(idCampo) {
    let nombreInput = document.getElementById(idCampo);
    let nombre = nombreInput.value;
    let nombreError = document.getElementById(idCampo + "-error");
    let formulario = nombreInput.closest('form');

    if (nombre.length <=3) {
        nombreError.innerText = "Por favor, ingresa tu "+ idCampo;
        formulario.classList.remove('was-validated');
        return false;
    } else {
        nombreError.innerText = "";
        formulario.classList.add('was-validated');
        return true;
    }
}

function validarEdad(idCampo) {
    let fechaNacimientoInput = document.getElementById(idCampo);
    let fechaNacimiento = new Date(fechaNacimientoInput.value);
    let hoy = new Date();
    
    let segundos = hoy - fechaNacimiento;

    let meses = segundos / (1000 * 60 * 60 * 24 * 30);

    let edad = Math.trunc(meses/12);
    

    

    console.log("Edad calculada:", edad, "años");

    
}


