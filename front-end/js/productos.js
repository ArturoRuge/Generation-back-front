class Producto {
    constructor(nombre, imagen, descripcion, precio, link) {
      this.nombre = nombre;
      this.imagen = imagen;
      this.descripcion = descripcion;
      this.precio = precio;
      this.link = link;
    }
  
    // Creaciónd de tarjetas HTML
    crearCard() {
      const col = document.createElement("div");
      col.classList.add("col", "col-md-3", "col-sm-6");

      const card = document.createElement("div");
      card.classList.add("card", "h-100", "col-product");
  
      const img = document.createElement("img");
      img.classList.add("card-img-top");
      img.src = this.imagen;
      img.alt = this.nombre;
  
      const cardBody = document.createElement("div");
      cardBody.classList.add("card-body");
  
      const titulo = document.createElement("h5");
      titulo.classList.add("card-title");
      titulo.textContent = this.nombre;
  
      const descripcion = document.createElement("p");
      descripcion.classList.add("card-text");
      descripcion.textContent = this.descripcion;
  
      const precio = document.createElement("p");
      precio.classList.add("price");
      precio.id = "price";
      precio.textContent = `$${this.precio.toLocaleString("es-CO")}`;

      const linkProduct = document.createElement("a");
      linkProduct.classList.add("linkProduct", "buttonp");
      linkProduct.href = this.link;
      linkProduct.textContent = "Ver Más"
  
      // Insertar todos los elementos en la tarjeta

      cardBody.appendChild(titulo);
      cardBody.appendChild(descripcion);
      cardBody.appendChild(precio);
      card.appendChild(img);
      card.appendChild(cardBody);
      card.appendChild(linkProduct);
      col.appendChild(card);
  
      return col;
    }
  }
  
  // Cargar productos desde el JSON
  async function cargarProductos() {
    const response = await fetch("../json/products.json"); 
    const productosData = await response.json();
    
    // Cargar prodctos creados con formulario
    const productosGuardados = JSON.parse(localStorage.getItem('productos')) || [];

// Combinar JSON y los nuevos
    const todosLosProductos = [...productosData, ...productosGuardados];
    
    const contenedor = document.getElementById("product-container"); 
  
    todosLosProductos.forEach((productoData) => {
      const producto = new Producto(
        productoData.nombre,
        productoData.imagen,
        productoData.descripcion,
        productoData.precio,
        productoData.link
      );
      const card = producto.crearCard();
      contenedor.appendChild(card); 
    });
  }
  //////////////////////////////////////////////////////

  // esto pasa cuando página cargue
  window.onload = cargarProductos;


  // Creación de producto por medio del formulario

  document.getElementById("alertMessage").addEventListener("click", function() {

    const nombre = document.getElementById("nameInput").value;
    const descripcion = document.getElementById("descriptionInput").value;
    const precio = parseFloat(document.getElementById("priceInput").value);
    const imagen = document.getElementById("imageInput").value;
  
    if (nombre && descripcion && precio && imagen) {
      const nuevoProducto = new Producto(nombre, imagen, descripcion, precio);
  
      // Convertir en JSON
      const productoJSON = JSON.stringify(nuevoProducto);
  
      // Guardar  en localStorage
      let productosGuardados = JSON.parse(localStorage.getItem('productos')) || [];
      productosGuardados.push(nuevoProducto);
      localStorage.setItem('productos', JSON.stringify(productosGuardados));
  
      // Mensaje de éxito
      alert("Producto agregado correctamente!");
    } else {
      alert("Por favor, complete todos los campos.");
    }
  });




  ///////////////////////////////////
  /////////////////////


  // Evento para enviar el formulario

function limiteCaracteres(){
 
  const nombreInput = document.getElementById("nameInput");

       nombreInput.addEventListener('keydown', (event) => {
          // Obtener el valor actual del campo de texto
          let nameInput = nombreInput.value;

          // Verificar longitud del texto es mayor o igual a 20
          if (nameInput.length >= 20 && event.key !== "Backspace" && event.key !== "Delete" 
              && event.key !== "ArrowLeft" && event.key !== "ArrowRight") {
              // No añadir más caracteres
              event.preventDefault();
          }
   });

   const descripcionInput = document.getElementById("descriptionInput");

       descripcionInput.addEventListener('keydown', (event) => {
          //Valrcampo de texto
          let descriptionInput = descripcionInput.value;

          // Verificar si la longitud del texto es mayor o igual a 500
          if (descriptionInput.length >= 500 && event.key !== "Backspace" && event.key !== "Delete" 
              && event.key !== "ArrowLeft" && event.key !== "ArrowRight") {
              // Prevenir que se añadan más caracteres
              event.preventDefault();
          }
   });


   const precioInput = document.getElementById("priceInput");

       precioInput.addEventListener('keydown', (event) => {
          // Obtener el valor actual del campo de texto
          let priceInput = precioInput.value;

          // Verificar si la longitud del texto es mayor o igual a 500
          if (priceInput.length >= 7 && event.key !== "Backspace" && event.key !== "Delete" 
              && event.key !== "ArrowLeft" && event.key !== "ArrowRight") {
              // Prevenir que se añadan más caracteres
              event.preventDefault();
          }
   });


   document.getElementById('imageInput').addEventListener('change', function(event) {
      const fileInput = event.target;
      const file = fileInput.files[0];
      const errorMessage = document.getElementById('errorMessage');

      // Verifica que el archivo no esté vacío y que sea de tipo PNG o JPG
      if (file) {
          const fileType = file.type;
          const validImageTypes = ['image/png', 'image/jpeg'];

          if (!validImageTypes.includes(fileType)) {
              errorMessage.textContent = 'Solo se permiten archivos PNG o JPG.';
              fileInput.value = ''; // Limpia el campo si el archivo no es válido
          } else {
              errorMessage.textContent = ''; // Limpia el mensaje de error si todo está bien
          }
      }
  });
          
}

limiteCaracteres();


function envioFormulario() {
 
  

   document.addEventListener('DOMContentLoaded', function () {
      const mensajeAlerta = document.getElementById('alertMessage');
      const incluirMensaje = document.getElementById('messageIncluded');
  
       // Crea la alerta
       alertMessage.addEventListener('click', function () {
          const alertDiv = document.createElement('div');
          alertDiv.className = 'alert alert-success alert-dismissible fade show';
          alertDiv.role = 'alert';
          alertDiv.innerHTML = 'Tu producto fue creado<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>';
  
                       // Añade la alerta al contenedor
          incluirMensaje.appendChild(alertDiv);
     
                      // Muestra la alerta
       mensajeAlerta.style.display = 'block';
  
              // Oculta la alerta después de 3 segundos
       setTimeout(() => { 
      mensajeAlerta.style.display = 'none';
      }, 5000); 
      });

  });
   
  
   


 
}

envioFormulario();

/////CREACION DE OBJETO JSON

