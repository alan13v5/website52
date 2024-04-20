/* CODIGO PARA LA APP DE SUMA */
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const num3 = document.getElementById("num3");
const suma = document.getElementById("suma");
const boton = document.getElementById("boton");

/* AGREGAR UN MANEJADOR DE EVENTOS PARA EL BOTON */
/* SE ESCRIBIRA EN EL EXAMEN */
boton.addEventListener("click", (e) => {
    e.preventDefault();

    let n1 = parseInt (num1.value);
    let n2 = parseInt (num2.value);
    let sum = n1 + n2;

    suma.value = sum;
})
