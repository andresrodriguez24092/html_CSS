// ========== MENÚ HAMBURGUESA ==========
document.getElementById('hamburgerBtn').addEventListener('click', function() {
    document.getElementById('menu').classList.toggle('active');
});

// Cerrar menú al hacer clic fuera de él
document.addEventListener('click', function(event) {
    const menu = document.getElementById('menu');
    const hamburgerBtn = document.getElementById('hamburgerBtn');

    if (!menu.contains(event.target) && !hamburgerBtn.contains(event.target) && menu.classList.contains('active')) {
        menu.classList.remove('active');
    }
});

// ========== ARREGLO DE PRODUCTOS ==========
// Arreglo para almacenar los productos
let productos = ['Producto 1', 'Producto 2'];

// ========== ELEMENTOS DEL DOM ==========
const botonAgregar = document.getElementById("boton");
const inputProducto = document.getElementById("nombres");
const lista = document.getElementById("lista");
const botonLimpiar = document.getElementById("limpiarLista");
const botonMostrarArreglo = document.getElementById("mostrarArreglo");
const contador = document.getElementById("contador");

// ========== FUNCIONES ==========
// Función para actualizar la lista en el DOM
function actualizarLista() {
    // Limpiar la lista actual
    lista.innerHTML = '';

    // Agregar cada producto al DOM
    productos.forEach((producto, index) => {
        const li = document.createElement("li");
        li.textContent = producto;

        // Botón para eliminar producto individual
        const btnEliminar = document.createElement("button");
        btnEliminar.textContent = "Eliminar";
        btnEliminar.style.marginLeft = "10px";
        btnEliminar.style.padding = "3px 8px";
        btnEliminar.style.fontSize = "0.8rem";
        btnEliminar.style.backgroundColor = "#ff4444";
        btnEliminar.style.color = "white";
        btnEliminar.style.border = "none";
        btnEliminar.style.borderRadius = "3px";
        btnEliminar.style.cursor = "pointer";

        btnEliminar.addEventListener("click", () => {
            // Eliminar del arreglo
            productos.splice(index, 1);
            // Actualizar el DOM
            actualizarLista();
            // Actualizar contador
            actualizarContador();
        });

        li.appendChild(btnEliminar);
        lista.appendChild(li);
    });

    // Actualizar contador
    actualizarContador();
}

// Función para actualizar el contador
function actualizarContador() {
    contador.textContent = `Total de productos: ${productos.length}`;
}

// Función para agregar un producto
function agregarProducto() {
    const valor = inputProducto.value.trim();

    if (valor) {
        // Agregar al arreglo
        productos.push(valor);
        console.log(`Producto agregado: "${valor}"`);
        console.log("Arreglo actual:", productos);

        // Actualizar la lista en el DOM
        actualizarLista();

        // Limpiar el input
        inputProducto.value = "";
        inputProducto.focus();
    } else {
        alert("Por favor, ingresa un nombre de producto");
    }
}

// ========== EVENT LISTENERS ==========
// Agregar producto al hacer clic en el botón
botonAgregar.addEventListener("click", agregarProducto);

// Agregar producto al presionar Enter en el input
inputProducto.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        agregarProducto();
    }
});

// Limpiar toda la lista
botonLimpiar.addEventListener("click", () => {
    if (confirm("¿Estás seguro de que quieres eliminar todos los productos?")) {
        productos = [];
        actualizarLista();
        console.log("Todos los productos han sido eliminados");
    }
});

// Mostrar el arreglo en consola
botonMostrarArreglo.addEventListener("click", () => {
    console.log("=== ARREGLO DE PRODUCTOS ===");
    console.log(productos);
    console.log("Total de productos:", productos.length);
    console.log("===========================");
});

// ========== REGISTRAR PRODUCTO (FORMULARIO) ==========
document.getElementById("botonsubmit").addEventListener("click", function() {
    const nombre = document.getElementById("nombre").value;
    const id = document.getElementById("ident").value;
    const valor = document.getElementById("dir").value;
    const tipoProducto = document.querySelector('input[name="tipo_producto"]:checked').value;

    if (nombre && id && valor) {
        // Crear objeto producto
        const producto = {
            nombre: nombre,
            id: id,
            valor: valor,
            tipo: tipoProducto
        };

        console.log("=== PRODUCTO REGISTRADO ===");
        console.log("Nombre:", producto.nombre);
        console.log("ID:", producto.id);
        console.log("Valor:", producto.valor);
        console.log("Tipo:", producto.tipo);
        console.log("===========================");

        // Agregar también a la lista de productos (solo el nombre)
        productos.push(producto.nombre);
        actualizarLista();

        // Limpiar formulario
        document.getElementById("nombre").value = "";
        document.getElementById("ident").value = "";
        document.getElementById("dir").value = "";

        alert("Producto registrado correctamente");
    } else {
        alert("Por favor, completa todos los campos del formulario");
    }
});

// ========== INICIALIZACIÓN ==========
// Inicializar la lista al cargar la página
actualizarLista();