// document.getElementById('infoForm').addEventListener('submit', function (e) {
//     e.preventDefault(); // previenen el formulario se envíe
  
//     const email = document.getElementById('email').value;
//     const password = document.getElementById('password').value;
//     const errorMessage = document.getElementById('errorMessage');
//     const succesMessage = document.getElementById('messageIncluded');

//     let errors = [];
  
//     errorMessage.innerHTML = '';
  
//     // Correo electrónico
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) {
//       errors.push('El correo electrónico no es válido.');
//     }
  
//     // Contraseñas coincidn
//     if (password === '') {
//       errors.push('La contraseña es requerida.');
//     }
  
//     // Mostrar errores
//     if (errors.length > 0) {
//       errorMessage.innerHTML = errors.join('<br>');
//     } else {
//       // cuando no hay errores crear el objeto JSON del usuario
//         console.log("Todo bien!!");
// // Obtener el array de usuarios desde el localStorage
// const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

// // Verificar si existe algún usuario con el mismo email y contraseña
// const usuarioEncontrado = usuarios.find(usuario => usuario.email === email && password === atob(usuario.password)); // Comparar con la contraseña decodificada

//   if (usuarioEncontrado) {
//     //Almacena al usuario logueado
//     localStorage.setItem('usuarioLogeado', email.split('@')[0]);

//       // Si el usuario es administrador
//       if (email === 'admin@chasisfactory.com') {
//         // alert('Bienvenido, Administrador');
//         succesMessage.innerText = `Bienvenido administrador, vas a ser redirigido a la página de cargar nuevo producto`;
        
//         // Redirigir a la página del administrador
//         setTimeout("window.location.href = 'ingresarProducto.html'", 4000);;

//       } else {
//         // Si es un usuario común
//         // alert(`Bienvenido, ${email.split('@')[0]}`);
//         succesMessage.innerText = `Bienvenido ${email.split('@')[0]}, vas a ser redirigido a tu orden de compra`;
        
//         // Redirigir a la página de inicio
//         setTimeout("window.location.href = 'carrito-compra.html'", 4000);
//       }

//   } else {
//     // Si el usuario no está almacenado en localStorage
//     errorMessage.innerText = 'Nombre de usuario y contraseña no válidos';
//   }






//       };

//       //Resetea el formulario
//       document.getElementById('infoForm').reset();
//   });

document.getElementById("infoForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar el envío del formulario por defecto

    const formularioLogin = document.getElementById("infoForm");
    const mensajeError = document.getElementById("errorMessage");
    const mensajeExito = document.getElementById("okMessage");

    const correo = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Crear un objeto con los datos de inicio de sesión
    const datosLogin = {
        correo: correo,
        password: password
    };

    // Realizar la solicitud POST para iniciar sesión
    fetch("http://localhost:8080/usuariosRegistrados/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json" // Cambiamos a JSON
        },
        body: JSON.stringify(datosLogin) // Convertir los datos a formato JSON
    })
    .then(response => {
        if (!response.ok) {
            return response.text().then(text => { throw new Error(text); }); // Lanzar un error si la respuesta no es ok
        }
        return response.text(); // Devolver el texto de la respuesta si es ok
    })
    .then(data => {
        mensajeError.style.display = "none"; // Ocultar mensaje de error
        mensajeExito.style.display = "block"; // Hacer visible el mensaje de éxito

        // Almacena al usuario logueado
        localStorage.setItem('usuarioLogeado', correo.split('@')[0]);

        // Si el usuario es administrador
        if (correo === 'admin@chasisfactory.com') {
            mensajeExito.innerText = `Bienvenido administrador, vas a ser redirigido a la página de cargar nuevo producto`;

            // Redirigir a la página del administrador
            setTimeout(() => {
                window.location.href = 'ingresarProducto.html';
            }, 4000);
        } else {
            // Si es un usuario común
            mensajeExito.innerText = `Bienvenido ${correo.split('@')[0]}, vas a ser redirigido a tu orden de compra`;

            // Redirigir a la página de inicio
            setTimeout(() => {
                window.location.href = 'carrito-compra.html';
            }, 4000);
        }
    })
    .catch(error => {
        mensajeExito.style.display = "none"; // Ocultar mensaje de éxito
        mensajeError.textContent = error.message; // Mostrar el mensaje de error
        mensajeError.style.display = "block"; // Hacer visible el mensaje de error
    });
});
