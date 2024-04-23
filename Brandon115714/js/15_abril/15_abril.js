
const caja = document.getElementById("caja");
const boton = document.getElementById("boton");

boton.addEventListener("click", e => {
    e.preventDefault();
    
    caja.value = "examen";

    caja.maxLength = 6;

    caja.style.border = "5px solid blue";

    caja.style.borderRadius = "10px";

    caja.style.fontSize = "50px";
});