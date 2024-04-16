

const caja = document.getElementById("caja");
const boton = document.getElementById("btn");

/* Se puede usar cantidaad infinita para los puntos para la relacion y funcion que se le quiere dar */
boton.addEventListener("click", e => {
    e.preventDefault();

    caja.value = "examen";
    caja.maxLength = 6;
    caja.style.border = "5px solid blue";
    caja.style.borderRadius = "10px";
    caja.style.fontSize="50px";
    
});