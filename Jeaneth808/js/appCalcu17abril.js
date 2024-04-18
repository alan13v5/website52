/*Codigo para la app calculadora */
const num1 = document.getElementById("num1"); 
const num2 = document.getElementById("num2");
const operacion = document.getElementById("operacion");
const resultado = document.getElementById("resultado");
const btnCalcular = document.getElementById("btnCalcular");


/* agregar un manejador de eventos para el boton */
btnCalcular.addEventListener("click", (e) => {
    e.preventDefault();


/* ejemplo: console.log("hola");
            suma.value ="hola";    OPERACIONES Y CALCULO */


console.log("Calculadora");
    let n1 = parseFloat (num1.value);
    let n2 = parseFloat (num2.value);
    let opcion = operacion.value;

    if ( opcion == "suma") {
        let sum= n1 + n2;
        resultado.value = sum;
    }

    else if ( opcion == "resta") {
        let rest = n1 - n2;
        resultado.value = rest;
    }

    else if (opcion == "multiplicar") {
        let mul = n1 * n2;
        resultado.value = mul;
    }

    else if (opcion == "division") {
        let divi = n1 / n2
        resultado.value = divi ;
    }

    else{
        resultado.value = "Opcion no disponible";
    }
    
    

});