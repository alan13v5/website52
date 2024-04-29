const Caja = document.getElementById("caja")
const Boton = document.getElementById("btnEjecutar")


Boton.addEventListener("click", e => {
    e.preventDefault();
    Caja.value = "Examen";
    Caja.maxLength = 6;
    Caja.style.border = "5px solid blue";
    Caja.style.borderRadius = "20px";
    Caja.style.fontSize = "50px";
});


