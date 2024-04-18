/* Haremos que ingreses 2 numeros y que operacion vas a realizar, el resultado y un boton para realizar la operacion. 
Utiliza Switch */

const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const operador = document.getElementById("operador");
const resultado = document.getElementById("resultado");
const boton = document.getElementById("boton");

boton.addEventListener("click", e => {
    e.preventDefault();

    let n1 = parseInt(num1.value);
    let n2 = parseInt(num2.value);
    let oper = operador.value;
    let result;

    switch(oper){
        case "+" : result = n1 + n2;
            resultado.value = result;
            break;
        case "-" : result = n1 - n2;
            resultado.value = result;
            break;
        case "*" : result = n1 * n2;
            resultado.value = result;
            break;
        case "/" : result = n1 / n2;
            resultado.value = result;
            break;
        default :
            resultado.value = "Operacion no valida";
    }
});