function validarTexto(idCampo) {
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
    let nombreError = document.getElementById(idCampo + "-error");
    let segundos = hoy - fechaNacimiento;
    let meses = segundos / (1000 * 60 * 60 * 24 * 30);
    let edad = Math.trunc(meses/12);
    let formulario = fechaNacimientoInput.closest('form');

    if (edad <=18) {
        nombreError.innerText = "Debe ser mayor a 18 años";
        formulario.classList.remove('was-validated');
        return false;
    } else {
        nombreError.innerText = "";
        formulario.classList.add('was-validated');
        return true;
    } 
}

function validarCelular(idCampo) {
    let celularInput = document.getElementById(idCampo);
    let celular = celularInput.value;

    // Verificar si el valor ingresado es numérico
    if (!/^\d+$/.test(celular)) {
        let celularError = document.getElementById(idCampo + "-error");
        let formulario = celularInput.closest('form');
        celularError.innerText = "Por favor, ingresa tu "+ idCampo;
        formulario.classList.remove('was-validated');
        return false;
    }

    let numero = parseInt(celular);
    let celularError = document.getElementById(idCampo + "-error");
    let formulario = celularInput.closest('form');
    if (numero < 9999999 || numero > 100000000) {
        celularError.innerText = "Por favor, ingresa tu "+ idCampo;
        formulario.classList.remove('was-validated');
        return false;
        
    } else {
        celularError.innerText = "";
        formulario.classList.add('was-validated');
        return true;
    }
    
}

function validarFormulario() {
    // Llama funciones de validación individualmente
    const nombreValido = validarTexto('nombre');
    const correoValido = validarTexto('correo');
    const edadValida = validarEdad('nacimiento');
    const apellidoValido = validarTexto('apellido');
    const celularValido = validarCelular('celular');
    const contraseñaValida = validarTexto('password');
    const rutValido = validarTexto('rut');
    const direccionValida = validarTexto('direccion');

    // Si alguna validación falla, muestra un mensaje de error y devuelve false
    if (!(nombreValido && correoValido && edadValida && apellidoValido && celularValido && contraseñaValida && rutValido && direccionValida)) {
        alert('Por favor, completa todos los campos correctamente.');
        return false;
    }

    // Si todas las validaciones son exitosas, muestra una alerta indicando que la cuenta ha sido creada y devuelve true
    alert('¡Cuenta creada exitosamente!');
    return true;
}



