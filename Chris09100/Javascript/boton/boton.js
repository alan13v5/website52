const Caja = document.getElementById("caja")
const Boton = document.getElementById("BotonEjecutar")

Boton.addEventListener("click", e => {
    e.preventDefault();
    Caja.value = "Examen";
    Caja.maxLength = 6;
    Caja.style.border = "5px blue";
    Caja.style.borderRadius = "20px";
    Caja.style.fontSize = "50px";
});
