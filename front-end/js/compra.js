// Cargar productos del carrito y mostrar en el resumen de compra
document.addEventListener("DOMContentLoaded", () => {
    displayCartItems();
    updateTotalAmount();
});

// Función para mostrar productos en el carrito
function displayCartItems() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const checkoutContent = document.getElementById("checkoutContent");

    checkoutContent.innerHTML = ""; // Limpiar contenido previo

    if (cart.length === 0) {
        checkoutContent.innerHTML = "<p>No hay productos en el carrito.</p>";
        return;
    }

    cart.forEach((product, index) => {
        const productElement = document.createElement("div");
        productElement.classList.add("checkout-item");
        productElement.innerHTML = `
            <h4>${product.nombre}</h4>
            <p>${product.descripcion}</p>
            <span>$${product.precio.toLocaleString()}</span>
            <button class="remove-btn" onclick="removeFromCart(${index})">Eliminar</button>
        `;
        checkoutContent.appendChild(productElement);
    });
}

// Función para actualizar el monto total de la compra
function updateTotalAmount() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const totalAmount = cart.reduce((total, product) => total + product.precio, 0);
    document.getElementById("totalAmount").textContent = `$${totalAmount.toLocaleString()}`;
}

// Función para eliminar un producto del carrito
function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    cart.splice(index, 1); // Eliminar producto del array
    localStorage.setItem("cart", JSON.stringify(cart)); // Actualizar localStorage

    displayCartItems(); // Volver a mostrar los productos
    updateTotalAmount(); // Actualizar el total
}