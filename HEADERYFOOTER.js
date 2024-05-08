const header = document.querySelector("header"); // ESTO ES EL NAVBAR

header.innerHTML = `
<nav class="navbar navbar-expand-lg fixed-top">
<div class="container-fluid">
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-veterinaria" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbar-veterinaria">
    <a class="navbar-brand" href="index.html"><img class="logo-veterinaria img-thumbail" src="imagenes/logo-veterinaria.png" alt="Logo de veterinaria">Inicio</a>
    <ul class="navbar-nav ">
      <li class="nav-item">
        <a class="nav-link" href="servicios.html">Servicios</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="productos.html">Productos</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="articulos.html">Articulos</a>
      </li>
      <li class="nav-item"> 
        <a class="nav-link" href="carro.html">Carrito</a>
      </li>
      <li class="nav-item">
      <li class="nav-item">
          <!-- Botón de Iniciar Sesión con Modal -->
        <button type="button" class="btn btn-link nav-link" data-bs-toggle="modal" data-bs-target="#loginModal">
          Iniciar Sesión
        </button>
        <!-- Fin del Botón de Iniciar Sesión con Modal -->
        </li>
      </ul>
    </div>
  </div>
</nav>

<!-- MODAL INICIO DE SESION-->
<div class="modal fade" id="loginModal" tabindex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="loginModalLabel">Inicio de Sesión</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      
      
      <div class="modal-body">
        <form>
          <div class="col-md-8">
            <label for="validationCustomUsername" class="form-label">Nombre Usuario</label>
            <div class="input-group has-validation"> 
              <input type="text" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required>
              <div class="invalid-feedback">
                Introduzca nombre de usuario.
              </div>
            </div>
          </div>
          <div class="col-md-8">
            <label for="validationCustomUsername" class="form-label">Contraseña</label>
            <div class="input-group has-validation">
              <input type="text" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required>
              <div class="invalid-feedback">
                Instroduzca la contraseña.
              </div>
            </div>
          </div>
          <br>
          <button type="submit" class="btn btn-primary">Iniciar Sesión</button>
          <a href="registro.html" button type="submit" class="btn btn-primary">Registrase</button></a>
        </form>
      </div>
    </div>
  </div>
 </div>
 <!--FIN MODAL INICIO DE SESION-->
`;

const footer = document.querySelector("footer"); // ESTO ES EL FOOTER
footer.innerHTML = `
<div class="container-fluid">
<img class="logo-veterinaria img-thumbail" src="imagenes/logo-veterinaria.png" >
<a href="https://www.facebook.com"><i class="bi bi-facebook"></i></a>
<a href="https://www.instagram.com"><i class="bi bi-instagram"></i></a>
<a href="https://wa.me/56939635536"><i class="bi bi-whatsapp"></i></a>
</div>
`;