

const caja= document.getElementById("caja");
const boton = document.getElementById("btn");

boton.addEventListener("click",e  =>{
    e.preventDefault();

    caja.value = "examen";
    caja.maxLength = 6;
    caja.style.border = "5px solid blue";
    caja.style.borderRadius = "1opx";
    caja.style.fontsize = "50px";

    /*gpe.trescaminos.manzana2.casa4.cocina*/
});