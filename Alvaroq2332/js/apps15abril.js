/* Cambiar a la caja siguente:
1.- Poner en la caja la palabra examen.
2.- Limitar la caja a 6 caracteres.
3.- Hacer el borde azul redondo.
4.- Cambiar el tamaño de la letra a 50px. */



const caja = document.getElementById("caja")
const boton = document.getElementById("btn")

boton.addEventListener("click", e => {
    e.preventDefault();

    caja.value ="examen"
    caja.maxLength = 6;
    caja.style.border ="5px solid blue"
    caja.style.borderRadius = "10px"
    caja.style.fontSize = "50px"


});