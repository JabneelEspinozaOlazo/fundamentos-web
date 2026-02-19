// Mostrar nombre en consola
console.log("Jabneel Espinoza Olazo");

// Capturar el botón
const boton = document.querySelector("button");

// Evento al hacer clic
boton.addEventListener("click", function(event) {
    event.preventDefault(); // Evita que el formulario se envíe
    alert("CLICK EN BOTÓN");
});
