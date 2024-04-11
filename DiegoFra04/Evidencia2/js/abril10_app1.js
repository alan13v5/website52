/* --------------------------------------------------Problema 1----------------------------------------------------- */

/* Pasos para realizar una aplicacion web
1.-Diseñar la interfaz (html)
2.-Colocar codigo al boton para que responda al evento clic
2.1.-Crear las referencias(objetos)con los cuales se va a trabajar  
*/

const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const suma = document.getElementById("suma");
const btnSumar = document.getElementById("btnSumar");

/*Agregar un manejador de eventos para el boton*/
btnSumar.addEventListener("click", (e) => {
    e.preventDefault();

    let n1 = parseInt (num1.value);
    let n2 = parseInt (num2.value);
    let sum = n1 + n2;

    suma.value = sum;

});