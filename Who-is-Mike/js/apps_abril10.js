
const numero1 = document.getElementById("#1")
const numero2 = document.getElementById("#2")
const sumar = document.getElementById("#sum")
const accion_sumar = document.getElementById("acc_sum")


/* agregar un controlador de eventos para el boton */

accion_sumar.addEventListener("click",(e) => {
    e.preventDefault();

    let n1 = parseInt(#1.value);
    let n2 = parseInt(#2.value);
    let suma = n1 + n2;

    sumar.value = suma;
});













