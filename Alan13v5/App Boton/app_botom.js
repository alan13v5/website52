const formulario = document.getElementById("formulario");
const caja = document.getElementById("caja");

formulario.addEventListener("submit", function(e) {
    e.preventDefault();
    ejecutar();
});

function ejecutar() {
    caja.value = "Examen";
    caja.maxLength = 6;
    caja.style.border = "5px solid blue";
    caja.style.borderRadius = "20px";
    caja.style.fontSize = "24px";
}
