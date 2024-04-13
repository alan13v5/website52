const num1 = document.getElementById("num1"); 
const num2 = document.getElementById("num2");
const suma = document.getElementById("suma");
const btnSumar = document.getElementById("btnSumar");

/* agregar un manejador de eventos para el boton */
btnSumar.addEventListener("click", (e) => {
    e.preventDefault();

    /* console.log("hola");
    suma.value ="hola"; */

    let n1 = parseInt (num1.value);
    let n2 = parseInt (num2.value);
    let sum = n1 + n2;
    
    suma.value = sum;

});

