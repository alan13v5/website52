/* cambiar a la caja lo siguiente: */

const caja = document.getElementById("box");
const boton = document.getElementById("btn");

boton.addEventListener("click", e => {
    e.preventDefault();
    /* 1.- Poner en la caja la palabra examen */
    caja.value = "EXAMEN";
    /* 2.- Limitar la caja a 6 caracteres */
    caja.maxLength = 6;
    /* 3.- Hacer el borde azul redondeado */
    caja.style.border = "6px solid blue";
    caja.style.borderRadius = "15px";
    /* 4.- Cambiar el tamaño de la letra a 50px */
    caja.style.fontSize = "50px";
});
