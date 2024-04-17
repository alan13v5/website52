const caja= document.getElementById("caja");
const boton= document.getElementById("btn");

boton.addEventListener("click", e => {
    e.preventDefault();

    caja.value = "examen";
    caja.maxLength = 2;
    caja.style.border = "2px solid blue";
    caja.style.borderRadius = "50px";
    caja.style.fontSize= "50px"; 
});