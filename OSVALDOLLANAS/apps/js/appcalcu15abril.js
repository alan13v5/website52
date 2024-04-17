
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const operacion = document.getElementById("operacion");
const resultado = document.getElementById("resultado");
const btnoperacion = document.getElementById("btnoperacion");

/* Agregar un manejador de eventos para el boton */

btnoperacion.addEventListener("click", (e) => {
    e.preventDefault();
    let opcion=operacion.value;
    if(opcion=="suma"){
        let n1= parseFloat(num1.value);
        let n2= parseFloat(num2.value);
        let sum= n1 + n2;
        resultado.value = sum;
    }
    else if(opcion=="resta"){
        let n1= parseFloat(num1.value);
        let n2= parseFloat(num2.value);
        let res= n1 - n2;
        resultado.value = res;
    }
    else if(opcion=="multiplicacion"){
        let n1= parseFloat(num1.value);
        let n2= parseFloat(num2.value);
        let mult= n1 * n2;
        resultado.value = mult;
    }
    else if(opcion=="division"){
        let n1= parseFloat(num1.value);
        let n2= parseFloat(num2.value);
        let div= n1 / n2;
        resultado.value = div;
    }
    else{
        resultado.value= "Ingreso de datos incorrecto";
    }
});