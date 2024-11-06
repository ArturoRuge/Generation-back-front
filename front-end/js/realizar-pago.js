
const botonComprar = document.getElementById("comprar")

botonComprar.addEventListener( "click", () => {
    const usuarioLogeado = localStorage.getItem('usuarioLogeado');
    if (usuarioLogeado) {
        window.location.href = 'compraexitosa.html';
    } else {
        window.location.href = 'iniciar-sesion.html';
    } 
}
);



// document.addEventListener('DOMContentLoaded', () => {
//     const usuarioLogeado = localStorage.getItem('usuarioLogeado');
//     if (usuarioLogeado) {
        
//     } else {
        
//     } 
//   });