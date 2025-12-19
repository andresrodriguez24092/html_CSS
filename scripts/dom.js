const button = document.getElementById("boton")
const input = document.getElementById("nombres")
button.addEventListener("click", () => {
    console.log("Nombre:", input.value)
})

const lista = document.getElementById("lista")
const agregar = document.getElementById("button")
const borrar = document.getElementById("borrar")

button.addEventListener("click", () => {
    const li = document.createElement("nombres")
    li.textContent = nombres.value;
    lista.appendChild(li)
})


document.getElementById('hamburgerBtn').addEventListener('click', function() {
    document.getElementById('menu').classList.toggle('active');
});