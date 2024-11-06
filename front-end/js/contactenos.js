// Lista de países e indicativos
const paises = [
    { indicativo: '+57', nombrePais: 'Colombia' },
    { indicativo: '+49', nombrePais: 'Alemania' },
    { indicativo: '+213', nombrePais: 'Argelia' },
    { indicativo: '+54', nombrePais: 'Argentina' },
    { indicativo: '+61', nombrePais: 'Australia' },
    { indicativo: '+973', nombrePais: 'Bahrein' },
    { indicativo: '+880', nombrePais: 'Bangladés' },
    { indicativo: '+32', nombrePais: 'Bélgica' },
    { indicativo: '+591', nombrePais: 'Bolivia' },
    { indicativo: '+55', nombrePais: 'Brasil' },
    { indicativo: '+237', nombrePais: 'Camerún' },
    { indicativo: '+1', nombrePais: 'Canadá' },
    { indicativo: '+56', nombrePais: 'Chile' },
    { indicativo: '+86', nombrePais: 'China' },
    { indicativo: '+506', nombrePais: 'Costa Rica' },
    { indicativo: '+225', nombrePais: 'Costa de Marfil' },
    { indicativo: '+53', nombrePais: 'Cuba' },
    { indicativo: '+593', nombrePais: 'Ecuador' },
    { indicativo: '+20', nombrePais: 'Egipto' },
    { indicativo: '+971', nombrePais: 'Emiratos Árabes Unidos' },
    { indicativo: '+34', nombrePais: 'España' },
    { indicativo: '+1', nombrePais: 'Estados Unidos' },
    { indicativo: '+679', nombrePais: 'Fiyi' },
    { indicativo: '+63', nombrePais: 'Filipinas' },
    { indicativo: '+233', nombrePais: 'Ghana' },
    { indicativo: '+30', nombrePais: 'Grecia' },
    { indicativo: '+91', nombrePais: 'India' },
    { indicativo: '+62', nombrePais: 'Indonesia' },
    { indicativo: '+98', nombrePais: 'Irán' },
    { indicativo: '+964', nombrePais: 'Iraq' },
    { indicativo: '+353', nombrePais: 'Irlanda' },
    { indicativo: '+972', nombrePais: 'Israel' },
    { indicativo: '+39', nombrePais: 'Italia' },
    { indicativo: '+81', nombrePais: 'Japón' },
    { indicativo: '+962', nombrePais: 'Jordania' },
    { indicativo: '+254', nombrePais: 'Kenia' },
    { indicativo: '+965', nombrePais: 'Kuwait' },
    { indicativo: '+218', nombrePais: 'Libia' },
    { indicativo: '+961', nombrePais: 'Líbano' },
    { indicativo: '+60', nombrePais: 'Malasia' },
    { indicativo: '+212', nombrePais: 'Marruecos' },
    { indicativo: '+52', nombrePais: 'México' },
    { indicativo: '+234', nombrePais: 'Nigeria' },
    { indicativo: '+47', nombrePais: 'Noruega' },
    { indicativo: '+64', nombrePais: 'Nueva Zelanda' },
    { indicativo: '+968', nombrePais: 'Omán' },
    { indicativo: '+507', nombrePais: 'Panamá' },
    { indicativo: '+92', nombrePais: 'Pakistán' },
    { indicativo: '+595', nombrePais: 'Paraguay' },
    { indicativo: '+51', nombrePais: 'Perú' },
    { indicativo: '+48', nombrePais: 'Polonia' },
    { indicativo: '+351', nombrePais: 'Portugal' },
    { indicativo: '+974', nombrePais: 'Catar' },
    { indicativo: '+44', nombrePais: 'Reino Unido' },
    { indicativo: '+40', nombrePais: 'Rumania' },
    { indicativo: '+7', nombrePais: 'Rusia' },
    { indicativo: '+221', nombrePais: 'Senegal' },
    { indicativo: '+65', nombrePais: 'Singapur' },
    { indicativo: '+27', nombrePais: 'Sudáfrica' },
    { indicativo: '+249', nombrePais: 'Sudán' },
    { indicativo: '+46', nombrePais: 'Suecia' },
    { indicativo: '+41', nombrePais: 'Suiza' },
    { indicativo: '+66', nombrePais: 'Tailandia' },
    { indicativo: '+255', nombrePais: 'Tanzania' },
    { indicativo: '+90', nombrePais: 'Turquía' },
    { indicativo: '+676', nombrePais: 'Tonga' },
    { indicativo: '+216', nombrePais: 'Túnez' },
    { indicativo: '+380', nombrePais: 'Ucrania' },
    { indicativo: '+256', nombrePais: 'Uganda' },
    { indicativo: '+598', nombrePais: 'Uruguay' },
    { indicativo: '+58', nombrePais: 'Venezuela' },
    { indicativo: '+84', nombrePais: 'Vietnam' },
    { indicativo: '+967', nombrePais: 'Yemen' },
  ];
  
  
  
  // Contiene los países y los muestra en lista desplegable
  function cargarPaises() {
    const seleccionaPais = document.getElementById('countrySelect');
  
    paises.forEach(pais => {
      // Para que cree una opción para cada país
      const lista = document.createElement('option'); 
      // Aquí el valor es el indicativo de la const
      lista.value = pais.indicativo; 
      // Para unir indicativo y nombre país
      lista.textContent = `${pais.indicativo} (${pais.nombrePais})`; 
      // Añade la opción a la lista
      seleccionaPais.appendChild(lista); 
    });
  }
  
  // Esta función es para actualizar el placeholder del número de teléfono según el país seleccionado
  function actualizarNumeroTelefono() {
    const seleccionaPais = document.getElementById('countrySelect');
    const phoneInput = document.getElementById('phoneInput');
    const codigoPais = seleccionaPais.value;
  
    // Aquí limpia el código del país actual y actualiza el placeholder
    phoneInput.value = phoneInput.value.replace(/^\+?[0-9]+/, ''); 
    // Actualiza el placeholder con cada cambio que escojan según la lista desplegable
    phoneInput.setAttribute('placeholder', `${codigoPais} Escribe tu numero de telefono`); 
  }
  
  // Acá ejecuta las funciones luego que el DOM está cargado
  document.addEventListener('DOMContentLoaded', function () {
    // Carga los países en la lista desplegable
    cargarPaises(); 
  
    // Actualiza el número de teléfono según la opción de la lista desplegable
    document.getElementById('countrySelect').addEventListener('change', actualizarNumeroTelefono);
  });
  
  // Evento para enviar el formulario

  function envioFormulario() {
    const mensajeAlerta = document.getElementById('mensajeAlerta');
    
    // Guarda el nombre que el usuario registra
    const nombre = document.getElementById('nameInput').value.trim();
    
    // Establece el mensaje de bienvenida
    mensajeAlerta.textContent = `${nombre}, tu mensaje fue enviado`;
    
    // Muestra la alerta
    mensajeAlerta.style.display = 'block';
    
    // Oculta la alerta después de 3 segundos
    setTimeout(() => { 
        mensajeAlerta.style.display = 'none';
    }, 3000); 

   
}

  
   



  


 
   