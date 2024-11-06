document.addEventListener('DOMContentLoaded', () => {
    const usuarioLogeado = localStorage.getItem('usuarioLogeado');
    if (usuarioLogeado == "admin") {
        const adminLink = document.createElement('a');
        adminLink.href = 'ingresarProducto.html';
        adminLink.innerText = 'Ingresar Producto';
        adminLink.classList.add("nav-link");
        document.getElementById('adminOpt').appendChild(adminLink);

        document.getElementById('messageUser').innerText = `¡Hola, ${usuarioLogeado}!`;

        const ingresar = document.getElementById("ingresar");
        ingresar.classList.add("ocultar");

        const cerrar_sesion = document.getElementById("cerrar-sesion");
        cerrar_sesion.classList.remove("ocultar");

        cerrar_sesion.addEventListener('click', () => {
            localStorage.removeItem('usuarioLogeado'); // Borrar datos del usuario
            location.reload(); // Recargar la página para reflejar el cambio
        });

    //   const messageElement = document.createElement('p');
    //   messageElement.innerText = `¡Hola, ${usuarioLogeado}!`;
    //   document.getElementById('messageIncluded').appendChild(messageElement);
    } else if (usuarioLogeado) {
        document.getElementById('messageUser').innerText = `¡Hola, ${usuarioLogeado}!`;
        const ingresar = document.getElementById("ingresar");
        ingresar.classList.add("ocultar");

        const cerrar_sesion = document.getElementById("cerrar-sesion");
        cerrar_sesion.classList.remove("ocultar");

        cerrar_sesion.addEventListener('click', () => {
            localStorage.removeItem('usuarioLogeado'); // Borrar datos del usuario
            location.reload(); // Recargar la página para reflejar el cambio
        });
    }
    
    
    
  });