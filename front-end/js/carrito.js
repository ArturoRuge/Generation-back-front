// Función para abrir el carrito
function openCart() {
    document.getElementById("cartWindow").classList.add("active");
}

// Función para cerrar el carrito
function closeCart() {
    document.getElementById("cartWindow").classList.remove("active");
}

// Cargar productos del carrito desde el localStorage al iniciar
document.addEventListener("DOMContentLoaded", () => {
    loadCartFromStorage();
    updateCartDisplay();
});

// Función para abrir el carrito
function openCart() {
    document.getElementById("cartWindow").classList.add("active");
    updateCartDisplay();
}

// Función para cerrar el carrito
function closeCart() {
    document.getElementById("cartWindow").classList.remove("active");
}

// Función para agregar un producto al carrito
function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartDisplay();
    alert("Producto agregado al carrito");
}

// Función para mostrar productos en la ventana del carrito
function updateCartDisplay() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartContent = document.getElementById("cartContent");
    cartContent.innerHTML = ""; // Limpiar contenido previo

    if (cart.length === 0) {
        cartContent.innerHTML = "<p>Tu carrito está vacío.</p>";
        return;
    }

    cart.forEach((product, index) => {
        const productElement = document.createElement("div");
        productElement.classList.add("cart-item");
        productElement.innerHTML = `
            <img src="${product.imagen}" alt="${product.nombre}" width="50">
            <div class="cart-item-info">
                <h4>${product.nombre}</h4>
                <p>${product.descripcion}</p>
                <span>$${product.precio.toLocaleString()}</span>
            </div>
            <button class="remove-btn" onclick="removeFromCart(${index})">X</button>
        `;
        cartContent.appendChild(productElement);
    });
}

// Función para eliminar un producto del carrito
function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartDisplay();
}

// Función para proceder a la compra
function proceedToCheckout() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    if (cart.length === 0) {
        alert("El carrito está vacío.");
        return;
    }

    // Redirigir a la página de compra (checkout.html)
    window.location.href = "carrito-compra.html";
}

// Función para cargar los productos guardados del carrito
function loadCartFromStorage() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    if (cart.length > 0) {
        updateCartDisplay();
    }
}

// Función para comprar el producto directamente y redirigir al carrito de compras
function buyNow(product) {
    // Obtener el carrito actual desde el localStorage
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    
    // Agregar el producto al carrito
    cart.push(product);
    
    // Guardar el carrito actualizado en el localStorage
    localStorage.setItem("cart", JSON.stringify(cart));
    
    // Redirigir a la página de checkout
    window.location.href = "carrito-compra.html";
}