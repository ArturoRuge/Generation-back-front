// document.getElementById('infoForm').addEventListener('submit', function (e) {
//     e.preventDefault(); // previenen el formulario se envíe
  
//     const nombre = document.getElementById('nameInput').value;
//     const telefono = document.getElementById('numeroTel').value;
//     const email = document.getElementById('email').value;
//     const password = document.getElementById('password').value;
//     const confirmPassword = document.getElementById('password2').value;
//     const errorMessage = document.getElementById('errorMessage');
//     const succesMessage = document.getElementById('messageIncluded');
//     let errors = [];
  
//     errorMessage.innerHTML = '';
  
//     // Para el nombre 
//     if (nombre.trim() === '') {
//       errors.push('El nombre es requerido.');
//     }
  
//     // Validar que tenga 10 digitos
//     const phoneRegex = /^[0-9]{10}$/;
//     if (!phoneRegex.test(telefono)) {
//       errors.push('El número de teléfono debe tener 10 dígitos.');
//     }
  
//     // Correo electrónico
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) {
//       errors.push('El correo electrónico no es válido.');
//     }
  

//     //validar passwordr



//     // Contraseñas coincidn
//     if (password === '') {
//       errors.push('La contraseña es requerida.');
//     } else if (password !== confirmPassword) {
//       errors.push('Las contraseñas no coinciden.');
//     }
  
//     // Mostrar errores
//     if (errors.length > 0) {
//       errorMessage.innerHTML = errors.join('<br>');
//     } else {
//       // Codificar la contraseña
//       const passwordCodificada = btoa(password); // Codifica la contraseña
//       // cuando no hay errores crear el objeto JSON del usuario
//     const nuevoUsuario = {
//         nombre: nombre,
//         telefono: telefono,
//         email: email,
//         password: passwordCodificada
//       };
  
// // Verificar si ya hay usuarios en localStorage
// let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
  
// // Agregar el nuevo usuario al array de usuarios
// usuarios.push(nuevoUsuario);

// // Almacenar el array de usuarios en localStorage
// localStorage.setItem('usuarios', JSON.stringify(usuarios));
      
//       succesMessage.innerText = 'Usuario registrado exitosamente, vas a ser redirigido a la página de inicio de sesión';
//       //Resetea el formulario
//       document.getElementById('infoForm').reset();
//       // Redirigir a la página del administrador
//       setTimeout("window.location.href = 'iniciar-sesion.html'", 4000);;




//     }
//   });




function registrarUsuario(event) {
  event.preventDefault(); // Prevenir el envío del formulario por defecto

  const nombre = document.getElementById("nameInput").value;
  const numeroCelular = document.getElementById("numeroTel").value;
  const correo = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  
  const usuario = {
      nombreApellido: nombre,
      numeroCelular: numeroCelular,
      correo: correo,
      password: password
  };

  fetch("http://localhost:8080/usuariosRegistrados/crear", {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(usuario)
  })
  .then(response => {
      if (response.ok) {
          alert("Usuario registrado exitosamente");
          window.location.href = "iniciar-sesion.html";
      } else {
          throw new Error("Error en el registro");
      }
  })
  .catch(error => {
      console.error("Error:", error);
      alert("Hubo un problema al registrar el usuario");
  });
}

// Asocia el evento al botón de registro
document.getElementById("infoForm").addEventListener("submit", registrarUsuario)
  