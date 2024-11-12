// Elementos para manejar el carrito y el total
const productosCarrito = document.getElementById('productos-carrito');
const totalCarrito = document.getElementById('total');
const botonesAgregarCarrito = document.querySelectorAll('.agregar-carrito');

let carrito = [];

// Actualizar el carrito en la interfaz
function actualizarCarrito() {
    productosCarrito.innerHTML = ''; // Limpia el contenido del carrito para evitar duplicados
    let total = 0;

    carrito.forEach((item, index) => {
        // Crear el elemento del producto en el carrito
        const productoCarrito = document.createElement('div');
        productoCarrito.classList.add('producto-en-carrito');
        productoCarrito.innerHTML = `
            <p>${item.nombre} - $${item.precio.toFixed(2)}</p>
            <button onclick="eliminarProducto(${index})">Eliminar</button>
        `;
        
        productosCarrito.appendChild(productoCarrito);
        total += item.precio; // Sumar al total
    });

    // Actualizar el total
    totalCarrito.innerText = `Total: $${total.toFixed(2)}`;
}

// Agregar producto al carrito
function agregarAlCarrito(nombre, precio) {
    carrito.push({ nombre, precio }); // Añadir al arreglo del carrito
    actualizarCarrito(); // Actualizar la interfaz
}

// Eliminar producto del carrito
function eliminarProducto(index) {
    carrito.splice(index, 1); // Eliminar del arreglo del carrito
    actualizarCarrito(); // Actualizar la interfaz
}

// Asociar cada botón de "Agregar al carrito" con su respectiva función
botonesAgregarCarrito.forEach(boton => {
    boton.addEventListener('click', () => {
        const nombre = boton.getAttribute('data-nombre');
        const precio = parseFloat(boton.getAttribute('data-precio'));
        agregarAlCarrito(nombre, precio);
    });
});

// Proceder a la compra
document.getElementById('proceder-compra').addEventListener('click', () => {
    if (carrito.length > 0) {
        alert('Compra realizada con éxito. Gracias por tu compra.');
        carrito = []; // Vaciar el carrito después de la compra
        actualizarCarrito();
    } else {
        alert('No tienes productos en el carrito.');
    }
});
