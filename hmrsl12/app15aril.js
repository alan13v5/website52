/* cambiarle a la caja lo siguente:*/
/* 1.- Poner en a caja la palabra examen 
2.- Limitar la caja a 6 carateres
3.-Hacer el borde azul redondo
4.-Camiar el tama;o de la letra a 50px*/


const caja = document.getElementById("caja");
const boton = document.getElementById("btn");

boton.addEventListener("click", e => {
    e.preventDefault();
    caja.value = "examen";
    caja.maxLength = 6;
    caja.style.border = "5px solid blue";
    caja.style.borderRadius = "10px";
    caja.style.fontSize= "50px"; 
});